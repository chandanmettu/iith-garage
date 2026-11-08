/* =========================================================
   THE SINGLE EDIT POINT — IITH ARCHIVE & LABS

   GROUND RULES FOR THIS FILE (2026-08-19)
   ---------------------------------------
   1. No usage metrics. Nothing here claims trips taken, bookings made,
      or students reached — none of that is measured, and inventing it
      on a public page is a lie with a number attached. Every `metric`
      below is a STRUCTURAL fact (routes mapped, blocks modelled, fee
      tiers published) that can be checked by opening the project.
   2. No invented performance figures. `specs` carry real, checkable
      properties — not made-up latency or uptime percentages.
   3. `status` is one of: 'live' | 'testing' | 'soon'. Every project also
      carries a `statusNote` saying plainly what does and does not work.
      ('building' is still accepted as a legacy alias of 'soon'.)
   4. `github` is set only for repos verified public. Private repos stay
      null — a link that 404s is worse than no link.
   5. NEVER name a payment gateway anywhere in user-facing copy.
   ========================================================= */

var SITE = {
  title: 'IITH Garage',
  subtitle: 'The builds for IIT-H',
  shortTitle: 'iith.online',
  tagline:
    'The workshop behind every system built for the Indian Institute of Technology Hyderabad.',
  author: 'Chandan Mettu',
  location: 'IIT Hyderabad (17.599° N, 78.125° E)',
  coordinates: '17.599° N, 78.125° E',
  version: '2026.11.0'
};

/* ---- Status vocabulary ------------------------------------------------
   Three states, each with an icon as well as a colour — colour alone is
   never the carrier of meaning (WCAG: don't convey info by colour only). */
var STATUS = {
  live: {
    label: 'Live',
    tone: 'live',
    desc: 'Deployed on its own subdomain and usable right now.',
    icon: '<circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="9"/>'
  },
  testing: {
    label: 'Testing',
    tone: 'testing',
    desc: 'Built and deployed, but not yet open to everyone.',
    icon: '<path d="M9 3h6M10 3v6.5L5.5 18A2 2 0 0 0 7.2 21h9.6a2 2 0 0 0 1.7-3L14 9.5V3"/>'
  },
  soon: {
    label: 'Coming soon',
    tone: 'soon',
    desc: 'In active build, not deployed yet.',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'
  },
  building: {
    label: 'Coming soon',
    tone: 'soon',
    desc: 'In active build, not deployed yet.',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'
  }
};

var CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'Academics', label: 'Academics & Notes' },
  { id: 'Merchandise', label: 'Clubs & Merch' },
  { id: 'Sport', label: 'Athletics & Sport' },
  { id: 'Transport', label: 'Mobility & Transit' },
  { id: 'Housing', label: 'Hostels & 3D' },
  { id: 'Dining', label: 'Dining & Mess' },
  { id: 'Facilities', label: 'Aquatics & Facilities' }
];

