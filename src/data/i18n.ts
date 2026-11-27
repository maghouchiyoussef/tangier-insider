// English guide id -> Spanish guide id. Spanish guides live in src/content/guides-es.
export const esSlug: Record<string, string> = {
  'tangier-in-one-day': 'tanger-en-un-dia',
  'ferry-tarifa-tangier': 'ferry-tarifa-tanger',
  'things-to-do-in-tangier': 'que-ver-en-tanger',
  'is-tangier-safe': 'es-seguro-tanger',
  'tangier-train-al-boraq': 'tren-al-boraq-tanger',
  'darija-for-travelers': 'darija-para-viajeros',
  'tanger-med-vs-tangier-ville': 'tanger-med-o-tanger-ville',
};
export const enSlug: Record<string, string> = Object.fromEntries(Object.entries(esSlug).map(([en, es]) => [es, en]));

export type Lang = 'en' | 'es';

export const navOrder = ['tangier-in-one-day', 'ferry-tarifa-tangier', 'things-to-do-in-tangier', 'is-tangier-safe', 'tangier-train-al-boraq', 'darija-for-travelers'];

export const ui = {
  en: {
    home: '/',
    nav: {
      'tangier-in-one-day': '1 day', 'ferry-tarifa-tangier': 'Ferry', 'things-to-do-in-tangier': 'Things to do',
      'is-tangier-safe': 'Safety', 'tangier-train-al-boraq': 'Train', 'darija-for-travelers': 'Darija',
    } as Record<string, string>,
    tags: {
      'tangier-in-one-day': 'Itinerary', 'things-to-do-in-tangier': 'Sights', 'ferry-tarifa-tangier': 'Getting here',
      'tanger-med-vs-tangier-ville': 'Getting here', 'tangier-train-al-boraq': 'Getting around',
      'is-tangier-safe': 'Practical', 'darija-for-travelers': 'Language',
    } as Record<string, string>,
    guideKicker: 'Tangier Insider guide',
    lastChecked: 'Last checked',
    byLocal: 'Written by a Tangier local',
    dontMiss: "Don't miss",
    readGuide: 'Read the guide',
    planDay: 'Plan your day',
    introKicker: 'Tangier, Morocco',
    introTitle: 'Tangier, explained by someone who lives here',
    introText: 'Honest, practical advice to cross the Strait, explore the medina and enjoy the city like a local.',
    trustTitle: 'Why trust this guide?',
    trustText: 'Tangier Insider is written by a Tangier local, not by a travel agency or a ferry company. Prices and schedules change often, so every page shows the date it was last checked and links to the official source.',
    footer: 'Independent travel guide written by a Tangier local. Not affiliated with any ferry company or government office. Always confirm prices and schedules on official websites.',
    weatherCredit: 'Weather data',
    about: 'About', contact: 'Contact', privacy: 'Privacy', terms: 'Terms',
    dateLocale: 'en-GB',
  },
  es: {
    home: '/es/',
    nav: {
      'tangier-in-one-day': '1 día', 'ferry-tarifa-tangier': 'Ferry', 'things-to-do-in-tangier': 'Qué ver',
      'is-tangier-safe': 'Seguridad', 'tangier-train-al-boraq': 'Tren', 'darija-for-travelers': 'Darija',
    } as Record<string, string>,
    tags: {
      'tangier-in-one-day': 'Itinerario', 'things-to-do-in-tangier': 'Qué ver', 'ferry-tarifa-tangier': 'Cómo llegar',
      'tanger-med-vs-tangier-ville': 'Cómo llegar', 'tangier-train-al-boraq': 'Moverse',
      'is-tangier-safe': 'Consejos', 'darija-for-travelers': 'Idioma',
    } as Record<string, string>,
    guideKicker: 'Guía de Tangier Insider',
    lastChecked: 'Última revisión',
    byLocal: 'Escrito por un tangerino',
    dontMiss: 'Imprescindibles',
    readGuide: 'Leer la guía',
    planDay: 'Planifica tu día',
    introKicker: 'Tánger, Marruecos',
    introTitle: 'Tánger, contado por alguien que vive aquí',
    introText: 'Consejos honestos y prácticos para cruzar el Estrecho, recorrer la medina y disfrutar de la ciudad como un local.',
    trustTitle: '¿Por qué fiarse de esta guía?',
    trustText: 'Tangier Insider lo escribe un tangerino, no una agencia de viajes ni una naviera. Los precios y horarios cambian a menudo, así que cada página indica la fecha de la última revisión y enlaza a la fuente oficial.',
    footer: 'Guía de viaje independiente escrita por un tangerino. Sin relación con ninguna naviera ni organismo oficial. Confirma siempre precios y horarios en las webs oficiales.',
    weatherCredit: 'Datos meteorológicos',
    about: 'Sobre nosotros', contact: 'Contacto', privacy: 'Privacidad', terms: 'Condiciones',
    dateLocale: 'es-ES',
  },
};
