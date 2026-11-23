export const technologiesData = [
  {
    category: 'Frontend',
    items: [
      { name: 'Next.js', level: 'Core Stack', desc: 'React enterprise framework for sub-second page loads, SSG/ISR, and SEO dominance.' },
      { name: 'React', level: 'Core Stack', desc: 'Declarative component-driven UI architecture with concurrent rendering.' },
      { name: 'TypeScript', level: 'Core Stack', desc: 'Type-safe scalable JavaScript codebases with zero runtime type errors.' },
      { name: 'Tailwind CSS', level: 'Core Stack', desc: 'Utility-first design systems with tokenized Light/Dark mode themes.' },
      { name: 'Vue.js / Nuxt', level: 'Advanced Expertise', desc: 'Lightweight reactive frontends and progressive single-page apps.' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 'Core Stack', desc: 'High-throughput asynchronous event-driven REST and WebSocket servers.' },
      { name: 'Python / FastAPI', level: 'Advanced Expertise', desc: 'High-performance AI inference, data science, and asynchronous microservices.' },
      { name: 'Go (Golang)', level: 'Advanced Expertise', desc: 'Ultra-low latency microservices, high concurrency, and distributed streaming.' },
      { name: 'NestJS', level: 'Production Ready', desc: 'Enterprise-grade structured TypeScript backend framework with dependency injection.' }
    ]
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native', level: 'Core Stack', desc: 'Cross-platform native iOS & Android applications with near 60 FPS performance.' },
      { name: 'Flutter', level: 'Core Stack', desc: 'Multi-platform client applications with custom rendering engine and fluid animations.' },
      { name: 'Swift (iOS)', level: 'Production Ready', desc: 'Native Apple ecosystem engineering with SwiftUI, CoreData, and Metal.' },
      { name: 'Kotlin (Android)', level: 'Production Ready', desc: 'Native Android apps using Jetpack Compose and modern reactive architecture.' }
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', level: 'Core Stack', desc: 'Flexible JSON document database with automated Atlas clustering and multi-region failover.' },
      { name: 'PostgreSQL', level: 'Core Stack', desc: 'ACID-compliant relational database with JSONB indexing and high write capacity.' },
      { name: 'Redis', level: 'Core Stack', desc: 'In-memory caching, real-time pub/sub message brokers, and distributed rate limiters.' },
      { name: 'Supabase', level: 'Production Ready', desc: 'Scalable open-source Firebase alternative with built-in row level security.' }
    ]
  },
  {
    category: 'Cloud/DevOps',
    items: [
      { name: 'AWS Cloud', level: 'Core Stack', desc: 'Enterprise infrastructure: ECS, Lambda, S3, RDS, CloudFront, and Route53.' },
      { name: 'Docker & K8s', level: 'Core Stack', desc: 'Reproducible container images and Kubernetes orchestration clusters.' },
      { name: 'Vercel / Cloudflare', level: 'Core Stack', desc: 'Edge serverless execution, global caching, DDoS protection, and instant rollbacks.' },
      { name: 'GitHub Actions', level: 'Core Stack', desc: 'Automated CI/CD pipelines with automated linting, unit tests, and security scans.' }
    ]
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'OpenAI & Claude APIs', level: 'Core Stack', desc: 'State-of-the-art LLM fine-tuning, function calling, and multi-step reasoning agents.' },
      { name: 'LangChain & LlamaIndex', level: 'Advanced Expertise', desc: 'Retrieval Augmented Generation (RAG) pipelines and autonomous agent tool use.' },
      { name: 'PyTorch', level: 'Advanced Expertise', desc: 'Deep learning neural network modeling, training, and production ONNX inference.' },
      { name: 'Pinecone / Vector DB', level: 'Production Ready', desc: 'Sub-millisecond vector indexing for semantic similarity search and AI recall.' }
    ]
  },
  {
    category: 'Game Development',
    items: [
      { name: 'Unity 3D', level: 'Core Stack', desc: 'Cross-platform mobile, desktop, and WebGL game development with C# scripting.' },
      { name: 'Unreal Engine 5', level: 'Advanced Expertise', desc: 'Photorealistic real-time rendering, multiplayer physics, and virtual simulations.' }
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
