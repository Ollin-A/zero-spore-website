import { BUSINESS } from "@/data/constants";

interface LocalBusinessSchemaProps {
  type: "localBusiness";
}

interface ServiceSchemaProps {
  type: "service";
  serviceData: {
    name: string;
    description: string;
    slug: string;
  };
}

type SchemaMarkupProps = LocalBusinessSchemaProps | ServiceSchemaProps;

export default function SchemaMarkup(props: SchemaMarkupProps) {
  if (props.type === "localBusiness") {
    const schema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      url: BUSINESS.url,
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.name,
    description: serviceData.description,
    url: `${BUSINESS.url}/services/${serviceData.slug}`,
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
