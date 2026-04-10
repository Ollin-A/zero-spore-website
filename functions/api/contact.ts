// Cloudflare Pages Function — runs server-side, never exposed to the browser
//
// Env vars needed in Cloudflare dashboard:
//   LEAD_GATEWAY_URL      = https://api.ollin.agency/api/clients/leads
//   LEAD_GATEWAY_TENANT   = zero-spore
//   LEAD_GATEWAY_TOKEN    = same value as N8N_INTERNAL_TOKEN on the gateway
//
// NOTE: No HMAC secret needed here — the gateway generates its own HMAC
// when forwarding to n8n. We authenticate with the internal token instead.

interface Env {
  LEAD_GATEWAY_URL: string;
  LEAD_GATEWAY_TENANT: string;
  LEAD_GATEWAY_TOKEN: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { env, request } = context;

  // Guard: ensure all required env vars are set in Cloudflare dashboard
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

    // Honeypot — silent fake success for bots
    if (body.company_fax) {
      return Response.json({ ok: true });
    }

    // Build payload matching what /api/clients/leads expects
    const payload = {
      tenantId: env.LEAD_GATEWAY_TENANT,
      fullName: body.fullName,
      phone: body.phone,
      email: body.email || undefined,
      serviceNeeded: body.serviceNeeded || undefined,
      isEmergency: body.isEmergency ?? false,
      message: body.message || undefined,
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
