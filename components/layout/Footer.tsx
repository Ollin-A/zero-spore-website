import Link from "next/link";
import Image from "next/image";
import { BUSINESS, SOCIAL, OLLIN } from "@/data/constants";
import { FacebookIcon } from "@/components/icons";
import { FOOTER_SERVICES, FOOTER_COMPANY } from "@/data/navigation";

const MOBILE_FOOTER_NAV = [
  { label: "Services", href: "/services/water-damage" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

function BuiltByOllin({ className }: { className?: string }) {
  return (
    <a
      href={OLLIN.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-[44px] items-center no-underline ${className ?? ""}`}
    >
      <span className="text-[11px] text-[#444]">
        Built by{" "}
        <span className="font-medium text-ivory-dim transition-colors duration-200 group-hover:text-ivory">
          {OLLIN.name}
        </span>
      </span>
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-carbon text-warm">
      <div className="mx-auto max-w-(--max-width) px-5 py-(--section-py-m) lg:px-8 lg:py-(--section-py)">

        {/* ── Desktop layout ── */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8">
            {/* Col 1 — Brand + contact */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo/isotipo-color.png"
                  alt="Zero Spore"
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
                <span className="font-serif text-lg text-ivory">
                  {BUSINESS.name.replace(" LLC", "")}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 text-sm text-ivory-dim">
                <p>{BUSINESS.address.city}, {BUSINESS.address.state}</p>
                <p>CCB #{BUSINESS.ccb}</p>
                <a
                  href={BUSINESS.phoneTel}
                  className="font-medium text-cyan transition-opacity hover:opacity-80"
                >
                  {BUSINESS.phone}
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-opacity hover:opacity-80"
                >
                  {BUSINESS.email}
                </a>
              </div>
              {/* Facebook */}
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[#2A2A2A] text-ivory-dim transition-opacity hover:opacity-80"
              >
                <FacebookIcon size={16} />
              </a>
            </div>

            {/* Col 2 — Services */}
            <div>
              <h4 className="mb-4 font-sans text-sm font-medium uppercase tracking-wider text-ivory-dim">
                Services
              </h4>
              <ul className="flex flex-col gap-2.5">
                {FOOTER_SERVICES.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-2 text-sm text-warm transition-opacity hover:opacity-80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Company (without Terms/Privacy — they're in the copyright bar) */}
            <div>
              <h4 className="mb-4 font-sans text-sm font-medium uppercase tracking-wider text-ivory-dim">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5">
                {FOOTER_COMPANY.filter(
                  (l) => l.href !== "/terms" && l.href !== "/privacy",
                ).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-2 text-sm text-warm transition-opacity hover:opacity-80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-12 flex items-center justify-between border-t pt-6 text-xs text-ivory-dim"
            style={{ borderColor: "#333" }}
          >
            <p>&copy; {year} {BUSINESS.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="inline-block py-1.5 transition-opacity hover:opacity-80">
                Terms
              </Link>
              <Link href="/privacy" className="inline-block py-1.5 transition-opacity hover:opacity-80">
                Privacy
              </Link>
              <span className="text-ivory-dim/40">&middot;</span>
              <BuiltByOllin />
            </div>
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="flex flex-col items-center lg:hidden">
          {/* Isotipo + name */}
          <Image
            src="/logo/isotipo-color.png"
            alt="Zero Spore"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="mt-3 font-serif text-base text-ivory">
            {BUSINESS.name.replace(" LLC", "")}
          </span>

          {/* Location + CCB */}
          <p className="mt-2 text-[13px] text-ivory-dim">
            {BUSINESS.address.city}, {BUSINESS.address.state} &middot; CCB #{BUSINESS.ccb}
          </p>

          {/* Phone */}
          <a
            href={BUSINESS.phoneTel}
            className="mt-2 font-sans text-[15px] font-medium text-cyan transition-opacity hover:opacity-80"
          >
            {BUSINESS.phone}
          </a>

          {/* Divider */}
          <div className="my-4 w-full border-t" style={{ borderColor: "#333" }} />

          {/* Nav row */}
          <div className="flex items-center justify-center gap-4">
            {MOBILE_FOOTER_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ivory-dim transition-opacity hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Facebook icon */}
          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="mt-4 flex h-7 w-7 items-center justify-center rounded-md bg-[#2A2A2A] text-ivory-dim transition-opacity hover:opacity-80"
          >
            <FacebookIcon size={14} />
          </a>

          {/* Copyright block */}
          <div className="mt-5 flex flex-col items-center gap-1 text-xs text-[#555]">
            <p>&copy; {year} {BUSINESS.name}</p>
            <p>
              <Link href="/terms" className="transition-opacity hover:opacity-80">Terms</Link>
              <span className="mx-1.5">&middot;</span>
              <Link href="/privacy" className="transition-opacity hover:opacity-80">Privacy</Link>
            </p>
            <BuiltByOllin className="mt-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
