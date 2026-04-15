
interface Env {
  LEAD_GATEWAY_URL: string;
  LEAD_GATEWAY_TENANT: string;
  LEAD_GATEWAY_TOKEN: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { env, request } = context;

  if (!env.LEAD_GATEWAY_URL || !env.LEAD_GATEWAY_TENANT || !env.LEAD_GATEWAY_TOKEN) {
    const missing = [
      !env.LEAD_GATEWAY_URL && "LEAD_GATEWAY_URL",
      !env.LEAD_GATEWAY_TENANT && "LEAD_GATEWAY_TENANT",
      !env.LEAD_GATEWAY_TOKEN && "LEAD_GATEWAY_TOKEN",
    ].filter(Boolean).join(", ");
    console.error(`Missing env vars: ${missing}`);
    return Response.json(
      { ok: false, error: "server_misconfigured" },
      { status: 500 },
    );
  }

  const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";

  try {
    const body = await request.json<Record<string, unknown>>();

    if (body.company_fax) {
      return Response.json({ ok: true });
    }

    const payload = {
      tenantId: env.LEAD_GATEWAY_TENANT,
      fullName: body.fullName,
      phone: body.phone,
      email: body.email || undefined,
      serviceNeeded: body.serviceNeeded || undefined,
      isEmergency: body.isEmergency ?? false,
      message: body.message || undefined,
      images: Array.isArray(body.images) ? body.images : [],
      source: "website-contact",
      ip,
    };

    const gatewayRes = await fetch(env.LEAD_GATEWAY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Internal token authenticates this as a trusted server-to-server call
        // This bypasses CORS validation since there's no browser Origin header
        "X-Ollin-Internal": env.LEAD_GATEWAY_TOKEN,
        // Set Origin so the gateway's CORS middleware doesn't block us
        "Origin": "https://www.zerosporerestoration.com",
      },
      body: JSON.stringify(payload),
    });

    if (!gatewayRes.ok) {
      const errText = await gatewayRes.text();
      console.error(`Gateway error [${gatewayRes.status}]: ${errText}`);
      return Response.json(
        { ok: false, error: "submission_failed" },
        { status: 502 },
      );
    }

    // Safe parse — gateway might return non-JSON on edge cases
    let result: Record<string, unknown>;
    try {
      result = await gatewayRes.json();
    } catch {
      // Status was 2xx but body wasn't JSON — treat as success
      result = { ok: true };
    }
    return Response.json({ ok: result.ok ?? true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }
};
