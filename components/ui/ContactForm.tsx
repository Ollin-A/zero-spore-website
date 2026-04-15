"use client";

import { useState, useEffect, useRef } from "react";
import { submitContactForm } from "@/lib/lead-gateway";
import { BUSINESS } from "@/data/constants";
import Button from "@/components/ui/Button";
import { AlertTriangleIcon, FollowUpIcon } from "@/components/icons";
import { useDict } from "@/lib/use-dict";

const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic"];

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-(--radius-button) border border-stone bg-white px-4 py-3 text-carbon placeholder:text-hint focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest transition-colors";

const labelClass = "block text-sm font-medium text-carbon mb-1.5";

export default function ContactForm() {
  const dict = useDict();
  const t = dict.contact;

  const [status, setStatus] = useState<FormStatus>("idle");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const objectUrlsRef = useRef<string[]>([]);

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

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

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    const valid = files.filter(
      (f) => f.size <= MAX_FILE_SIZE && ALLOWED_TYPES.includes(f.type),
    );
    setSelectedFiles((prev) => [...prev, ...valid].slice(0, MAX_FILES));
    // Reset input so the same file can be re-selected after removal
    e.target.value = "";
  }

  function removeFile(index: number) {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function getPreviewUrl(file: File): string | null {
    // Browsers can't preview HEIC
    if (file.type === "image/heic") return null;
    const url = URL.createObjectURL(file);
    objectUrlsRef.current.push(url);
    return url;
  }

  async function uploadImages(): Promise<string[]> {
    if (selectedFiles.length === 0) return [];

    setUploading(true);

    // Get signed URLs from our server
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        files: selectedFiles.map((f) => ({ name: f.name, type: f.type })),
      }),
    });

    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "Failed to get upload URLs");

    // Upload each file directly to Supabase
    const urls: string[] = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const upload = data.uploads[i];

      const uploadRes = await fetch(upload.signedUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!uploadRes.ok) throw new Error(`Upload failed for ${file.name}`);
      urls.push(upload.publicUrl);
    }

    setUploading(false);
    return urls;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");

    try {
      const imageUrls = await uploadImages();

      const result = await submitContactForm({
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || undefined,
        serviceNeeded: formData.serviceNeeded || undefined,
        isEmergency: formData.isEmergency,
        message: formData.message.trim() || undefined,
        images: imageUrls.length > 0 ? imageUrls : undefined,
        company_fax: formData.company_fax,
      });

      setStatus(result.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
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

      {/* Photo upload */}
      <div>
        <label className={labelClass}>
          {t.photosLabel}{" "}
          <span className="text-hint">{t.photosHint}</span>
        </label>

        <label className="mt-1.5 flex cursor-pointer flex-col items-center gap-2 rounded-(--radius-button) border border-dashed border-stone bg-white px-4 py-6 transition-colors hover:border-forest hover:bg-forest/5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-hint"
          >
            <path
              d="M12 16V4M12 4L8 8M12 4L16 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 16V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm text-hint">{t.photosTapToAdd}</span>
          <span className="text-xs text-hint/60">{t.photosFormats}</span>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
        </label>

        {selectedFiles.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {selectedFiles.map((file, i) => {
              const previewUrl = getPreviewUrl(file);
              return (
                <div
                  key={`${file.name}-${i}`}
                  className="relative h-16 w-16 overflow-hidden rounded-(--radius-button) border border-stone"
                >
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt={file.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-warm text-xs text-hint">
                      HEIC
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-carbon text-xs text-white"
                  >
                    &times;
                  </button>
                </div>
              );
            })}
          </div>
        )}
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
        {status === "submitting"
          ? uploading
            ? t.photosUploading
            : t.submitting
          : t.submit}
      </Button>
    </form>
  );
}
