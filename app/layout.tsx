import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import ScrollMoodProvider from "@/components/scroll/ScrollMoodProvider";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import EmergencyBadge from "@/components/layout/EmergencyBadge";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zerosporerestoration.com"),
  title:
    "Zero Spore Restoration | Water Damage & Mold Remediation | Sheridan, Oregon",
  description:
    "Family-owned emergency restoration company serving all of Oregon. Water damage mitigation, mold remediation, and 24/7 emergency response. CCB #244908.",
  openGraph: {
    siteName: "Zero Spore Restoration",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og/og-default.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable}`}
    >
      <head>
        <SchemaMarkup type="localBusiness" />
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="antialiased">
        <ScrollMoodProvider>
          <Nav />
          <main className="pb-20 lg:pb-0">{children}</main>
          <Footer />
          <MobileCTABar />
          <EmergencyBadge />
        </ScrollMoodProvider>
      </body>
    </html>
  );
}
