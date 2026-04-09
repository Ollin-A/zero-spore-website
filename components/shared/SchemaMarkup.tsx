import { BUSINESS } from "@/data/constants";
import type { Locale } from "@/data/i18n/routes";

interface LocalBusinessSchemaProps {
  type: "localBusiness";
  locale?: Locale;
}

interface ServiceSchemaProps {
  type: "service";
  locale?: Locale;
  serviceData: {
    name: string;
    description: string;
    slug: string;
    /** Path under the locale root, e.g. "/services/water-damage" or "/es/servicios/danos-por-agua" */
    pathname?: string;
  };
}

type SchemaMarkupProps = LocalBusinessSchemaProps | ServiceSchemaProps;

export default function SchemaMarkup(props: SchemaMarkupProps) {
  const locale = props.locale ?? "en";

  if (props.type === "localBusiness") {
    const url = locale === "es" ? `${BUSINESS.url}/es` : BUSINESS.url;
    const description =
      locale === "es"
        ? "Servicios profesionales de restauración de emergencia en Oregon. Daños por agua, remediación de moho, y servicios de emergencia 24/7. Hablamos español."
        : "Family-owned 24/7 emergency water damage restoration and mold remediation serving all of Oregon from Sheridan.";

    const schema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: BUSINESS.name,
      description,
      inLanguage: locale,
      availableLanguage: ["en", "es"],
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      url,
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.stateAbbr,
        addressCountry: "US",
      },
      areaServed: [
        "Sheridan, Oregon",
        "Portland, Oregon",
        "Salem, Oregon",
        "Lincoln City, Oregon",
        "McMinnville, Oregon",
        "Newberg, Oregon",
        "Yamhill County, Oregon",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "$$",
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }

  const { serviceData } = props;
  const path =
    serviceData.pathname ??
    (locale === "es"
      ? `/es/servicios/${serviceData.slug}`
      : `/services/${serviceData.slug}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.name,
    description: serviceData.description,
    inLanguage: locale,
    url: `${BUSINESS.url}${path}`,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BUSINESS.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