var PROJECTS = [
  {
    slug: 'resources',
    logo: 'abhyas.png',
    name: 'Abhyas',
    zone: 'Academics',
    category: 'Academics',
    url: 'https://abhyas.iith.online',
    github: 'https://github.com/chandanmettu/iith-abhyas',
    status: 'live',
    statusNote:
      'Live at abhyas.iith.online with a populated catalogue, public submissions, quarantine and admin moderation. Uploaded files and mutable catalogue data are managed on the server, outside Git.',
    year: '2026',
    accentColor: '#F28700',
    metric: { label: 'Pages of material', value: '15K+' },
    blurb:
      'Course materials for IIT Hyderabad in one place — lecture notes, past exam papers, assignment solutions and the reference books each course leans on, organised by course and by all 15 of the institute’s departments, with instant search.',
    highlights: [
      'Search by course code, professor or topic (⌘K)',
      'Four resource kinds — past papers, notes, assignments, reference books — each colour-coded',
      'In-browser PDF reader (pdf.js), served from the same site',
      'Open contribution flow with a review queue and a contributor leaderboard'
    ],
    stack: ['Vanilla JS', 'pdf.js', 'PHP API', 'Lenis'],
    specs: {
      departments: '15 mapped',
      'resource kinds': 'Papers, notes, assignments, books',
      deploy: 'Auto on push'
    }
  },
  {
    slug: 'merchstore',
    logo: 'merchstore.webp',
    name: 'Merch Store',
    zone: 'Merchandise',
    category: 'Merchandise',
    url: 'https://store.iith.online',
    github: null,
    status: 'live',
    year: '2026',
    accentColor: '#8C684E',
    metric: { label: 'Club Catalogs', value: '18+ Societies' },
    blurb:
      'A dedicated merchandise store for all student clubs and societies at IIT Hyderabad — custom hoodies, t-shirts, enamel pins, tote bags, and fest apparel in one curated storefront.',
    highlights: [
      'Multi-club apparel catalog for technical, cultural, and sports societies',
      'Integrated pre-order batches and automated size allocation',
      'Direct UPI checkout with digital pickup passes',
      'Inventory management dashboard for club coordinators'
    ],
    stack: ['WordPress', 'WooCommerce', 'Dokan multivendor', 'UPI checkout'],
    specs: {
      societies: '18+ listed',
      orders: 'Count to follow'
    }
  },
  {
    slug: 'athletics',
    logo: 'athletics.png',
    name: 'IITH Athletics',
    zone: 'Sport',
    category: 'Sport',
    url: 'https://athletics.iith.online',
    github: null,
    status: 'live',
    statusNote:
      'Live on its own subdomain, redeploying automatically on every push. The repository is private, so there is no public source link.',
    year: '2026',
    started: 'Jul 2026',
    accentColor: '#38BDF8',
    metric: { label: 'Meet sheets digitised', value: '45 scanned' },
    blurb:
      'The public home of the track and field club — events, meet results, institute records, Inter-IIT and IAL archives, athlete profiles, galleries and the NSO attendance board. It replaces WhatsApp broadcasts and paper result sheets with something permanent and linkable.',
    highlights: [
      '32 pages covering events, results, records, athlete profiles, galleries and meet microsites',
      '45 scanned Inter-IIT and institute meet sheets digitised into a record ledger',
      'Microsites for Aarambh, Diesta, Milan, IAL and every Inter-IIT from 2022 to 2026, with Milan 2026 results linked to athlete profiles',
      '14 handwritten pages of Diesta ’26 results transcribed by hand into structured data',
      'Kinetic typography and scroll choreography built on GSAP and Lenis, vendored locally with no CDN call',
      'Seven Python generators rebuild the profile, team and result pages from the source data rather than hand-editing HTML'
    ],
    stack: ['Static HTML5', 'GSAP', 'Lenis', 'Python generators'],
    specs: {
      pages: '32 served',
      'source data': '45 meet sheets',
      'build step': 'None',
      deploy: 'Auto on push'
    },
    next: [
      'Ingest more archived championship years into the record ledger',
      'Move the older NSO batches off hardcoded JS and onto the sheet the newest batch already reads from',
      'Accessibility pass across the scroll animation'
    ]
  },
  {
    slug: 'sanchari',
    logo: 'sanchari.png',
    name: 'Sanchari',
    zone: 'Transport',
    category: 'Transport',
    url: 'https://sanchari.iith.online',
    github: 'https://github.com/chandanmettu/iith-sanchari',
    status: 'live',
    statusNote:
      'Routes, schedules and live countdowns are live and in use. Ticketing is built end to end and verified server-side, but it has not been switched on — no real payment has run through it yet.',
    year: '2026',
    started: 'Jul 2026',
    accentColor: '#0EA5E9',
    metric: { label: 'Scheduled runs a week', value: '750+' },
    blurb:
      'Campus mobility in a pocket. The free Main Gate to Hostel Circle shuttle, the Patancheru city route and the Miyapur metro feeder — with expandable schedules, countdowns to the next departure, and a QR boarding pass at the end of it.',
    highlights: [
      'Three routes: the free campus shuttle, Patancheru at ₹30 a seat, and Miyapur at ₹100 flat to any stop',
      '11 timed stops on the Miyapur feeder, with a From IITH / To IITH toggle that flips both route cards',
      'Departure countdowns that refresh every 15 seconds, with schedules that expand in place',
      'Works on phone, tablet and desktop, with the boarding pass printing out of a slot and tearing off',
      'Fare authority lives entirely server-side — the browser is never trusted to state the price',
      'Boarding passes are signed with HMAC and checked against the server; the driver scan screen marks each one used, once',
      'No cookies, no analytics, no trackers — stated in the terms and true in the code'
    ],
    stack: ['HTML/CSS/JS', 'PHP', 'HMAC signing', 'QR passes'],
    specs: {
      routes: '3 mapped',
      stops: '11 timed',
      trackers: 'None',
      source: 'Public repo'
    },
    next: [
      'Run the first genuine end-to-end transaction and switch ticketing on',
      'Add the holiday calendar and the remaining boarding points to the timetable'
    ]
  },
  {
    slug: 'nivas',
    logo: 'nivas.png',
    name: 'Nivas',
    zone: 'Housing',
    category: 'Housing',
    url: 'https://nivas.iith.online',
    github: 'https://github.com/chandanmettu/iith-nivas',
    status: 'live',
    statusNote:
      'Live on PHP and MySQL with real student-posted listings. Open source under MIT.',
    year: '2026',
    started: 'Jul 2026',
    accentColor: '#38BDF8',
    metric: { label: 'Hostels', value: '13 mapped' },
    blurb:
      'A student-built room-swap board for the hostel precinct. Orbit a 3D model of a block, walk it floor by floor across plans traced from the real architectural drawing, then post or find a swap. It makes no claim about official occupancy — a room shows a status only because a student published one.',
    highlights: [
      'All 13 hostels on the board in a 3D model built from site photographs, with six or ten floors to match each block, that you can orbit and open floor by floor',
      'Floor plans traced by hand from the real architectural drawing, not approximated',
      'Room-swap listings posted by students themselves, gated behind @iith.ac.in email verification',
      'Three.js and OrbitControls vendored locally — the page pulls nothing from a CDN',
      'Prepared statements throughout, tokens hashed before storage, per-IP throttles on every write path'
    ],
    stack: ['Three.js WebGL', 'PHP', 'MySQL', 'Vanilla JS'],
    specs: {
      hostels: '13 mapped',
      identity: '@iith.ac.in',
      licence: 'MIT',
      source: 'Public repo'
    },
    next: [
      'A campus view of every hostel together, where tapping one flies in to it',
      'A complaints channel for hostel maintenance — Wi-Fi, washrooms, cleaning',
      'A wider institute complaints route, once it is clear who actually receives them',
      'A moderation console, so removing a bad listing is not a manual database edit'
    ]
  },
  {
    slug: 'aquatics',
    logo: 'lane1.svg',
    name: 'IITH Aquatics',
    zone: 'Facilities',
    category: 'Facilities',
    url: 'https://aquatics.iith.online',
    github: null,
    status: 'live',
    statusNote:
      'The registration portal is live. IITH Aquatics Gate, the staff gate scanner that goes with it, is finished and tested but not deployed yet.',
    year: '2026',
    started: 'Jul 2026',
    accentColor: '#06B6D4',
    metric: { label: 'Fee tiers published', value: '10 tiers' },
    blurb:
      'Everything needed to get into the SNCC pool on one page: the ten-tier fee structure, slot timings, safety rules and the full sign-up flow. It signposts rather than processes, and a companion gate scanner that checks swimmers in at the poolside is built and waiting to join it.',
    highlights: [
      'Ten-tier fee structure broken down per category, wrapped in a guided four-step sign-up',
      'Pool timings and safety rules published in one authoritative place instead of a circulated PDF',
      'IITH Aquatics Gate: a staff app with a gate dashboard, a members list and a daily entry log',
      'Computes membership expiry that the pool’s own records never store, chaining renewals in date order against a fee table, with grace periods and manual overrides, covered by 57 tests',
      'Looks a swimmer up by roll number from a USB barcode scanner or typed by hand at the gate'
    ],
    stack: ['Static HTML/CSS/JS', 'Google Forms', 'Google Sheets', 'Barcode scanning'],
    specs: {
      'fee tiers': '10 published',
      'sign-up': '4 steps',
      'gate app': 'Built, not deployed',
      'build step': 'None'
    },
    next: [
      'Merge the gate scanner into the live site, so one aquatics platform handles sign-up and the gate',
      'Replace the third-party payment QR with a committed static image',
      'Write down who receives the form responses and holds the accounts, which matters when whoever runs it graduates'
    ]
  },
  {
    slug: 'ruchi',
    logo: 'mess.svg',
    name: 'Ruchi',
    zone: 'Dining',
    category: 'Dining',
    url: 'https://ruchi.iith.online',
    github: 'https://github.com/chandanmettu/iith-ruchi',
    status: 'live',
    statusNote:
      'Live at ruchi.iith.online as a daily dining beta: menus, Extras, saved dishes, My Plate and issue reports all work, with no login. Monthly registration is built, but its backend has not been switched on.',
    year: '2026',
    started: 'Jul 2026',
    accentColor: '#F59E0B',
    metric: { label: 'Dishes on the menu', value: '130+' },
    blurb:
      'IIT Hyderabad’s daily mess companion. Today’s menu meal by meal, the paid Extras at the counter with their prices, dishes you save, a plate log of what you ate, and a quick way to report a problem to the mess. Built to be opened every day, not once a month.',
    highlights: [
      'Breakfast, lunch, snacks and dinner with a countdown to the next meal, picked automatically from the time of day',
      'The four-week menu rotation resolved from the date, so nobody has to work out which week it is',
      '42 paid Extras listed by day and meal, with the prices from the posted board',
      'Vegetarian and egg / non-veg filters, card and list views, and saved dishes kept on your own device',
      'My Plate, to record what you ate, without inventing nutrition figures that were never supplied',
      'Issue reports with an optional photo, drafted on the phone and sent by email to the mess secretary'
    ],
    stack: ['HTML/CSS/JS', 'IndexedDB', 'Supabase (registration, planned)'],
    specs: {
      dishes: '130+ on the regular menu',
      extras: '42 priced',
      login: 'None needed',
      source: 'Public repo'
    },
    next: [
      'Switch on registration: Google sign-in, staff roles and a full registration-cycle test',
      'Original photographs of the food actually served in the mess',
      'Dish-level nutrition and serving sizes, once real figures exist',
      'A standalone phone app'
    ]
  }
];

