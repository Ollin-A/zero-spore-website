import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/data/constants";
import { FOOTER_SERVICES, FOOTER_COMPANY } from "@/data/navigation";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="bg-carbon text-warm"
    >
      <div className="mx-auto max-w-(--max-width) px-5 py-(--section-py-m) lg:px-8 lg:py-(--section-py)">
        {/* 3-column grid */}
        <div className="grid gap-12 text-center lg:grid-cols-3 lg:gap-8 lg:text-left">
          {/* Col 1 — Brand + contact */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <Image
                src="/logo/isotipo-white.svg"
                alt="Zero Spore"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="font-sans text-lg font-medium text-ivory">
                {BUSINESS.name.replace(" LLC", "")}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 text-sm text-ivory-dim">
              <p>
                {BUSINESS.address.city}, {BUSINESS.address.state}
              </p>
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

          {/* Col 3 — Company */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-medium uppercase tracking-wider text-ivory-dim">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_COMPANY.map((link) => (
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
          className="mt-12 border-t pt-6 text-center text-xs text-ivory-dim lg:flex lg:items-center lg:justify-between lg:text-left"
          style={{ borderColor: "#333" }}
        >
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="mt-2 flex items-center justify-center gap-4 lg:mt-0">
            <Link href="/terms" className="inline-block py-1.5 transition-opacity hover:opacity-80">
              Terms
            </Link>
            <Link href="/privacy" className="inline-block py-1.5 transition-opacity hover:opacity-80">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
