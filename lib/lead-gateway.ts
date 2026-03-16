import { LEAD_GATEWAY } from "@/data/constants";

export interface ContactFormPayload {
  tenantId: string;
  fullName: string;
  phone: string;
  email?: string;
  serviceNeeded?: string;
  isEmergency?: boolean;
  message?: string;
  company_fax?: string;
}

export interface GatewayResponse {
  ok: boolean;
  requestId?: string;
  error?: string;
}

export async function submitContactForm(
  data: ContactFormPayload,
): Promise<GatewayResponse> {
  try {
    const res = await fetch(`${LEAD_GATEWAY.url}${LEAD_GATEWAY.endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch {
    return { ok: false, error: "network_error" };
  }
}
