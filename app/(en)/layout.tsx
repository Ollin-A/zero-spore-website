import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import ScrollMoodProvider from "@/components/scroll/ScrollMoodProvider";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import EmergencyBadge from "@/components/layout/EmergencyBadge";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import "../globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: "Zero Spore Restoration",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og/og-default.png", width: 1200, height: 630 }],
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakarta.variable}`}
    >
      <head>
        <SchemaMarkup type="localBusiness" locale="en" />
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
          <Nav locale="en" />
          <main className="pb-20 lg:pb-0">{children}</main>
          <Footer locale="en" />
          <MobileCTABar locale="en" />
          <EmergencyBadge locale="en" />
        </ScrollMoodProvider>
      </body>
    </html>
  );
}