/* ---- The status board -------------------------------------------------
   Three columns: planned, active building, and live shipped.
   `progress` is only ever used where it maps to a countable ratio of
   milestones, and the body text states what that ratio is. Where there is
   no honest ratio, `meta` carries a plain status phrase instead.        */
var BOARD = [
  {
    key: 'horizon',
    title: 'On the Horizon',
    sub: 'Planned & Architecture Phase',
    icon: 'compass',
    items: [
      {
        title: 'One aquatics platform',
        date: 'Planned',
        isNew: true,
        body: 'The gate scanner joins the live pool portal, so swimmers sign up and staff run the gate from the same place.',
        tags: ['Aquatics', 'Gate']
      },
      {
        title: 'Ruchi real photos and nutrition',
        date: 'Planned',
        body: 'Original photographs of the food actually served, then dish-level nutrition and serving sizes once real figures exist.',
        tags: ['Ruchi', 'Menu', 'Nutrition']
      },
      {
        title: 'Nivas complaints channels',
        date: 'Planned',
        body: 'Hostel maintenance complaints — Wi-Fi, washrooms, cleaning — and a wider institute route. Blocked on a question worth answering first: who actually receives them.',
        tags: ['Nivas', 'Complaints']
      },
      {
        title: 'Athletics archive expansion',
        date: 'Planned',
        body: 'More archived championship years ingested into the record ledger, and the older NSO batches moved off hardcoded JS onto the sheet the newest batch already reads from.',
        tags: ['Athletics', 'Archive']
      }
    ]
  },
  {
    key: 'building',
    title: 'Building Now',
    sub: 'Active Sprint & Engineering',
    icon: 'bolt',
    items: [
      {
        title: 'Ruchi registration switch-on',
        body: 'Monthly registration, the counter scanner and the admin console are built, and the database schema is ready. Google sign-in, staff roles and a full registration-cycle test come before it opens.',
        meta: { text: 'Built · awaiting backend', state: 'testing' },
        tags: ['Ruchi', 'Registration', 'Postgres']
      },
      {
        title: 'Sanchari ticketing switch-on',
        body: 'The whole path is built — server-side fare lookup, signed pass, server-side verification, single-use check-in at the driver scan screen. What is missing is not code: no genuine transaction has been run through it end to end yet.',
        meta: { text: 'Built · awaiting first live run', state: 'testing' },
        tags: ['Sanchari', 'Ticketing', 'QR']
      },
      {
        title: 'IITH Aquatics Gate',
        body: 'The gate scanner is finished, including the expiry logic that chains renewals in date order with grace periods, and 57 tests pass. It is committed beside the live portal, blocked from the web until the two are merged.',
        meta: { text: 'Built · awaiting merge', state: 'testing' },
        tags: ['Aquatics', 'Gate', 'Barcode']
      }
    ]
  },
  {
    key: 'shipped',
    title: 'Shipped & Live',
    sub: 'Production Systems in the Wild',
    icon: 'check',
    items: [
      {
        title: 'Sanchari boarding pass printer',
        date: 'Oct 2026',
        isNew: true,
        body: 'The boarding pass now prints out of a slot and tears off, alongside launch-readiness fixes to rebooking and schedules.',
        tags: ['sanchari.iith.online', 'Ticketing']
      },
      {
        title: 'Sanchari on every screen',
        date: 'Sep 2026',
        isNew: true,
        body: 'Real tablet and desktop layouts, recoverable bookings and single-use check-in at the driver scan screen.',
        tags: ['sanchari.iith.online', 'Responsive']
      },
      {
        title: 'Ruchi daily dining goes live',
        date: 'Sep 2026',
        isNew: true,
        body: 'The mess portal became a daily companion: the posted menu, priced Extras, saved dishes, My Plate and issue reports, live at ruchi.iith.online.',
        tags: ['ruchi.iith.online', 'Daily menu']
      },
      {
        title: 'Abhyas goes live',
        date: 'Aug 2026',
        body: 'The course library was rebuilt with an identity of its own and shipped to abhyas.iith.online — past papers, notes, assignment solutions and a reference shelf, grouped by course across 15 departments, with an open contribution flow and a contributor leaderboard.',
        tags: ['abhyas.iith.online', 'Contribution flow']
      },
      {
        title: 'Ruchi branded, sourced and published',
        date: 'Aug 2026',
        body: 'The mess portal picked up a name, a vision document, a public repository and a subdomain of its own at ruchi.iith.online.',
        tags: ['ruchi.iith.online', 'Open source']
      },
      {
        title: 'Security review across every live project',
        date: 'Aug 2026',
        body: 'Each deployed project was audited, and every finding tracked in a KNOWN_ISSUES file that lives with the code rather than in someone’s memory.',
        tags: ['Audit', 'Engineering']
      },
      {
        title: 'Athletics portal',
        date: 'Aug 2026',
        body: 'Institute records, meet results, championship archives, athlete profiles and the NSO board, live on a custom subdomain.',
        tags: ['athletics.iith.online', 'GSAP']
      },
      {
        title: 'Nivas 3D hostel navigator',
        date: 'Jul 2026',
        body: 'A WebGL building inspector and a student room-swap board across every hostel on campus that it covers, on an auto-deploy pipeline.',
        tags: ['nivas.iith.online', 'Three.js']
      },
      {
        title: 'Sanchari campus transit',
        date: 'Jul 2026',
        body: 'Shuttle, Patancheru and Miyapur schedules with live countdowns and expandable route cards.',
        tags: ['sanchari.iith.online', 'Countdowns']
      },
      {
        title: 'Aquatics pool portal',
        date: 'Jul 2026',
        body: 'The ten-tier fee structure, timings, safety rules and sign-up flow for the SNCC pool, published in one place.',
        tags: ['aquatics.iith.online', 'Static']
      }
    ]
  }
];

