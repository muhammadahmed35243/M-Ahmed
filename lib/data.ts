export const profile = {
  name: 'Muhammad Ahmed',
  roles: [
    'AI Developer',
    'AI Policy Maker',
    'LLM Applications',
    'Multi-Agent Systems',
  ],
  tagline: 'AI Developer & AI Policy Maker',
  location: 'Islamabad, Pakistan',
  email: 'muhammadahmed8775@gmail.com',
  phone: '+92-326-9051359',
  github: 'https://github.com/muhammadahmed35243',
  linkedin: 'https://linkedin.com/in/muhammad-ahmed-aa179a329',
  summary:
    'AI/ML Engineer and Computer Science undergraduate at Air University, Islamabad. I build LLM applications, multi-agent systems, RAG pipelines, and AI-driven business automation. Currently AI Developer and AI Policy Maker at JETZT Pvt Ltd, Islamabad.',
}

export const stats = [
  { value: '25+', label: 'AI systems shipped' },
  { value: '17+', label: 'Multi-agent pipelines' },
  { value: '3.34', label: 'CGPA / 4.00' },
  { value: '2028', label: 'B.S. CS, Air University' },
]

export const experienceCurrent = [
  {
    role: 'AI Developer & AI Policy Maker',
    org: 'JETZT Pvt Ltd, Islamabad',
    period: 'Current',
    points: [
      'Developing production AI systems including LLM applications, multi-agent pipelines, and AI-driven automation for real-world business use cases.',
      'Shaping internal AI policy and responsible-AI practices, guiding how AI capabilities are adopted and deployed across the organization.',
    ],
  },
]

