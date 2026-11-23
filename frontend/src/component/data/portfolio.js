export const portfolioData = [
  {
    id: 1,
    title: 'FinScale: Next-Gen Neobanking & Treasury Platform',
    slug: 'finscale-neobank',
    client: 'FinScale Ltd.',
    industry: 'Fintech',
    category: ['Web', 'Enterprise', 'AI'],
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    summary: 'Engineered an institutional-grade treasury and neo-banking dashboard processing over $40M in monthly volume with micro-second latency.',
    challenge: 'The client faced slow legacy transactions, difficult reconciliation, and poor mobile accessibility for enterprise treasurers.',
    solution: 'Designed and developed a real-time event-driven financial architecture using Next.js, Node.js microservices, and Kafka streaming.',
    results: [
      { metric: '99.99%', label: 'Platform Uptime' },
      { metric: '3.4x', label: 'Faster Settlement' },
      { metric: '$40M+', label: 'Monthly Volume' }
    ],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Kafka', 'Tailwind CSS'],
    featured: true,
    year: '2025'
  },
  {
    id: 2,
    title: 'MedixAI: Clinical Diagnostic & Patient Portal',
    slug: 'medixai-clinical-portal',
    client: 'Medix Health Systems',
    industry: 'Healthcare',
    category: ['AI', 'Web', 'Mobile'],
    cover: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    summary: 'HIPAA-compliant telehealth app and AI-assisted radiology analysis suite utilized by 85,000+ active patients and medical staff.',
    challenge: 'Siloed medical records, long appointment scheduling cycles, and manual transcription bottlenecks.',
    solution: 'Built an end-to-end encrypted telehealth consultation platform with automated AI voice summaries and DICOM image viewer.',
    results: [
      { metric: '85K+', label: 'Active Patients' },
      { metric: '62%', label: 'Reduced Admin Time' },
      { metric: '100%', label: 'HIPAA Compliant' }
    ],
    techStack: ['React Native', 'Next.js', 'Python', 'FastAPI', 'AWS HIPAA Cloud'],
    featured: true,
    year: '2025'
  },
  {
    id: 3,
    title: 'Aura Luxe: Headless Global E-Commerce Marketplace',
    slug: 'aura-luxe-ecommerce',
    client: 'Aura Luxury Brands',
    industry: 'Retail',
    category: ['E-commerce', 'Web'],
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    summary: 'Hyper-responsive multi-currency headless e-commerce store with 3D product previews and localized checkout across 24 countries.',
    challenge: 'High cart abandonment rate on mobile devices and slow page load speeds on international mobile networks.',
    solution: 'Migrated monolithic storefront to a headless Next.js architecture on Vercel Edge with Shopify Storefront API and Algolia Search.',
    results: [
      { metric: '+48%', label: 'Mobile Conversion' },
      { metric: '0.8s', label: 'LCP Page Load' },
      { metric: '24', label: 'Countries Supported' }
    ],
    techStack: ['Next.js', 'Shopify Plus API', 'Tailwind CSS', 'Algolia', 'Stripe'],
    featured: true,
    year: '2024'
  },
  {
    id: 4,
    title: 'NovaStrike: Cross-Platform Multiplayer Mobile Arena',
    slug: 'novastrike-game',
    client: 'Nova Interactive Games',
    industry: 'Gaming',
    category: ['Games', 'Mobile'],
    cover: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
    summary: 'Fast-paced real-time tactical arena mobile game with custom matchmaking, low-latency netcode, and over 1.2M downloads.',
    challenge: 'Ensuring consistent 60 FPS gameplay on low-end Android hardware while synchronizing 10-player real-time matches worldwide.',
    solution: 'Optimized Unity render pipelines, utilized custom C# binary network packets, and deployed Photon multiplayer servers.',
    results: [
      { metric: '1.2M+', label: 'Downloads' },
      { metric: '60 FPS', label: 'Average Frame Rate' },
      { metric: '< 45ms', label: 'Average Ping' }
    ],
    techStack: ['Unity', 'C#', 'Photon Quantum', 'Google Cloud', 'Blender'],
    featured: true,
    year: '2024'
  },
  {
    id: 5,
    title: 'CargoLink: Autonomous Fleet & Logistics Coordinator',
    slug: 'cargolink-logistics',
    client: 'CargoLink Global',
    industry: 'Logistics',
    category: ['Enterprise', 'Web', 'Mobile'],
    cover: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    summary: 'IoT-enabled route optimization and real-time shipment tracking for 3,500+ commercial trucks across North America.',
    challenge: 'Empty backhaul miles, unpredictable traffic delays, and disjointed driver communication.',
    solution: 'Built an automated dispatch engine using genetic algorithms and dynamic driver companion apps for iOS and Android.',
    results: [
      { metric: '18%', label: 'Fuel Savings' },
      { metric: '3,500+', label: 'Connected Trucks' },
      { metric: '98.6%', label: 'On-Time Delivery' }
    ],
    techStack: ['React', 'Node.js', 'Go', 'MongoDB', 'Mapbox', 'RabbitMQ'],
    featured: false,
    year: '2024'
  },
  {
    id: 6,
    title: 'OmniTravel: AI Itinerary & Flight Concierge',
    slug: 'omnitravel-aviation',
    client: 'Omni Airways',
    industry: 'Travel',
    category: ['AI', 'Web', 'Mobile'],
    cover: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    summary: 'Conversational travel concierge that books flights, hotels, and customized local tours in under 2 minutes.',
    challenge: 'High customer service call volume during weather disruptions and high booking drop-off rates on mobile.',
    solution: 'Engineered an AI agent using LangChain, real-time Amadeus GDS APIs, and instant one-tap WhatsApp integration.',
    results: [
      { metric: '74%', label: 'Inquiries Handled by AI' },
      { metric: '< 2 min', label: 'Average Booking Time' },
      { metric: '4.8/5', label: 'Customer CSAT' }
    ],
    techStack: ['Next.js', 'Python', 'OpenAI API', 'Amadeus API', 'WhatsApp Business'],
    featured: false,
    year: '2025'
  }
];
