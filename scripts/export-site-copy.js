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

const manualEntries = [
  // app/layout.tsx
  {
    source: 'app/layout.tsx',
    key: 'metadata.title',
    text: 'KJ Run Club - Brutal Training, Real Results',
  },
  {
    source: 'app/layout.tsx',
    key: 'metadata.description',
    text: 'Elite running club in Kuala Lumpur. Join our brutal training sessions and push your limits.',
  },
  {
    source: 'app/layout.tsx',
    key: 'metadata.keywords',
    text: 'running club, KL, Malaysia, training, marathon, speedwork, long runs',
  },
  {
    source: 'app/layout.tsx',
    key: 'metadata.openGraph.description',
    text: 'Elite running club in Kuala Lumpur. Join our brutal training sessions and push your limits.',
  },
  {
    source: 'app/layout.tsx',
    key: 'metadata.openGraph.title',
    text: 'KJ Run Club - Brutal Training, Real Results',
  },
  {
    source: 'app/layout.tsx',
    key: 'metadata.openGraph.siteName',
    text: 'KJ Run Club',
  },
  {
    source: 'app/layout.tsx',
    key: 'metadata.openGraph.images[0].alt',
    text: 'KJ Run Club',
  },
  {
    source: 'app/layout.tsx',
    key: 'metadata.twitter.title',
    text: 'KJ Run Club - Brutal Training, Real Results',
  },
  {
    source: 'app/layout.tsx',
    key: 'metadata.twitter.description',
    text: 'Elite running club in Kuala Lumpur. Join our brutal training sessions and push your limits.',
  },
  // app/about/page.tsx metadata
  {
    source: 'app/about/page.tsx',
    key: 'metadata.title',
    text: 'About ${clubInfo.name}',
  },
  {
    source: 'app/about/page.tsx',
    key: 'hero.image.alt',
    text: 'KJ Run Club training session',
  },
  // app/page.tsx
  {
    source: 'app/page.tsx',
    key: 'hero.image.alt',
    text: 'Sprinter exploding from the starting line',
  },
  {
    source: 'app/page.tsx',
    key: 'hero.badge',
    text: 'Club Reg: {identity.regNo}',
  },
  {
    source: 'app/page.tsx',
    key: 'hero.taglineGrid[0]',
    text: 'speed',
  },
  {
    source: 'app/page.tsx',
    key: 'hero.taglineGrid[1]',
    text: 'community',
  },
  {
    source: 'app/page.tsx',
    key: 'hero.taglineGrid[2]',
    text: 'consistency',
  },
  {
    source: 'app/page.tsx',
    key: 'hero.primaryCta',
    text: 'Join The Crew',
  },
  {
    source: 'app/page.tsx',
    key: 'hero.secondaryCta',
    text: 'See sessions →',
  },
  {
    source: 'app/page.tsx',
    key: 'hero.stats[0].label',
    text: 'Events Hosted',
  },
  {
    source: 'app/page.tsx',
    key: 'hero.stats[1].label',
    text: 'Runners Engaged',
  },
  {
    source: 'app/page.tsx',
    key: 'hero.stats[2].label',
    text: 'Collabs',
  },
  {
    source: 'app/page.tsx',
    key: 'hero.galleryHeader.left',
    text: 'Weekly divisions',
  },
  {
    source: 'app/page.tsx',
    key: 'hero.galleryHeader.right',
    text: 'Train harder',
  },
  {
    source: 'app/page.tsx',
    key: 'sessions.sectionLabel',
    text: 'Weekly Rhythm',
  },
  {
    source: 'app/page.tsx',
    key: 'sessions.heading',
    text: 'Sessions That Keep You Moving',
  },
  {
    source: 'app/page.tsx',
    key: 'sessions.body',
    text: 'Structured training built for pace, endurance, recovery, and grit. Slide into a session that matches your fire.',
  },
  {
    source: 'app/page.tsx',
    key: 'events.sectionLabel',
    text: 'Next Up',
  },
  {
    source: 'app/page.tsx',
    key: 'events.heading',
    text: 'Upcoming Events & Collaborations',
  },
  {
    source: 'app/page.tsx',
    key: 'events.body',
    text: 'Our {impact.programmes.toLowerCase()} fuel the culture, and our collaborations keep the city buzzing.',
  },
  {
    source: 'app/page.tsx',
    key: 'events.sidebarTitle',
    text: 'Impact Pulse',
  },
  {
    source: 'app/page.tsx',
    key: 'events.sidebarStats[0].label',
    text: 'Weekly Programmes',
  },
  {
    source: 'app/page.tsx',
    key: 'events.sidebarStats[1].label',
    text: 'Identity',
  },
  {
    source: 'app/page.tsx',
    key: 'events.sidebarStats[2].label',
    text: 'Contact',
  },
  {
    source: 'app/page.tsx',
    key: 'instagram.sectionLabel',
    text: 'Crew Energy',
  },
  {
    source: 'app/page.tsx',
    key: 'instagram.heading',
    text: 'In Action',
  },
  {
    source: 'app/page.tsx',
    key: 'instagram.body',
    text: 'Night runs, sunrise LSDs, trackside cheers. Each frame is a pulse from the KJRC collective.',
  },
  // app/about/page.tsx
  {
    source: 'app/about/page.tsx',
    key: 'identity.badge',
    text: 'Identity',
  },
  {
    source: 'app/about/page.tsx',
    key: 'identity.barcode',
    text: 'Vision',
  },
  {
    source: 'app/about/page.tsx',
    key: 'identity.heading',
    text: 'What We Envision',
  },
  {
    source: 'app/about/page.tsx',
    key: 'impact.cards[0].label',
    text: 'Programmes',
  },
  {
    source: 'app/about/page.tsx',
    key: 'impact.cards[0].value',
    text: 'Every Week',
  },
  {
    source: 'app/about/page.tsx',
    key: 'impact.cards[1].label',
    text: 'Events',
  },
  {
    source: 'app/about/page.tsx',
    key: 'impact.cards[1].title',
    text: 'Events Hosted',
  },
  {
    source: 'app/about/page.tsx',
    key: 'impact.cards[2].label',
    text: 'Runners',
  },
  {
    source: 'app/about/page.tsx',
    key: 'impact.cards[2].title',
    text: 'Runners Engaged',
  },
  {
    source: 'app/about/page.tsx',
    key: 'impact.cards[3].label',
    text: 'Collabs',
  },
  {
    source: 'app/about/page.tsx',
    key: 'impact.cards[3].title',
    text: 'Collaborations',
  },
  {
    source: 'app/about/page.tsx',
    key: 'leadership.heading',
    text: 'Leadership & Identity',
  },
  {
    source: 'app/about/page.tsx',
    key: 'leadership.labels[0]',
    text: 'Captain',
  },
  {
    source: 'app/about/page.tsx',
    key: 'leadership.labels[1]',
    text: 'Co-Captain',
  },
  {
    source: 'app/about/page.tsx',
    key: 'identity.registrationLabel',
    text: 'Registration',
  },
  {
    source: 'app/about/page.tsx',
    key: 'identity.coreRolesLabel',
    text: 'Core Roles',
  },
  {
    source: 'app/about/page.tsx',
    key: 'identity.coreRolesHeading',
    text: 'Key Positions',
  },
  // app/contact/page.tsx
  {
    source: 'app/contact/page.tsx',
    key: 'hero.headline',
    text: 'Join Us',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'hero.badge',
    text: 'Crew intake',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.heading',
    text: 'Application Form',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.nameLabel',
    text: 'Full Name *',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.namePlaceholder',
    text: 'Enter your full name',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.emailLabel',
    text: 'Email Address *',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.emailPlaceholder',
    text: 'your.email@example.com',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.experienceLabel',
    text: 'Running Experience *',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.experiencePlaceholder',
    text: 'Select your level',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.experienceOptions[0]',
    text: 'Beginner (0-1 years)',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.experienceOptions[1]',
    text: 'Intermediate (1-3 years)',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.experienceOptions[2]',
    text: 'Advanced (3+ years)',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.experienceOptions[3]',
    text: 'Competitive runner',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.messageLabel',
    text: 'Why KJ Run Club? *',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.messagePlaceholder',
    text: 'Tell us about your goals and what you hope to achieve...',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'form.submitCta',
    text: 'Submit Application',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'alert.success',
    text: "Thanks for your interest! We'll get back to you soon.",
  },
  {
    source: 'app/contact/page.tsx',
    key: 'contactPanel.heading',
    text: 'Get In Touch',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'contactPanel.emailLabel',
    text: 'Email',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'contactPanel.registeredNameLabel',
    text: 'Registered Name',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'contactPanel.regNoLabel',
    text: 'Reg No:',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'contactPanel.contactInfoLabel',
    text: 'Contact Info',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'trainingPanel.heading',
    text: 'Training Hours',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'trainingPanel.sessions[0].day',
    text: 'Tuesday',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'trainingPanel.sessions[0].type',
    text: 'Speedwork',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'trainingPanel.sessions[0].time',
    text: '06:00 - 07:30',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'trainingPanel.sessions[1].day',
    text: 'Friday',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'trainingPanel.sessions[1].type',
    text: 'Strength & Skills',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'trainingPanel.sessions[1].time',
    text: '19:00 - 20:30',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'trainingPanel.sessions[2].day',
    text: 'Sunday',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'trainingPanel.sessions[2].type',
    text: 'Long Run',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'trainingPanel.sessions[2].time',
    text: '06:00 - 09:00',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'socialPanel.heading',
    text: 'Follow Us',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'socialPanel.links[0].platform',
    text: 'Instagram',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'socialPanel.links[0].handle',
    text: '@kjrunclub',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'socialPanel.links[1].platform',
    text: 'Strava',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'socialPanel.links[1].handle',
    text: 'KJ Run Club',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'socialPanel.links[2].platform',
    text: 'Facebook',
  },
  {
    source: 'app/contact/page.tsx',
    key: 'socialPanel.links[2].handle',
    text: 'KJ Run Club KL',
  },
  // app/schedule/page.tsx
  {
    source: 'app/schedule/page.tsx',
    key: 'hero.badge',
    text: 'Schedule',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'hero.headline',
    text: 'Training Schedule',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'hero.body',
    text: 'Consistency builds champions. Structured speedwork, endurance builders, and strength sessions keep the crew in motion while upcoming races and collabs stay on your radar.',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'hero.badgeSide',
    text: 'Stay moving',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'filters[0]',
    text: 'This Week',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'filters[1]',
    text: 'This Month',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'filters[2]',
    text: 'All Events',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'filterPanel.heading',
    text: 'Filter Events',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'filterPanel.body',
    text: 'Tune the feed to spotlight the races and sessions that matter most right now.',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'filterPanel.barcode',
    text: 'Event Filter',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'philosophy.heading',
    text: 'Training Philosophy',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'philosophy.sessions[0].focus',
    text: 'Speed & Power',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'philosophy.sessions[0].description',
    text: 'High-intensity intervals to prime threshold, top-end speed, and reaction.',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'philosophy.sessions[0].code',
    text: 'SPEED-WORK',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'philosophy.sessions[1].focus',
    text: 'Strength & Skills',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'philosophy.sessions[1].description',
    text: 'Mobility, drills, and strength blocks engineered to keep runners iron-clad.',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'philosophy.sessions[1].code',
    text: 'STRENGTH',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'philosophy.sessions[2].focus',
    text: 'Aerobic Base',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'philosophy.sessions[2].description',
    text: 'Long runs that layer endurance, grit, and crew cohesion at conversational pace.',
  },
  {
    source: 'app/schedule/page.tsx',
    key: 'philosophy.sessions[2].code',
    text: 'ENDURANCE',
  },
  // app/divisions/page.tsx
  {
    source: 'app/divisions/page.tsx',
    key: 'metadata.title',
    text: 'Divisions - ${club.name}',
  },
  {
    source: 'app/divisions/page.tsx',
    key: 'metadata.description',
    text: 'Explore every division within KJ Run Club and meet the crew captains keeping the sessions moving.',
  },
  {
    source: 'app/divisions/page.tsx',
    key: 'hero.badge',
    text: 'Crew Divisions',
  },
  {
    source: 'app/divisions/page.tsx',
    key: 'hero.headline',
    text: 'Division Directory',
  },
  {
    source: 'app/divisions/page.tsx',
    key: 'hero.body',
    text: 'Every division keeps the KJRC rhythm alive—from track to trail, city streets to long hauls. Tap into the sessions that match your energy and connect with the leads guiding each crew.',
  },
  {
    source: 'app/divisions/page.tsx',
    key: 'division.cardLabel',
    text: 'Division',
  },
  {
    source: 'app/divisions/page.tsx',
    key: 'division.viewLink',
    text: 'View',
  },
  {
    source: 'app/divisions/page.tsx',
    key: 'division.emptyState',
    text: 'Crew leads will be announced soon. Stay tuned!',
  },
  // app/team/page.tsx
  {
    source: 'app/team/page.tsx',
    key: 'metadata.title',
    text: 'Team - ${clubInfo.name}',
  },
  {
    source: 'app/team/page.tsx',
    key: 'hero.badge',
    text: 'The Crew',
  },
  {
    source: 'app/team/page.tsx',
    key: 'hero.headline',
    text: 'Crew Roster',
  },
  {
    source: 'app/team/page.tsx',
    key: 'leadership.sectionLabel',
    text: 'Leadership',
  },
  {
    source: 'app/team/page.tsx',
    key: 'leadership.heading',
    text: 'Captains In Motion',
  },
  {
    source: 'app/team/page.tsx',
    key: 'leadership.body',
    text: 'The pulse behind every session, relentlessly building routes, paces, and culture.',
  },
  {
    source: 'app/team/page.tsx',
    key: 'leadership.labels[0]',
    text: 'Captain',
  },
  {
    source: 'app/team/page.tsx',
    key: 'leadership.labels[1]',
    text: 'Co-Captain',
  },
  // app/team/[slug]/page.tsx
  {
    source: 'app/team/[slug]/page.tsx',
    key: 'metadata.fallbackTitle',
    text: 'Crew Member - KJ Run Club',
  },
  {
    source: 'app/team/[slug]/page.tsx',
    key: 'metadata.fallbackDescription',
    text: 'KJ Run Club crew profile.',
  },
  {
    source: 'app/team/[slug]/page.tsx',
    key: 'profile.highlightsHeading',
    text: 'Highlights',
  },
  {
    source: 'app/team/[slug]/page.tsx',
    key: 'profile.backLink',
    text: 'Back to Team',
  },
  {
    source: 'app/team/[slug]/page.tsx',
    key: 'profile.scheduleLink',
    text: 'Join a session →',
  },
  // app/merch/page.tsx
  {
    source: 'app/merch/page.tsx',
    key: 'metadata.title',
    text: 'Merch - KJ Run Club',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'metadata.description',
    text: 'Official KJ Run Club merchandise. Represent the club with premium running gear.',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'hero.badge',
    text: 'Merch Store',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'hero.headline',
    text: 'Official Gear',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'hero.body',
    text: 'Represent the crew with performance pieces stress-tested on track, trail, and city streets. Built for runners who want to move loud.',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'hero.badgeSide',
    text: 'Limited Drops',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[0].name',
    text: 'Training Tee',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[0].description',
    text: 'Moisture-wicking performance tee with club logo.',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[0].price',
    text: 'RM 85',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[1].name',
    text: 'Racing Shorts',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[1].description',
    text: '5-inch inseam with built-in compression liner.',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[1].price',
    text: 'RM 65',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[2].name',
    text: 'Training Cap',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[2].description',
    text: 'Lightweight cap with reflective details.',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[2].price',
    text: 'RM 45',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[3].name',
    text: 'Wind Jacket',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[3].description',
    text: 'Packable wind-resistant shell for all weather.',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[3].price',
    text: 'RM 145',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[4].name',
    text: 'Water Bottle',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[4].description',
    text: '750ml insulated stainless steel bottle.',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[4].price',
    text: 'RM 25',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[5].name',
    text: 'Racing Socks',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[5].description',
    text: 'Merino blend with cushioned sole for race days.',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products[5].price',
    text: 'RM 35',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'products.callToAction',
    text: 'Buy Now',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.heading',
    text: 'Size Guide',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.columns[0]',
    text: 'Size',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.columns[1]',
    text: 'Chest',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.columns[2]',
    text: 'Waist',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.columns[3]',
    text: 'Length',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[0].size',
    text: 'XS',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[0].chest',
    text: '86-89cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[0].waist',
    text: '71-74cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[0].length',
    text: '66cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[1].size',
    text: 'S',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[1].chest',
    text: '91-94cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[1].waist',
    text: '76-79cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[1].length',
    text: '68cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[2].size',
    text: 'M',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[2].chest',
    text: '96-99cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[2].waist',
    text: '81-84cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[2].length',
    text: '70cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[3].size',
    text: 'L',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[3].chest',
    text: '104-107cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[3].waist',
    text: '89-92cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[3].length',
    text: '72cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[4].size',
    text: 'XL',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[4].chest',
    text: '112-115cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[4].waist',
    text: '97-100cm',
  },
  {
    source: 'app/merch/page.tsx',
    key: 'sizeGuide.rows[4].length',
    text: '74cm',
  },
  // app/offline
  {
    source: 'app/offline/page.tsx',
    key: 'metadata.title',
    text: 'Offline - KJ Run Club',
  },
  {
    source: 'app/offline/page.tsx',
    key: 'metadata.description',
    text: 'You are currently offline. Please check your connection.',
  },
  {
    source: 'app/offline/page.tsx',
    key: 'heading',
    text: 'Offline',
  },
  {
    source: 'app/offline/page.tsx',
    key: 'body',
    text: 'Connection lost. Even champions need to reconnect sometimes.',
  },
  {
    source: 'app/offline/retry-button.tsx',
    key: 'cta',
    text: 'Try Again',
  },
  // components/SiteNav.tsx
  {
    source: 'components/SiteNav.tsx',
    key: 'navLinks[0]',
    text: 'Home',
  },
  {
    source: 'components/SiteNav.tsx',
    key: 'navLinks[1]',
    text: 'About',
  },
  {
    source: 'components/SiteNav.tsx',
    key: 'navLinks[2]',
    text: 'Schedule',
  },
  {
    source: 'components/SiteNav.tsx',
    key: 'navLinks[3]',
    text: 'Team',
  },
  {
    source: 'components/SiteNav.tsx',
    key: 'navLinks[4]',
    text: 'Merch',
  },
  {
    source: 'components/SiteNav.tsx',
    key: 'navLinks[5]',
    text: 'Contact',
  },
  {
    source: 'components/SiteNav.tsx',
    key: 'brand.altTemplate',
    text: '${club.name} logo',
  },
  {
    source: 'components/SiteNav.tsx',
    key: 'brand.mark',
    text: 'KJRC',
  },
  {
    source: 'components/SiteNav.tsx',
    key: 'mobile.toggleLabel',
    text: 'Toggle navigation',
  },
  // components/FooterSimple.tsx
  {
    source: 'components/FooterSimple.tsx',
    key: 'brand.alt',
    text: 'KJ Run Club logo',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'brand.title',
    text: 'KJ Run Club',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'brand.tagline',
    text: 'Sporty. Raw. Unapologetic. Sessions engineered for runners who want to move with grit.',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'navigation.heading',
    text: 'Navigate',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'navigation.links[0]',
    text: 'Home',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'navigation.links[1]',
    text: 'About',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'navigation.links[2]',
    text: 'Schedule',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'navigation.links[3]',
    text: 'Team',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'navigation.links[4]',
    text: 'Merch',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'navigation.links[5]',
    text: 'Contact',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'connect.heading',
    text: 'Connect',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'connect.links[0]',
    text: 'Instagram',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'connect.links[1]',
    text: 'Strava',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'connect.links[2]',
    text: 'Email',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'footer.copyright',
    text: '© {year} KJ Run Club. Built for motion.',
  },
  {
    source: 'components/FooterSimple.tsx',
    key: 'footer.location',
    text: 'Kuala Lumpur • Malaysia',
  },
  // components/SessionStrip.tsx
  {
    source: 'components/SessionStrip.tsx',
    key: 'fallbackSessions[0].description',
    text: 'Intervals and tempo runs',
  },
  {
    source: 'components/SessionStrip.tsx',
    key: 'fallbackSessions[1].description',
    text: 'Endurance building runs',
  },
  {
    source: 'components/SessionStrip.tsx',
    key: 'fallbackSessions[2].description',
    text: 'Strength training and running skills',
  },
  {
    source: 'components/SessionStrip.tsx',
    key: 'fallbackSessions[2].skill',
    text: 'Single-leg hops',
  },
  {
    source: 'components/SessionStrip.tsx',
    key: 'skillOfTheWeek.label',
    text: 'Skill Of The Week',
  },
  // components/EventList.tsx
  {
    source: 'components/EventList.tsx',
    key: 'emptyState.title',
    text: 'Running Events',
  },
  {
    source: 'components/EventList.tsx',
    key: 'emptyState.iframeTitle',
    text: 'Malaysia Running Events Calendar',
  },
  {
    source: 'components/EventList.tsx',
    key: 'event.cta',
    text: 'Details',
  },
  // components/InstagramFeed.tsx
  {
    source: 'components/InstagramFeed.tsx',
    key: 'post.fallbackAlt',
    text: 'Instagram post',
  },
  {
    source: 'components/InstagramFeed.tsx',
    key: 'error.messagePrefix',
    text: 'Unable to load the Instagram feed right now. Check out',
  },
  {
    source: 'components/InstagramFeed.tsx',
    key: 'error.handle',
    text: '@kjrunclub',
  },
  // public/manifest.json (selected fields)
  {
    source: 'public/manifest.json',
    key: 'name',
    text: 'KJ Run Club',
  },
  {
    source: 'public/manifest.json',
    key: 'short_name',
    text: 'KJRC',
  },
  {
    source: 'public/manifest.json',
    key: 'description',
    text: 'Elite running club in Kuala Lumpur',
  },
  // public/robots.txt
  {
    source: 'public/robots.txt',
    key: 'directive[0]',
    text: 'User-agent: *',
  },
  {
    source: 'public/robots.txt',
    key: 'directive[1]',
    text: 'Allow: /',
  },
  {
    source: 'public/robots.txt',
    key: 'directive[2]',
    text: 'Sitemap: https://kjrunclub.com/sitemap.xml',
  },
];

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
