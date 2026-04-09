// Client-side — NO secrets, NO gateway URL, NO HMAC
// Posts to our own /api/contact proxy (Cloudflare Pages Function)

interface ContactFormData {
  fullName: string;
  phone: string;
  email?: string;
  serviceNeeded?: string;
  isEmergency: boolean;
  message?: string;
  company_fax?: string; // honeypot — sent so server can check
}

interface SubmitResult {
  ok: boolean;
  error?: string;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    return { ok: json.ok === true };
  } catch {
    return { ok: false, error: "network_error" };
  }
}
