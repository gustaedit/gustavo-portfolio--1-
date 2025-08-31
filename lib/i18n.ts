export type Language = "pt" | "en"

export interface Translations {
  // Navigation
  cybersecurity: string
  webDevelopment: string
  certificates: string
  contact: string
  backToHome: string

  // Hero Section
  heroTitle: string
  heroSubtitle: string
  securityServices: string
  websiteDevelopment: string

  // Cybersecurity Section
  cyberTitle: string
  cyberSubtitle: string
  aboutGustavo: string
  aboutText1: string
  aboutText2: string
  aboutText3: string
  pentest: string
  pentestDesc: string
  socAnalysis: string
  socAnalysisDesc: string
  cloudSecurity: string
  cloudSecurityDesc: string
  lgpdConsulting: string
  lgpdConsultingDesc: string

  // Certificates Section
  certificatesTitle: string
  certificatesSubtitle: string
  completed: string
  inProgress: string
  socAnalystDesc: string
  hackingPentestDesc: string
  santanderBootcampDesc: string
  ciscoEssentialsDesc: string
  fiapCourseDesc: string

  // Contact Section
  contactTitle: string
  contactSubtitle: string
  contactInfo: string
  whatsappDirect: string
  sendMessage: string
  name: string
  email: string
  service: string
  message: string
  sendMessageBtn: string
  yourFullName: string
  yourEmail: string
  describeProject: string

  // Portfolio Page
  portfolioTitle: string
  portfolioSubtitle: string
  seeProjects: string
  requestQuote: string
  projectsDelivered: string
  satisfiedClients: string
  technicalSupport: string
  experience: string
  featuredProjects: string
  featuredProjectsDesc: string
  institutionalSite: string
  landingPage: string
  webApplication: string
  mobileApp: string
  educationalPlatform: string
  saasSystem: string
  viewOnline: string
  developmentProcess: string
  developmentProcessDesc: string
  discoveryPlanning: string
  discoveryPlanningDesc: string
  designPrototyping: string
  designPrototypingDesc: string
  developmentTesting: string
  developmentTestingDesc: string
  deployMaintenance: string
  deployMaintenanceDesc: string
  technologiesTools: string
  technologiesToolsDesc: string
  frontend: string
  backend: string
  devopsCloud: string
  readyToStart: string
  readyToStartDesc: string
  knowOtherServices: string

  // Project Descriptions
  ruiRezendeDesc: string
  teamRamosDesc: string
  dashboardDesc: string
  mobileAppDesc: string
  educationalPortalDesc: string
  saasSystemDesc: string

  // Footer
  allRightsReserved: string

  // Categories
  consulting: string
  application: string
  elearningPlatform: string
  softwareAsService: string
}

