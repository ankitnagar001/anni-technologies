export const technologiesData = [
  {
    category: 'Frontend',
    items: [
      { name: 'Next.js', level: 'Core Stack', desc: 'React framework for fast, SEO-first, production web apps.' },
      { name: 'React', level: 'Core Stack', desc: 'Declarative component-driven UI architecture.' },
      { name: 'TypeScript', level: 'Core Stack', desc: 'Type-safe scalable JavaScript codebases.' },
      { name: 'Tailwind CSS', level: 'Core Stack', desc: 'Utility-first modern styling and custom design tokens.' },
      { name: 'Vue.js / Nuxt', level: 'Advanced Expertise', desc: 'Progressive frontends and lightweight micro-frontends.' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 'Core Stack', desc: 'High-throughput asynchronous REST and streaming backends.' },
      { name: 'Python / FastAPI', level: 'Advanced Expertise', desc: 'High-performance AI, ML, and asynchronous APIs.' },
      { name: 'Go (Golang)', level: 'Advanced Expertise', desc: 'Low-latency microservices and concurrency-heavy pipelines.' },
      { name: 'NestJS', level: 'Production Ready', desc: 'Enterprise-grade modular TypeScript backend framework.' }
    ]
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native', level: 'Core Stack', desc: 'Cross-platform native iOS & Android applications.' },
      { name: 'Flutter', level: 'Core Stack', desc: 'High-fidelity multi-platform apps with 120 FPS animations.' },
      { name: 'Swift (iOS)', level: 'Production Ready', desc: 'Native iOS engineering with CoreData and Metal.' },
      { name: 'Kotlin (Android)', level: 'Production Ready', desc: 'Native Android apps using Jetpack Compose.' }
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', level: 'Core Stack', desc: 'Flexible NoSQL document database with Atlas scaling.' },
      { name: 'PostgreSQL', level: 'Core Stack', desc: 'Robust relational database with JSONB support.' },
      { name: 'Redis', level: 'Core Stack', desc: 'In-memory caching, pub/sub, and rate-limiting store.' },
      { name: 'Supabase', level: 'Production Ready', desc: 'Open-source Firebase alternative with real-time subscriptions.' }
    ]
  },
  {
    category: 'Cloud/DevOps',
    items: [
      { name: 'AWS Cloud', level: 'Core Stack', desc: 'EC2, ECS, Lambda, S3, CloudFront, RDS infrastructure.' },
      { name: 'Docker & K8s', level: 'Core Stack', desc: 'Containerization and Kubernetes cluster orchestration.' },
      { name: 'Vercel / Cloudflare', level: 'Core Stack', desc: 'Edge networks, global CDNs, and instant serverless compute.' },
      { name: 'GitHub Actions', level: 'Core Stack', desc: 'Automated CI/CD pipelines with test and security scans.' }
    ]
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'OpenAI & Claude APIs', level: 'Core Stack', desc: 'Advanced LLM integration, function calling, and agents.' },
      { name: 'LangChain & LlamaIndex', level: 'Advanced Expertise', desc: 'RAG pipelines and autonomous knowledge engines.' },
      { name: 'PyTorch', level: 'Advanced Expertise', desc: 'Deep learning model training and inference optimization.' },
      { name: 'Pinecone / ChromaDB', level: 'Production Ready', desc: 'Vector databases for semantic search and AI retrieval.' }
    ]
  }
];

export const processStepsData = [
  {
    step: 1,
    title: 'Discovery & Strategic Planning',
    duration: 'Week 1',
    description: 'We unpack your product goals, define core user personas, map technical constraints, and finalize the MVP scope.',
    deliverables: 'SRS document, architecture diagram, user flow maps, delivery timeline.'
  },
  {
    step: 2,
    title: 'UI/UX Design & Prototyping',
    duration: 'Weeks 2 - 3',
    description: 'We craft intuitive wireframes, interactive Figma prototypes, and complete design systems in both Light and Dark themes.',
    deliverables: 'Figma component library, interactive prototype, design token specs.'
  },
  {
    step: 3,
    title: 'Agile Full-Stack Development',
    duration: 'Weeks 4 - 8',
    description: 'Two-week sprint cycles with weekly demos. Frontend, backend, and database engineered to clean architecture standards.',
    deliverables: 'Staging deployment, working feature increments, sprint demo videos.'
  },
  {
    step: 4,
    title: 'Rigorous QA & Security Testing',
    duration: 'Week 9',
    description: 'Automated E2E testing, security vulnerability scans, cross-browser compatibility, and Core Web Vitals optimization.',
    deliverables: 'Test automation report, a11y compliance certificate, penetration report.'
  },
  {
    step: 5,
    title: 'Deployment & Continuous Growth',
    duration: 'Week 10+',
    description: 'Zero-downtime production launch, DNS setup, analytics verification, team training, and ongoing SLA maintenance.',
    deliverables: 'Production go-live, admin credentials, complete source code, 3-month warranty.'
  }
];

export const faqsData = [
  {
    question: 'How much does a custom software or MVP project typically cost?',
    category: 'Pricing & Engagement',
    answer: 'Our MVP projects typically range from $8,000 to $22,000 depending on features and complexity. Larger custom enterprise platforms range from $20,000 to $65,000+. We offer both transparent Fixed-Price milestone contracts and flexible Time & Material arrangements.'
  },
  {
    question: 'How fast can you start working on our project?',
    category: 'General',
    answer: 'Once the discovery call is completed and the project scope is signed, our engineering team can kick off development within 3 to 7 business days.'
  },
  {
    question: 'Do you sign an NDA before we share our project details?',
    category: 'Security & IP',
    answer: 'Yes, absolutely. We sign mutual Non-Disclosure Agreements (NDAs) before discussing any proprietary business ideas, source code, or confidential documentation.'
  },
  {
    question: 'Who owns the intellectual property (IP) and source code?',
    category: 'Security & IP',
    answer: 'You retain 100% ownership of all source code, assets, database schemas, and intellectual property developed during the project. Full handover is executed at milestone completion.'
  },
  {
    question: 'Can I hire a dedicated team of engineers on a monthly basis?',
    category: 'Pricing & Engagement',
    answer: 'Yes! Our Dedicated Team model provides senior engineers, QA testers, and project managers working exclusively on your product with guaranteed 4+ hours timezone overlap.'
  },
  {
    question: 'What kind of support do you provide after the website goes live?',
    category: 'Services',
    answer: 'All projects include a complimentary 30-day bug-fix warranty. After that, we offer SLA-backed maintenance retainers starting from $1,500/month for 24/7 monitoring, security updates, and feature enhancements.'
  }
];
