"use client";

import { useState } from "react";
import { PhoneIcon } from "@/components/icons";
import MoodSection from "@/components/scroll/MoodSection";
import FadeUp from "@/components/scroll/FadeUp";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/data/constants";

export default function EmergencySection() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;

    setStatus("sending");
    // Quick callback request — full form is on /contact
    fetch(
      `${process.env.NEXT_PUBLIC_LEAD_GATEWAY_URL || "https://api.ollin.agency"}/api/clients/leads`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tenantId: "zero-spore",
          fullName: form.name,
          phone: form.phone,
          isEmergency: true,
          serviceNeeded: "emergency",
          company_fax: "", // honeypot
        }),
      },
    )
      .then((r) => {
        if (r.ok) setStatus("sent");
        else setStatus("error");
      })
      .catch(() => setStatus("error"));
  }

  return (
    <MoodSection mood="emergency" id="emergency-section">
      <div className="flex flex-col items-center text-center">
        <FadeUp>
          <h2
            className="font-serif"
            style={{
              fontSize: "var(--font-h2-size)",
              lineHeight: "var(--font-h2-lh)",
            }}
          >
            Water in your home{" "}
            <span className="text-alert">right now?</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mx-auto mt-6 max-w-(--text-max) text-ivory-dim text-(length:--font-body-size)">
            Don&apos;t wait. Every minute water sits, damage spreads. We respond
            to emergencies 24/7. Call us now.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <Button
            variant="emergency"
            pulse
            href={BUSINESS.phoneTel}
            className="mt-10"
          >
            <PhoneIcon className="mr-2 h-5 w-5" />
            Call Now &mdash; {BUSINESS.phone}
          </Button>
        </FadeUp>

        {/* Inline emergency callback form */}
        <FadeUp delay={0.6}>
          <div className="mx-auto mt-12 w-full max-w-md">
            <p className="mb-4 text-sm text-ivory-dim">
              Or request an immediate callback
            </p>

            {status === "sent" ? (
              <div className="rounded-(--radius-button) border border-cyan/30 bg-deep px-6 py-4 text-sm text-cyan">
                We&apos;ll call you back within minutes.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  required
                  className="flex-1 rounded-(--radius-input) border border-navy bg-deep px-4 py-3 text-sm text-ivory placeholder:text-ivory-dim/60 outline-none focus:border-cyan"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  required
                  className="flex-1 rounded-(--radius-input) border border-navy bg-deep px-4 py-3 text-sm text-ivory placeholder:text-ivory-dim/60 outline-none focus:border-cyan"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="cursor-pointer rounded-(--radius-button) bg-cyan px-6 py-3 text-sm font-medium text-midnight transition-colors hover:bg-[#5dd9d0] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-alert">
                Something went wrong. Please call us directly.
              </p>
            )}

          </div>
        </FadeUp>
      </div>
    </MoodSection>
  );
}
