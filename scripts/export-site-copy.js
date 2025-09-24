const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const contentDir = path.join(projectRoot, 'content');
const docsDir = path.join(projectRoot, 'docs');
const outputPath = path.join(docsDir, 'site-copy.csv');

function ensureDocsDir() {
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }
}

function flattenValue(value, prefix, collector) {
  if (value == null) {
    return;
  }

  const valueType = typeof value;
  if (valueType === 'string' || valueType === 'number' || valueType === 'boolean') {
    collector.push({ key: prefix || '(root)', text: String(value) });
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      const nextPrefix = prefix ? `${prefix}[${index}]` : `[${index}]`;
      flattenValue(item, nextPrefix, collector);
    });
    return;
  }

  if (valueType === 'object') {
    Object.entries(value).forEach(([nestedKey, nestedValue]) => {
      const nextPrefix = prefix ? `${prefix}.${nestedKey}` : nestedKey;
      flattenValue(nestedValue, nextPrefix, collector);
    });
  }
}

function collectContentRows() {
  const rows = [];
  if (!fs.existsSync(contentDir)) {
    return rows;
  }

  const entries = fs.readdirSync(contentDir).filter((file) => file.endsWith('.json'));

  for (const file of entries) {
    const filePath = path.join(contentDir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    const collector = [];
    flattenValue(data, '', collector);

    for (const item of collector) {
      rows.push({ source: path.join('content', file), key: item.key, text: item.text });
    }
  }

  return rows;
}

const entry = (source, key, text) => ({ source, key, text });

const manualCopy = {
  'app/layout.tsx': {
    'metadata.title': 'KJ Run Club - Brutal Training, Real Results',
    'metadata.description': 'Elite running club in Kuala Lumpur. Join our brutal training sessions and push your limits.',
    'metadata.keywords': 'running club, KL, Malaysia, training, marathon, speedwork, long runs',
    'metadata.openGraph.title': 'KJ Run Club - Brutal Training, Real Results',
    'metadata.openGraph.description': 'Elite running club in Kuala Lumpur. Join our brutal training sessions and push your limits.',
    'metadata.openGraph.siteName': 'KJ Run Club',
    'metadata.openGraph.images[0].alt': 'KJ Run Club',
    'metadata.twitter.title': 'KJ Run Club - Brutal Training, Real Results',
    'metadata.twitter.description': 'Elite running club in Kuala Lumpur. Join our brutal training sessions and push your limits.',
  },
  'app/about/page.tsx': {
    'metadata.title': 'About ${brand.extendedName}',
  },
  'app/contact/page.tsx': {
    'metadata.title': 'Contact — ${brand.extendedName}',
  },
  'app/divisions/page.tsx': {
    'metadata.title': 'Divisions — ${brand.extendedName}',
    'metadata.description': 'Explore every division within KJRC and meet the captains guiding each session.',
  },
  'app/gallery/page.tsx': {
    'metadata.title': 'Gallery — ${brand.extendedName}',
    'download.badge': 'Download',
    'download.heading': 'Google Drive Collections',
    'download.body': 'Each card opens the shared Google Drive folder so you can grab full-resolution shots for social, press, or personal keepsakes.',
    'download.primaryCta': 'Open Folder',
    'card.cta': 'View Folder',
  },
  'app/schedule/page.tsx': {
    'metadata.title': 'Schedule — ${brand.extendedName}',
    'hero.eyebrow': 'Weekly Rhythm',
    'hero.title': 'Structure That Scales',
    'hero.body': 'Speedwork, long runs, recovery blocks, and hikes—each week is programmed so every runner finds their tempo.',
    'hero.ctaPrimary': 'Join a session',
  },
  'app/merch/page.tsx': {
    'metadata.title': 'Merch — ${brand.extendedName}',
    'metadata.description': 'Official KJRC pieces for training days and podium nights.',
    'hero.eyebrow': 'Crew Uniform',
    'hero.title': 'Utility Pieces Built For Miles',
    'hero.body': 'Monochrome staples to layer over any session—tested on track, trails, and city streets.',
    'hero.ctaPrimary': 'Join The Crew',
    'collection.badge': 'Drop',
    'collection.heading': 'Current Essentials',
    'collection.body': 'Monochrome palette, reflective hits, and lightweight fabrics built for humid miles.',
    'collection.pill': 'Limited Run',
    'product.cta': 'WhatsApp Now',
    'products[0].id': 'KJRC-TEE-001',
    'products[0].name': 'Training Tee',
    'products[0].price': 'RM 85',
    'products[0].description': 'Moisture-wicking performance tee with tonal club mark.',
    'products[1].id': 'KJRC-SHORTS-001',
    'products[1].name': 'Racing Shorts',
    'products[1].price': 'RM 65',
    'products[1].description': '5-inch inseam with built-in compression liner.',
    'products[2].id': 'KJRC-CAP-001',
    'products[2].name': 'Training Cap',
    'products[2].price': 'RM 45',
    'products[2].description': 'Lightweight cap with reflective details.',
    'products[3].id': 'KJRC-JACKET-001',
    'products[3].name': 'Wind Jacket',
    'products[3].price': 'RM 145',
    'products[3].description': 'Packable wind-resistant shell for all weather.',
    'products[4].id': 'KJRC-BOTTLE-001',
    'products[4].name': 'Water Bottle',
    'products[4].price': 'RM 25',
    'products[4].description': '750ml insulated stainless steel bottle.',
    'products[5].id': 'KJRC-SOCKS-001',
    'products[5].name': 'Racing Socks',
    'products[5].price': 'RM 35',
    'products[5].description': 'Merino blend with cushioned sole for race days.',
    'sizeGuide.badge': 'Fit',
    'sizeGuide.heading': 'Size Guide',
    'sizeGuide.columns.size': 'Size',
    'sizeGuide.columns.chest': 'Chest',
    'sizeGuide.columns.waist': 'Waist',
    'sizeGuide.columns.length': 'Length',
    'sizeGuide.rows[0].size': 'XS',
    'sizeGuide.rows[0].chest': '86-89cm',
    'sizeGuide.rows[0].waist': '71-74cm',
    'sizeGuide.rows[0].length': '66cm',
    'sizeGuide.rows[1].size': 'S',
    'sizeGuide.rows[1].chest': '91-94cm',
    'sizeGuide.rows[1].waist': '76-79cm',
    'sizeGuide.rows[1].length': '68cm',
    'sizeGuide.rows[2].size': 'M',
    'sizeGuide.rows[2].chest': '96-99cm',
    'sizeGuide.rows[2].waist': '81-84cm',
    'sizeGuide.rows[2].length': '70cm',
    'sizeGuide.rows[3].size': 'L',
    'sizeGuide.rows[3].chest': '104-107cm',
    'sizeGuide.rows[3].waist': '89-92cm',
    'sizeGuide.rows[3].length': '72cm',
    'sizeGuide.rows[4].size': 'XL',
    'sizeGuide.rows[4].chest': '112-115cm',
    'sizeGuide.rows[4].waist': '97-100cm',
    'sizeGuide.rows[4].length': '74cm',
    'sizeGuide.note': 'Measurements In CM',
  },
  'app/offline/page.tsx': {
    'metadata.title': 'Offline - KJ Run Club',
    'metadata.description': 'You are currently offline. Please check your connection.',
    'page.heading': 'Offline',
    'page.message': 'Connection lost. Even champions need to reconnect sometimes.',
  },
  'app/offline/retry-button.tsx': {
    'button.label': 'Try Again',
  },
  'app/team/page.tsx': {
    'metadata.title': 'Team — ${brand.extendedName}',
  },
  'app/team/[slug]/page.tsx': {
    'metadata.fallbackTitle': 'Crew Member — KJ Run Club',
    'metadata.fallbackDescription': 'KJ Run Club crew profile.',
    'profile.highlightsHeading': 'Highlights',
    'profile.backCta': 'Back To Team',
    'profile.joinCta': 'Join A Session',
    'profile.instagramPrefix': 'IG @',
    'profile.tiktokPrefix': 'TT @',
    'profile.cardFooter': 'Crew Profile',
  },
  'components/ContactFormSlide.tsx': {
    'form.badge': 'Lets Collaborate',
    'form.heading': 'Contact Form',
    'form.body': 'Share campaign ideas, partnership requests, or media enquiries and we will respond quickly.',
    'contact.heading': 'Contact',
    'contact.regPrefix': 'Reg No:',
    'contact.emailPrefix': 'Email:',
    'follow.heading': 'Follow',
    'footer.pill': 'Form',
  },
  'components/DivisionSlide.tsx': {
    'badge.label': 'Division',
    'link.view': 'View',
    'pill.sequencePrefix': '• Division ',
  },
  'components/EventList.tsx': {
    'emptyState.heading': 'Running Events',
    'emptyState.body': 'Live calendar unavailable. View the Malaysia public calendar below.',
    'emptyState.iframeTitle': 'Malaysia Running Events Calendar',
    'card.cta': 'Details',
  },
  'components/ScheduleSections.tsx': {
    'intro.badge': 'Events',
    'intro.heading': 'Race Calendar',
    'intro.body': 'Filter the upcoming events feed to plan your next race, shakeout, or crew collab.',
    'filters.week': 'This Week',
    'filters.month': 'This Month',
    'filters.all': 'All',
  },
  'components/FooterSimple.tsx': {
    'badge.label': 'Crew',
    'navigate.heading': 'Navigate',
    'connect.heading': 'Connect',
    'footer.location': 'Kuala Lumpur • Malaysia',
    'footer.copyright': '© {year} {brand.extendedName}',
  },
  'components/SessionStrip.tsx': {
    'fallback[0].description': 'Intervals and tempo runs',
    'fallback[1].description': 'Endurance building runs',
    'fallback[2].description': 'Strength training and running skills',
    'fallback[2].skill': 'Single-leg hops',
    'skillOfTheWeek.label': 'Skill Of The Week',
  },
  'components/SiteNav.tsx': {
    'mobile.toggleLabel': 'Toggle navigation',
  },
  'public/manifest.json': {
    name: 'KJ Run Club',
    short_name: 'KJRC',
    description: 'Elite running club in Kuala Lumpur',
  },
  'public/robots.txt': {
    'directive[0]': 'User-agent: *',
    'directive[1]': 'Allow: /',
    'directive[2]': 'Sitemap: https://kjrunclub.com/sitemap.xml',
  },
};

const manualEntries = Object.entries(manualCopy).flatMap(([source, entries]) =>
  Object.entries(entries).map(([key, text]) => entry(source, key, text))
);

function toCsvValue(value) {
  if (value == null) {
    return '';
  }

  const needsQuotes = /["\n,]/.test(value);
  const escaped = String(value).replace(/"/g, '""');
  return needsQuotes ? `"${escaped}"` : escaped;
}

function writeCsv(rows) {
  ensureDocsDir();
  const header = 'Source,Key,Text';
  const lines = [header];

  for (const row of rows) {
    lines.push([toCsvValue(row.source), toCsvValue(row.key), toCsvValue(row.text)].join(','));
  }

  fs.writeFileSync(outputPath, `${lines.join('\n')}\n`, 'utf8');
}

function main() {
  const contentRows = collectContentRows();
  const rows = [...contentRows, ...manualEntries];

  rows.sort((a, b) => {
    if (a.source === b.source) {
      return a.key.localeCompare(b.key);
    }
    return a.source.localeCompare(b.source);
  });

  writeCsv(rows);
  console.log(`Exported ${rows.length} rows to ${path.relative(projectRoot, outputPath)}`);
}

main();
