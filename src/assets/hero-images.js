/**
 * Industry-specific hero image system.
 * Uses curated Unsplash images per industry with multiple variants.
 * These are PRE-SELECTED images - not AI generated.
 */

const HERO_IMAGES = {
  restaurant: {
    primary: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80',
    variants: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80',
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=80',
    ],
    sectionImages: {
      menu: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      interior: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
      chef: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
      dishes: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
    },
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  healthcare: {
    primary: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80',
    variants: [
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=80',
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80',
    ],
    sectionImages: {
      facility: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
      doctors: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
      lab: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
      reception: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    },
    overlay: 'linear-gradient(135deg, rgba(9,109,217,0.85), rgba(54,207,201,0.6))',
  },
  'real-estate': {
    primary: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80',
    variants: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    ],
    sectionImages: {
      luxury: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      interior: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      office: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&q=80',
      neighborhood: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    overlay: 'rgba(19, 82, 0, 0.6)',
  },
  education: {
    primary: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
    variants: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80',
    ],
    sectionImages: {
      campus: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
      library: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
      classroom: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
      lab: 'https://images.unsplash.com/photo-1567168544230-6b0cf76ae0fb?w=800&q=80',
    },
    overlay: 'rgba(29, 57, 196, 0.7)',
  },
  fitness: {
    primary: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
    variants: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80',
    ],
    sectionImages: {
      weights: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      yoga: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      boxing: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
      class: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    },
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
  technology: {
    primary: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    variants: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80',
    ],
    sectionImages: {
      code: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
      server: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    },
    overlay: 'linear-gradient(135deg, rgba(114,46,209,0.85), rgba(179,127,235,0.6))',
  },
  legal: {
    primary: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80',
    variants: [
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',
    ],
    sectionImages: {
      office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      books: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      meeting: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      courthouse: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80',
    },
    overlay: 'rgba(31, 31, 31, 0.8)',
  },
  photography: {
    primary: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80',
    variants: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80',
      'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1920&q=80',
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&q=80',
    ],
    sectionImages: {
      wedding: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      portrait: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80',
      landscape: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      studio: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80',
    },
    overlay: 'rgba(38, 38, 38, 0.5)',
  },
  'salon-spa': {
    primary: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80',
    variants: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80',
    ],
    sectionImages: {
      salon: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
      facial: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
      nails: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80',
      massage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    },
    overlay: 'rgba(158, 16, 104, 0.6)',
  },
  construction: {
    primary: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
    variants: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80',
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1920&q=80',
    ],
    sectionImages: {
      commercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      residential: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      team: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      bridge: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80',
    },
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
};

/**
 * Get hero image for an industry
 * @param {string} industryId - Industry identifier
 * @param {number} variant - Optional variant index (0 = primary)
 * @returns {object} Image URL and overlay config
 */
function getHeroImage(industryId, variant = 0) {
  const industry = HERO_IMAGES[industryId];
  if (!industry) {
    throw new Error(`No hero images found for industry: ${industryId}`);
  }

  const imageUrl = variant === 0
    ? industry.primary
    : industry.variants[variant - 1] || industry.primary;

  return {
    url: imageUrl,
    overlay: industry.overlay,
    sectionImages: industry.sectionImages,
  };
}

/**
 * Get all section images for an industry
 */
function getSectionImages(industryId) {
  const industry = HERO_IMAGES[industryId];
  if (!industry) return {};
  return industry.sectionImages;
}

/**
 * Get a random variant for A/B testing or variety
 */
function getRandomHeroVariant(industryId) {
  const industry = HERO_IMAGES[industryId];
  if (!industry) return null;
  const allImages = [industry.primary, ...industry.variants];
  const randomIndex = Math.floor(Math.random() * allImages.length);
  return {
    url: allImages[randomIndex],
    overlay: industry.overlay,
  };
}

module.exports = { HERO_IMAGES, getHeroImage, getSectionImages, getRandomHeroVariant };
