"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/lead-gateway";
import { BUSINESS } from "@/data/constants";
import Button from "@/components/ui/Button";
import { AlertTriangleIcon, FollowUpIcon } from "@/components/icons";
import { useDict } from "@/lib/use-dict";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-(--radius-button) border border-stone bg-white px-4 py-3 text-carbon placeholder:text-hint focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest transition-colors";

const labelClass = "block text-sm font-medium text-carbon mb-1.5";

export default function ContactForm() {
  const dict = useDict();
  const t = dict.contact;

  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceNeeded: "",
    isEmergency: false,
    message: "",
    company_fax: "",
  });

  function updateField(field: string, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");

    const result = await submitContactForm({
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || undefined,
      serviceNeeded: formData.serviceNeeded || undefined,
      isEmergency: formData.isEmergency,
      message: formData.message.trim() || undefined,
      company_fax: formData.company_fax,
    });

    setStatus(result.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="rounded-(--radius-card) border border-stone bg-white p-(--card-padding) text-center">
        <FollowUpIcon className="mx-auto h-12 w-12 text-forest" />
        <h3
          className="mt-4 font-sans font-medium"
          style={{
            fontSize: "var(--font-h3-size)",
            lineHeight: "var(--font-h3-lh)",
          }}
        >
          {t.successTitle}
        </h3>
        <p className="mt-3 text-muted">
          {t.successBodyPrefix}
          <a href={BUSINESS.phoneTel} className="font-medium text-forest">
            {BUSINESS.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div aria-live="polite" className="rounded-(--radius-button) border border-alert/20 bg-alert-bg p-4">
          <p className="text-sm text-carbon">
            {t.errorBodyPrefix}
            <a href={BUSINESS.phoneTel} className="font-medium text-forest">
              {BUSINESS.phone}
            </a>
            {t.errorBodySuffix}
          </p>
        </div>
      )}

      {/* Full name */}
      <div>
        <label htmlFor="fullName" className={labelClass}>
          {t.fullNameLabel} <span className="text-alert">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          placeholder={t.fullNamePlaceholder}
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          {t.phoneLabel} <span className="text-alert">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          required
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder={t.phonePlaceholder}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          {t.emailLabel} <span className="text-hint">{t.emailOptional}</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder={t.emailPlaceholder}
          className={inputClass}
        />
      </div>

      {/* Service needed */}
      <div>
        <label htmlFor="serviceNeeded" className={labelClass}>
          {t.serviceLabel}
        </label>
        <select
          id="serviceNeeded"
          name="serviceNeeded"
          value={formData.serviceNeeded}
          onChange={(e) => updateField("serviceNeeded", e.target.value)}
          className={inputClass}
        >
          {t.serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Emergency radio */}
      <fieldset>
        <legend className={labelClass}>{t.emergencyLegend}</legend>
        <div className="mt-1 flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="isEmergency"
              checked={formData.isEmergency === true}
              onChange={() => updateField("isEmergency", true)}
              className="h-4 w-4 accent-forest"
            />
            <span className="text-sm text-carbon">{t.emergencyYes}</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="isEmergency"
              checked={formData.isEmergency === false}
              onChange={() => updateField("isEmergency", false)}
              className="h-4 w-4 accent-forest"
            />
            <span className="text-sm text-carbon">{t.emergencyNo}</span>
          </label>
        </div>
      </fieldset>

      {/* Emergency alert */}
      {formData.isEmergency && (
        <div className="flex gap-3 rounded-(--radius-button) border border-alert/20 bg-alert-bg p-4">
          <AlertTriangleIcon className="h-5 w-5 shrink-0 text-alert mt-0.5" />
          <p className="text-sm text-carbon">
            {t.emergencyAlertPrefix}
            <a href={BUSINESS.phoneTel} className="font-medium text-forest">
              {BUSINESS.phone}
            </a>
            {t.emergencyAlertSuffix}
          </p>
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          {t.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder={t.messagePlaceholder}
          className={inputClass + " resize-y"}
        />
      </div>

      {/* Honeypot */}
      <div
        className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="company_fax">Fax</label>
        <input
          id="company_fax"
          name="company_fax"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.company_fax}
          onChange={(e) => updateField("company_fax", e.target.value)}
        />
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full">
        {status === "submitting" ? t.submitting : t.submit}
      </Button>
    </form>
  );
}
