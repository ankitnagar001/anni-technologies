export const defaultCaseStudies = [
  {
    id: 'cs-1',
    title: 'Boatflex — a boat & yacht charter platform across web, iOS and Android',
    slug: 'boatflex-charter-platform',
    client: 'Boatflex Inc.',
    industry: 'Travel',
    tags: ['Travel', 'Marketplace — Web & Mobile'],
    cover: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80',
    mockupImage: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1200&q=80',
    summary: 'A charter marketplace connecting boat renters with boat owners through a CMS-driven web portal and React Native apps for iOS and Android.',
    metrics: [
      { metric: '+240%', label: 'Yearly Bookings' },
      { metric: '4.9/5', label: 'App Store Rating' },
      { metric: '65K+', label: 'Active Skippers' }
    ],
    challenge: 'High latency booking reconciliation, fragmented yacht availability calendars, and legacy manual owner verification.',
    solution: 'Designed and deployed unified cross-platform mobile apps alongside a high-performance Next.js booking engine with instant Stripe escrow payouts.',
    featured: true
  },
  {
    id: 'cs-2',
    title: 'Real-time multiplayer card & board game suite',
    slug: 'real-time-multiplayer-card-board-game-suite',
    client: 'EkJeet / AllPlay Arena',
    industry: 'Gaming',
    tags: ['Gaming', 'Multiplayer Games'],
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    mockupImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    summary: 'A family of real-time multiplayer games — Ludo, Call Break, Teen Patti and more — sharing a common room engine, lobby system, wallet and admin panel.',
    metrics: [
      { metric: '100K+', label: 'Concurrent Players' },
      { metric: '< 35ms', label: 'Matchmaking Latency' },
      { metric: '99.99%', label: 'Uptime SLA' }
    ],
    challenge: 'Scaling real-time WebSockets to support 100,000+ concurrent players without card state desynchronization or fraud.',
    solution: 'Implemented an authoritative game room engine using Node.js clustering, Redis Pub/Sub, and an audited Provably Fair random generation system.',
    featured: true
  },
  {
    id: 'cs-3',
    title: 'Actee — Gamified corporate learning & behavioral change system',
    slug: 'actee-gamified-learning',
    client: 'Actee Global',
    industry: 'Education & HR',
    tags: ['Education', 'Web Application & SaaS'],
    cover: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    mockupImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    summary: 'An enterprise learning game framework that simulates workplace scenarios, team dynamics, and change leadership for Fortune 500 corporations.',
    metrics: [
      { metric: '88%', label: 'Knowledge Retention' },
      { metric: '45+', label: 'Global Enterprises' },
      { metric: '3.2x', label: 'Course Completion Rate' }
    ],
    challenge: 'Traditional corporate slide-deck training suffered from 15% completion rates and virtually zero behavioral impact.',
    solution: 'Engineered an interactive branching-scenario simulation platform with real-time feedback loops and team competition analytics.',
    featured: true
  },
  {
    id: 'cs-4',
    title: 'FinScale — Institutional-grade multi-currency neobank portal',
    slug: 'finscale-neobank-portal',
    client: 'FinScale Ltd.',
    industry: 'Fintech',
    tags: ['Fintech', 'Enterprise Portal & Security'],
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    mockupImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    summary: 'Modern financial infrastructure processing $40M+ in cross-border settlements with automated treasury management and multi-level approvals.',
    metrics: [
      { metric: '$40M+', label: 'Monthly Settlement' },
      { metric: '3.4x', label: 'Faster Processing' },
      { metric: '0', label: 'Security Breaches' }
    ],
    challenge: 'Legacy banking APIs caused multi-day clearing delays, manual reconciliation errors, and lack of real-time auditability.',
    solution: 'Constructed an event-driven microservices architecture with Next.js, Apache Kafka, and automated compliance screening.',
    featured: true
  }
];
