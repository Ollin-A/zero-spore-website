import type { Dict } from "./types";

export const es: Dict = {
  locale: "es",
  htmlLang: "es",

  nav: {
    servicesLabel: "Servicios",
    servicesHref: "/es/servicios",
    serviceItems: [
      { label: "Daños por Agua", href: "/es/servicios/danos-por-agua" },
      { label: "Remediación de Moho", href: "/es/servicios/remediacion-de-moho" },
      { label: "Emergencias", href: "/es/servicios/emergencias" },
    ],
    process: { label: "Proceso", href: "/es/#proceso" },
    about: { label: "Nosotros", href: "/es/sobre-nosotros" },
    contact: { label: "Contacto", href: "/es/contacto" },
    callCta: "Llámanos 24/7",
  },

  footer: {
    servicesHeading: "Servicios",
    companyHeading: "Empresa",
    services: [
      { label: "Daños por Agua", href: "/es/servicios/danos-por-agua" },
      { label: "Remediación de Moho", href: "/es/servicios/remediacion-de-moho" },
      { label: "Emergencias", href: "/es/servicios/emergencias" },
    ],
    company: [
      { label: "Nosotros", href: "/es/sobre-nosotros" },
      { label: "Contacto", href: "/es/contacto" },
      { label: "Blog", href: "/blog" },
      { label: "Términos", href: "/terms" },
      { label: "Privacidad", href: "/privacy" },
    ],
    mobileNav: [
      { label: "Servicios", href: "/es/servicios/danos-por-agua" },
      { label: "Nosotros", href: "/es/sobre-nosotros" },
      { label: "Contacto", href: "/es/contacto" },
      { label: "Blog", href: "/blog" },
    ],
    copyrightSuffix: "Todos los derechos reservados.",
    terms: "Términos",
    privacy: "Privacidad",
  },

  mobileCTA: "Llama ahora",
  emergencyBadge: { label: "Emergencia 24/7" },

  hero: {
    headlineLine1: "¿Daños por agua o moho?",
    headlineLine2: "Respondemos 24/7.",
    subline:
      "Restauración de emergencia. Empresa familiar. Sheridan, Oregon. 24/7.",
    cta1: "Llámanos 24/7",
    cta2: "Agenda una inspección",
    badges: [
      { value: 10, suffix: "+", label: "Años de experiencia" },
      { value: "24/7", label: "Respuesta" },
      { value: "244908", prefix: "#", label: "Licencia CCB" },
    ],
  },

  about: {
    headline: "Una familia restaurando hogares",
    body1:
      "Cuando el agua o el moho amenaza tu hogar, necesitas gente que entienda lo que está en juego. Somos una empresa familiar de restauración en Sheridan, Oregon — y tratamos cada casa como la nuestra.",
    body2:
      "Con más de una década de experiencia en restauración de emergencia, hemos construido nuestra reputación llegando rápido, comunicándonos con honestidad y restaurando hogares a su mejor condición. Cada trabajo recibe toda nuestra atención — porque para nosotros, esto no es solo trabajo. Es personal.",
    link: "Conoce nuestra historia",
  },

  services: {
    heading: "Lo que restauramos",
    subheading:
      "Restauración integral de emergencia para propietarios en Oregon",
    learnMore: "Más información",
    cards: [
      {
        title: "Daños por Agua",
        description:
          "Extracción rápida, secado estructural y monitoreo de humedad para proteger tu hogar de daños permanentes.",
        href: "/es/servicios/danos-por-agua",
      },
      {
        title: "Remediación de Moho",
        description:
          "Contención y remediación segura para eliminar el moho y proteger la salud de tu familia.",
        href: "/es/servicios/remediacion-de-moho",
      },
      {
        title: "Servicios de Emergencia",
        description:
          "Respuesta 24/7 cuando cada minuto cuenta. Llegamos rápido y trabajamos hasta que tu hogar esté seguro.",
        href: "/es/servicios/emergencias",
      },
    ],
  },

  emergency: {
    headlinePrefix: "¿Agua en tu casa ",
    headlineHighlight: "ahora mismo?",
    body: "No esperes. Cada minuto que el agua permanece, el daño se extiende. Respondemos emergencias 24/7. Llámanos ahora.",
    callCta: "Llama ahora",
    callbackLabel: "O solicita una llamada inmediata",
    namePlaceholder: "Tu nombre",
    phonePlaceholder: "Número de teléfono",
    submit: "Enviar",
    submitting: "Enviando…",
    sent: "Te llamaremos en minutos.",
    error: "Algo salió mal. Por favor llámanos directamente.",
  },

  process: {
    heading: "Cómo restauramos tu hogar",
    steps: [
      {
        number: "01",
        title: "Evaluación",
        description:
          "Inspeccionamos cada área afectada, documentamos el daño con fotos y te damos un presupuesto detallado — para que sepas exactamente qué esperar.",
      },
      {
        number: "02",
        title: "Mitigación",
        description:
          "Extraemos el agua, estabilizamos la estructura y colocamos equipo industrial de secado para prevenir más daños en tu hogar.",
      },
      {
        number: "03",
        title: "Restauración",
        description:
          "Removemos materiales dañados, limpiamos y desinfectamos cada superficie, y restauramos tu hogar a su condición original.",
      },
      {
        number: "04",
        title: "Seguimiento",
        description:
          "Pruebas finales de humedad, verificación de calidad del aire y revisión completa — porque el trabajo no termina hasta que tú estés seguro.",
      },
    ],
  },

  social: {
    heading: "La confianza de los propietarios de Oregon",
    beforeAfterCaption: "Arrastra para comparar — antes y después de la restauración",
    reviewsLine: "Reseñas de Google",
    reviewsLink: "Ver todas las reseñas",
    badges: [
      { label: "CCB #244908", sublabel: "Contratista con licencia" },
      { label: "IICRC, AHERA, RRP", sublabel: "Equipo certificado" },
      { label: "10+ Años", sublabel: "Experiencia" },
      { label: "Empresa Familiar", sublabel: "Sheridan, Oregon" },
    ],
  },

  serviceAreas: {
    heading: "¿Listo para restaurar tu hogar?",
    body: "Atendemos comunidades en todo Oregon con servicios rápidos y confiables de restauración de emergencia.",
    cta: "Agenda tu inspección gratuita",
    secondary: "O llámanos al (503) 302-0557 →",
  },

  faq: {
    heading: "Preguntas frecuentes",
    subheadingPrefix: "Preguntas comunes sobre nuestros servicios de ",
    subheadingSuffix: ".",
  },

  contact: {
    heading: "Contacta a Zero Spore Restoration",
    body: "Ya sea una emergencia o una inspección programada, estamos aquí para ayudarte. Contáctanos y responderemos en horas.",
    fullNameLabel: "Nombre completo",
    fullNamePlaceholder: "Tu nombre completo",
    phoneLabel: "Número de teléfono",
    phonePlaceholder: "(503) 555-0123",
    emailLabel: "Correo electrónico",
    emailOptional: "(opcional)",
    emailPlaceholder: "tu@ejemplo.com",
    serviceLabel: "¿En qué necesitas ayuda?",
    serviceOptions: [
      { value: "", label: "Selecciona un servicio" },
      { value: "water-damage", label: "Daños por agua" },
      { value: "mold", label: "Remediación de moho" },
      { value: "emergency", label: "Respuesta de emergencia" },
      { value: "other", label: "Otro" },
    ],
    emergencyLegend: "¿Es una emergencia?",
    emergencyYes: "Sí",
    emergencyNo: "No",
    emergencyAlertPrefix:
      "Para respuesta inmediata de emergencia, llámanos directamente al ",
    emergencyAlertSuffix: ". Contestamos 24/7.",
    messageLabel: "Cuéntanos sobre tu situación",
    messagePlaceholder: "Describe lo que está pasando con tu hogar...",
    photosLabel: "Fotos del daño",
    photosHint: "(opcional, hasta 5)",
    photosTapToAdd: "Toca para agregar fotos",
    photosFormats: "JPG, PNG, WebP · Máx 10MB cada una",
    photosUploading: "Subiendo fotos...",
    submit: "Enviar solicitud",
    submitting: "Enviando...",
    successTitle: "Gracias por contactarnos",
    successBodyPrefix:
      "Te responderemos en menos de 2 horas. Para asistencia inmediata, llámanos al ",
    errorBodyPrefix: "Algo salió mal. Por favor llámanos directamente al ",
    errorBodySuffix: ".",
    areaServed: "Atendemos el Valle de Willamette, Portland Metro y más",
    ccbLine: "CCB #244908 — Contratista con licencia",
  },

  aboutPage: {
    heroHeadline: "Una familia restaurando hogares",
    heroSubline:
      "Somos una empresa familiar de restauración en Sheridan, Oregon. Cuando el agua o el moho amenaza tu hogar, tratamos cada casa como la nuestra.",
    storyBlocks: [
      {
        heading: "Cómo empezó",
        copy1:
          "No nos propusimos abrir una empresa de restauración. Empezó con nuestro propio hogar — una fuga de agua que detectamos demasiado tarde y un equipo de remediación que cortó esquinas y cobró de más. Vimos el daño que deja el trabajo descuidado, y supimos que las familias de Oregon merecían algo mejor. Así que nos capacitamos, nos certificamos y nos pusimos a trabajar.",
        copy2:
          "Eso fue hace más de una década. Desde entonces hemos restaurado cientos de hogares en todo el Valle de Willamette, desde sótanos inundados en Sheridan hasta espacios bajos dañados por moho en McMinnville. Cada trabajo sigue siendo personal, porque lo es.",
      },
      {
        heading: "Lo que nos motiva",
        copy1:
          "Hemos visto lo que pasa cuando el agua permanece demasiado tiempo o el moho no se trata. Hemos visto familias desplazadas, pertenencias arruinadas y reclamaciones de seguros negadas porque la empresa anterior no documentó correctamente. Así no operamos nosotros.",
        copy2:
          "Cada hogar que visitamos recibe el mismo trato: evaluación honesta, comunicación clara, trabajo minucioso y documentación que tu compañía de seguros realmente pueda usar. Contestamos nuestro propio teléfono, llegamos cuando decimos que vamos a llegar, y no nos vamos hasta que el trabajo esté bien hecho.",
      },
      {
        heading: "Con raíces en Oregon",
        copy1:
          "Sheridan es nuestro hogar. Conocemos el clima de aquí — la lluvia constante, las tormentas costeras que cruzan el Valle, los espacios bajos húmedos de las casas más antiguas del Pacífico Noroeste. Entendemos los desafíos específicos que enfrentan los propietarios de Oregon porque nosotros también los enfrentamos.",
        copy2:
          "Desde nuestra base en Sheridan, atendemos comunidades en todo el estado — Portland, Salem, McMinnville, Lincoln City, Newberg y todo lo que hay en el medio. No importa dónde estés en Oregon, llegaremos a ti.",
      },
    ],
    valuesHeading: "Lo que nos define",
    values: [
      {
        title: "Honestidad",
        description:
          "Te decimos exactamente lo que encontramos, lo que se necesita para repararlo y cuánto costará. Sin ventas agresivas ni cargos sorpresa. Si algo no necesita reemplazo, te lo decimos.",
      },
      {
        title: "Rapidez",
        description:
          "El agua y el moho no esperan, y nosotros tampoco. Respondemos en la hora desde Sheridan y áreas cercanas, 24 horas al día, 7 días a la semana. Cada minuto que ahorramos es daño que prevenimos.",
      },
      {
        title: "Cuidado",
        description:
          "Tu hogar es tu vida. Lo entendemos, y tratamos cada trabajo con el respeto que merece. Protegemos tus pertenencias, comunicamos en cada paso y dejamos tu hogar mejor de como lo encontramos.",
      },
    ],
    teamHeading: "El equipo detrás de Zero Spore",
    teamRole: "Propietario y Técnico Principal",
    teamFounder: "Fundador, Zero Spore Restoration",
    teamBio:
      "Con más de una década de experiencia práctica en mitigación de daños por agua y remediación de moho, nuestro fundador construyó Zero Spore sobre un principio simple: tratar cada hogar como el tuyo. Con base en Sheridan, Oregon, atendiendo comunidades en todo el estado.",
    ctaHeading: "¿Listo para trabajar con un equipo que realmente se preocupa?",
    ctaBody:
      "Ya sea que enfrentes una emergencia o estés planeando con tiempo, estamos aquí para ayudarte. Contáctanos y hablemos sobre tu hogar.",
    ctaPrimary: "Agenda tu inspección gratuita",
    ctaSecondaryPrefix: "Llamar ",
  },

  related: {
    heading: "¿Listo para restaurar tu hogar?",
    body: "Ya sea una emergencia o una inspección programada, estamos aquí para ayudarte. Contáctanos y responderemos en horas.",
    primary: "Agenda tu inspección gratuita",
    secondaryPrefix: "O llama al ",
    relatedHeading: "Servicios relacionados",
  },

  servicePage: {
    whatsIncluded: "Qué incluye",
    ourProcess: "Nuestro proceso",
    whyChooseUs: "Por qué elegirnos",
    importantNote: "Nota importante",
    ctaPrimary: "Agenda tu inspección gratuita",
    ctaEmergency: "Emergencia · Llama ahora",
  },
};