export const experiencePast = [
  {
    role: 'AI/ML Engineer Intern',
    org: 'Security Experts, Islamabad',
    points: [
      'Led the AI intern cohort on applied projects at the intersection of AI & Cybersecurity and AI & SDGs, under direct mentorship of Ammar Jaffri, founder of PISA and Chairman of Pakistan\u2019s National Cyber Security Task Force.',
      'Developed technical research on AI-powered hybrid disaster alert systems for Pakistan covering LoRa networks, SMS Cell Broadcast, and offline AI deployment with differentiated models for Punjab and KPK.',
    ],
  },
  {
    role: 'AI/ML Research Collaborator',
    org: 'UK & Middle Eastern Universities',
    points: [
      'Collaborated with PhD and PostDoc researchers on advanced AI/ML projects including medical imaging systems (skin cancer detection, autism subtype classification).',
      'Worked on an energy consumption optimization system leveraging Agentic AI and ML models.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'LLM & Agents',
    items: ['LangGraph', 'LangChain', 'CrewAI', 'RAG Pipelines', 'QLoRA Fine-tuning', 'n8n'],
  },
  {
    title: 'ML & Vision',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'CNNs', 'Computer Vision', 'Neural Networks'],
  },
  {
    title: 'Data & Vectors',
    items: ['Qdrant', 'Weaviate', 'Pinecone', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Engineering',
    items: ['Python', 'FastAPI', 'Docker', 'Celery', 'C++', 'Next.js', 'React', 'Tailwind CSS'],
  },
]

export type Project = {
  id: string
  index: string
  title: string
  category: string
  year: string
  description: string
  stack: string[]
  link?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'rocket-task-ai',
    index: '01',
    title: 'Rocket Task AI',
    category: 'Multi-Agent System',
    year: '2026',
    description:
      'LangGraph multi-agent system integrated with Rocket.Chat via webhooks. Four coordinated agents (Task Detector, Assignment Recommender, Employee Profiler, and Summarizer) with semantic vector search over Qdrant, JWT auth, and full Docker Compose deployment.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Qdrant', 'Docker'],
    featured: true,
  },
  {
    id: 'ai-recruitment-sourcing',
    index: '02',
    title: 'AI Recruitment Sourcing System',
    category: 'Agentic Pipeline',
    year: '2026',
    description:
      'End-to-end 6-node LangGraph pipeline: query generation to web scraping to GPT-4 extraction to email verification to export. Dual-format exports with 0 to 100 relevance scoring and AI-generated candidate summaries.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'SerpAPI', 'Hunter.io', 'Google Sheets API'],
    link: 'https://github.com/muhammadahmed35243/recruitment-sourcing-system',
    featured: true,
  },
  {
    id: 'custom-cold-calling-dialer',
    index: '03',
    title: 'Custom Cold-Calling Dialer',
    category: 'Automation',
    year: '2026',
    description:
      'A custom dialer application streamlining outbound calling workflows with automation-friendly integrations.',
    stack: ['TypeScript', 'Automation'],
    link: 'https://github.com/muhammadahmed35243/custom-cold-calling-dialer',
    featured: true,
  },
  {
    id: 'agentic-ai-assistant',
    index: '04',
    title: 'Agentic AI Assistant',
    category: 'Workflow Orchestration',
    year: '2025',
    description:
      'CrewAI multi-agent system with hierarchical delegation across Planner, Slack, Jira, and Memory agents. Weaviate-powered sub-1-second semantic memory, exposed through dual FastAPI and Streamlit interfaces.',
    stack: ['Python', 'CrewAI', 'FastAPI', 'Streamlit', 'Weaviate', 'Slack API', 'Jira API'],
    link: 'https://github.com/muhammadahmed35243/multi-agent-task-manager',
    featured: true,
  },
  {
    id: 'rickllm',
    index: '05',
    title: 'RickLLM',
    category: 'Fine-Tuned LLM',
    year: '2025',
    description:
      'Fine-tuned LLaMA 3.1 8B on a Rick and Morty dialogue corpus using QLoRA via Unsloth, then quantized to GGUF for fast local inference through Ollama.',
    stack: ['LLaMA 3.1 8B', 'QLoRA', 'Unsloth', 'GGUF', 'Ollama'],
    featured: true,
  },
  {
    id: 'myvcs',
    index: '06',
    title: 'MyVCS',
    category: 'Systems / C++',
    year: '2025',
    description:
      'A Git-like distributed version control system in C++17 with content-addressable storage (SHA-256), the full Git object model, Myers\u2019 LCS diff, three-way merge, and an LRU-cached ObjectStore achieving sub-1\u03bcs lookups.',
    stack: ['C++17', 'CMake', 'OpenSSL', 'Myers\u2019 LCS', 'DAG', 'Merkle Trees'],
    link: 'https://github.com/muhammadahmed35243/MyVCS',
    featured: true,
  },
  {
    id: 'job-finder-ai',
    index: '07',
    title: 'Job Finder AI',
    category: 'AI Application',
    year: '2025',
    description:
      'An AI-assisted job search application that matches candidates to roles using intelligent parsing and relevance ranking.',
    stack: ['JavaScript', 'AI', 'Web'],
    link: 'https://github.com/muhammadahmed35243/Job-Finder-AI',
  },
  {
    id: 'islamic-rag-chatbot',
    index: '08',
    title: 'Islamic RAG Chatbot',
    category: 'RAG Pipeline',
    year: '2025',
    description:
      'A retrieval-augmented chatbot grounded in a curated Islamic knowledge corpus, delivering sourced, context-aware answers.',
    stack: ['Python', 'RAG', 'Vector DB', 'LLM'],
    link: 'https://github.com/muhammadahmed35243/islamic_rag_chatbot',
  },
  {
    id: 'farm-weather-map',
    index: '09',
    title: 'Farm Weather Map',
    category: 'Geospatial App',
    year: '2025',
    description:
      'An interactive weather and mapping tool for agricultural planning, visualizing conditions across farm locations.',
    stack: ['TypeScript', 'Maps', 'Weather API'],
    link: 'https://github.com/muhammadahmed35243/farm-weather-map',
  },
  {
    id: 'research-grade-chatbot',
    index: '10',
    title: 'Research-Grade Chatbot',
    category: 'RAG Pipeline',
    year: '2025',
    description:
      'A research-oriented conversational assistant designed for accurate, citation-backed responses over technical literature.',
    stack: ['Python', 'RAG', 'LLM'],
    link: 'https://github.com/muhammadahmed35243/Research-Grade-Chatbot',
  },
]