/* ---- Build timeline ---------------------------------------------------
   Chronological, and deliberately including the unglamorous entries —
   consolidation and audit work is part of the record.                   */
var TIMELINE = [
  {
    date: 'Jul 2026',
    title: 'Sanchari and Nivas go live',
    body: 'Two subdomains inside the same month: campus transit schedules, and a 3D hostel navigator with real student listings on PHP and MySQL.',
    tags: ['Sanchari', 'Nivas']
  },
  {
    date: '24 Jul 2026',
    title: 'Pool gate scanner begins',
    body: 'First commits on the poolside entry-verification app — barcode lookup, offline-first, and the expiry logic that computes what the pool’s own records never stored.',
    tags: ['Aquatics']
  },
  {
    date: '29 Jul 2026',
    title: 'Aquatics portal ships',
    body: 'The public-facing pool portal — fee tiers, timings, safety rules, sign-up flow — takes over the repository that started as the gate scanner.',
    tags: ['Aquatics']
  },
  {
    date: '30 Jul 2026',
    title: 'Mess portal started',
    body: 'Registration flow, dining-hall allocation and per-hall capacity caps. Three separate builds were attempted; the plain-HTML one was kept for matching the rest of the stack.',
    tags: ['Ruchi']
  },
  {
    date: 'Aug 2026',
    title: 'Athletics portal ships',
    body: '23 pages of events, records, profiles and galleries, built on top of 45 digitised meet sheets and 14 hand-transcribed pages of results.',
    tags: ['Athletics']
  },
  {
    date: '19 Aug 2026',
    title: 'Consolidation and security sweep',
    body: 'Projects scattered across duplicate folders under rival names were consolidated to one folder each, audited, and given a KNOWN_ISSUES file that travels with the code.',
    tags: ['All projects']
  },
  {
    date: '19 Aug 2026',
    title: 'Ruchi named and published',
    body: 'The mess portal became IITH Ruchi, with a vision document separating the monthly registration loop from the daily menu loop, and went public on GitHub.',
    tags: ['Ruchi']
  },
  {
    date: '22 Sep 2026',
    title: 'Ruchi daily dining beta',
    body: 'Ruchi turned from a once-a-month registration form into a daily menu app: meals by time of day, the four-week rotation resolved from the date, saved dishes and My Plate. Priced Extras followed two days later.',
    tags: ['Ruchi']
  },
  {
    date: '25 Sep 2026',
    title: 'Sanchari on every screen',
    body: 'Tablet and desktop layouts, recoverable bookings and single-use check-in, with paid booking still switched off.',
    tags: ['Sanchari']
  },
  {
    date: '4 Oct 2026',
    title: 'Milan 2026 results',
    body: 'Milan 2026 results published on the Athletics site and linked to athlete profiles, under a written eligibility rulebook for who gets a profile.',
    tags: ['Athletics']
  },
  {
    date: '31 Oct 2026',
    title: 'The printed boarding pass',
    body: 'Sanchari’s pass now prints out of a slot and tears off, shipped with a launch-readiness pass over rebooking and schedules.',
    tags: ['Sanchari']
  }
];

