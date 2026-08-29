export const profile = {
  name: 'Muhammad Ahmed',
  title: 'AI/ML Engineer & AI Developer',
  specialties: ['Agentic AI', 'Voice Systems', 'LLM Fine-Tuning', 'Workflow Automation'],
  tagline: 'AI/ML Engineer & AI Developer',
  location: 'Islamabad, Pakistan',
  education: 'B.S. Computer Science · Air University · Expected 2028',
  email: 'muhammadahmed8775@gmail.com',
  github: 'https://github.com/muhammadahmed35243',
  linkedin: 'https://linkedin.com/in/muhammad-ahmed-aa179a329',
  summary:
    'I build production AI systems across agentic workflows, voice AI, LLM fine-tuning, and business automation. Currently building AI systems and governance at JETZT.',
}

export const stats = [
  { value: '6', label: 'Production AI systems' },
  { value: '4', label: 'Core specialties' },
]

export const experienceCurrent = [
  {
    role: 'AI Systems Engineer & AI Governance Lead',
    org: 'JETZT Pvt Ltd, Islamabad',
    period: 'Current',
    points: [
      'Building production AI systems including a real-time voice AI phone agent, multi-agent pipelines, and AI-driven automation for real-world business use cases.',
      'Shaping internal AI governance and responsible-AI practices, guiding how AI capabilities are adopted and deployed across the organization.',
    ],
  },
]

export const experiencePrevious = [
  {
    role: 'AI/ML Engineer Intern — AI, Cybersecurity & Disaster Response',
    org: 'Security Experts, Islamabad',
    points: [
      'Led the AI intern cohort building an AI-powered hybrid disaster alert system for Pakistan, covering LoRa mesh networks, SMS Cell Broadcast, and offline AI deployment with differentiated models for Punjab and KPK.',
      'Applied research at the intersection of AI, cybersecurity, and the UN SDGs, under the mentorship of Ammar Jaffri, founder of PISA and Chairman of Pakistan’s National Cyber Security Task Force.',
    ],
  },
]

