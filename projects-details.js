// Dados técnicos detalhados de cada projeto do portfólio e dos 11 projetos de Cibersegurança (PT-BR, EN, ES)

export const projectTechDetails = {
  35: {
    stack: ["Next.js 15", "React 19", "TypeScript 5.7", "Tailwind CSS", "Firebase", "Zod", "Lucide Icons", "Siemens VisMockup", "GD&T", "Security Audit Scripts"],
    "pt-br": {
      category: "Engenharia & Mobilidade Sustentável",
      architecture: "Arquitetura web corporativa de alta performance baseada em Next.js 15 (App Router) e React 19 com compilação estática otimizada para Core Web Vitals, tipagem estrita com TypeScript 5.7, validação defensiva de esquemas com Zod, integração serverless Google Firebase e auditoria automatizada de segurança DevSecOps.",
      highlights: [
        "Mais de 20 anos de experiência comprovada em engenharia dimensional com certificação oficial em parceria com a Ford Motor Company.",
        "Análise de variação geométrica (DVA) com Siemens VisMockup / VisVSA, definição de RPS (Reference Point System) e tolerâncias GD&T (ASME Y14.5 / ISO 1101).",
        "Validação técnica para novas plataformas de veículos elétricos (EVs), baterias e programas globais como Lincoln, Explorer, Maverick e Bronco.",
        "Especificação de dispositivos de controle (Jigs & Gauges), Controle Estatístico de Processo (SPC) e garantia de conformidade de montagem e acabamento.",
        "Stack moderna com Next.js 15, Tailwind CSS, formulários validados com Zod, backend no Firebase e cabeçalhos de segurança reforçados."
      ]
    },
    "en": {
      category: "Engineering & Sustainable Mobility",
      architecture: "High-performance corporate web architecture built on Next.js 15 (App Router) and React 19 with static optimization for Core Web Vitals, strict TypeScript 5.7 typing, defensive Zod schema validation, serverless Google Firebase integration, and automated DevSecOps security auditing.",
      highlights: [
        "Over 20 years of proven experience in dimensional engineering and official certification in partnership with Ford Motor Company.",
        "Geometric variation analysis (DVA) using Siemens VisMockup / VisVSA, RPS (Reference Point System) definition, and GD&T tolerancing (ASME Y14.5 / ISO 1101).",
        "Technical validation for new EV mobility platforms, battery systems, and global programs including Lincoln, Explorer, Maverick, and Bronco.",
        "Specification of checking fixtures (Jigs & Gauges), Statistical Process Control (SPC), and strict fit-and-finish quality assurance.",
        "Modern stack powered by Next.js 15, Tailwind CSS, Zod validated forms, Firebase cloud backend, and hardened security headers."
      ]
    },
    "es": {
      category: "Ingeniería y Movilidad Sostenible",
      architecture: "Arquitectura web corporativa de alto rendimiento basada en Next.js 15 (App Router) y React 19 con optimización estática para Core Web Vitals, tipado estricto con TypeScript 5.7, validación defensiva de esquemas con Zod, integración serverless con Google Firebase y auditoría de seguridad DevSecOps automatizada.",
      highlights: [
        "Más de 20 años de experiencia comprobada en ingeniería dimensional con certificación oficial en alianza con Ford Motor Company.",
        "Análisis de variación geométrica (DVA) con Siemens VisMockup / VisVSA, definición de RPS (Reference Point System) y tolerancias GD&T (ASME Y14.5 / ISO 1101).",
        "Validación técnica para nuevas plataformas de vehículos eléctricos (EV), baterías y programas globales como Lincoln, Explorer, Maverick y Bronco.",
        "Especificación de dispositivos de control (Jigs & Gauges), Control Estadístico de Procesos (SPC) y aseguramiento estricto de ensamble y acabado.",
        "Stack moderno con Next.js 15, Tailwind CSS, formularios validados con Zod, backend en Firebase y cabeceras de seguridad reforzadas."
      ]
    }
  },
  32: {
    stack: ["Next.js 14", "React 18", "TypeScript 5", "Tailwind CSS", "Firebase Firestore", "Firebase Auth", "Firebase Hosting", "Lucide Icons"],
    "pt-br": {
      category: "Sistema Operacional HoReCa (Europa)",
      architecture: "Aplicação SaaS reativa em tempo real construída com Next.js 14, TypeScript e Firebase Cloud Firestore para operação simultânea entre salão (PDV/Mesas), cozinha (KDS) e retaguarda administrativa.",
      highlights: [
        "Sincronização em tempo real (WebSockets/Firestore Listeners) entre pedidos de mesa, balcão e tela da cozinha (KDS).",
        "Adaptado para o mercado europeu (HoReCa) com suporte a IVA, moedas (€), controle de turnos e gestão de alergênicos.",
        "Controle de estoque automatizado com baixa por ficha técnica, alertas de insumos críticos e relatórios de CMV.",
        "Autenticação baseada em papéis (RBAC) para gerentes, garçons e equipe de cozinha com deploy contínuo no Firebase."
      ]
    },
    "en": {
      category: "HoReCa Operating System (Europe)",
      architecture: "Real-time reactive SaaS application built with Next.js 14, TypeScript, and Firebase Cloud Firestore for simultaneous operation across dining floor (POS/Tables), kitchen (KDS), and back-office management.",
      highlights: [
        "Real-time synchronization (Firestore Listeners) connecting table orders, POS counter, and Kitchen Display System (KDS).",
        "Tailored for the European HoReCa market with VAT support, Euro (€) formatting, shift control, and allergen tracking.",
        "Automated inventory management with recipe-based stock deduction, low-supply alerts, and COGS analytics.",
        "Role-Based Access Control (RBAC) for managers, waiters, and kitchen staff with continuous deployment on Firebase."
      ]
    },
    "es": {
      category: "Sistema Operativo HoReCa (Europa)",
      architecture: "Aplicación SaaS reactiva en tiempo real construida con Next.js 14, TypeScript y Firebase Cloud Firestore para operación simultánea entre salón (TPV/Mesas), cocina (KDS) y panel administrativo.",
      highlights: [
        "Sincronización en tiempo real (Firestore Listeners) entre comandas de salón, mostrador TPV y pantalla de cocina (KDS).",
        "Adaptado al mercado europeo (HoReCa) con soporte de IVA, formato en Euros (€), control de turnos y gestión de alérgenos.",
        "Control de inventario automatizado con descuento por escandallo, alertas de stock crítico e informes financieros.",
        "Control de acceso basado en roles (RBAC) para gerentes, camareros y cocina con despliegue continuo en Firebase."
      ]
    }
  },
  1: {
    stack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Node.js", "PWA / Web App Manifest", "LocalStorage State", "Vercel"],
    "pt-br": {
      category: "Sistema & Gastronomia",
      architecture: "Aplicação web progressiva (PWA) modular com motor de estado reativo em JavaScript puro (`store.js`), painel administrativo dedicado (`admin-dashboard.html`) e servidor Node.js.",
      highlights: [
        "Cardápio digital interativo com carrinho dinâmico, personalização de bebidas e cálculo instantâneo de pedidos.",
        "Painel administrativo com autenticação para gestão de produtos, disponibilidade e acompanhamento de fila.",
        "Sistema de notificações Toast customizado e suporte PWA (`manifest.json`) para instalação em dispositivos móveis."
      ]
    },
    "en": {
      category: "System & Gastronomy",
      architecture: "Modular Progressive Web Application (PWA) with a reactive Vanilla JS state store (`store.js`), dedicated admin dashboard (`admin-dashboard.html`), and Node.js server.",
      highlights: [
        "Interactive digital menu with dynamic cart, beverage customization, and instant order calculation.",
        "Authenticated admin dashboard for product management, availability toggling, and order queue tracking.",
        "Custom Toast notification engine and PWA manifest support for mobile home-screen installation."
      ]
    },
    "es": {
      category: "Sistema y Gastronomía",
      architecture: "Aplicación web progresiva (PWA) modular con motor de estado reactivo en JavaScript (`store.js`), panel de administración dedicado (`admin-dashboard.html`) y servidor Node.js.",
      highlights: [
        "Menú digital interactivo con carrito dinámico, personalización de bebidas y cálculo instantáneo de pedidos.",
        "Panel administrativo con autenticación para gestión de productos, disponibilidad y seguimiento de pedidos.",
        "Sistema de notificaciones Toast personalizado y soporte PWA (`manifest.json`) para dispositivos móviles."
      ]
    }
  },
  2: {
    stack: ["Next.js", "React", "Three.js", "React Three Fiber", "Web-IFC (BIM 3D)", "Firebase", "React-PDF", "Tailwind CSS"],
    "pt-br": {
      category: "Portal Corporativo & Engenharia BIM 3D",
      architecture: "Plataforma corporativa para construção civil construída com Next.js e renderização 3D WebGL (Three.js / React Three Fiber / Web-IFC) integrada ao Firebase.",
      highlights: [
        "Visualização interativa de projetos e modelos tridimensionais (BIM/IFC) diretamente no navegador via Three.js.",
        "Geração automatizada de relatórios e propostas técnicas em PDF utilizando `@react-pdf/renderer`.",
        "Área exclusiva do cliente com acompanhamento de cronograma de obras e documentos em tempo real no Firebase."
      ]
    },
    "en": {
      category: "Corporate Portal & 3D BIM Engineering",
      architecture: "Civil construction corporate platform built with Next.js and WebGL 3D rendering (Three.js / React Three Fiber / Web-IFC) integrated with Firebase.",
      highlights: [
        "Interactive browser-based 3D architectural and BIM/IFC model visualization powered by Three.js.",
        "Automated generation of technical proposals and project reports in PDF via `@react-pdf/renderer`.",
        "Exclusive client portal featuring real-time construction milestone tracking and document management on Firebase."
      ]
    },
    "es": {
      category: "Portal Corporativo e Ingeniería BIM 3D",
      architecture: "Plataforma corporativa para construcción civil desarrollada con Next.js y renderizado 3D WebGL (Three.js / React Three Fiber / Web-IFC) integrada con Firebase.",
      highlights: [
        "Visualización interactiva de proyectos y modelos tridimensionales (BIM/IFC) directamente en el navegador con Three.js.",
        "Generación automatizada de informes y propuestas técnicas en PDF utilizando `@react-pdf/renderer`.",
        "Área exclusiva para clientes con seguimiento de obras y documentación en tiempo real mediante Firebase."
      ]
    }
  },
  3: {
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Recharts", "date-fns", "Lucide Icons", "Vercel"],
    "pt-br": {
      category: "HealthTech & Gestão Hospitalar",
      architecture: "Sistema clínico em Next.js com visualização analítica de dados médicos via Recharts e transições fluidas de interface com Framer Motion.",
      highlights: [
        "Dashboard de acompanhamento de alta hospitalar (Step-to-Discharge) com indicadores de evolução clínica.",
        "Gráficos interativos em Recharts para monitorar sinais vitais, adesão ao tratamento e tempo médio de internação.",
        "Controle temporal de protocolos médicos e agendamentos pós-alta utilizando `date-fns`."
      ]
    },
    "en": {
      category: "HealthTech & Hospital Management",
      architecture: "Clinical web system built on Next.js featuring medical data visualization with Recharts and smooth UI transitions via Framer Motion.",
      highlights: [
        "Step-to-Discharge patient monitoring dashboard tracking clinical recovery milestones.",
        "Interactive Recharts analytics for vital signs, treatment adherence, and average length of stay.",
        "Temporal scheduling of medical protocols and post-discharge follow-ups using `date-fns`."
      ]
    },
    "es": {
      category: "HealthTech y Gestión Hospitalaria",
      architecture: "Sistema clínico en Next.js con visualización analítica de datos médicos mediante Recharts y transiciones fluidas con Framer Motion.",
      highlights: [
        "Panel de seguimiento de alta hospitalaria (Step-to-Discharge) con indicadores de evolución clínica.",
        "Gráficos interactivos en Recharts para monitorear signos vitales, adherencia al tratamiento y estancia media.",
        "Gestión temporal de protocolos médicos y seguimiento post-alta utilizando `date-fns`."
      ]
    }
  },
  4: {
    stack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Web Audio API", "Custom Game Engine", "Responsive Design", "Vercel"],
    "pt-br": {
      category: "Web Game & Gamificação",
      architecture: "Motor de jogo web reativo em JavaScript modular (`game.js`, `counter.js`, `data.js`) com efeitos sonoros integrados e temporizador de alta precisão.",
      highlights: [
        "Gerenciamento de rodadas, pontuação de equipes, sorteio de cartas sem repetição e cronômetro regressivo.",
        "Feedback auditivo em tempo real para início de partida e alerta de fim de tempo.",
        "Interface mobile-first otimizada para partidas presenciais ou remotas sem latência."
      ]
    },
    "en": {
      category: "Web Game & Gamification",
      architecture: "Reactive web game engine built with modular JavaScript (`game.js`, `counter.js`, `data.js`) featuring integrated sound effects and high-precision timers.",
      highlights: [
        "Round management, team scoring, non-repeating card deck shuffling, and countdown timer mechanics.",
        "Real-time audio feedback for match start and time-out alerts.",
        "Mobile-first UI optimized for zero-latency in-person or remote party gameplay."
      ]
    },
    "es": {
      category: "Juego Web y Gamificación",
      architecture: "Motor de juego web reactivo en JavaScript modular (`game.js`, `counter.js`, `data.js`) con efectos de sonido integrados y temporizador de precisión.",
      highlights: [
        "Gestión de rondas, puntuación de equipos, barajado de cartas sin repetición y cronómetro regresivo.",
        "Retroalimentación auditiva en tiempo real para inicio de partida y alertas de tiempo.",
        "Interfaz mobile-first optimizada para partidas presenciales o remotas sin latencia."
      ]
    }
  },
  5: {
    stack: ["JavaScript (ES6+)", "HTML5", "CSS3", "Fact-Checking Logic Engine", "DOM Sanitization", "Vercel"],
    "pt-br": {
      category: "Verificação de Dados & EdTech",
      architecture: "Aplicação interativa baseada em base estruturada de fatos (`gameFacts.js`) e motor lógico de verificação e pontuação.",
      highlights: [
        "Análise interativa de afirmações e notícias com explicação fundamentada sobre cada veredito (Fato vs Fake).",
        "Sistema de streak, pontuação dinâmica e feedback visual imediato para conscientização contra desinformação.",
        "Arquitetura leve com carregamento instantâneo e foco em acessibilidade."
      ]
    },
    "en": {
      category: "Fact-Checking & EdTech",
      architecture: "Interactive web application powered by a structured fact database (`gameFacts.js`) and a logical verification & scoring engine.",
      highlights: [
        "Interactive analysis of claims and news with evidence-backed explanations for every verdict (Fact vs. Fake).",
        "Dynamic streak tracking, scoring system, and instant visual feedback to promote media literacy.",
        "Lightweight architecture with near-instant load times and accessibility focus."
      ]
    },
    "es": {
      category: "Verificación de Datos y EdTech",
      architecture: "Aplicación interactiva basada en una base estructurada de hechos (`gameFacts.js`) y un motor lógico de verificación y puntuación.",
      highlights: [
        "Análisis interactivo de noticias con explicaciones fundamentadas para cada veredicto (Hecho vs. Bulos).",
        "Sistema de rachas, puntuación dinámica y retroalimentación visual inmediata contra la desinformación.",
        "Arquitectura ligera con carga instantánea y enfoque en accesibilidad."
      ]
    }
  },
  6: {
    stack: ["Next.js", "React", "CSS Modules / Tailwind", "WhatsApp Business API Deep-Link", "SEO Optimization", "Vercel"],
    "pt-br": {
      category: "E-commerce & Catálogo Digital",
      architecture: "Vitrine digital em Next.js e React com renderização otimizada para SEO, filtros de catálogo e checkout conversacional via WhatsApp.",
      highlights: [
        "Catálogo responsivo de bordados personalizados com visualização de detalhes e variações de peças.",
        "Geração automática de pedido formatado diretamente para o WhatsApp da loja com itens selecionados.",
        "Otimização de imagens e Core Web Vitals para carregamento rápido em redes móveis."
      ]
    },
    "en": {
      category: "E-commerce & Digital Catalog",
      architecture: "Digital storefront built with Next.js and React featuring SEO-optimized rendering, catalog filtering, and conversational WhatsApp checkout.",
      highlights: [
        "Responsive custom embroidery catalog with detailed product views and item variations.",
        "Automated pre-formatted order message generation sent directly to the store's WhatsApp.",
        "Image optimization and high Core Web Vitals scores for fast loading on mobile networks."
      ]
    },
    "es": {
      category: "E-commerce y Catálogo Digital",
      architecture: "Escaparate digital en Next.js y React con renderizado optimizado para SEO, filtros de catálogo y checkout conversacional vía WhatsApp.",
      highlights: [
        "Catálogo responsivo de bordados personalizados con vista detallada y variaciones de productos.",
        "Generación automática de pedidos formateados enviados directamente al WhatsApp de la tienda.",
        "Optimización de imágenes y Core Web Vitals para carga rápida en redes móviles."
      ]
    }
  },
  7: {
    stack: ["React", "Zustand", "Firebase", "Framer Motion", "Radix UI", "Tailwind CSS", "React Router", "Resend"],
    "pt-br": {
      category: "E-commerce Full-Featured",
      architecture: "SPA de e-commerce construída com React, gerenciamento de estado global com Zustand, componentes acessíveis Radix UI e backend Firebase.",
      highlights: [
        "Carrinho de compras persistente e reativo gerenciado via Zustand com cálculo de frete e descontos.",
        "Catálogo dinâmico sincronizado com Firebase e animações de transição de página com Framer Motion.",
        "Notificações transacionais de pedidos integradas via API Resend."
      ]
    },
    "en": {
      category: "Full-Featured E-commerce",
      architecture: "E-commerce SPA built with React, Zustand global state management, accessible Radix UI primitives, and Firebase backend.",
      highlights: [
        "Persistent reactive shopping cart managed by Zustand with shipping and discount calculations.",
        "Dynamic product catalog synced with Firebase and smooth page transitions via Framer Motion.",
        "Transactional order email notifications integrated through Resend API."
      ]
    },
    "es": {
      category: "E-commerce Completo",
      architecture: "SPA de comercio electrónico construida con React, gestión de estado global con Zustand, componentes Radix UI y backend en Firebase.",
      highlights: [
        "Carrito de compras persistente y reactivo gestionado con Zustand con cálculo de envío y descuentos.",
        "Catálogo dinámico sincronizado con Firebase y animaciones fluidas mediante Framer Motion.",
        "Notificaciones transaccionales de pedidos integradas a través de la API Resend."
      ]
    }
  },
  8: {
    stack: ["React", "Firebase", "Framer Motion", "Recharts", "QRCode.react", "html2pdf.js", "Tailwind CSS"],
    "pt-br": {
      category: "Gestão Institucional & Eventos",
      architecture: "Plataforma institucional e de gestão de eventos em React e Firebase, com emissão de credenciais QR Code e relatórios em PDF.",
      highlights: [
        "Galeria dinâmica de eventos, pacotes e inscrições sincronizadas em tempo real com Firebase.",
        "Geração de ingressos e credenciais com QR Code (`qrcode.react`) e exportação de comprovantes via `html2pdf.js`.",
        "Painel com gráficos Recharts para acompanhamento de inscritos e financeiro dos eventos."
      ]
    },
    "en": {
      category: "Institutional & Event Management",
      architecture: "Institutional and event management platform built with React and Firebase, featuring QR Code credential issuance and PDF reporting.",
      highlights: [
        "Dynamic event showcase, packages, and registrations synchronized in real time with Firebase.",
        "Ticket and credential generation with QR Codes (`qrcode.react`) and PDF receipt export via `html2pdf.js`.",
        "Analytics dashboard powered by Recharts for attendee tracking and event financials."
      ]
    },
    "es": {
      category: "Gestión Institucional y Eventos",
      architecture: "Plataforma institucional y de gestión de eventos en React y Firebase, con emisión de credenciales QR Code e informes en PDF.",
      highlights: [
        "Galería dinámica de eventos, paquetes e inscripciones sincronizadas en tiempo real con Firebase.",
        "Generación de entradas y credenciales con código QR (`qrcode.react`) y exportación PDF con `html2pdf.js`.",
        "Panel con gráficos Recharts para el seguimiento de inscritos y finanzas de los eventos."
      ]
    }
  },
  9: {
    stack: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST API / JSON Data Structures", "LocalStorage Cart", "Vercel"],
    "pt-br": {
      category: "E-commerce & Arquitetura de Dados",
      architecture: "Aplicação web inspirada na experiência do Mercado Livre, desenvolvida como projeto de arquitetura de front-end e manipulação eficiente de estruturas de dados em JavaScript.",
      highlights: [
        "Busca instantânea com filtragem multicritério, ordenação por preço/relevância e paginação no cliente.",
        "Simulação completa de fluxo de compra: vitrine, modal de produto, carrinho persistente e resumo de checkout.",
        "Interface responsiva focada em usabilidade (UX) e performance de renderização no DOM."
      ]
    },
    "en": {
      category: "E-commerce & Data Structures",
      architecture: "Web application inspired by the Mercado Libre experience, engineered to demonstrate frontend architecture and efficient JavaScript data structure manipulation.",
      highlights: [
        "Instant search with multi-criteria filtering, price/relevance sorting, and client-side pagination.",
        "End-to-end shopping flow simulation: product grid, detail view, persistent cart, and checkout summary.",
        "Responsive UI focused on usability (UX) and fast DOM rendering performance."
      ]
    },
    "es": {
      category: "E-commerce y Estructuras de Datos",
      architecture: "Aplicación web inspirada en la experiencia de Mercado Libre, desarrollada para demostrar arquitectura frontend y manipulación eficiente de estructuras de datos en JavaScript.",
      highlights: [
        "Búsqueda instantánea con filtrado multicriterio, ordenación por precio/relevancia y paginación.",
        "Simulación completa del flujo de compra: escaparate, detalle de producto, carrito persistente y checkout.",
        "Interfaz responsiva enfocada en usabilidad (UX) y alto rendimiento en el DOM."
      ]
    }
  },
  10: {
    stack: ["Python", "Streamlit", "Pandas", "RegEx (Expressões Regulares)", "Data Analytics", "Streamlit Cloud"],
    "pt-br": {
      category: "Automação & Data Science (Python)",
      architecture: "Aplicação analítica em Python e Streamlit para processamento de linguagem natural/logs de conversas corporativas e cálculo automatizado de jornada e horas extras.",
      highlights: [
        "Parser inteligente com Expressões Regulares (RegEx) para extrair timestamps, turnos e eventos de arquivos de texto/chat.",
        "Processamento tabular com Pandas para consolidar horas trabalhadas, intervalos, adicionais noturnos e horas extras.",
        "Dashboard interativo no Streamlit com upload de arquivos, tabelas filtráveis e exportação de relatórios."
      ]
    },
    "en": {
      category: "Automation & Data Science (Python)",
      architecture: "Analytical web app built with Python and Streamlit for parsing corporate conversation logs and automating workday and overtime calculations.",
      highlights: [
        "Intelligent RegEx parser extracting timestamps, shifts, and work events from exported chat/log files.",
        "Tabular data processing with Pandas to consolidate worked hours, breaks, night shifts, and overtime.",
        "Interactive Streamlit dashboard featuring file upload, filterable data tables, and report exporting."
      ]
    },
    "es": {
      category: "Automatización y Ciencia de Datos (Python)",
      architecture: "Aplicación analítica en Python y Streamlit para el procesamiento de registros de conversaciones y cálculo automatizado de jornada laboral y horas extras.",
      highlights: [
        "Parser inteligente con Expresiones Regulares (RegEx) para extraer marcas de tiempo, turnos y eventos.",
        "Procesamiento tabular con Pandas para consolidar horas trabajadas, descansos y horas extraordinarias.",
        "Panel interactivo en Streamlit con carga de archivos, tablas filtrables y exportación de informes."
      ]
    }
  },
  11: {
    stack: ["JavaScript (ES6+)", "HTML5", "CSS3", "Financial Modeling Algorithms", "Interactive Charts", "Vercel"],
    "pt-br": {
      category: "FinTech & Calculadora Estratégica",
      architecture: "Motor de simulação financeira client-side em JavaScript para análise comparativa entre acúmulo de milhas aéreas, cashback e rendimento em renda fixa (CDI/Selic).",
      highlights: [
        "Algoritmo de equivalência financeira que considera cotação do dólar, pontuação por dólar, bonificações de transferência (80%-100%) e preço do milheiro.",
        "Comparação instantânea de retorno líquido em R$ entre vender milhas, usar cashback ou investir com juros compostos.",
        "Interface intuitiva com sliders dinâmicos e recomendação automática da opção mais lucrativa."
      ]
    },
    "en": {
      category: "FinTech & Strategic Calculator",
      architecture: "Client-side financial simulation engine in JavaScript comparing airline miles accumulation, cashback, and fixed-income investment yields.",
      highlights: [
        "Financial equivalence algorithm factoring in USD exchange rate, points per dollar, transfer bonuses (80%-100%), and CPM (cost per mille).",
        "Instant net return comparison between selling miles, taking direct cashback, or compounding investments.",
        "Intuitive UI with dynamic sliders and automated recommendation of the most profitable strategy."
      ]
    },
    "es": {
      category: "FinTech y Calculadora Estratégica",
      architecture: "Motor de simulación financiera en JavaScript para el análisis comparativo entre acumulación de millas aéreas, cashback y rendimiento de inversiones.",
      highlights: [
        "Algoritmo de equivalencia financiera que integra tipo de cambio, puntos por dólar, bonos de transferencia y valor por millar.",
        "Comparación instantánea de rentabilidad neta entre millas, cashback directo e interés compuesto.",
        "Interfaz intuitiva con controles dinámicos y recomendación automática de la opción más rentable."
      ]
    }
  },
  12: {
    stack: ["Node.js", "Neon Serverless Postgres", "JavaScript (ES6+)", "Vercel Serverless Functions", "Security Audit Lab", "SQL"],
    "pt-br": {
      category: "CRM & Laboratório de Cibersegurança",
      architecture: "Sistema Full Stack de gestão de leads (CRM) integrado ao banco de dados PostgreSQL Serverless (Neon) com módulo dedicado de monitoramento e auditoria de segurança.",
      highlights: [
        "Persistência relacional em nuvem com `@neondatabase/serverless` e proteção contra SQL Injection via queries parametrizadas.",
        "Pipeline de captura, qualificação e funil de vendas para leads corporativos.",
        "Laboratório integrado de segurança cibernética para inspeção de payloads, rate-limiting e cabeçalhos defensivos."
      ]
    },
    "en": {
      category: "CRM & Cybersecurity Lab",
      architecture: "Full Stack Lead Management CRM integrated with Neon Serverless PostgreSQL and a dedicated security monitoring and auditing module.",
      highlights: [
        "Cloud relational persistence using `@neondatabase/serverless` with parameterized queries preventing SQL Injection.",
        "Lead capture, qualification, and sales pipeline management for corporate workflows.",
        "Integrated cybersecurity lab for payload inspection, rate-limiting verification, and defensive headers."
      ]
    },
    "es": {
      category: "CRM y Laboratorio de Ciberseguridad",
      architecture: "Sistema Full Stack de gestión de leads (CRM) integrado con PostgreSQL Serverless (Neon) y módulo dedicado de monitoreo y auditoría de seguridad.",
      highlights: [
        "Persistencia relacional en la nube con `@neondatabase/serverless` y consultas parametrizadas contra SQL Injection.",
        "Flujo de captura, calificación y embudo de ventas para leads corporativos.",
        "Laboratorio integrado de ciberseguridad para inspección de payloads, rate-limiting y cabeceras defensivas."
      ]
    }
  },
  13: {
    stack: ["JavaScript (ES6+)", "HTML5", "CSS3", "PIX Cashback Engine", "Responsive UI", "Vercel"],
    "pt-br": {
      category: "FinTech & Varejo (Cashback)",
      architecture: "Plataforma web voltada à conversão e fidelização no varejo, com simulador de cashback via PIX e vitrine de lojas parceiras.",
      highlights: [
        "Simulador interativo de retorno financeiro (troco/cashback via PIX) por categoria de compra.",
        "Catálogo de marcas parceiras com regras de comissionamento e fluxo rápido de ativação.",
        "Design focado em alta conversão (CRO), velocidade de carregamento e clareza visual."
      ]
    },
    "en": {
      category: "FinTech & Retail (Cashback)",
      architecture: "Retail conversion and loyalty web platform featuring a real-time PIX cashback simulator and partner store directory.",
      highlights: [
        "Interactive financial return (PIX cashback) simulator by shopping category.",
        "Partner brand showcase with commission rules and fast activation workflow.",
        "Conversion-Rate-Optimized (CRO) design with ultra-fast loading and visual clarity."
      ]
    },
    "es": {
      category: "FinTech y Retail (Cashback)",
      architecture: "Plataforma web orientada a la conversión y fidelización comercial, con simulador de cashback vía PIX y directorio de tiendas asociadas.",
      highlights: [
        "Simulador interactivo de retorno financiero (cashback vía PIX) por categoría de compra.",
        "Catálogo de marcas asociadas con reglas de comisión y flujo rápido de activación.",
        "Diseño optimizado para alta conversión (CRO), velocidad de carga y claridad visual."
      ]
    }
  },
  14: {
    stack: ["Next.js", "React", "Firebase & Firebase Admin", "Mercado Pago SDK", "Recharts", "Resend", "Markdown-it", "Tailwind CSS"],
    "pt-br": {
      category: "HealthTech & Plataforma Clínica",
      architecture: "Plataforma completa para clínica de psicologia construída com Next.js, Firebase Admin, integração de pagamentos Mercado Pago e CMS de artigos em Markdown.",
      highlights: [
        "Agendamento online de sessões terapêuticas com checkout transparente via SDK oficial do Mercado Pago (`@mercadopago/sdk-react`).",
        "Painel administrativo para gestão de pacientes, horários, financeiro (Recharts) e disparo de e-mails com Resend.",
        "Blog psicoeducativo integrado com renderização Markdown (`markdown-it`) otimizado para SEO local e orgânico."
      ]
    },
    "en": {
      category: "HealthTech & Clinical Platform",
      architecture: "Comprehensive clinical psychology platform built with Next.js, Firebase Admin, Mercado Pago payment integration, and a Markdown article CMS.",
      highlights: [
        "Online therapy session scheduling with seamless checkout via the official Mercado Pago SDK (`@mercadopago/sdk-react`).",
        "Admin dashboard for managing patients, schedules, financial analytics (Recharts), and transactional emails via Resend.",
        "Integrated psychoeducational blog with Markdown rendering (`markdown-it`) optimized for organic SEO."
      ]
    },
    "es": {
      category: "HealthTech y Plataforma Clínica",
      architecture: "Plataforma integral para clínica de psicología desarrollada con Next.js, Firebase Admin, pasarela Mercado Pago y CMS de artículos en Markdown.",
      highlights: [
        "Reserva online de sesiones terapéuticas con pago integrado mediante el SDK oficial de Mercado Pago (`@mercadopago/sdk-react`).",
        "Panel administrativo para gestión de pacientes, horarios, analítica financiera (Recharts) y correos con Resend.",
        "Blog psicoeducativo integrado con renderizado Markdown (`markdown-it`) optimizado para SEO orgánico."
      ]
    }
  },
  15: {
    stack: ["HTML5 Audio API", "CSS3", "JavaScript (ES6+)", "ElevenLabs AI Voice Synthesis", "Responsive UI", "Vercel"],
    "pt-br": {
      category: "Mídia Digital & Cultura (Podcast)",
      architecture: "Portal cultural imersivo com player de áudio customizado em HTML5/JS e integração de narrações sintetizadas com IA (ElevenLabs).",
      highlights: [
        "Player de áudio dedicado com controle de reprodução, progresso, seleção de episódios e roteiros integrados.",
        "Produção de áudio aprimorada com síntese neural de voz (ElevenLabs) para dramaturgia e história do teatro.",
        "Design editorial temático inspirado na estética clássica dos palcos e bastidores."
      ]
    },
    "en": {
      category: "Digital Media & Culture (Podcast)",
      architecture: "Immersive cultural portal featuring a custom HTML5/JS audio player and AI-synthesized voice narrations (ElevenLabs).",
      highlights: [
        "Custom audio player with playback controls, progress scrubbing, episode selection, and integrated scripts.",
        "Audio production enhanced with neural voice synthesis (ElevenLabs) exploring theater history and dramaturgy.",
        "Thematic editorial design inspired by classic stage and backstage aesthetics."
      ]
    },
    "es": {
      category: "Medios Digitales y Cultura (Podcast)",
      architecture: "Portal cultural inmersivo con reproductor de audio personalizado en HTML5/JS y narraciones sintetizadas con IA (ElevenLabs).",
      highlights: [
        "Reproductor de audio dedicado con control de reproducción, progreso, selección de episodios y guiones.",
        "Producción sonora enriquecida con síntesis neuronal de voz (ElevenLabs) sobre la historia del teatro.",
        "Diseño editorial temático inspirado en la estética clásica de los escenarios."
      ]
    }
  },
  16: {
    stack: ["React", "Zustand", "Firebase", "Framer Motion", "Radix UI", "Tailwind CSS", "Vercel"],
    "pt-br": {
      category: "E-commerce de Dermocosméticos",
      architecture: "Loja virtual moderna em React com gerenciamento de estado Zustand, animações Framer Motion e catálogo em nuvem no Firebase.",
      highlights: [
        "Vitrine segmentada por linhas de tratamento capilar, facial e maquiagem com busca instantânea.",
        "Experiência de compra fluida com drawer lateral de carrinho e persistência local/cloud.",
        "Componentes acessíveis baseados em Radix UI com estilização customizada em Tailwind CSS."
      ]
    },
    "en": {
      category: "Dermocosmetics E-commerce",
      architecture: "Modern online store built in React with Zustand state management, Framer Motion animations, and a cloud catalog on Firebase.",
      highlights: [
        "Segmented storefront for hair, skin, and makeup product lines with instant search filtering.",
        "Seamless shopping experience featuring a slide-over cart drawer and state persistence.",
        "Accessible UI primitives built on Radix UI and styled with Tailwind CSS."
      ]
    },
    "es": {
      category: "E-commerce de Dermocosméticos",
      architecture: "Tienda online moderna en React con gestión de estado Zustand, animaciones Framer Motion y catálogo en la nube con Firebase.",
      highlights: [
        "Escaparate segmentado por líneas de cuidado capilar, facial y maquillaje con búsqueda instantánea.",
        "Experiencia de compra fluida con carrito lateral desplegable y persistencia de estado.",
        "Componentes accesibles basados en Radix UI con diseño personalizado en Tailwind CSS."
      ]
    }
  },
  17: {
    stack: ["HTML5 Semântico", "CSS3", "Responsive Layout", "Google Maps Embed", "WhatsApp CTA", "Vercel"],
    "pt-br": {
      category: "Landing Page Institucional",
      architecture: "Marco inicial da jornada no desenvolvimento web: landing page estática construída com HTML5 semântico e CSS3 puro.",
      highlights: [
        "Estruturação semântica de seções para apresentação de serviços, tabela de preços e equipe da barbearia.",
        "Layout responsivo adaptável a dispositivos móveis e desktops sem dependência de frameworks externos.",
        "Botões de conversão direta para agendamento via WhatsApp e localização."
      ]
    },
    "en": {
      category: "Corporate Landing Page",
      architecture: "Milestone first web development project: static landing page built from scratch using semantic HTML5 and pure CSS3.",
      highlights: [
        "Semantic sectioning presenting barbershop services, pricing tables, and team members.",
        "Responsive layout adapting cleanly across mobile and desktop screens without external frameworks.",
        "Direct conversion CTAs for WhatsApp appointment booking and location."
      ]
    },
    "es": {
      category: "Landing Page Institucional",
      architecture: "Hito inicial en el desarrollo web: landing page estática construida desde cero con HTML5 semántico y CSS3 puro.",
      highlights: [
        "Estructura semántica de secciones para servicios, tabla de precios y equipo de la barbería.",
        "Diseño responsivo adaptable a móviles y escritorio sin depender de frameworks externos.",
        "Botones de conversión directa para reserva de citas vía WhatsApp."
      ]
    }
  },
  18: {
    stack: ["Next.js", "React", "Supabase (SSR & Auth)", "Google Gemini AI", "pdf-lib", "QRCode.react", "Recharts", "Resend", "Tailwind CSS"],
    "pt-br": {
      category: "HealthTech & Medicina Diagnóstica",
      architecture: "Ecossistema laboratorial completo em Next.js com banco de dados relacional e autenticação no Supabase (`@supabase/ssr`), IA generativa Google Gemini e geração de laudos PDF.",
      highlights: [
        "Emissão e validação de laudos laboratoriais em PDF (`pdf-lib`) com selo de autenticidade via QR Code (`qrcode.react`).",
        "Assistente inteligente integrado com `@google/generative-ai` (Gemini) para orientação de preparo de exames e atendimento.",
        "Portal do paciente e painel administrativo com gráficos Recharts, upload de arquivos (`react-dropzone`) e notificações via Resend/Nodemailer."
      ]
    },
    "en": {
      category: "HealthTech & Diagnostic Medicine",
      architecture: "Full diagnostic laboratory ecosystem in Next.js backed by Supabase (`@supabase/ssr` & Auth), Google Gemini Generative AI, and programmatic PDF report generation.",
      highlights: [
        "Generation and verification of laboratory PDF reports (`pdf-lib`) with QR Code authenticity seals (`qrcode.react`).",
        "AI assistant powered by `@google/generative-ai` (Gemini) for exam preparation guidance and patient support.",
        "Patient portal and admin dashboard with Recharts analytics, file uploads (`react-dropzone`), and Resend/Nodemailer alerts."
      ]
    },
    "es": {
      category: "HealthTech y Medicina Diagnóstica",
      architecture: "Ecosistema completo de laboratorio clínico en Next.js con base de datos y autenticación en Supabase (`@supabase/ssr`), IA generativa Google Gemini y generación de informes PDF.",
      highlights: [
        "Emisión y validación de resultados de laboratorio en PDF (`pdf-lib`) con sello de autenticidad QR (`qrcode.react`).",
        "Asistente inteligente integrado con `@google/generative-ai` (Gemini) para orientación sobre preparación de exámenes.",
        "Portal del paciente y panel administrativo con gráficos Recharts, carga de archivos (`react-dropzone`) y alertas vía Resend."
      ]
    }
  },
  19: {
    stack: ["React", "Google Maps API (@react-google-maps/api)", "Firebase Realtime/Firestore", "Framer Motion", "Tailwind CSS", "Lucide Icons"],
    "pt-br": {
      category: "Smart Cities & Monitoramento em Tempo Real",
      architecture: "Plataforma georreferenciada em React integrada à Google Maps API e ao Firebase para telemetria e visualização de lotação de estabelecimentos em tempo real.",
      highlights: [
        "Mapa interativo customizado com `@react-google-maps/api` exibindo indicadores de ocupação e zonas de calor.",
        "Atualização instantânea de densidade de público via Firebase para auxiliar na tomada de decisão e segurança em eventos.",
        "Interface fluida com animações Framer Motion, filtros por categoria de local e alertas de capacidade máxima."
      ]
    },
    "en": {
      category: "Smart Cities & Real-Time Monitoring",
      architecture: "Georeferenced React platform integrated with Google Maps API and Firebase for real-time crowd telemetry and venue occupancy visualization.",
      highlights: [
        "Custom interactive map built with `@react-google-maps/api` displaying live occupancy badges and heat zones.",
        "Instant crowd density updates powered by Firebase to support event safety and venue decision-making.",
        "Fluid UI with Framer Motion animations, venue category filtering, and capacity threshold alerts."
      ]
    },
    "es": {
      category: "Smart Cities y Monitoreo en Tiempo Real",
      architecture: "Plataforma georreferenciada en React integrada con Google Maps API y Firebase para telemetría y visualización de aforo en tiempo real.",
      highlights: [
        "Mapa interactivo personalizado con `@react-google-maps/api` que muestra indicadores de ocupación en vivo.",
        "Actualización instantánea de densidad de público mediante Firebase para seguridad en eventos y locales.",
        "Interfaz fluida con animaciones Framer Motion, filtros por categoría y alertas de aforo máximo."
      ]
    }
  },
  20: {
    stack: ["JavaScript (ES6+)", "Leaflet / Geolocation API", "HTML5", "CSS3", "EV Charging Station Locator", "Vercel"],
    "pt-br": {
      category: "Mobilidade Elétrica & Sustentabilidade",
      architecture: "Aplicação web georreferenciada para mapeamento, consulta de disponibilidade e gestão de estações de recarga de veículos elétricos (EV).",
      highlights: [
        "Localização de eletropostos com filtros por tipo de conector (Tipo 2, CCS2, CHAdeMO), potência (kW) e status de operação.",
        "Cálculo estimado de tempo e custo de recarga com base na capacidade da bateria do veículo.",
        "Interface responsiva pensada para uso rápido em painéis automotivos e smartphones."
      ]
    },
    "en": {
      category: "Electric Mobility & Sustainability",
      architecture: "Georeferenced web application for mapping, checking availability, and managing Electric Vehicle (EV) charging stations.",
      highlights: [
        "Charging station locator with filters for connector type (Type 2, CCS2, CHAdeMO), power output (kW), and live status.",
        "Estimated charging time and cost calculator based on vehicle battery capacity.",
        "Responsive interface designed for quick use on smartphones and in-car browsers."
      ]
    },
    "es": {
      category: "Movilidad Eléctrica y Sostenibilidad",
      architecture: "Aplicación web georreferenciada para el mapeo, consulta de disponibilidad y gestión de estaciones de carga para vehículos eléctricos (EV).",
      highlights: [
        "Localizador de electrolineras con filtros por tipo de conector (Tipo 2, CCS2, CHAdeMO), potencia (kW) y estado.",
        "Calculadora de tiempo y coste estimado de recarga según la capacidad de la batería del vehículo.",
        "Interfaz responsiva diseñada para uso rápido en smartphones y pantallas de vehículos."
      ]
    }
  },
  21: {
    stack: ["React", "Supabase", "Upstash Redis (Rate Limiting)", "Mercado Pago API", "Nodemailer", "Vercel Analytics"],
    "pt-br": {
      category: "E-commerce & Segurança de API",
      architecture: "E-commerce em produção (`hibonita.com.br`) construído com React, banco de dados Supabase, checkout Mercado Pago e proteção de borda com Upstash Redis.",
      highlights: [
        "Mitigação contra ataques de força bruta e abuso de API no checkout utilizando `@upstash/ratelimit` e `@upstash/redis`.",
        "Integração completa de pagamentos com Mercado Pago (PIX, boleto e cartão de crédito) e webhooks de confirmação.",
        "Gestão de pedidos e estoque no Supabase com envio automatizado de e-mails transacionais via Nodemailer."
      ]
    },
    "en": {
      category: "E-commerce & API Security",
      architecture: "Production e-commerce (`hibonita.com.br`) built with React, Supabase database, Mercado Pago checkout, and edge protection via Upstash Redis.",
      highlights: [
        "Brute-force and API abuse mitigation on checkout endpoints using `@upstash/ratelimit` and `@upstash/redis`.",
        "Full payment processing integration with Mercado Pago (PIX, cards) and automated confirmation webhooks.",
        "Order and inventory management in Supabase with automated transactional emails via Nodemailer."
      ]
    },
    "es": {
      category: "E-commerce y Seguridad de API",
      architecture: "E-commerce en producción (`hibonita.com.br`) desarrollado con React, base de datos Supabase, pasarela Mercado Pago y protección con Upstash Redis.",
      highlights: [
        "Mitigación de fuerza bruta y abuso de API en el checkout utilizando `@upstash/ratelimit` y `@upstash/redis`.",
        "Integración completa de pagos con Mercado Pago y webhooks de confirmación automática.",
        "Gestión de pedidos e inventario en Supabase con envío automatizado de correos vía Nodemailer."
      ]
    }
  },
  22: {
    stack: ["JavaScript (ES6+)", "QR Code / Token Access", "HTML5", "CSS3", "Queue-Free Event Architecture", "Vercel"],
    "pt-br": {
      category: "Gestão de Eventos & Check-in Rápido",
      architecture: "Plataforma web otimizada para credenciamento, validação rápida de acesso e eliminação de filas em eventos corporativos e shows.",
      highlights: [
        "Fluxo de check-in digital acelerado e geração instantânea de fichas/comandas digitais.",
        "Operação resiliente com baixa latência para ambientes de alta circulação de público.",
        "Painel de controle simplificado para operadores de portaria e caixa."
      ]
    },
    "en": {
      category: "Event Management & Fast Check-in",
      architecture: "Web platform optimized for attendee accreditation, rapid access validation, and queue elimination at corporate events and shows.",
      highlights: [
        "Accelerated digital check-in workflow and instant digital token/tab generation.",
        "Low-latency resilient operation designed for high-traffic event environments.",
        "Streamlined control interface for gate and cashier operators."
      ]
    },
    "es": {
      category: "Gestión de Eventos y Check-in Rápido",
      architecture: "Plataforma web optimizada para acreditación, validación rápida de acceso y eliminación de colas en eventos.",
      highlights: [
        "Flujo de check-in digital acelerado y generación instantánea de tickets y comandas digitales.",
        "Operación resiliente de baja latencia para entornos de alta concurrencia de público.",
        "Panel de control simplificado para operadores de acceso y caja."
      ]
    }
  },
  23: {
    stack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Firebase Hosting", "Firestore / Cloud Storage", "Responsive Design"],
    "pt-br": {
      category: "Portal Institucional & Comunidade",
      architecture: "Aplicação web hospedada no Google Firebase (`frutosdosenhor-a0070.web.app`) para distribuição de conteúdo devocional, agenda e mensagens multimídia.",
      highlights: [
        "Leitura diária, estudos e reflexões com tipografia otimizada para leitura confortável em qualquer tela.",
        "Hospedagem global com CDN e SSL gerenciados pelo Firebase Hosting.",
        "Compartilhamento rápido de mensagens e versículos diretamente para redes sociais e WhatsApp."
      ]
    },
    "en": {
      category: "Institutional & Community Portal",
      architecture: "Web application hosted on Google Firebase (`frutosdosenhor-a0070.web.app`) for publishing devotional content, schedules, and multimedia messages.",
      highlights: [
        "Daily readings, studies, and reflections with typography optimized for comfortable reading on any device.",
        "Global CDN delivery and managed SSL powered by Firebase Hosting.",
        "One-click sharing of messages and verses to social networks and WhatsApp."
      ]
    },
    "es": {
      category: "Portal Institucional y Comunidad",
      architecture: "Aplicación web alojada en Google Firebase (`frutosdosenhor-a0070.web.app`) para la difusión de contenido devocional, agenda y mensajes.",
      highlights: [
        "Lecturas diarias, estudios y reflexiones con tipografía optimizada para cualquier pantalla.",
        "Distribución global mediante CDN y certificado SSL gestionado por Firebase Hosting.",
        "Función para compartir mensajes directamente en redes sociales y WhatsApp."
      ]
    }
  },
  24: {
    stack: ["React", "Firebase", "Mercado Pago SDK", "Puppeteer (Web Automation)", "UUID", "Node.js"],
    "pt-br": {
      category: "E-commerce Internacional & Automação",
      architecture: "Plataforma de e-commerce para produtos importados construída em React e Firebase, com integração Mercado Pago e automação de catálogo com Puppeteer.",
      highlights: [
        "Automação com Puppeteer para atualização de cotações, disponibilidade e metadados de produtos importados.",
        "Checkout integrado ao Mercado Pago com rastreamento de pedidos identificados por UUID.",
        "Catálogo em tempo real hospedado e sincronizado via Google Firebase."
      ]
    },
    "en": {
      category: "International E-commerce & Automation",
      architecture: "Imported goods e-commerce platform built with React and Firebase, featuring Mercado Pago checkout and Puppeteer catalog automation.",
      highlights: [
        "Puppeteer automation scripts for updating pricing, availability, and metadata of imported products.",
        "Mercado Pago integrated checkout with UUID-tracked order management.",
        "Real-time product catalog hosted and synchronized via Google Firebase."
      ]
    },
    "es": {
      category: "E-commerce Internacional y Automatización",
      architecture: "Plataforma de comercio electrónico para productos importados en React y Firebase, con pagos vía Mercado Pago y automatización con Puppeteer.",
      highlights: [
        "Automatización con Puppeteer para actualizar cotizaciones, disponibilidad y metadatos de importación.",
        "Checkout integrado con Mercado Pago y seguimiento de pedidos mediante UUID.",
        "Catálogo en tiempo real alojado y sincronizado en Google Firebase."
      ]
    }
  },
  25: {
    stack: ["React", "Socket.io Client", "Node.js Backend", "Firebase", "Real-Time Event Sync", "Responsive UI"],
    "pt-br": {
      category: "Sistema de Gestão de Eventos & PDV",
      architecture: "Ecossistema Full Stack para organização de eventos, inscrições e frente de caixa, utilizando React, Firebase e comunicação bidirecional via Socket.io.",
      highlights: [
        "Sincronização instantânea de inscrições, check-in de participantes e movimentação de caixa via WebSockets (`socket.io-client`).",
        "Módulos integrados de secretaria, tesouraria e relatórios financeiros do evento.",
        "Hospedagem de alta disponibilidade no Firebase (`eventoseencontros.web.app`)."
      ]
    },
    "en": {
      category: "Event Management & POS System",
      architecture: "Full Stack ecosystem for organizing gatherings, attendee registrations, and cashier operations using React, Firebase, and bidirectional Socket.io communication.",
      highlights: [
        "Real-time synchronization of registrations, attendee check-ins, and cashier transactions via WebSockets (`socket.io-client`).",
        "Integrated modules for event secretariat, treasury, and financial reporting.",
        "High-availability cloud deployment on Firebase (`eventoseencontros.web.app`)."
      ]
    },
    "es": {
      category: "Sistema de Gestión de Eventos y TPV",
      architecture: "Ecosistema Full Stack para la organización de eventos, inscripciones y caja, utilizando React, Firebase y comunicación bidireccional con Socket.io.",
      highlights: [
        "Sincronización instantánea de inscripciones, check-in de asistentes y movimientos de caja vía WebSockets (`socket.io-client`).",
        "Módulos integrados de secretaría, tesorería e informes financieros del evento.",
        "Alojamiento de alta disponibilidad en Firebase (`eventoseencontros.web.app`)."
      ]
    }
  },
  26: {
    stack: ["React Native", "Expo (Expo Router)", "React Native Web", "Firebase", "Expo Location & Document Picker", "Reanimated"],
    "pt-br": {
      category: "App Multiplataforma (Mobile & Web) de RH",
      architecture: "Aplicação multiplataforma (iOS, Android e Web) construída com React Native, Expo Router e Firebase para gestão de Recursos Humanos e ponto corporativo.",
      highlights: [
        "Geolocalização integrada (`expo-location`) para registro de ponto eletrônico e validação de presença.",
        "Envio de atestados, holerites e documentos corporativos utilizando `expo-document-picker` e Firebase Storage.",
        "Animações nativas fluidas a 60fps com `react-native-reanimated` e suporte web via `react-native-web`."
      ]
    },
    "en": {
      category: "Cross-Platform HR App (Mobile & Web)",
      architecture: "Cross-platform application (iOS, Android, and Web) built with React Native, Expo Router, and Firebase for Human Resources and time-tracking management.",
      highlights: [
        "Integrated geolocation (`expo-location`) for electronic clock-in and attendance verification.",
        "Upload of medical certificates, payslips, and corporate documents via `expo-document-picker` and Firebase Storage.",
        "Smooth 60fps native animations with `react-native-reanimated` and full web compatibility via `react-native-web`."
      ]
    },
    "es": {
      category: "App Multiplataforma (Móvil y Web) de RRHH",
      architecture: "Aplicación multiplataforma (iOS, Android y Web) construida con React Native, Expo Router y Firebase para gestión de Recursos Humanos y control horario.",
      highlights: [
        "Geolocalización integrada (`expo-location`) para fichaje electrónico y validación de asistencia.",
        "Envío de justificantes, nóminas y documentos corporativos mediante `expo-document-picker` y Firebase Storage.",
        "Animaciones nativas fluidas con `react-native-reanimated` y compatibilidad web con `react-native-web`."
      ]
    }
  },
  27: {
    stack: ["Next.js", "React", "Zustand", "Firebase", "Mercado Pago SDK", "Framer Motion", "Lucide Icons"],
    "pt-br": {
      category: "E-commerce B2B/B2C de Construção",
      architecture: "E-commerce robusto em Next.js e React para materiais de construção civil, com estado global em Zustand, banco Firebase e pagamentos Mercado Pago.",
      highlights: [
        "Calculadora de materiais e orçamento de obra integrada ao carrinho de compras gerenciado com Zustand.",
        "Catálogo de alta capacidade para itens pesados, hidráulica, elétrica e acabamento com busca rápida.",
        "Integração de pagamento via Mercado Pago com cálculo de logística e retirada em loja."
      ]
    },
    "en": {
      category: "B2B/B2C Construction E-commerce",
      architecture: "Robust Next.js and React e-commerce for civil construction materials, featuring Zustand state management, Firebase backend, and Mercado Pago checkout.",
      highlights: [
        "Construction material estimator and quote builder integrated directly with the Zustand shopping cart.",
        "High-capacity product catalog covering structural, plumbing, electrical, and finishing supplies.",
        "Mercado Pago payment gateway integration with delivery logistics and in-store pickup options."
      ]
    },
    "es": {
      category: "E-commerce B2B/B2C de Construcción",
      architecture: "E-commerce robusto en Next.js y React para materiales de construcción civil, con estado global en Zustand, backend Firebase y pagos con Mercado Pago.",
      highlights: [
        "Calculadora de materiales y presupuesto de obra integrada al carrito de compras gestionado con Zustand.",
        "Catálogo de alta capacidad para materiales estructurales, fontanería, electricidad y acabados.",
        "Pasarela de pago Mercado Pago con cálculo logístico y opción de recogida en tienda."
      ]
    }
  },
  28: {
    stack: ["Web Bluetooth API", "WebSockets (ws)", "JavaScript (ES6+)", "Node.js", "Offline-First Architecture", "PWA"],
    "pt-br": {
      category: "IoT & Comunicação Offline (Bluetooth)",
      architecture: "Sistema de comunicação descentralizada e conexão direta com dispositivos via Web Bluetooth API e WebSockets locais (`ws`), operando sem dependência de internet.",
      highlights: [
        "Pareamento e troca de pacotes binários/texto diretamente pelo navegador via protocolo GATT / Web Bluetooth.",
        "Operação 100% offline-first projetada para ambientes industriais, eventos sem sinal ou redes locais isoladas.",
        "Interface de telemetria e terminal de mensagens em tempo real com reconexão automática."
      ]
    },
    "en": {
      category: "IoT & Offline Communication (Bluetooth)",
      architecture: "Decentralized communication and direct device pairing system using Web Bluetooth API and local WebSockets (`ws`), operating without internet dependency.",
      highlights: [
        "Browser-native device pairing and binary/text packet exchange over GATT / Web Bluetooth protocols.",
        "100% offline-first operation engineered for industrial sites, zero-signal venues, or air-gapped local networks.",
        "Real-time telemetry interface and messaging terminal with automated reconnection handling."
      ]
    },
    "es": {
      category: "IoT y Comunicación Offline (Bluetooth)",
      architecture: "Sistema de comunicación descentralizada y conexión directa con dispositivos mediante Web Bluetooth API y WebSockets (`ws`), sin dependencia de internet.",
      highlights: [
        "Emparejamiento e intercambio de paquetes directamente desde el navegador mediante protocolos GATT / Web Bluetooth.",
        "Operación 100% offline-first diseñada para entornos industriales, zonas sin cobertura o redes aisladas.",
        "Interfaz de telemetría y terminal de mensajería en tiempo real con reconexión automática."
      ]
    }
  },
  29: {
    stack: ["Python", "PyInstaller (Desktop Agent)", "Firebase Realtime/Firestore", "JavaScript", "Network Telemetry (ICMP/Speed)", "Google Cloud Build"],
    "pt-br": {
      category: "Telemetria de Rede & Defesa do Consumidor",
      architecture: "Ecossistema híbrido composto por agente desktop em Python (`app.py`, `monitor.py` compilado via PyInstaller) e dashboard web no Firebase (`quedadesinal.web.app`).",
      highlights: [
        "Monitoramento contínuo 24/7 de latência, perda de pacotes, jitter e quedas de conexão da operadora de internet.",
        "Cálculo automático do desconto proporcional na fatura com base no tempo real de indisponibilidade (regulamentação Anatel).",
        "Geração de relatórios técnicos auditáveis com logs de timestamp para comprovação jurídica e administrativa."
      ]
    },
    "en": {
      category: "Network Telemetry & Consumer Rights",
      architecture: "Hybrid ecosystem combining a Python desktop monitoring agent (`app.py`, `monitor.py` packaged via PyInstaller) and a cloud dashboard on Firebase (`quedadesinal.web.app`).",
      highlights: [
        "24/7 automated monitoring of ISP latency, packet loss, jitter, and connection outages.",
        "Automated calculation of proportional bill discounts based on verified downtime (telecom compliance).",
        "Audit-ready technical report generation with timestamped logs for administrative and legal evidence."
      ]
    },
    "es": {
      category: "Telemetría de Red y Defensa del Consumidor",
      architecture: "Ecosistema híbrido compuesto por un agente de escritorio en Python (`app.py`, `monitor.py` compilado con PyInstaller) y un panel web en Firebase (`quedadesinal.web.app`).",
      highlights: [
        "Monitoreo continuo 24/7 de latencia, pérdida de paquetes, jitter y caídas de conexión del proveedor de internet.",
        "Cálculo automático del descuento proporcional en la factura según el tiempo real de interrupción del servicio.",
        "Generación de informes técnicos auditables con registros de tiempo para reclamaciones."
      ]
    }
  },
  30: {
    stack: ["React", "JavaScript (ES6+)", "Probability & House-Edge Simulation", "Lucide Icons", "Tailwind CSS", "Netlify"],
    "pt-br": {
      category: "Simulador Matemático & Conscientização",
      architecture: "Aplicação interativa em React que expõe matematicamente o funcionamento de algoritmos de casas de apostas (Expected Value negativo e Ruína do Apostador).",
      highlights: [
        "Simulação estatística demonstrando como a margem da casa (House Edge / RTP < 100%) garante perda matemática no longo prazo.",
        "Visualização em tempo real da curva de banca e probabilidade de quebra em jogos de azar.",
        "Projeto educativo de impacto social com interface moderna e responsiva."
      ]
    },
    "en": {
      category: "Mathematical Simulator & Awareness",
      architecture: "Interactive React application mathematically exposing how betting algorithms work (Negative Expected Value and Gambler's Ruin).",
      highlights: [
        "Statistical simulation demonstrating how the House Edge (RTP < 100%) guarantees long-term mathematical loss.",
        "Real-time visualization of bankroll decay curves and ruin probability in games of chance.",
        "Social-impact educational project featuring a modern, responsive interface."
      ]
    },
    "es": {
      category: "Simulador Matemático y Concienciación",
      architecture: "Aplicación interactiva en React que expone matemáticamente el funcionamiento de los algoritmos de apuestas (Valor Esperado negativo y Ruina del Jugador).",
      highlights: [
        "Simulación estadística que demuestra cómo el margen de la casa (RTP < 100%) garantiza pérdidas a largo plazo.",
        "Visualización en tiempo real de la curva de capital y probabilidad de ruina matemática.",
        "Proyecto educativo de impacto social con interfaz moderna y responsiva."
      ]
    }
  },
  31: {
    stack: ["React / Frontend Modular", "Firebase Hosting", "Cloud Firestore", "Firebase Cloud Functions", "Firestore Security Rules"],
    "pt-br": {
      category: "Portfólio & Plataforma Profissional",
      architecture: "Aplicação web hospedada no Firebase (`neriemantuano.web.app`) com backend serverless em Firebase Cloud Functions e regras estritas de segurança no Firestore.",
      highlights: [
        "Apresentação profissional de alto padrão com carregamento otimizado e animações suaves.",
        "Regras de segurança customizadas (`firestore.rules`) protegendo os dados e formulários de contato.",
        "Integração serverless via Cloud Functions para processamento seguro de mensagens."
      ]
    },
    "en": {
      category: "Professional Portfolio Platform",
      architecture: "Web application hosted on Firebase (`neriemantuano.web.app`) with a serverless backend in Firebase Cloud Functions and strict Firestore Security Rules.",
      highlights: [
        "High-end professional showcase with optimized asset loading and smooth animations.",
        "Custom `firestore.rules` security policies protecting data and contact submissions.",
        "Serverless Cloud Functions integration for secure message processing."
      ]
    },
    "es": {
      category: "Portafolio y Plataforma Profesional",
      architecture: "Aplicación web alojada en Firebase (`neriemantuano.web.app`) con backend serverless en Firebase Cloud Functions y reglas estrictas en Firestore.",
      highlights: [
        "Presentación profesional de alto nivel con carga optimizada y animaciones fluidas.",
        "Reglas de seguridad personalizadas (`firestore.rules`) para proteger los datos y formularios.",
        "Integración serverless mediante Cloud Functions para el procesamiento seguro de mensajes."
      ]
    }
  },
  33: {
    stack: ["Next.js", "React", "Prisma ORM", "Firebase & Cloud Functions", "JWT & bcryptjs", "OpenTelemetry", "QRCode", "Tailwind CSS"],
    "pt-br": {
      category: "SaaS PropTech & Gestão de Locações",
      architecture: "Plataforma SaaS empresarial em Next.js com camada de dados híbrida (Prisma ORM + Firebase), autenticação criptográfica (JWT + bcryptjs) e observabilidade OpenTelemetry.",
      highlights: [
        "Gestão completa de contratos de locação, vistoria de imóveis/frota, cobranças e geração de recibos com QR Code.",
        "Segurança reforçada com hashing de senhas via `bcryptjs`, tokens `jsonwebtoken` e funções serverless no Firebase.",
        "Monitoramento de performance e rastreamento distribuído instrumentado com `@opentelemetry/api`."
      ]
    },
    "en": {
      category: "PropTech SaaS & Rental Management",
      architecture: "Enterprise SaaS platform built with Next.js featuring a hybrid data layer (Prisma ORM + Firebase), cryptographic auth (JWT + bcryptjs), and OpenTelemetry observability.",
      highlights: [
        "End-to-end management of lease contracts, property/fleet inspections, billing, and QR Code receipt generation.",
        "Hardened security using `bcryptjs` password hashing, `jsonwebtoken` auth, and Firebase Cloud Functions.",
        "Performance monitoring and distributed tracing instrumented with `@opentelemetry/api`."
      ]
    },
    "es": {
      category: "SaaS PropTech y Gestión de Alquileres",
      architecture: "Plataforma SaaS empresarial en Next.js con capa de datos híbrida (Prisma ORM + Firebase), autenticación criptográfica (JWT + bcryptjs) y observabilidad OpenTelemetry.",
      highlights: [
        "Gestión integral de contratos de arrendamiento, inspecciones, cobros y generación de recibos con código QR.",
        "Seguridad reforzada con hashing `bcryptjs`, tokens `jsonwebtoken` y funciones serverless en Firebase.",
        "Monitoreo de rendimiento y trazabilidad distribuida instrumentada con `@opentelemetry/api`."
      ]
    }
  },
  34: {
    stack: ["HTML5 Modular", "CSS3 Design System", "JavaScript (ES6+)", "Chart.js / Analytics", "Clinical Workflow Engine", "Vercel"],
    "pt-br": {
      category: "HealthTech & Gestão Clínica",
      architecture: "Suíte clínica multi-módulos (`atendimentos.html`, `prontuarios.html`, `pagamento.html`, `relatorios.html`, `satisfacao.html`) com design system próprio e arquitetura modular em JS.",
      highlights: [
        "Gestão integrada de prontuários eletrônicos, fila de atendimentos e histórico clínico de pacientes.",
        "Módulo financeiro de faturamento/pagamentos e relatórios gerenciais com indicadores de desempenho.",
        "Sistema de avaliação de satisfação do paciente (NPS/CSAT) integrado ao fluxo de pós-atendimento."
      ]
    },
    "en": {
      category: "HealthTech & Clinical Management",
      architecture: "Multi-module clinical suite (`atendimentos.html`, `prontuarios.html`, `pagamento.html`, `relatorios.html`, `satisfacao.html`) featuring a custom design system and modular JS architecture.",
      highlights: [
        "Integrated Electronic Health Records (EHR), appointment queue management, and patient clinical history.",
        "Financial billing/payment module and executive reporting dashboard with clinical KPIs.",
        "Patient satisfaction tracking (NPS/CSAT) seamlessly integrated into the post-care workflow."
      ]
    },
    "es": {
      category: "HealthTech y Gestión Clínica",
      architecture: "Suite clínica multimódulo (`atendimentos.html`, `prontuarios.html`, `pagamento.html`, `relatorios.html`, `satisfacao.html`) con sistema de diseño propio y arquitectura modular en JS.",
      highlights: [
        "Gestión integrada de historiales clínicos electrónicos, cola de atención y evolución del paciente.",
        "Módulo financiero de facturación/pagos e informes gerenciales con indicadores clave (KPIs).",
        "Sistema de evaluación de satisfacción del paciente (NPS/CSAT) integrado al flujo post-consulta."
      ]
    }
  }
};