/* ---- What runs underneath --------------------------------------------
   Which technologies are actually in use, and by which projects.        */
var STACK_MATRIX = [
  {
    tech: 'Vanilla JS, no build step',
    note: 'Every project ships the files it serves. No bundler, no framework, no compile.',
    projects: ['resources', 'athletics', 'sanchari', 'nivas', 'ruchi', 'aquatics']
  },
  {
    tech: 'PHP on the server',
    note: 'Server-side authority where money or real data is involved: MySQL behind Sanchari and Nivas, moderated JSON files behind Abhyas.',
    projects: ['resources', 'sanchari', 'nivas']
  },
  {
    tech: 'Three.js WebGL',
    note: 'Orbitable hostel blocks, vendored locally rather than pulled from a CDN.',
    projects: ['nivas']
  },
  {
    tech: 'GSAP + Lenis',
    note: 'Kinetic typography and scroll choreography, also vendored locally.',
    projects: ['athletics']
  },
  {
    tech: 'Supabase Postgres',
    note: 'Schema ready for Ruchi registration and seat caps, behind a one-file config switch. Not switched on yet.',
    projects: ['ruchi']
  },
  {
    tech: 'Google Sheets + Apps Script',
    note: 'Where the pool’s sign-ups and member records already live, so the gate scanner reads them instead of copying them.',
    projects: ['aquatics']
  },
  {
    tech: 'HMAC-signed tokens',
    note: 'Boarding passes that cannot be forged by editing the URL.',
    projects: ['sanchari']
  },
  {
    tech: 'Barcode scanning',
    note: 'Reading the card students already carry instead of issuing a new one.',
    projects: ['aquatics', 'ruchi']
  },
  {
    tech: 'Offline-first PWA',
    note: 'Service workers, so a poolside gate keeps working when campus Wi-Fi does not.',
    projects: ['aquatics']
  },
  {
    tech: 'Git auto-deploy',
    note: 'Push to main, and the live site updates itself.',
    projects: ['resources', 'athletics', 'sanchari', 'nivas', 'ruchi', 'aquatics']
  }
];