export const translations: Record<Language, Translations> = {
  pt: {
    // Navigation
    cybersecurity: "Cibersegurança",
    webDevelopment: "Desenvolvimento de Sites",
    certificates: "Certificados",
    contact: "Contato",
    backToHome: "Voltar ao Início",

    // Hero Section
    heroTitle: "Gustavo Alves de Andrade",
    heroSubtitle: "Especialista em Cibersegurança | Proteção Digital Avançada",
    securityServices: "Serviços de Segurança",
    websiteDevelopment: "Desenvolvimento de Sites",

    // Cybersecurity Section
    cyberTitle: "Protegendo seu mundo digital",
    cyberSubtitle:
      "Especialista em segurança cibernética com formação sólida e experiência prática em proteção de infraestruturas digitais",
    aboutGustavo: "Sobre Gustavo",
    aboutText1:
      "Engenheiro de Software formado pela UCSAL com intercâmbio na prestigiosa Universidade de Coimbra, Portugal.",
    aboutText2:
      "Experiência profissional no TRT 5ª Região e Mobtex Tecnologia, com foco em Cloud Security, Red Team Operations e auditorias de segurança.",
    aboutText3:
      "Especialização em análise SOC, testes de penetração e implementação de políticas de segurança conforme LGPD.",
    pentest: "Pentest",
    pentestDesc: "Testes de penetração completos para identificar vulnerabilidades",
    socAnalysis: "SOC Analysis",
    socAnalysisDesc: "Monitoramento e análise de eventos de segurança 24/7",
    cloudSecurity: "Cloud Security",
    cloudSecurityDesc: "Avaliação e proteção de infraestruturas em nuvem",
    lgpdConsulting: "Consultoria LGPD",
    lgpdConsultingDesc: "Adequação às normas de proteção de dados",

    // Certificates Section
    certificatesTitle: "Certificações e Qualificações",
    certificatesSubtitle: "Formação contínua e certificações reconhecidas no mercado de tecnologia e segurança",
    completed: "Concluído",
    inProgress: "Em andamento",
    socAnalystDesc: "Especialização em análise de eventos de segurança e resposta a incidentes",
    hackingPentestDesc: "Técnicas avançadas de teste de penetração e ethical hacking",
    santanderBootcampDesc: "Programa intensivo de formação em segurança cibernética",
    ciscoEssentialsDesc: "Fundamentos essenciais de segurança em redes e sistemas",
    fiapCourseDesc: "Curso avançado de especialização em segurança cibernética",

    // Contact Section
    contactTitle: "Vamos trabalhar juntos?",
    contactSubtitle: "Entre em contato para discutir seu projeto ou necessidades de segurança",
    contactInfo: "Informações de Contato",
    whatsappDirect: "WhatsApp Direto",
    sendMessage: "Envie uma mensagem",
    name: "Nome",
    email: "Email",
    service: "Serviço",
    message: "Mensagem",
    sendMessageBtn: "Enviar Mensagem",
    yourFullName: "Seu nome completo",
    yourEmail: "seu@email.com",
    describeProject: "Descreva seu projeto ou necessidade...",

    // Portfolio Page
    portfolioTitle: "Desenvolvimento de Sites",
    portfolioSubtitle:
      "Transformando ideias em experiências digitais excepcionais. Sites modernos, responsivos e otimizados para alta performance.",
    seeProjects: "Ver Projetos",
    requestQuote: "Solicitar Orçamento",
    projectsDelivered: "Projetos Entregues",
    satisfiedClients: "Clientes Satisfeitos",
    technicalSupport: "Suporte Técnico",
    experience: "de Experiência",
    featuredProjects: "Projetos em Destaque",
    featuredProjectsDesc:
      "Uma seleção dos meus trabalhos mais recentes, demonstrando versatilidade e qualidade técnica",
    institutionalSite: "Site Institucional",
    landingPage: "Landing Page",
    webApplication: "Aplicação Web",
    mobileApp: "Aplicativo",
    educationalPlatform: "Plataforma EAD",
    saasSystem: "Software como Serviço",
    viewOnline: "Ver Projeto Online",
    developmentProcess: "Processo de Desenvolvimento",
    developmentProcessDesc: "Metodologia comprovada para entregar projetos de alta qualidade no prazo",
    discoveryPlanning: "Descoberta & Planejamento",
    discoveryPlanningDesc: "Análise detalhada dos requisitos, definição de escopo e estratégia do projeto",
    designPrototyping: "Design & Prototipagem",
    designPrototypingDesc: "Criação de wireframes, layouts responsivos e protótipos interativos",
    developmentTesting: "Desenvolvimento & Testes",
    developmentTestingDesc: "Codificação com as melhores práticas, testes automatizados e otimização",
    deployMaintenance: "Deploy & Manutenção",
    deployMaintenanceDesc: "Lançamento em produção, monitoramento e suporte técnico contínuo",
    technologiesTools: "Tecnologias & Ferramentas",
    technologiesToolsDesc: "Stack moderno para desenvolvimento de aplicações web de alta performance",
    frontend: "Frontend",
    backend: "Backend",
    devopsCloud: "DevOps & Cloud",
    readyToStart: "Pronto para começar seu projeto?",
    readyToStartDesc: "Entre em contato e vamos transformar sua ideia em uma solução digital de sucesso",
    knowOtherServices: "Conhecer Outros Serviços",

    // Project Descriptions
    ruiRezendeDesc:
      "Website dedicado à cultura dos vaqueiros e tradições do sertão brasileiro. Design imersivo com foco na experiência do usuário e storytelling visual.",
    teamRamosDesc:
      "Landing page minimalista e impactante para consultoria em fitness. Design moderno com foco em conversão e call-to-action estratégico.",
    dashboardDesc:
      "Painel administrativo com visualização de dados em tempo real, relatórios customizáveis e integração com APIs externas.",
    mobileAppDesc: "Aplicativo multiplataforma com design responsivo, notificações push e sincronização offline.",
    educationalPortalDesc:
      "Sistema completo de ensino online com área do aluno, professor, sistema de avaliações e certificados digitais.",
    saasSystemDesc:
      "Aplicação web completa com múltiplos módulos, sistema de assinaturas e API robusta para integrações.",

    // Footer
    allRightsReserved: "© 2024 Gustavo Alves de Andrade. Todos os direitos reservados.",

    // Categories
    consulting: "Consultoria Fitness",
    application: "Aplicativo",
    elearningPlatform: "Plataforma EAD",
    softwareAsService: "Software como Serviço",
  },
  en: {
    // Navigation
    cybersecurity: "Cybersecurity",
    webDevelopment: "Website Development",
    certificates: "Certificates",
    contact: "Contact",
    backToHome: "Back to Home",

    // Hero Section
    heroTitle: "Gustavo Alves de Andrade",
    heroSubtitle: "Cybersecurity Specialist | Advanced Digital Protection",
    securityServices: "Security Services",
    websiteDevelopment: "Website Development",

    // Cybersecurity Section
    cyberTitle: "Protecting your digital world",
    cyberSubtitle:
      "Cybersecurity specialist with solid training and practical experience in protecting digital infrastructures",
    aboutGustavo: "About Gustavo",
    aboutText1:
      "Software Engineer graduated from UCSAL with an exchange program at the prestigious University of Coimbra, Portugal.",
    aboutText2:
      "Professional experience at TRT 5th Region and Mobtex Technology, focusing on Cloud Security, Red Team Operations and security audits.",
    aboutText3:
      "Specialization in SOC analysis, penetration testing and implementation of security policies according to LGPD.",
    pentest: "Pentest",
    pentestDesc: "Complete penetration testing to identify vulnerabilities",
    socAnalysis: "SOC Analysis",
    socAnalysisDesc: "24/7 security event monitoring and analysis",
    cloudSecurity: "Cloud Security",
    cloudSecurityDesc: "Assessment and protection of cloud infrastructures",
    lgpdConsulting: "LGPD Consulting",
    lgpdConsultingDesc: "Compliance with data protection regulations",

    // Certificates Section
    certificatesTitle: "Certifications and Qualifications",
    certificatesSubtitle: "Continuous training and recognized certifications in the technology and security market",
    completed: "Completed",
    inProgress: "In Progress",
    socAnalystDesc: "Specialization in security event analysis and incident response",
    hackingPentestDesc: "Advanced penetration testing and ethical hacking techniques",
    santanderBootcampDesc: "Intensive cybersecurity training program",
    ciscoEssentialsDesc: "Essential fundamentals of network and system security",
    fiapCourseDesc: "Advanced cybersecurity specialization course",

    // Contact Section
    contactTitle: "Let's work together?",
    contactSubtitle: "Get in touch to discuss your project or security needs",
    contactInfo: "Contact Information",
    whatsappDirect: "Direct WhatsApp",
    sendMessage: "Send a message",
    name: "Name",
    email: "Email",
    service: "Service",
    message: "Message",
    sendMessageBtn: "Send Message",
    yourFullName: "Your full name",
    yourEmail: "your@email.com",
    describeProject: "Describe your project or need...",

    // Portfolio Page
    portfolioTitle: "Website Development",
    portfolioSubtitle:
      "Transforming ideas into exceptional digital experiences. Modern, responsive websites optimized for high performance.",
    seeProjects: "See Projects",
    requestQuote: "Request Quote",
    projectsDelivered: "Projects Delivered",
    satisfiedClients: "Satisfied Clients",
    technicalSupport: "Technical Support",
    experience: "of Experience",
    featuredProjects: "Featured Projects",
    featuredProjectsDesc: "A selection of my most recent work, demonstrating versatility and technical quality",
    institutionalSite: "Institutional Website",
    landingPage: "Landing Page",
    webApplication: "Web Application",
    mobileApp: "Mobile App",
    educationalPlatform: "E-Learning Platform",
    saasSystem: "Software as a Service",
    viewOnline: "View Project Online",
    developmentProcess: "Development Process",
    developmentProcessDesc: "Proven methodology to deliver high-quality projects on time",
    discoveryPlanning: "Discovery & Planning",
    discoveryPlanningDesc: "Detailed requirements analysis, scope definition and project strategy",
    designPrototyping: "Design & Prototyping",
    designPrototypingDesc: "Creation of wireframes, responsive layouts and interactive prototypes",
    developmentTesting: "Development & Testing",
    developmentTestingDesc: "Coding with best practices, automated testing and optimization",
    deployMaintenance: "Deploy & Maintenance",
    deployMaintenanceDesc: "Production launch, monitoring and continuous technical support",
    technologiesTools: "Technologies & Tools",
    technologiesToolsDesc: "Modern stack for developing high-performance web applications",
    frontend: "Frontend",
    backend: "Backend",
    devopsCloud: "DevOps & Cloud",
    readyToStart: "Ready to start your project?",
    readyToStartDesc: "Get in touch and let's transform your idea into a successful digital solution",
    knowOtherServices: "Know Other Services",

    // Project Descriptions
    ruiRezendeDesc:
      "Website dedicated to cowboy culture and traditions of the Brazilian hinterland. Immersive design focused on user experience and visual storytelling.",
    teamRamosDesc:
      "Minimalist and impactful landing page for fitness consulting. Modern design focused on conversion and strategic call-to-action.",
    dashboardDesc:
      "Administrative panel with real-time data visualization, customizable reports and external API integration.",
    mobileAppDesc: "Cross-platform application with responsive design, push notifications and offline synchronization.",
    educationalPortalDesc:
      "Complete online teaching system with student area, teacher, assessment system and digital certificates.",
    saasSystemDesc:
      "Complete web application with multiple modules, subscription system and robust API for integrations.",

    // Footer
    allRightsReserved: "© 2024 Gustavo Alves de Andrade. All rights reserved.",

    // Categories
    consulting: "Fitness Consulting",
    application: "Application",
    elearningPlatform: "E-Learning Platform",
    softwareAsService: "Software as a Service",
  },
}

export function getTranslation(language: Language): Translations {
  return translations[language]
}