export const experienceResearch = [
  {
    role: 'AI/ML Research Collaborator — Medical Imaging & Energy Optimization',
    org: 'UK & Middle Eastern Universities',
    points: [
      'Collaborated with PhD and PostDoc researchers on medical imaging systems, including skin cancer detection and autism subtype classification models.',
      'Built an energy consumption optimization system leveraging Agentic AI and ML models.',
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

export type CaseStudy = {
  problem: string
  architecture: string
  contribution: string
  outcome: string
}

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
  image?: string
  diagram?: string
  caseStudy?: CaseStudy
}

export const projects: Project[] = [
  {
    id: 'jetzt-voice-assistant',
    index: '01',
    title: 'JETZT Voice Assistant',
    category: 'Real-Time Voice AI',
    year: '2026',
    description:
      'A production inbound voice AI agent for JETZT: Telnyx media streaming into Deepgram STT, a LangGraph/GPT-4o reasoning layer with live tool access, and Deepgram TTS streamed back to the caller sentence-by-sentence for low-latency conversation.',
    stack: ['Telnyx', 'Deepgram', 'LangGraph', 'GPT-4o', 'Next.js', 'WebSockets', 'Calendly API'],
    link: 'https://github.com/muhammadahmed35243/JETZT-VOICE-ASSISTANT',
    featured: true,
    diagram:
      'Caller\n  |\nTelnyx (media stream)\n  |\nDeepgram STT\n  |\nLangGraph + GPT-4o\n  |-- Knowledge lookup\n  |-- CRM lead lookup / update\n  |-- Calendly book / reschedule / cancel\n  |-- Message taking\n  |\nDeepgram TTS (streamed sentence-by-sentence)\n  |\nCaller',
    caseStudy: {
      problem:
        'JETZT needed a phone agent that could answer inbound calls, hold a natural conversation, and take real actions — book, reschedule, or cancel a Calendly meeting, look up or update a lead, or take a message — without callers noticing a full LLM round-trip on every turn.',
      architecture:
        'Telnyx streams call audio over WebSockets into a Deepgram STT session. Transcribed turns feed a LangGraph state machine wrapping GPT-4o, which holds conversation state and calls tools mid-conversation. Responses are streamed to Deepgram TTS sentence-by-sentence rather than waiting for the full completion, then piped back into the Telnyx media stream.',
      contribution:
        'Designed and built the full pipeline solo — the media-streaming layer, the LangGraph tool-calling agent, and the sentence-level TTS streaming that keeps latency conversational. Diagnosed and fixed a string of production-only failures around Vercel serverless execution limits, WebSocket lifecycle, Deepgram SDK upgrades, recording auth, and STT cold-start.',
      outcome:
        'Runs in production at JETZT handling real inbound calls with conversational, low-latency responses.',
    },
  },
  {
    id: 'multi-agent-task-manager',
    index: '02',
    title: 'Multi-Agent Task Manager',
    category: 'Agent Orchestration',
    year: '2025',
    description:
      'A CrewAI system with hierarchical delegation: a Planner agent breaks a request down and routes work to dedicated Slack, Jira, and Memory agents, backed by Weaviate semantic memory, with retries, approval workflows, and both a FastAPI and Streamlit interface.',
    stack: ['Python', 'CrewAI', 'FastAPI', 'Streamlit', 'Weaviate', 'Slack API', 'Jira API'],
    link: 'https://github.com/muhammadahmed35243/multi-agent-task-manager',
    featured: true,
    diagram:
      'User request\n  |\nPlanner agent\n  |-------------------|-------------------|\nSlack agent         Jira agent          Memory agent\n  |                    |                    |\nSlack API           Jira API           Weaviate (vector DB)\n  |-------------------|-------------------|\n              Final result',
    caseStudy: {
      problem:
        'Turning a single natural-language request — "create a ticket and notify the team" — into coordinated, trackable actions across Slack and Jira, with the system remembering context across requests instead of treating each one in isolation.',
      architecture:
        'A Planner agent decomposes the request and hierarchically delegates to specialized Slack and Jira agents, while a Memory agent reads and writes semantic context to Weaviate for sub-second recall. Background task execution with status tracking, retries, and approval gates sits behind both a FastAPI service and a Streamlit UI.',
      contribution:
        'Designed the hierarchical delegation model and built all four agents (Planner, Slack, Jira, Memory), the background task/retry system, and both interfaces.',
      outcome:
        'Automates multi-step Slack/Jira workflows that previously required manually creating tickets and cross-posting status updates by hand.',
    },
  },
  {
    id: 'rickllm',
    index: '03',
    title: 'RickLLM',
    category: 'Fine-Tuned LLM',
    year: '2025',
    description:
      'Fine-tuned LLaMA 3.1 8B on a Rick and Morty transcript corpus (converted to a ChatML instruction dataset) using QLoRA via Unsloth on a single Colab T4 GPU, then quantized to GGUF for offline inference through Ollama with a Streamlit chat UI.',
    stack: ['LLaMA 3.1 8B', 'QLoRA', 'Unsloth', 'ChatML', 'GGUF', 'Ollama', 'Streamlit'],
    featured: true,
    diagram:
      'Rick and Morty transcripts\n  |\nChatML instruction dataset\n  |\nLLaMA 3.1 8B (4-bit, Colab T4)\n  |\nQLoRA adapters (Unsloth, gradient checkpointing + micro-batching)\n  |\nMerged / exported model\n  |\nGGUF\n  |\nOllama (local inference) -> Streamlit chat UI',
    caseStudy: {
      problem:
        'Explore full fine-tuning mechanics on a single free-tier Colab GPU (16GB T4): taking a base instruction model and giving it a specific, consistent character voice rather than prompting for it, without renting production-grade hardware.',
      architecture:
        'Rick and Morty episode transcripts were converted into a multi-turn ChatML instruction dataset, then used to fine-tune LLaMA 3.1 8B in 4-bit with QLoRA via Unsloth. Gradient checkpointing and micro-batch training kept the run inside the T4’s memory budget; the merged adapters were exported to GGUF for offline inference through Ollama, wrapped in a custom Streamlit chat UI.',
      contribution:
        'Built the dataset pipeline (transcripts to ChatML), the QLoRA/Unsloth training run, the memory-constrained training strategy (4-bit quantization, gradient checkpointing, micro-batching) needed to survive repeated Colab out-of-memory crashes, the GGUF export, and the Streamlit interface.',
      outcome:
        'A locally runnable, offline fine-tuned model with a consistent character voice, chattable through a custom Streamlit UI — distinct from the base model’s generic responses.',
    },
  },
  {
    id: 'custom-cold-calling-dialer',
    index: '04',
    title: 'Custom Cold-Calling Dialer',
    category: 'Sales Engineering Platform',
    year: '2026',
    description:
      'A full outbound-calling product: browser-based WebRTC calling and phone-bridge calling side by side, Telnyx-verified webhooks, call recording to Supabase Storage, CSV/XLS/XLSX lead ingestion, dispositions, callback scheduling, and a role-gated admin dashboard.',
    stack: ['Next.js', 'TypeScript', 'Telnyx', 'WebRTC', 'Supabase', 'Postgres RLS'],
    link: 'https://github.com/muhammadahmed35243/custom-cold-calling-dialer',
    featured: true,
    diagram:
      'Lead list (CSV / XLS / XLSX)\n  |\nLead queue -- dispositions -- callback scheduling\n  |\nPhone bridge   /   Browser WebRTC\n        \\           /\n     Telnyx (server-issued call credentials)\n           |\n  Call recording -> Supabase Storage\n           |\n  Admin dashboard (Postgres RLS-scoped)',
    caseStudy: {
      problem:
        'Outbound sales teams needed one tool that could place calls either through a physical phone bridge or straight from the browser, without exposing calling credentials to client-side JavaScript, while tracking every lead through to a disposition.',
      architecture:
        'Google OAuth gates access; an authenticated API route issues short-lived WebRTC credentials so the browser dialer never holds a long-lived secret. Lead files (CSV/XLS/XLSX) are ingested and paginated server-side to work around Supabase’s row cap on large lists. Calls route through Telnyx with server-side webhook signature verification, recordings land in Supabase Storage, and Postgres row-level security scopes every table to the owning user.',
      contribution:
        'Built the calling core (Telnyx bridge + WebRTC), the credential-issuing endpoint, the paginated lead importer, and the admin dashboard with recordings, dispositions, and callback scheduling.',
      outcome:
        'In active use for real outbound calling workflows, replacing a manual phone-and-spreadsheet process.',
    },
  },
  {
    id: 'ai-recruitment-sourcing',
    index: '05',
    title: 'AI Recruitment Sourcing System',
    category: 'Sequential AI Pipeline',
    year: '2026',
    description:
      'An end-to-end sequential pipeline (deliberately not agentic) that turns a role/location/seniority brief into a scored candidate list: query generation, Google Search + Maps sourcing, GPT-4 extraction, email enrichment, and a dual-format export to Google Sheets or Excel.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'SerpAPI', 'Hunter.io', 'Google Sheets API'],
    link: 'https://github.com/muhammadahmed35243/recruitment-sourcing-system',
  },
  {
    id: 'myvcs',
    index: '06',
    title: 'MyVCS',
    category: 'Systems / C++',
    year: '2025',
    description:
      'A Git-like distributed version control system in C++17 with content-addressable storage (SHA-256), the full Git object model, Myers’ LCS diff, three-way merge, and an LRU-cached ObjectStore with documented sub-microsecond cache-hit lookups.',
    stack: ['C++17', 'CMake', 'OpenSSL', 'Myers’ LCS', 'DAG', 'Merkle Trees'],
    link: 'https://github.com/muhammadahmed35243/MyVCS',
  },
  {
    id: 'rocket-task-ai',
    index: '07',
    title: 'Rocket Task AI',
    category: 'Multi-Agent System',
    year: '2026',
    description:
      'LangGraph multi-agent system integrated with Rocket.Chat via webhooks. Four coordinated agents (Task Detector, Assignment Recommender, Employee Profiler, and Summarizer) with semantic vector search over Qdrant, JWT auth, and full Docker Compose deployment.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Qdrant', 'Docker'],
  },
  {
    id: 'job-finder-ai',
    index: '08',
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
    index: '09',
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
    index: '10',
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
    index: '11',
    title: 'Research-Grade Chatbot',
    category: 'RAG Pipeline',
    year: '2025',
    description:
      'A research-oriented conversational assistant designed for accurate, citation-backed responses over technical literature.',
    stack: ['Python', 'RAG', 'LLM'],
    link: 'https://github.com/muhammadahmed35243/Research-Grade-Chatbot',
  },
]