// 11 Projetos de Cibersegurança, Criptografia, Forense & DevSecOps (Universidade de Sevilha / Laboratórios Práticos)
export const cyberProjectsData = [
  {
    id: "cyber-pai4",
    code: "DEVSECOPS-01",
    track: "pai",
    badge: "DevSecOps & Supply Chain",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    reportPdf: null,
    stack: ["GitHub Actions", "Semgrep (SAST)", "Trivy (SCA & Container)", "OWASP ZAP (DAST)", "DefectDojo", "Docker & Kubernetes", "Python", "Quality Gates"],
    "pt-br": {
      title: "Insegus Pipeline — Engenharia DevSecOps & Cadeia de Suprimentos",
      shortDesc: "Esteira CI/CD automatizada Shift-Left com SAST (Semgrep), SCA/Container (Trivy), DAST (OWASP ZAP), triagem centralizada no DefectDojo e bloqueio automático por Quality Gates.",
      scenario: "Proteção de ponta a ponta da cadeia de suprimentos de software (Software Supply Chain) de uma aplicação web corporativa e sua infraestrutura em contêineres Docker/Kubernetes contra vulnerabilidades de código, dependências comprometidas e falhas em tempo de execução.",
      architecture: "Pipeline CI/CD multi-estágio no GitHub Actions e runner local no Kali Linux, integrando análise estática (SAST), composição de software e imagem Docker (SCA), análise dinâmica (DAST), consolidação de 123 achados no DefectDojo e política declarativa de Quality Gate (`quality_gate_policy.json`).",
      highlights: [
        "SAST automatizado com Semgrep detectando injeções, segredos hardcoded e falhas lógicas antes do build.",
        "SCA e auditoria de imagem Docker com Trivy para bloqueio de CVEs críticas em pacotes npm e camadas de sistema operacional.",
        "DAST automatizado com OWASP ZAP validando cabeçalhos HTTP, XSS, CSRF e exposição de rotas em contêiner efêmero.",
        "Orquestração centralizada com DefectDojo (123 vulnerabilidades catalogadas e triadas) e script `quality_gate.py` que aborta o deploy em caso de violação de SLA."
      ],
      metrics: "123 Vulnerabilidades Mapeadas & Triadas | 100% Automação Shift-Left | Grau A (Nota Máxima)"
    },
    "en": {
      title: "Insegus Pipeline — DevSecOps & Software Supply Chain Security",
      shortDesc: "Automated Shift-Left CI/CD pipeline featuring SAST (Semgrep), SCA/Container scanning (Trivy), DAST (OWASP ZAP), centralized DefectDojo triage, and automated Quality Gates.",
      scenario: "End-to-end Software Supply Chain protection for a corporate web application and its Docker/Kubernetes infrastructure against code vulnerabilities, compromised third-party dependencies, and runtime flaws.",
      architecture: "Multi-stage CI/CD pipeline on GitHub Actions and Kali Linux runner integrating static analysis (SAST), software composition & container scanning (SCA), dynamic testing (DAST), DefectDojo vulnerability management (123 findings), and declarative Security-as-Code Quality Gates (`quality_gate_policy.json`).",
      highlights: [
        "Automated SAST with Semgrep catching injections, hardcoded secrets, and logic flaws pre-build.",
        "SCA and Docker image auditing with Trivy blocking critical CVEs across npm packages and OS layers.",
        "Automated DAST with OWASP ZAP validating HTTP security headers, XSS, CSRF, and route exposure against ephemeral containers.",
        "Centralized orchestration via DefectDojo (123 triaged findings) and `quality_gate.py` policy enforcement blocking non-compliant deployments."
      ],
      metrics: "123 Vulnerabilities Mapped & Triaged | 100% Shift-Left Automation | Grade A Distinction"
    },
    "es": {
      title: "Insegus Pipeline — Ingeniería DevSecOps y Cadena de Suministro",
      shortDesc: "Pipeline CI/CD automatizado Shift-Left con SAST (Semgrep), SCA/Contenedores (Trivy), DAST (OWASP ZAP), gestión centralizada en DefectDojo y bloqueo por Quality Gates.",
      scenario: "Protección integral de la cadena de suministro de software (Software Supply Chain) de una aplicación web corporativa y su infraestructura Docker/Kubernetes frente a vulnerabilidades de código, dependencias comprometidas y fallos en ejecución.",
      architecture: "Pipeline CI/CD multietapa en GitHub Actions y Kali Linux que integra análisis estático (SAST), composición de software e imagen Docker (SCA), pruebas dinámicas (DAST), consolidación de 123 hallazgos en DefectDojo y política declarativa de Quality Gate (`quality_gate_policy.json`).",
      highlights: [
        "SAST automatizado con Semgrep para detectar inyecciones, secretos expuestos y fallos lógicos antes del build.",
        "SCA y auditoría de imágenes Docker con Trivy para bloquear CVEs críticas en paquetes npm y capas del sistema.",
        "DAST automatizado con OWASP ZAP validando cabeceras HTTP, XSS, CSRF y exposición de rutas en contenedores efímeros.",
        "Orquestación centralizada en DefectDojo (123 vulnerabilidades triadas) y script `quality_gate.py` que bloquea despliegues fuera de norma."
      ],
      metrics: "123 Vulnerabilidades Mapeadas y Triadas | 100% Automatización Shift-Left | Calificación Grado A"
    }
  },
  {
    id: "cyber-pai2",
    code: "ZERO-TRUST-02",
    track: "pai",
    badge: "Zero Trust & Network Security",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    reportPdf: null,
    stack: ["TLS 1.3 Strict (RFC 8446)", "Mutual TLS (mTLS X.509 v3)", "PKI Root CA", "PBKDF2-HMAC-SHA256 (600k)", "Python Sockets/SSL", "Wireshark PCAP", "Hashcat", "SQLite"],
    "pt-br": {
      title: "BYODSEC — Arquitetura VPN Zero Trust TLS 1.3 com mTLS",
      shortDesc: "Infraestrutura de acesso remoto Road Warrior VPN com PKI X.509 v3 própria, TLS 1.3 estrito, autenticação mútua (mTLS), hash PBKDF2 (600k iterações) e suporte a 300 sessões simultâneas.",
      scenario: "Desenho, implementação e auditoria de uma solução de acesso remoto seguro (Bring Your Own Device - BYOD) para docentes, pesquisadores e técnicos de uma Universidade Pública (U-Secure), mitigando ataques de pontos de acesso falsos (Evil Twin) e roubo de credenciais.",
      architecture: "Arquitetura de Autenticação em Duas Camadas (Dual-Layer Auth): Camada 1 no transporte via mTLS bidirecional com certificados X.509 v3 emitidos por Autoridade Certificadora própria (`U-Secure Root CA`) e cifras AEAD (`TLS_AES_256_GCM_SHA384` + `X25519` PFS); Camada 2 na aplicação com credenciais salgadas usando PBKDF2-HMAC-SHA256 (600.000 iterações, padrão OWASP).",
      highlights: [
        "Implementação completa de PKI institucional (`pki_manager.py`) segregando extensões `serverAuth` e `clientAuth` para impedir ataques de Role Reversal.",
        "Bloqueio comprovado de ataques Evil Twin / Rogue Server, clientes sem certificado e certificados revogados/não autorizados.",
        "Auditoria ofensiva com Hashcat e captura de tráfego real em Wireshark (`.pcap`) comprovando sigilo perfeito (PFS) e criptografia do handshake.",
        "Teste de estresse e concorrência (`test_300_sessions.py`) validando 300 túneis TLS 1.3 simultâneos com 100% de sucesso e baixa latência."
      ],
      metrics: "300 Sessões Simultâneas (100% Êxito) | 12/12 Testes de Segurança Aprovados | TLS 1.3 + mTLS"
    },
    "en": {
      title: "BYODSEC — Zero Trust TLS 1.3 Road Warrior VPN with mTLS",
      shortDesc: "Road Warrior VPN remote access infrastructure featuring a custom X.509 v3 PKI, strict TLS 1.3, mutual authentication (mTLS), PBKDF2 (600k iterations), and 300 concurrent sessions.",
      scenario: "Design, implementation, and security audit of a secure remote access solution (BYOD) for faculty, researchers, and staff at a Public University (U-Secure), mitigating Evil Twin Wi-Fi attacks and credential theft.",
      architecture: "Dual-Layer Authentication Architecture: Layer 1 at transport via bidirectional mTLS using X.509 v3 certificates issued by an internal Root CA (`U-Secure Root CA`) with AEAD ciphers (`TLS_AES_256_GCM_SHA384` + `X25519` PFS); Layer 2 at application level with salted credentials using PBKDF2-HMAC-SHA256 (600,000 iterations, OWASP standard).",
      highlights: [
        "Full institutional PKI engine (`pki_manager.py`) segregating `serverAuth` and `clientAuth` extensions to prevent Role Reversal attacks.",
        "Verified mitigation against Evil Twin / Rogue Server attacks, uncertified clients, and unauthorized/rogue certificates.",
        "Offensive audit using Hashcat and real Wireshark packet captures (`.pcap`) proving Perfect Forward Secrecy (PFS) and encrypted handshakes.",
        "Concurrency stress testing (`test_300_sessions.py`) sustaining 300 simultaneous TLS 1.3 tunnels with 100% success rate."
      ],
      metrics: "300 Concurrent Sessions (100% Success) | 12/12 Security Tests Passed | Strict TLS 1.3 + mTLS"
    },
    "es": {
      title: "BYODSEC — Arquitectura VPN Zero Trust TLS 1.3 con mTLS",
      shortDesc: "Infraestructura de acceso remoto Road Warrior VPN con PKI X.509 v3 propia, TLS 1.3 estricto, autenticación mutua (mTLS), PBKDF2 (600k iteraciones) y 300 sesiones concurrentes.",
      scenario: "Diseño, implementación y auditoría de una infraestructura de acceso remoto seguro (BYOD) para personal docente, investigador y técnico de una Universidad Pública (U-Secure), mitigando ataques Evil Twin y robo de credenciales.",
      architecture: "Arquitectura de Autenticación en Dos Capas (Dual-Layer Auth): Capa 1 de transporte mediante mTLS bidireccional con certificados X.509 v3 emitidos por una CA Raíz propia (`U-Secure Root CA`) y cifrado AEAD (`TLS_AES_256_GCM_SHA384` + `X25519` PFS); Capa 2 de aplicación con credenciales protegidas mediante PBKDF2-HMAC-SHA256 (600.000 iteraciones).",
      highlights: [
        "Despliegue completo de PKI institucional (`pki_manager.py`) segregando perfiles `serverAuth` y `clientAuth` contra ataques de inversión de rol.",
        "Mitigación verificada frente a servidores falsos (Evil Twin / Rogue Server), clientes sin certificado y certificados fraudulentos.",
        "Auditoría con Hashcat y capturas reales en Wireshark (`.pcap`) demostrando Secreto Perfecto hacia Adelante (PFS).",
        "Prueba de concurrencia (`test_300_sessions.py`) superando 300 sesiones TLS 1.3 simultáneas con 100% de éxito."
      ],
      metrics: "300 Sesiones Concurrentes (100% Éxito) | 12/12 Tests Aprobados | TLS 1.3 Estricto + mTLS"
    }
  },
  {
    id: "cyber-pai3",
    code: "HARDENING-03",
    track: "pai",
    badge: "System Hardening & Web DAST",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    reportPdf: null,
    stack: ["Lynis 3.1.7 (Linux Hardening)", "OWASP ZAP 2.17 (DAST/Fuzzing)", "Kali / Ubuntu / Debian", "Firefox ESR Policies", "Android ADB / Knox Audit", "PHP Secure Coding (PDO)", "CIS Benchmarks / ENS"],
    "pt-br": {
      title: "VULNAWEB — Auditoria Full-Stack, Hardening Linux/Mobile & DAST",
      shortDesc: "Bastionamento multi-plataforma (Kali, Ubuntu e Debian com índice Lynis > 70), políticas corporativas Firefox ESR, auditoria mobile BYOD via ADB Knox e pentest web com OWASP ZAP.",
      scenario: "Auditoria integral de sistemas informáticos e aplicações web de uma instituição pública sob as diretrizes do Esquema Nacional de Segurança (ENS) e CIS Benchmarks, cobrindo servidores Linux, navegadores corporativos, dispositivos móveis BYOD e portais web vulneráveis.",
      architecture: "Metodologia em 4 domínios: 1) Hardening de Kernel, rede (`sysctl`), SSH e PAM em 3 distribuições Linux auditadas via Lynis; 2) Políticas imutáveis `policies.json` no Firefox ESR; 3) Telemetria forense Android via ADB/Knox e Koodous; 4) Pentest DAST com OWASP ZAP (interceptação MITM, Fuzzing `jbrofuzz`) e remediação de código PHP.",
      highlights: [
        "Elevação comprovada do Hardening Index no Lynis acima da meta em 3 sistemas: Kali Linux (65 → 72), Ubuntu (61 → 74) e Debian (58 → 71) com 0 Warnings.",
        "Blindagem de navegador corporativo bloqueando extensões não assinadas, forçando HTTPS-Only, DNS-over-HTTPS e proteção anti-tracking.",
        "Auditoria real via ADB em dispositivo físico Samsung Galaxy A55 (Knox Verified Boot, SELinux Enforcing, criptografia FBE) e matriz de 8 controles CIS/ENS.",
        "Exploração e correção definitiva de SQL Injection (migração para PDO Prepared Statements), XSS Refletido/Armazenado (`htmlspecialchars`) e Path Traversal/LFI (whitelist + `basename`)."
      ],
      metrics: "3 Sistemas Linux Hardening ≥ 71 (0 Warnings) | 28 Artefatos Forenses | 100% Mitigação OWASP Top 10"
    },
    "en": {
      title: "VULNAWEB — Full-Stack Security Audit, Linux/Mobile Hardening & DAST",
      shortDesc: "Multi-platform system hardening (Kali, Ubuntu, Debian achieving Lynis > 70), Firefox ESR enterprise policies, mobile BYOD ADB/Knox auditing, and OWASP ZAP web pentesting.",
      scenario: "Comprehensive security audit and hardening of IT systems and web applications for a public institution under ENS and CIS Benchmarks, covering Linux endpoints, enterprise browsers, BYOD mobile devices, and vulnerable web portals.",
      architecture: "4-Domain Security Architecture: 1) Kernel (`sysctl`), network, SSH, and PAM hardening across 3 Linux distributions audited with Lynis; 2) Immutable `policies.json` enforcement on Firefox ESR; 3) Android forensic telemetry via ADB/Knox and Koodous; 4) Web DAST with OWASP ZAP (MITM breakpoints, `jbrofuzz` fuzzing) and PHP code remediation.",
      highlights: [
        "Verified Lynis Hardening Index elevation above target across 3 distributions: Kali Linux (65 → 72), Ubuntu (61 → 74), and Debian (58 → 71) with 0 Warnings.",
        "Enterprise browser hardening blocking unsigned extensions and enforcing HTTPS-Only, DNS-over-HTTPS, and strict cookie isolation.",
        "Live ADB hardware audit on a physical Samsung Galaxy A55 (Knox Verified Boot, SELinux Enforcing, FBE encryption) across 8 CIS/ENS controls.",
        "Exploitation and source-code remediation of SQL Injection (PDO Prepared Statements), XSS (`htmlspecialchars`), and LFI/Path Traversal (strict whitelist + `basename`)."
      ],
      metrics: "3 Linux Systems Hardened ≥ 71 (0 Warnings) | 28 Forensic Artifacts | 100% OWASP Mitigation"
    },
    "es": {
      title: "VULNAWEB — Auditoría Full-Stack, Bastionado Linux/Móvil y DAST",
      shortDesc: "Bastionado multiplataforma (Kali, Ubuntu y Debian con índice Lynis > 70), políticas corporativas Firefox ESR, auditoría móvil BYOD vía ADB Knox y pentesting web con OWASP ZAP.",
      scenario: "Auditoría integral de seguridad en sistemas informáticos y análisis de vulnerabilidades web bajo normativas ENS y CIS Benchmarks, abarcando servidores Linux, navegadores corporativos, dispositivos móviles BYOD y aplicaciones web.",
      architecture: "Metodología en 4 dominios: 1) Bastionado de Kernel (`sysctl`), red, SSH y PAM en 3 distribuciones Linux auditadas con Lynis; 2) Directivas inmutables `policies.json` en Firefox ESR; 3) Telemetría forense Android vía ADB/Knox y Koodous; 4) DAST con OWASP ZAP (interceptación MITM, Fuzzing `jbrofuzz`) y remediación en PHP.",
      highlights: [
        "Incremento certificado del Hardening Index en Lynis en 3 sistemas: Kali Linux (65 → 72), Ubuntu (61 → 74) y Debian (58 → 71) con 0 Warnings.",
        "Bastionado de navegador corporativo bloqueando extensiones no firmadas e imponiendo HTTPS-Only, DoH y aislamiento de cookies.",
        "Auditoría real por ADB sobre dispositivo físico Samsung Galaxy A55 (Knox Verified Boot, SELinux Enforcing, cifrado FBE) en 8 controles CIS/ENS.",
        "Explotación y remediación en código fuente de SQL Injection (PDO Prepared Statements), XSS (`htmlspecialchars`) y Path Traversal/LFI (whitelist + `basename`)."
      ],
      metrics: "3 Sistemas Linux ≥ 71 en Lynis (0 Warnings) | 28 Artefactos Forenses | 100% Mitigación OWASP"
    }
  },
  {
    id: "cyber-pai1",
    code: "CRYPTO-NET-04",
    track: "pai",
    badge: "Financial Integrity & Anti-Replay",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    reportPdf: null,
    stack: ["Python", "HMAC-SHA256 / SHA3", "Cryptographic Nonces", "Wireshark (.pcapng)", "Burp Suite / MITM Simulation", "Timing Benchmark", "Socket Programming"],
    "pt-br": {
      title: "IntegriDos — Motor de Integridade e Anti-Replay para Transações Financeiras",
      shortDesc: "Sistema cliente-servidor para validação criptográfica de transferências bancárias em trânsito utilizando HMAC, controle estrito de Nonces contra Replay Attacks e defesa contra MITM.",
      scenario: "Uma instituição financeira precisava garantir a integridade absoluta de transferências bancárias transmitidas em rede potencialmente hostil, impedindo que atacantes interceptassem pacotes para alterar valores/contas de destino (MITM) ou reenviassem transações válidas repetidas vezes (Replay Attack).",
      architecture: "Arquitetura Cliente-Servidor em Python (`Servidor.py`, `Cliente.py`, `hasher.py`) utilizando códigos de autenticação de mensagem (HMAC) acoplados a identificadores únicos de uso único (Nonces persistidos em `nonces.json`) e suíte automatizada de testes de intrusão (`test_servidor_suite.py`).",
      highlights: [
        "Validação de integridade em tempo constante (`hmac.compare_digest`) prevenindo ataques de canal lateral por temporização (Timing Attacks).",
        "Mecanismo Anti-Replay baseado em Nonces criptográficos únicos e janelas de sessão, rejeitando instantaneamente pacotes duplicados.",
        "Simulação prática de ataques Man-in-the-Middle (MITM), Replay e Força Bruta documentados com capturas reais de tráfego no Wireshark (`.pcapng`).",
        "Benchmark comparativo de desempenho criptográfico (`4-benchmark_timing.py`) avaliando throughput e latência de algoritmos de hash."
      ],
      metrics: "100% Bloqueio de MITM & Replay Attacks | Capturas Forenses PCAPNG | Comparação Constant-Time"
    },
    "en": {
      title: "IntegriDos — Financial Transaction Integrity & Anti-Replay Engine",
      shortDesc: "Client-server cryptographic verification engine protecting in-transit banking transfers via HMAC, strict Nonce state tracking against Replay Attacks, and MITM defense.",
      scenario: "A financial institution required mathematical integrity guarantees for wire transfers traversing untrusted networks, preventing attackers from tampering with transaction amounts/accounts (MITM) or re-broadcasting captured valid transfers (Replay Attack).",
      architecture: "Python Client-Server architecture (`Servidor.py`, `Cliente.py`, `hasher.py`) combining keyed-hash message authentication codes (HMAC) with persistent single-use cryptographic Nonces (`nonces.json`) and an automated intrusion test suite (`test_servidor_suite.py`).",
      highlights: [
        "Constant-time MAC verification (`hmac.compare_digest`) eliminating side-channel Timing Attack vectors.",
        "Stateful Anti-Replay engine tracking unique cryptographic Nonces and session lifecycles to reject duplicated packets immediately.",
        "Live offensive simulations of Man-in-the-Middle (MITM), Replay, and Brute-Force attacks verified via Wireshark packet captures (`.pcapng`).",
        "Cryptographic throughput and latency benchmarking (`4-benchmark_timing.py`) across multiple hashing primitives."
      ],
      metrics: "100% MITM & Replay Attack Mitigation | Forensic PCAPNG Captures | Constant-Time Verification"
    },
    "es": {
      title: "IntegriDos — Motor de Integridad y Anti-Replay para Transacciones Financieras",
      shortDesc: "Sistema cliente-servidor para verificación criptográfica de transferencias bancarias en tránsito mediante HMAC, control estricto de Nonces contra Replay Attacks y defensa MITM.",
      scenario: "Una entidad financiera requería garantizar la integridad absoluta de las transferencias transmitidas por red, impidiendo que un atacante modificara importes o cuentas destino (MITM) o reenviara transacciones válidas capturadas (Replay Attack).",
      architecture: "Arquitectura Cliente-Servidor en Python (`Servidor.py`, `Cliente.py`, `hasher.py`) basada en códigos HMAC vinculados a Nonces criptográficos de un solo uso (`nonces.json`) y suite automatizada de pruebas de intrusión (`test_servidor_suite.py`).",
      highlights: [
        "Verificación de integridad en tiempo constante (`hmac.compare_digest`) para neutralizar ataques laterales de temporización (Timing Attacks).",
        "Motor Anti-Replay con registro de Nonces únicos que detecta y descarta instantáneamente cualquier paquete retransmitido.",
        "Simulación de ataques Man-in-the-Middle (MITM), Replay y Fuerza Bruta respaldados con capturas de tráfico reales en Wireshark (`.pcapng`).",
        "Benchmark comparativo de rendimiento criptográfico (`4-benchmark_timing.py`) midiendo latencia y capacidad de procesamiento."
      ],
      metrics: "100% Bloqueo de Ataques MITM y Replay | Evidencias PCAPNG en Wireshark | Verificación Constant-Time"
    }
  },
  {
    id: "cyber-cai3",
    code: "IAM-RED-BLUE-05",
    track: "cai",
    badge: "Red/Blue Team & OAuth 2.0 IAM",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    reportPdf: null,
    stack: ["OAuth 2.0 + PKCE (RFC 7636)", "JWT (RS256 & JWKS)", "2FA TOTP (FreeOTP)", "BFF Pattern (HttpOnly)", "Python Flask", "SQLCipher / AES DB", "Wireshark", "Red & Blue Team"],
    "pt-br": {
      title: "MedAuth ZeroTrust — Red/Blue Team IAM, OAuth 2.0 PKCE, BFF & 2FA TOTP",
      shortDesc: "Auditoria ofensiva (Red Team) e refatoração defensiva (Blue Team) de microserviços hospitalares com OAuth 2.0 + PKCE, migração HS256 para RS256/JWKS, padrão BFF e 2FA TOTP.",
      scenario: "Auditoria de um portal médico de prontuários eletrônicos composto por microserviços (Autenticação na porta 8000 e Recurso Clínico na porta 8001) que sofria de escalada de privilégios (paciente editando histórico médico), vazamento de sementes MFA, chaves JWT simétricas expostas e roubo de sessão via XSS.",
      architecture: "Abordagem Purple Team completa: 1) Red Team desenvolveu exploit automatizado (`exploit_redteam.py`) comprovando 6 vetores críticos; 2) Blue Team reestruturou a arquitetura implementando fluxo OAuth 2.0 Authorization Code com PKCE (S256), padrão Backend-for-Frontend (BFF) com cookies `HttpOnly/Secure/SameSite`, criptografia assimétrica RS256 via endpoint `/jwks.json` e proteção anti-replay no TOTP.",
      highlights: [
        "Exploração Red Team documentada: captura de semente TOTP desprotegida, forjamento de JWT admin (escalada de privilégios de paciente para médico) e extração de token via DOM/Wireshark.",
        "Implementação Blue Team do padrão BFF: o Access Token JWT nunca é exposto ao JavaScript do navegador, eliminando exfiltração via XSS (`document.cookie`).",
        "Migração criptográfica de chaves simétricas compartilhadas (HS256) para assinatura assimétrica RSA (RS256) com distribuição pública de chaves via JWKS.",
        "Criptografia de banco de dados em repouso (`hospital.db`), rate-limiting contra força bruta e invalidação de códigos TOTP já utilizados para impedir Replay dentro da janela de 30s."
      ],
      metrics: "6 Vulnerabilidades Críticas Exploradas e 100% Mitigadas | OAuth 2.0 PKCE + RS256 | Conformidade RGPD/HIPAA"
    },
    "en": {
      title: "MedAuth ZeroTrust — Red/Blue Team IAM, OAuth 2.0 PKCE, BFF & 2FA TOTP",
      shortDesc: "Offensive Red Team audit and defensive Blue Team refactoring of hospital microservices using OAuth 2.0 + PKCE, HS256 to RS256/JWKS migration, BFF pattern, and TOTP 2FA.",
      scenario: "Security audit of an Electronic Health Record (EHR) microservice architecture (Auth Server on port 8000, Clinical Resource Server on port 8001) vulnerable to privilege escalation (patients modifying medical records), MFA seed leakage, exposed symmetric JWT keys, and XSS session hijacking.",
      architecture: "Full Purple Team lifecycle: 1) Red Team built an automated exploit suite (`exploit_redteam.py`) demonstrating 6 critical attack chains; 2) Blue Team re-architected the platform with OAuth 2.0 Authorization Code + PKCE (S256), Backend-for-Frontend (BFF) session handling with `HttpOnly/Secure/SameSite` cookies, asymmetric RS256 signing via `/jwks.json`, and stateful TOTP anti-replay.",
      highlights: [
        "Documented Red Team exploitation: unauthenticated TOTP seed leakage, admin JWT forgery (patient-to-doctor privilege escalation), and token interception in Wireshark.",
        "Blue Team BFF architecture: JWT Access Tokens remain strictly server-side, completely neutralizing client-side XSS token theft (`document.cookie`).",
        "Cryptographic migration from shared symmetric secrets (HS256) to asymmetric RSA signatures (RS256) verified dynamically through a public JWKS endpoint.",
        "At-rest database encryption (`hospital.db`), brute-force rate limiting, and single-use TOTP token blacklisting preventing 30-second window Replay attacks."
      ],
      metrics: "6 Critical Flaws Exploited & 100% Remediated | OAuth 2.0 PKCE + RS256 | GDPR/HIPAA Aligned"
    },
    "es": {
      title: "MedAuth ZeroTrust — Red/Blue Team IAM, OAuth 2.0 PKCE, BFF y 2FA TOTP",
      shortDesc: "Auditoría ofensiva (Red Team) y refactorización defensiva (Blue Team) de microservicios hospitalarios con OAuth 2.0 + PKCE, migración HS256 a RS256/JWKS, patrón BFF y 2FA TOTP.",
      scenario: "Auditoría de un portal hospitalario de historiales clínicos en microservicios (Autenticación en puerto 8000 y Servidor Clínico en puerto 8001) vulnerable a escalada de privilegios (paciente modificando diagnósticos), fuga de semillas MFA, claves JWT simétricas expuestas y robo de sesión por XSS.",
      architecture: "Ciclo Purple Team completo: 1) Red Team desarrolló un exploit automatizado (`exploit_redteam.py`) demostrando 6 vectores críticos; 2) Blue Team rediseñó la arquitectura aplicando OAuth 2.0 Authorization Code con PKCE (S256), patrón Backend-for-Frontend (BFF) con cookies `HttpOnly`, firma asimétrica RS256 vía `/jwks.json` y protección anti-replay en TOTP.",
      highlights: [
        "Explotación Red Team documentada: fuga de semilla TOTP sin autenticación, falsificación de JWT de médico (escalada de privilegios) y captura de tokens en Wireshark.",
        "Arquitectura defensiva BFF: los tokens JWT nunca llegan al JavaScript del navegador, erradicando el robo de sesión mediante XSS (`document.cookie`).",
        "Migración criptográfica de claves simétricas compartidas (HS256) a firma asimétrica RSA (RS256) con validación mediante endpoint público JWKS.",
        "Cifrado de base de datos en reposo (`hospital.db`), rate-limiting y bloqueo de reutilización de códigos TOTP dentro de la ventana de 30 segundos."
      ],
      metrics: "6 Vulnerabilidades Críticas Explotadas y 100% Mitigadas | OAuth 2.0 PKCE + RS256 | Cumplimiento RGPD"
    }
  },
  {
    id: "cyber-cai1b",
    code: "FORENSICS-06",
    track: "cai",
    badge: "Digital Forensics & Medical Crypto",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    reportPdf: null,
    stack: ["AES-256-CBC vs ECB", "ChaCha20", "VeraCrypt Forensics", "Hashcat (-m 13721)", "OpenSSL", "Python Forensic Script", "Linux dd / Loop Mount", "RGPD / ENS"],
    "pt-br": {
      title: "MedCrypt Forensics — Cifragem de Imagens Médicas & Perícia VeraCrypt",
      shortDesc: "Análise de vazamento visual do modo ECB em radiografias BMP, benchmark criptográfico AES-256-CBC vs Camellia-256 vs ChaCha20 e perícia forense com quebra e recuperação de volume VeraCrypt.",
      scenario: "Consultoria para um complexo hospitalar multisede que transmitia radiografias BMP sem proteção adequada (risco de sanções RGPD) e sofreu um incidente de segurança envolvendo um volume criptografado VeraCrypt apreendido (`drive.vc`) contendo documentos confidenciais exfiltrados.",
      architecture: "Dividido em duas frentes: 1) Engenharia Criptográfica para imagens médicas comparando modos de operação (ECB vs CBC) e cifras simétricas pós-Grover (AES-256-CBC, Camellia-256-CBC e cifra de fluxo ChaCha20) preservando os 54 bytes do cabeçalho BMP para prova visual; 2) Perícia Forense Digital para extração de cabeçalho VeraCrypt, cracking com Hashcat e montagem loop em Linux.",
      highlights: [
        "Demonstração visual contundente da falha do modo ECB (`fuga_ecb.bmp`): o contorno anatômico da radiografia permanece visível mesmo cifrado devido a blocos idênticos.",
        "Benchmark empírico em arquivos de 500 KB e 1.500 KB comprovando a superioridade do AES-256-CBC (com aceleração AES-NI) e ChaCha20 (0 bytes de padding em dispositivos móveis).",
        "Extração forense dos primeiros 512 bytes do volume apreendido `drive.vc`, identificação de parâmetros PIM e quebra da senha via Hashcat.",
        "Automação forense em Python (`script_recuperacion_forense.py`) para decifragem, verificação de integridade SHA-256 e recuperação de 100% dos arquivos ocultos na partição."
      ],
      metrics: "100% Recuperação Forense VeraCrypt | Benchmark AES-256 vs Camellia vs ChaCha20 | Prova Visual ECB"
    },
    "en": {
      title: "MedCrypt Forensics — Medical Imaging Encryption & VeraCrypt Forensics",
      shortDesc: "Visual information leakage analysis of ECB mode on BMP X-rays, cryptographic benchmarking of AES-256-CBC vs Camellia-256 vs ChaCha20, and forensic cracking/recovery of a seized VeraCrypt volume.",
      scenario: "Security consulting for a multi-site hospital complex transmitting uncompressed BMP X-rays (facing severe GDPR penalties) and responding to an incident involving a seized VeraCrypt encrypted container (`drive.vc`) holding exfiltrated confidential files.",
      architecture: "Two-pronged execution: 1) Medical Imaging Cryptography evaluating block cipher modes (ECB vs CBC) and post-Grover 256-bit primitives (AES-256-CBC, Camellia-256-CBC, and ChaCha20 stream cipher) while preserving the 54-byte BMP header for visual proof; 2) Digital Forensics extracting the VeraCrypt volume header, cracking credentials with Hashcat, and mounting the raw image.",
      highlights: [
        "Conclusive visual proof of ECB mode failure (`fuga_ecb.bmp`): the patient's thoracic X-ray silhouette remains clearly visible due to identical plaintext block mapping.",
        "Empirical benchmarking on 500 KB and 1,500 KB medical images proving optimal performance with AES-256-CBC (AES-NI) and ChaCha20 (zero padding overhead on mobile).",
        "Forensic extraction of the 512-byte header from `drive.vc`, PIM parameter analysis, and password recovery using Hashcat.",
        "Automated Python forensic recovery (`script_recuperacion_forense.py`) decrypting the volume, verifying SHA-256 integrity hashes, and rescuing 100% of hidden files."
      ],
      metrics: "100% VeraCrypt Forensic Data Recovery | AES-256 vs Camellia vs ChaCha20 Benchmark | ECB Leak Proof"
    },
    "es": {
      title: "MedCrypt Forensics — Cifrado de Imágenes Médicas y Peritaje VeraCrypt",
      shortDesc: "Demostración de fuga visual del modo ECB en radiografías BMP, comparativa AES-256-CBC vs Camellia-256 vs ChaCha20 y análisis forense con recuperación de un volumen VeraCrypt incautado.",
      scenario: "Consultoría para un complejo hospitalario que almacenaba radiografías BMP sin cifrado adecuado (riesgo de multas RGPD) y enfrentaba un incidente forense con un soporte cifrado VeraCrypt incautado (`drive.vc`) con documentación confidencial.",
      architecture: "Ejecución en dos áreas: 1) Criptografía aplicada a imagen médica evaluando modos de operación (ECB vs CBC) y algoritmos de 256 bits resistentes a Grover (AES-256-CBC, Camellia-256-CBC y ChaCha20) conservando los 54 bytes de cabecera BMP; 2) Informática Forense extrayendo el hash de cabecera VeraCrypt, cracking con Hashcat y montaje pericial.",
      highlights: [
        "Demostración visual de la vulnerabilidad del modo ECB (`fuga_ecb.bmp`): la silueta torácica de la radiografía sigue siendo visible por la repetición de bloques idénticos.",
        "Benchmark sobre imágenes de 500 KB y 1.500 KB justificando la adopción de AES-256-CBC y ChaCha20 (0 bytes de overhead por padding).",
        "Extracción forense de la cabecera del volumen `drive.vc`, análisis de parámetros PIM y recuperación de clave mediante Hashcat.",
        "Script forense en Python (`script_recuperacion_forense.py`) que automatiza el descifrado, verifica hashes SHA-256 y rescata el 100% de las evidencias."
      ],
      metrics: "100% Recuperación Forense VeraCrypt | Benchmark AES-256 vs Camellia vs ChaCha20 | Evidencia ECB"
    }
  },
  {
    id: "cyber-cai2b",
    code: "STEGO-FORENSICS-07",
    track: "cai",
    badge: "Steganography & ECB Forensics",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    reportPdf: null,
    stack: ["LSB Steganography", "zsteg & OpenStego (Steganalysis)", "DCT / DWT Watermarking", "BMP Header Reconstruction (dd)", "AES-256-ECB Cryptanalysis", "Python (Pillow/NumPy)", "Kali Linux"],
    "pt-br": {
      title: "StegoMed Audit — Esteganografia LSB, Estegoanálise & Vazamento Forense ECB",
      shortDesc: "Auditoria de ocultação de assinaturas médicas via LSB em radiografias, testes de destruição por ruído/recorte, estegoanálise com zsteg e reconstituição forense de assinatura cifrada em AES-ECB.",
      scenario: "O Hospital Day consultou a equipe sobre dois problemas críticos: 1) A viabilidade de usar Esteganografia LSB (Least Significant Bit) para embutir assinaturas digitais médicas dentro de radiografias BMP; 2) Avaliar se o furto de um notebook contendo imagens de assinaturas manuscritas e NIFs de médicos cifradas com AES-256 representava risco de vazamento.",
      architecture: "Laboratório prático em Python (`esteganografia_demo.py`) e Kali Linux combinando cálculo matemático de capacidade espacial LSB, testes de robustez contra ataques de processamento de imagem (Salt & Pepper noise e Cropping), estegoanálise automatizada (`zsteg`, VSL, OpenStego) e perícia forense de reconstrução de cabeçalhos binários BMP (`dd`).",
      highlights: [
        "Comprovação de que o método LSB espacial puro possui confidencialidade zero (extração instantânea sem chave via `zsteg`) e baixa robustez contra ruído Salt & Pepper ou recorte.",
        "Recomendação arquitetural de Marca d'Água Digital Robusta no domínio da frequência (Transformadas DCT / DWT) combinada com assinatura criptográfica prévia.",
        "Perícia decisiva no incidente do notebook furtado: identificamos que o hospital usou AES-256 em modo ECB (`Firma1Cifrada.bmp`).",
        "Reconstituição forense injetando um cabeçalho BMP padrão de 54 bytes (`cabecalho.bin`) no payload cifrado, revelando visualmente a assinatura manuscrita e o NIF do médico sem precisar da chave de 256 bits (`assinatura_revelada.bmp`)."
      ],
      metrics: "Reconstituição Forense AES-256-ECB Sem Chave | Estegoanálise zsteg/OpenStego | Arquitetura DCT/DWT"
    },
    "en": {
      title: "StegoMed Audit — LSB Steganography, Steganalysis & ECB Forensic Leak",
      shortDesc: "Security audit of LSB medical signature hiding in X-rays, noise/crop robustness testing, zsteg steganalysis, and forensic reconstruction of an AES-ECB encrypted signature without the key.",
      scenario: "Hospital Day requested an expert assessment on two critical issues: 1) The viability of using LSB (Least Significant Bit) steganography to embed doctor signatures inside BMP X-rays; 2) Determining whether a stolen laptop containing BMP images of doctors' handwritten signatures and tax IDs (NIFs) encrypted with 256-bit AES posed a data breach risk.",
      architecture: "Practical laboratory in Python (`esteganografia_demo.py`) and Kali Linux combining mathematical LSB capacity modeling, image distortion resilience tests (Salt & Pepper noise and Cropping), automated steganalysis (`zsteg`, VSL, OpenStego), and binary BMP header forensic reconstruction (`dd`).",
      highlights: [
        "Proved that raw spatial LSB provides zero confidentiality (instant keyless extraction via `zsteg`) and fails under minor Salt & Pepper noise or cropping.",
        "Architected a frequency-domain Robust Digital Watermarking replacement (DCT / DWT transforms) paired with prior cryptographic signing.",
        "Decisive forensic finding on the stolen laptop incident: proved the hospital encrypted the signature images using AES-256 in ECB mode (`Firma1Cifrada.bmp`).",
        "Forensically grafted a standard 54-byte BMP header (`cabecalho.bin`) onto the encrypted body, visually revealing the doctor's handwritten signature and NIF without knowing the 256-bit key (`assinatura_revelada.bmp`)."
      ],
      metrics: "Keyless AES-256-ECB Visual Recovery | zsteg/OpenStego Steganalysis | DCT/DWT Watermarking Design"
    },
    "es": {
      title: "StegoMed Audit — Esteganografía LSB, Estegoanálisis y Fuga Forense ECB",
      shortDesc: "Auditoría de ocultación de firmas médicas mediante LSB en radiografías, pruebas de ruido/recorte, estegoanálisis con zsteg y reconstrucción forense de firma cifrada en AES-ECB sin la clave.",
      scenario: "El Hospital Day solicitó asesoramiento experto sobre dos problemas críticos: 1) La viabilidad de ocultar firmas médicas en radiografías BMP mediante Esteganografía LSB; 2) Evaluar si el robo de un portátil con imágenes BMP de firmas manuscritas y NIFs de médicos cifradas con AES de 256 bits suponía una brecha de confidencialidad.",
      architecture: "Laboratorio práctico en Python (`esteganografia_demo.py`) y Kali Linux que integra cálculo de capacidad espacial LSB, pruebas de robustez frente a ruido Salt & Pepper y recorte (Crop), estegoanálisis (`zsteg`, VSL, OpenStego) y reconstrucción forense de cabeceras binarias BMP (`dd`).",
      highlights: [
        "Demostración de que el método LSB espacial puro carece de confidencialidad (extracción instantánea sin clave con `zsteg`) y se destruye ante ruido Salt & Pepper o recortes.",
        "Propuesta arquitectónica basada en Marca de Agua Robusta en el dominio de la frecuencia (DCT / DWT) combinada con firma criptográfica previa.",
        "Hallazgo forense crítico en el incidente del portátil robado: se demostró que el cifrado AES-256 se aplicó en modo ECB (`Firma1Cifrada.bmp`).",
        "Reconstrucción pericial inyectando los 54 bytes de una cabecera BMP estándar (`cabecalho.bin`) sobre el cuerpo cifrado, revelando visualmente la firma manuscrita y el NIF del médico sin poseer la clave (`assinatura_revelada.bmp`)."
      ],
      metrics: "Recuperación Visual AES-256-ECB Sin Clave | Estegoanálisis zsteg/OpenStego | Diseño DCT/DWT"
    }
  },
  {
    id: "cyber-cai1a",
    code: "CRYPTANALYSIS-08",
    track: "cai",
    badge: "Salted Hashes & HMAC Security",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=800",
    reportPdf: null,
    secondaryreportPdf: null,
    stack: ["SHA-256 Salted Hashes", "Hashcat (-m 1410 / -m 1420)", "Base64 / Hex Decoding", "HMAC 32-bit Brute-Force", "Replay Attack PoC", "TLS 1.3 + ECDHE Redesign", "Python"],
    "pt-br": {
      title: "SaltBreaker & HMAC-Shield — Criptoanálise SHA-256 e Defesa Anti-Replay",
      shortDesc: "Auditoria de hashes SHA-256 salgados em Base64, engenharia social reversa e prova matemática de colapso de chaves HMAC de 32 bits em 4,2 segundos com redesign para TLS 1.3.",
      scenario: "Consultoria de segurança bancária dividida em dois desafios: 1) Auditar uma base de dados contendo hashes SHA-256 em Base64 com salts numéricos e comentários informais de funcionários; 2) Avaliar a segurança de um app bancário que autenticava transferências via HMAC usando chaves secretas de 32 bits entregues em pendrive físico.",
      architecture: "Scripts de auditoria criptográfica em Python (`audit_cai1.py`) e ataques direcionados no Kali Linux com Hashcat (`-m 1410` para `sha256($pass.$salt)` e `-m 1420` para `sha256($salt.$pass)`), seguidos de modelagem de exaustão do espaço de chaves de $2^{32}$ e arquitetura defensiva anti-replay.",
      highlights: [
        "Decodificação de Base64 para Hexadecimal, identificação do esquema de concatenação do salt (`pass+salt` vs `salt+pass`) e recuperação de 100% das credenciais dos colaboradores.",
        "Demonstração de como metadados informais na tabela de usuários serviram de vetor de engenharia social reversa para reduzir o espaço de busca a segundos.",
        "Criptoanálise do HMAC de 32 bits ($4,29 \\times 10^9$ chaves): prova de que um PC padrão esgota a chave em ~1h10min e um cluster GPU/ASIC quebra em apenas 4,2 segundos.",
        "Prova de Conceito de Replay Attack duplicando transferências bancárias legítimas e redesign completo com TLS 1.3 (ECDHE), HMAC-SHA256 de 256 bits e Nonces em cache distribuído."
      ],
      metrics: "100% Hashes Salgados Auditados | Quebra HMAC 32-bit em 4,2s (GPU) | Redesign TLS 1.3 + Nonces"
    },
    "en": {
      title: "SaltBreaker & HMAC-Shield — SHA-256 Cryptanalysis & Anti-Replay Defense",
      shortDesc: "Audit of Base64 salted SHA-256 hashes, reverse social engineering analysis, and mathematical proof of 32-bit HMAC key exhaustion in 4.2 seconds with a TLS 1.3 architectural redesign.",
      scenario: "Banking security consultancy addressing two challenges: 1) Auditing a leaked database containing Base64-encoded SHA-256 hashes, numeric salts, and informal employee hint comments; 2) Assessing the security of a mobile banking app signing transfers with a 32-bit HMAC key distributed via physical USB drives.",
      architecture: "Cryptographic auditing scripts in Python (`audit_cai1.py`) paired with targeted Hashcat attacks on Kali Linux (`-m 1410` for `sha256($pass.$salt)` and `-m 1420` for `sha256($salt.$pass)`), key-space exhaustion modeling ($2^{32}$), and an anti-replay protocol redesign.",
      highlights: [
        "Base64-to-Hex decoding, salt concatenation order identification (`pass+salt` vs `salt+pass`), and 100% recovery of non-compliant employee passwords.",
        "Demonstrated how informal comment fields in user tables act as fatal reverse social engineering vectors, collapsing cracking time to seconds.",
        "32-bit HMAC cryptanalysis ($4.29 \\times 10^9$ keys): proved exhaustion in ~1h10m on a standard CPU and just 4.2 seconds on a high-end GPU/ASIC rig.",
        "Replay Attack PoC duplicating valid wire transfers and full architectural redesign using TLS 1.3 (ECDHE), 256-bit HMAC keys, and distributed Nonce caches."
      ],
      metrics: "100% Salted Hashes Cracked | 32-bit HMAC Broken in 4.2s (GPU) | TLS 1.3 + Nonce Redesign"
    },
    "es": {
      title: "SaltBreaker & HMAC-Shield — Criptoanálisis SHA-256 y Defensa Anti-Replay",
      shortDesc: "Auditoría de hashes SHA-256 con salt en Base64, ingeniería social inversa y demostración de ruptura de claves HMAC de 32 bits en 4,2 segundos con rediseño hacia TLS 1.3.",
      scenario: "Consultoría de seguridad bancaria con dos objetivos: 1) Auditar una base de datos con resúmenes SHA-256 en Base64, valores de salt numéricos y comentarios informales de empleados; 2) Evaluar la seguridad de una app bancaria que firmaba transferencias con HMAC usando una clave secreta de 32 bits distribuida en pendrive físico.",
      architecture: "Scripts de auditoría criptográfica en Python (`audit_cai1.py`) y ataques dirigidos en Kali Linux con Hashcat (`-m 1410` para `sha256($pass.$salt)` y `-m 1420` para `sha256($salt.$pass)`), modelado de agotamiento de espacio de claves ($2^{32}$) y rediseño anti-replay.",
      highlights: [
        "Decodificación Base64 a Hexadecimal, identificación del orden de concatenación del salt (`pass+salt` vs `salt+pass`) y recuperación del 100% de las contraseñas.",
        "Demostración de cómo los campos de comentarios informales actúan como vector crítico de ingeniería social inversa.",
        "Criptoanálisis del HMAC de 32 bits ($4,29 \\times 10^9$ claves): agotamiento en ~1h10min en un PC estándar y en apenas 4,2 segundos en hardware GPU/ASIC.",
        "Prueba de concepto de Replay Attack duplicando transferencias y rediseño arquitectónico con TLS 1.3 (ECDHE), claves HMAC de 256 bits y caché de Nonces."
      ],
      metrics: "100% Hashes con Salt Auditados | Ruptura HMAC 32-bit en 4,2s | Rediseño TLS 1.3 + Nonces"
    }
  },
  {
    id: "cyber-cai0a",
    code: "CRED-AUDIT-09",
    track: "cai",
    badge: "Password Policy & CVSS v3.1",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
    reportPdf: null,
    stack: ["Hashcat & John the Ripper", "SHA-256 / SHA-1 / MD5", "CVSS v3.1 Risk Scoring", "Python Password Auditor", "Wordlists (RockYou / RAE)", "Rule-Based Cracking", "Kali Linux"],
    "pt-br": {
      title: "SentinelPass — Auditoria Criptográfica de Credenciais Bancárias",
      shortDesc: "Identificação de primitivas de hash, quebra de credenciais via ataques de dicionário/regras (Hashcat), auditoria de conformidade de política de senhas e pontuação de risco CVSS v3.1.",
      scenario: "A Direção de Segurança do Banco Santander España estabeleceu uma política formal de complexidade de senhas, mas não implementou validação técnica (enforcement) no sistema. Três contas suspeitas de funcionários precisavam ser auditadas a partir de seus hashes para verificar conformidade e medir o risco institucional.",
      architecture: "Metodologia de auditoria ofensiva e governança em Kali Linux e Python (`audit_passwords.py`): identificação do comprimento em bits dos resumos criptográficos, ataques com dicionários espanhóis (RAE), globais (`rockyou.txt`) e mutação por regras (Leet Speak / sufixos), seguidos de cálculo de severidade CVSS v3.1.",
      highlights: [
        "Identificação precisa dos algoritmos por análise de entropia e comprimento hexadecimal (MD5 128-bit, SHA-1 160-bit, SHA-256 256-bit).",
        "Execução de 3 estratégias de cracking: Dicionário léxico RAE, Wordlist global RockYou e Ataque Híbrido baseado em regras contextualizadas (OSINT interno).",
        "Comprovação de violação das regras de comprimento e grupos de caracteres nas contas auditadas.",
        "Classificação formal da vulnerabilidade estrutural com métricas CVSS v3.1 e plano de remediação com Argon2id/PBKDF2, MFA e bloqueio de senhas vazadas (HIBP)."
      ],
      metrics: "3/3 Contas Auditadas e Recuperadas | Scoring Formal CVSS v3.1 | Remediação Argon2id + MFA"
    },
    "en": {
      title: "SentinelPass — Banking Credential & Password Policy Audit",
      shortDesc: "Hash primitive identification, credential recovery via dictionary/rule-based attacks (Hashcat), password policy compliance auditing, and CVSS v3.1 risk scoring.",
      scenario: "The Information Security Directorate at Banco Santander España established a formal password complexity policy but lacked technical system enforcement. Three flagged employee accounts needed cryptographic auditing from their raw hashes to verify policy compliance and quantify institutional risk.",
      architecture: "Offensive auditing and governance methodology on Kali Linux and Python (`audit_passwords.py`): bit-length hash primitive identification, Spanish lexical dictionaries (RAE), global wordlists (`rockyou.txt`), and rule-based mutation attacks, followed by formal CVSS v3.1 severity scoring.",
      highlights: [
        "Accurate hash algorithm identification via bit-length and hex structure analysis (128-bit MD5, 160-bit SHA-1, 256-bit SHA-256).",
        "Execution of 3 cracking strategies: Spanish RAE dictionary attack, global RockYou wordlist attack, and OSINT-driven rule-based mutation.",
        "Formal proof of password policy violations across minimum length and character-group complexity requirements.",
        "CVSS v3.1 vulnerability scoring and enterprise remediation roadmap introducing Argon2id/PBKDF2, MFA enforcement, and breached-password filtering."
      ],
      metrics: "3/3 Flagged Accounts Cracked & Audited | Formal CVSS v3.1 Scoring | Argon2id + MFA Roadmap"
    },
    "es": {
      title: "SentinelPass — Auditoría Criptográfica de Credenciales Bancarias",
      shortDesc: "Identificación de funciones hash, recuperación de credenciales mediante ataques de diccionario y reglas (Hashcat), auditoría de cumplimiento normativo y evaluación CVSS v3.1.",
      scenario: "La Dirección de Seguridad del Banco Santander España definió una política formal de contraseñas sin validación técnica (enforcement) en el sistema. Se auditaron tres cuentas sospechosas de empleados a partir de sus hashes para verificar el cumplimiento y evaluar el riesgo corporativo.",
      architecture: "Metodología de auditoría ofensiva y gobernanza en Kali Linux y Python (`audit_passwords.py`): identificación de primitivas por longitud en bits, ataques con diccionarios RAE, listas globales (`rockyou.txt`) y reglas de mutación dirigidas, junto con valoración de riesgo CVSS v3.1.",
      highlights: [
        "Identificación exacta de algoritmos criptográficos por longitud hexadecimal (MD5 128 bits, SHA-1 160 bits, SHA-256 256 bits).",
        "Ejecución de 3 técnicas de cracking: Diccionario léxico RAE, Wordlist global RockYou y Ataque Dirigido por reglas de mutación.",
        "Demostración técnica del incumplimiento de longitud mínima y complejidad de caracteres en las cuentas auditadas.",
        "Evaluación formal de riesgo con métricas CVSS v3.1 y plan de remediación empresarial con Argon2id/PBKDF2, MFA y validación de contraseñas comprometidas."
      ],
      metrics: "3/3 Cuentas Auditadas y Recuperadas | Evaluación Formal CVSS v3.1 | Plan Argon2id + MFA"
    }
  },
  {
    id: "cyber-cai0b",
    code: "MERKLE-CRYPTO-10",
    track: "cai",
    badge: "Merkle Trees & Hash Collisions",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    reportPdf: null,
    stack: ["Merkle Trees O(log N)", "SHA-256", "MD5 Chosen-Prefix Collisions", "Rogue CA Analysis", "fastcoll (Kali Linux)", "Python Implementation", "Blockchain / P2P Integrity"],
    "pt-br": {
      title: "MerkleGuard — Integridade Criptográfica, Árvores de Merkle & Colisões MD5",
      shortDesc: "Análise forense do ataque Rogue CA por colisão de prefixo escolhido em MD5 e implementação algorítmica de Árvores de Merkle em Python com auditoria de mutação O(log N).",
      scenario: "Investigação profunda sobre dois pilares da integridade da informação: 1) Como colisões matemáticas na função MD5 permitiram forjar Autoridades Certificadoras HTTPS (The Rogue CA Attack) e assinaturas do malware Flame; 2) Como verificar a integridade de grandes volumes de dados distribuídos com eficiência logarítmica usando Árvores de Merkle.",
      architecture: "Motor em Python (`merkle_demo.py`) que constrói Árvores de Merkle completas a partir de blocos de dados folhas, calcula nós intermediários e a Merkle Root, e executa auditoria diferencial de mutação comprovando a economia de processamento e banda ($O(\\log_2 N)$).",
      highlights: [
        "Dossiê técnico detalhando o ataque Chosen-Prefix Collision contra o algoritmo MD5 (construção de certificados X.509 distintos com a mesma assinatura RSA/MD5).",
        "Construção algorítmica e manual da Árvore de Merkle de 8 folhas (`['k','l','e','o','t','o','m','y']`), mapeando 4 nós de nível 1, 2 ramos de nível 2 e a Merkle Root.",
        "Auditoria de mutação: ao alterar a 7ª folha (`'m'` → `'x'`), provamos matematicamente que apenas 3 hashes intermediários + a raiz são recalculados (75% da árvore preservada em cache).",
        "Laboratório prático no Kali Linux com `fastcoll` gerando arquivos binários distintos com o mesmo resumo MD5 em segundos."
      ],
      metrics: "Complexidade de Verificação O(log₂ N) | 75% Cache Preservado na Mutação | Análise Rogue CA MD5"
    },
    "en": {
      title: "MerkleGuard — Cryptographic Integrity, Merkle Trees & MD5 Collisions",
      shortDesc: "Technical analysis of the MD5 Chosen-Prefix Collision Rogue CA attack and Python implementation of Merkle Trees with O(log N) mutation auditing.",
      scenario: "Deep-dive investigation into two pillars of information integrity: 1) How mathematical collisions in MD5 enabled forging HTTPS Certificate Authorities (The Rogue CA Attack) and Flame malware signatures; 2) How to verify massive distributed datasets with logarithmic efficiency using Merkle Trees.",
      architecture: "Python cryptographic engine (`merkle_demo.py`) constructing complete binary Merkle Trees from leaf data blocks, computing intermediate nodes and the Merkle Root, and performing differential mutation audits proving $O(\\log_2 N)$ bandwidth and compute savings.",
      highlights: [
        "Technical dossier breaking down Chosen-Prefix Collision attacks against MD5 (crafting distinct X.509 certificates sharing an identical RSA/MD5 signature).",
        "Algorithmic and mathematical construction of an 8-leaf Merkle Tree (`['k','l','e','o','t','o','m','y']`) across 4 level-1 nodes, 2 level-2 branches, and the Merkle Root.",
        "Mutation audit: upon modifying the 7th leaf (`'m'` → `'x'`), mathematically proved that only 3 intermediate hashes + the root require recalculation (75% of the tree cached).",
        "Practical Kali Linux laboratory using `fastcoll` to generate colliding binary files with identical MD5 digests in seconds."
      ],
      metrics: "O(log₂ N) Verification Complexity | 75% Tree Cache Preserved on Mutation | MD5 Rogue CA Analysis"
    },
    "es": {
      title: "MerkleGuard — Integridad Criptográfica, Árboles de Merkle y Colisiones MD5",
      shortDesc: "Análisis técnico del ataque Rogue CA por colisión de prefijo elegido en MD5 e implementación en Python de Árboles de Merkle con auditoría de mutación O(log N).",
      scenario: "Investigación sobre dos pilares de la integridad criptográfica: 1) Cómo las colisiones en MD5 permitieron falsificar Autoridades de Certificación HTTPS (The Rogue CA Attack) y firmas en el malware Flame; 2) Cómo verificar grandes volúmenes de datos distribuidos con eficiencia logarítmica mediante Árboles de Merkle.",
      architecture: "Motor en Python (`merkle_demo.py`) que construye Árboles de Merkle a partir de bloques hoja, calcula nodos intermedios y la Merkle Root, y ejecuta auditoría diferencial de mutación demostrando la eficiencia $O(\\log_2 N)$.",
      highlights: [
        "Dossier técnico sobre ataques de Colisión de Prefijo Elegido (Chosen-Prefix Collision) en MD5 para forjar certificados X.509.",
        "Construcción algorítmica y manual del Árbol de Merkle de 8 hojas (`['k','l','e','o','t','o','m','y']`), 4 nodos intermedios, 2 ramas y la Merkle Root.",
        "Auditoría de mutación: al modificar la 7ª hoja (`'m'` → `'x'`), se demuestra que solo 3 hashes intermedios + la raíz requieren recálculo (75% del árbol preservado en caché).",
        "Laboratorio práctico en Kali Linux con `fastcoll` generando colisiones MD5 reales en segundos."
      ],
      metrics: "Complejidad de Verificación O(log₂ N) | 75% Caché Preservada en Mutación | Dossier Rogue CA MD5"
    }
  },
  {
    id: "cyber-cai2a",
    code: "OPENPGP-PKI-11",
    track: "cai",
    badge: "Asymmetric Crypto & OpenPGP",
    image: "https://images.unsplash.com/photo-1526374870839-e155464bb9b2?auto=format&fit=crop&q=80&w=800",
    reportPdf: null,
    stack: ["OpenPGP (RFC 4880)", "GnuPG (GPG)", "Hybrid Encryption (RSA/ECC + AES-256)", "Digital Signatures", "ASCII Armor (.asc)", "Packet Inspection (--list-packets)", "Kali Linux"],
    "pt-br": {
      title: "PGP-TrustChannel — Criptografia Assimétrica Híbrida & Assinatura OpenPGP",
      shortDesc: "Estabelecimento de canal seguro fim-a-fim via GnuPG/OpenPGP combinando assinatura digital (autenticidade e não-repúdio) e cifragem híbrida (AES-256 + envelopamento de chave pública).",
      scenario: "Implementação de um fluxo de comunicação criptograficamente verificável e confidencial entre partes utilizando o padrão OpenPGP (GnuPG), garantindo simultaneamente Confidencialidade estrita, Autenticidade de origem, Integridade da mensagem e Não-Repúdio.",
      architecture: "Arquitetura de Criptografia Híbrida OpenPGP: geração de par de chaves assimétricas, importação e validação de fingerprint da chave pública do destinatário, assinatura digital do hash da mensagem com a chave privada do remetente, cifragem do payload com chave de sessão efêmera AES-256 e envelopamento da chave de sessão com a chave pública do receptor (`mensagem.txt.asc`).",
      highlights: [
        "Geração e exportação de chave pública em formato ASCII-Armored (`minha_chave_publica.asc`) para distribuição e verificação na cadeia de confiança (Web of Trust).",
        "Execução combinada de assinatura e cifragem (`gpg --encrypt --sign --armor`), protegendo o conteúdo contra interceptação e garantindo autoria matemática.",
        "Inspeção forense da estrutura interna dos pacotes criptográficos via `gpg --list-packets` (Public-Key Encrypted Session Key Packet, Symmetrically Encrypted Integrity Protected Data Packet e Signature Packet).",
        "Documentação técnica completa detalhando a diferença matemática entre operações de confidencialidade (chave pública do receptor) e assinatura digital (chave privada do emissor)."
      ],
      metrics: "Cifragem Híbrida RSA/ECC + AES-256 | Assinatura Digital com Não-Repúdio | Inspeção de Pacotes RFC 4880"
    },
    "en": {
      title: "PGP-TrustChannel — Hybrid Asymmetric Cryptography & OpenPGP Signing",
      shortDesc: "End-to-end secure communication channel using GnuPG/OpenPGP combining digital signatures (authenticity & non-repudiation) with hybrid encryption (AES-256 + public-key wrapping).",
      scenario: "Implementation of a cryptographically verifiable and confidential communication workflow using the OpenPGP standard (GnuPG), simultaneously guaranteeing strict Confidentiality, Origin Authenticity, Message Integrity, and Non-Repudiation.",
      architecture: "OpenPGP Hybrid Cryptography Architecture: asymmetric keypair generation, recipient public-key import and fingerprint verification, digital signing of the message digest with the sender's private key, payload encryption via an ephemeral AES-256 session key, and asymmetric wrapping of the session key with the recipient's public key (`mensagem.txt.asc`).",
      highlights: [
        "Generation and export of ASCII-Armored public keys (`minha_chave_publica.asc`) for distribution and Web of Trust verification.",
        "Combined sign-and-encrypt workflow (`gpg --encrypt --sign --armor`) protecting message confidentiality while proving mathematical authorship.",
        "Forensic packet inspection via `gpg --list-packets` verifying Public-Key Encrypted Session Key (PKESK), Symmetrically Encrypted Integrity Protected Data (SEIPD), and Signature packets.",
        "Comprehensive technical guide contrasting confidentiality primitives (recipient's public key) against digital signature primitives (sender's private key)."
      ],
      metrics: "Hybrid RSA/ECC + AES-256 Encryption | Non-Repudiation Digital Signature | RFC 4880 Packet Audit"
    },
    "es": {
      title: "PGP-TrustChannel — Criptografía Asimétrica Híbrida y Firma OpenPGP",
      shortDesc: "Canal de comunicación seguro extremo a extremo mediante GnuPG/OpenPGP combinando firma digital (autenticidad y no repudio) y cifrado híbrido (AES-256 + clave pública).",
      scenario: "Establecimiento de un canal de comunicación criptográficamente verificable y confidencial utilizando el estándar OpenPGP (GnuPG), garantizando simultáneamente Confidencialidad estricta, Autenticidad de origen, Integridad del mensaje y No Repudio.",
      architecture: "Arquitectura de Criptografía Híbrida OpenPGP: generación de par de claves asimétricas, importación y validación de huella digital (fingerprint) de la clave pública del destinatario, firma digital del resumen con la clave privada del emisor, cifrado del mensaje con clave de sesión efímera AES-256 y encapsulamiento asimétrico con la clave pública del receptor (`mensagem.txt.asc`).",
      highlights: [
        "Generación y exportación de clave pública en formato ASCII-Armored (`minha_chave_publica.asc`) para validación de identidad.",
        "Flujo combinado de firma y cifrado (`gpg --encrypt --sign --armor`) que blinda el contenido y certifica matemáticamente la autoría.",
        "Inspección de paquetes criptográficos mediante `gpg --list-packets` verificando paquetes PKESK, SEIPD y paquetes de firma digital.",
        "Documentación técnica detallada sobre criptografía híbrida y la dualidad entre cifrado (clave pública del receptor) y firma (clave privada del emisor)."
      ],
      metrics: "Cifrado Híbrido RSA/ECC + AES-256 | Firma Digital con No Repudio | Auditoría de Paquetes RFC 4880"
    }
  }
];

