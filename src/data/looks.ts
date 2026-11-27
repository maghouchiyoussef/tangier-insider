// Colour and 3-photo collage used in each guide's header (and on the home slider).
// Photos are file names in public/images (without .webp). Keep them small in the
// layout so phone photos never get blown up and look blurry.
export type Look = { color: string; photos: [string, string, string] };

export const looks: Record<string, Look> = {
  'tangier-in-one-day': { color: '#c98a1b', photos: ['merkala-seafront-sunset', 'tangier-kasbah-walls-port-view', 'tanja-marina-bay'] },
  'things-to-do-in-tangier': { color: '#b4532a', photos: ['tangier-kasbah-walls-port-view', 'cap-spartel-lighthouse-garden', 'cafe-hafa-sign-1921'] },
  'ferry-tarifa-tangier': { color: '#0f5c6e', photos: ['tangier-ville-port-view', 'tangier-bay-port-beach', 'tangier-old-buildings-near-port'] },
  'tanger-med-vs-tangier-ville': { color: '#24467a', photos: ['tanger-med-passenger-terminal', 'bab-el-bahr-port-view', 'tangier-ville-port-view'] },
  'tangier-train-al-boraq': { color: '#5b2a4a', photos: ['tangier-ville-train-station', 'tangier-ville-station-area', 'tangier-new-town-street'] },
  'is-tangier-safe': { color: '#1b3340', photos: ['tangier-medina-street', 'petit-socco-night', 'tangier-medina-rooftops'] },
  'darija-for-travelers': { color: '#2f6b4f', photos: ['moroccan-mint-tea', 'petit-socco-night', 'cafe-hafa-sign-1921'] },
};

export const fallbackLook: Look = { color: '#1b3340', photos: ['tangier-kasbah-walls-port-view', 'tangier-medina-rooftops', 'merkala-seafront-sunset'] };