/* ---- Architecture & Sustainability Breakdown -------------------------
   `amount: null` renders as an em dash. Figures that have not been
   confirmed are left null on purpose — a placeholder zero would read as
   a claim that something is free when it is not.                        */
var ARCHITECTURE = {
  headline: 'Small stack. Cheap to run.',
  subline:
    'Every project is plain HTML, CSS and JavaScript with no build step, so what ships is what was written. ' +
    'Servers only appear where something genuinely needs one.',
  pillars: [
    {
      icon: 'zap',
      title: 'No build step, anywhere',
      desc: 'No bundler and no framework on any project. The file that ships is the file that was written, which makes a four-month-old project still editable today.'
    },
    {
      icon: 'shield',
      title: 'Works when the network does not',
      desc: 'The poolside gate scanner runs fully offline through a service worker, because campus Wi-Fi at a pool gate is not something to depend on.'
    },
    {
      icon: 'cpu',
      title: 'Server-side where it counts',
      desc: 'Fares, seat caps and pass verification are decided on the server. The browser is never trusted to state a price or confirm its own ticket.'
    },
    {
      icon: 'lock',
      title: 'No trackers by default',
      desc: 'No analytics, no cookies, no third-party tracking scripts across the suite. Where a project promises that in its terms, the code actually holds to it.'
    }
  ],
  costs: {
    currency: '₹',
    totalNote: 'Annual running cost across every subdomain',
    items: [
      {
        label: 'Domain (iith.online)',
        amount: 2000,
        period: 'per year',
        note: 'Covers the apex and every project subdomain'
      },
      {
        label: 'Hosting',
        amount: null,
        period: 'per year',
        note: 'Shared plan serving all subdomains — figure to be confirmed'
      },
      {
        label: 'Everything else',
        amount: 0,
        period: 'free tier',
        note: 'Database, sheets and scripting all sit inside free allowances'
      }
    ]
  }
};
