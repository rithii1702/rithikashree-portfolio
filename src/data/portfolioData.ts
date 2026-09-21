export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryBadge: 'Full-Stack' | 'AI & Analytics' | 'Data Analytics' | 'Business Intelligence';
  featured?: boolean;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  resumePoints: string[];
  architecture?: {
    frontend: string;
    backend: string;
    database: string;
    workflows: string[];
  };
  highlights: string[];
  image: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface SkillGroup {
  name: string;
  code: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  graduationYear: string;
  cgpa: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  category: string;
  description: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    subrole: string;
    tagline: string;
    summary: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    resumePath: string;
  };
  skills: SkillGroup[];
  projects: ProjectItem[];
  education: EducationItem;
  certifications: CertificationItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'B. RITHIKASHREE',
    role: 'Aspiring Data Analyst',
    subrole: 'AI & ML Student',
    tagline: 'Turning data into meaningful insights through analysis, visualization, and technology.',
    summary:
      'B.E. Artificial Intelligence and Machine Learning student aspiring to build a career in Data Analytics. Hands-on experience in Excel, Power BI, Python, SQL, data cleaning, data analysis, and data visualization. Experienced in developing interactive dashboards, analyzing datasets, identifying trends and patterns, and building data-driven applications. Familiar with business reporting, KPI analysis, database management, and REST API-based applications.',
    location: 'Bangalore, India',
    phone: '+91 6363318845',
    email: 'rithii1702@gmail.com',
    linkedin: 'https://www.linkedin.com/in/b-rithika-shree-45b393353',
    github: 'https://github.com/rithii1702',
    resumePath: '/resume.pdf',
  },

  skills: [
    {
      name: 'Data Analytics',
      code: 'ANALYTICS // 01',
      description: 'Core analytical methods, spreadsheet modeling, business reporting, and dashboard visualization.',
      skills: [
        'Excel',
        'Google Sheets',
        'Power BI',
        'Tableau',
        'Data Cleaning',
        'Data Analysis',
        'Data Visualization',
        'KPI Analysis',
      ],
    },
    {
      name: 'Programming',
      code: 'CODE // 02',
      description: 'Foundational programming and relational query syntax for analytical data manipulation.',
      skills: ['Python', 'SQL (Basics)'],
    },
    {
      name: 'Databases',
      code: 'DATASTORE // 03',
      description: 'Document database management and persistent storage for business record records.',
      skills: ['MongoDB'],
    },
    {
      name: 'Web & Backend',
      code: 'FULLSTACK // 04',
      description: 'Full-stack application development for data entry, transaction systems, and reporting interfaces.',
      skills: [
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'REST APIs',
        'HTML',
        'CSS',
      ],
    },
    {
      name: 'AI & Machine Learning',
      code: 'AI-ML // 05',
      description: 'Machine learning fundamentals and intelligent workflows for dataset exploration and anomaly detection.',
      skills: ['Machine Learning (Basics)', 'AI-Assisted Analytics'],
    },
    {
      name: 'Tools',
      code: 'WORKFLOW // 06',
      description: 'Version control, code editors, and communication tools for analytical and design workflows.',
      skills: ['Git', 'GitHub', 'VS Code', 'PowerPoint', 'Canva'],
    },
  ],

  projects: [
    {
      id: 'bagbill',
      slug: 'bagbill',
      title: 'BagBill — Digital Billing and Business Record System',
      subtitle: 'Full-Stack Digital Billing Application & Business Record Management',
      category: 'Full-Stack Web & Business Systems',
      categoryBadge: 'Full-Stack',
      featured: false,
      shortDescription:
        'A full-stack digital billing application developed to replace manual business billing and record management with automated calculations, GST invoices, and cloud database persistence.',
      overview:
        'BagBill is a comprehensive digital billing and record management system developed to replace manual paper-based business billing. The application streamlines end-to-end business transactions: from creating GST-compliant customer invoices with automated line-item calculations to managing sequential numbering, party ledgers, product catalogs, and generating downloadable PDF invoices.',
      problem:
        'Manual billing and paper-based record keeping create significant overhead for businesses. They frequently lead to calculation errors, manual GST calculation mismatches, sequence misallocations, difficulty tracking customer payment balances, and lost paper records without centralized backups.',
      solution:
        'Engineered an integrated full-stack digital billing system utilizing React and TypeScript on the frontend, supported by Node.js and Express.js REST APIs, and backed by persistent MongoDB document storage. The platform automates all tax and pricing computations, enforces sequential invoice numbering, tracks client credit/debit in a dedicated Party Ledger, and produces instant PDF invoices.',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
      ],
      keyFeatures: [
        'GST invoice generation with automated tax calculations',
        'Automated line-item calculations and payment tracking',
        'Sequential invoice numbering system',
        'Downloadable PDF invoice generation',
        'Bill Book for complete transaction history',
        'Party Ledger for tracking customer and vendor balances',
        'Product Management module with pricing and inventory records',
        'Interactive business dashboard & analytical reporting',
        'Configurable business settings and profile management',
        'Persistent MongoDB storage with Express.js REST APIs',
      ],
      resumePoints: [
        'Developed a full-stack digital billing application to replace manual business billing and record management.',
        'Implemented GST invoice generation, automated calculations, payment tracking, sequential invoice numbering, and PDF invoice generation.',
        'Built Bill Book, Party Ledger, Product Management, Dashboard, Reports, and Settings modules with persistent MongoDB storage.',
        'Integrated React frontend with Express.js REST APIs and MongoDB for storing and retrieving business records.',
      ],
      architecture: {
        frontend: 'React with TypeScript providing real-time responsive forms, automatic price/tax calculations, and dynamic ledger filtering.',
        backend: 'Express.js on Node.js orchestrating RESTful endpoints for invoice sequencing, authentication, party management, and PDF compilation.',
        database: 'MongoDB providing flexible document storage across collections for invoices, products, customer ledger transactions, and audit settings.',
        workflows: [
          'User inputs invoice items; frontend computes subtotal, GST rates, and grand total automatically',
          'Express API validates input integrity and allocates the verified sequential invoice identifier',
          'Record is committed to MongoDB, updating the customer ledger and Bill Book simultaneously',
          'PDF invoice generator compiles clean, formatted billing receipts available for instant download',
        ],
      },
      highlights: [
        'Full-Stack Architecture',
        'GST Compliant',
        'PDF Generation',
        'Party Ledger',
        'Sequential Numbering',
        'MongoDB Persistence',
      ],
      image: '/projects/bagbill.png',
      githubUrl: 'https://github.com/rithii1702/BagBill',
    },
    {
      id: 'data-detective-ai',
      slug: 'data-detective-ai',
      title: 'Data Detective AI — AI-Assisted Data Analytics',
      subtitle: 'AI-Assisted Dataset Exploration, Pattern Recognition & Anomaly Detection',
      category: 'AI-Assisted Data Analytics',
      categoryBadge: 'AI & Analytics',
      featured: false,
      shortDescription:
        'An AI-assisted data analytics application designed to simplify dataset exploration, identify trends and patterns, and uncover anomalies.',
      overview:
        'Data Detective AI is an analytical tool built to assist data professionals in rapidly understanding raw, complex datasets. By blending algorithmic data processing with analytical visualization, the application facilitates quick discovery of underlying trends, data distributions, and potential outliers.',
      problem:
        'Unfamiliar datasets often contain hidden distributions, skewed variables, and subtle anomalies that take hours of repetitive exploratory coding to identify. Analysts need a systematic way to accelerate preliminary data diagnostics.',
      solution:
        'Constructed an AI-assisted analytics workflow that expedites dataset exploration through automated statistical profiling, feature correlation analysis, and anomaly detection routines, allowing data analysts to uncover meaningful patterns faster.',
      technologies: ['Python', 'AI/ML', 'Data Analysis', 'Data Visualization'],
      keyFeatures: [
        'AI-assisted dataset exploration workflow',
        'Automated exploratory data analysis and trend identification',
        'Pattern and relationship discovery across dataset variables',
        'Potential anomaly and outlier detection workflows',
        'Integrated analytical visualization for rapid decision support',
      ],
      resumePoints: [
        'Developed an AI-assisted data analytics application to simplify dataset exploration and uncover meaningful insights.',
        'Implemented data analysis and visualization workflows to identify trends, patterns, and potential anomalies in datasets.',
      ],
      highlights: [
        'Automated Exploration',
        'Pattern Discovery',
        'Anomaly Detection',
        'Data Visualization',
        'Python Workflows',
      ],
      image: '/projects/data-detective.png',
    },
    {
      id: 'ecommerce-sales-analysis',
      slug: 'ecommerce-sales-analysis',
      title: 'E-Commerce Sales Analysis',
      subtitle: 'Revenue Trends, Product Performance & Sales Pattern Analytics',
      category: 'Data Analytics & Business Reporting',
      categoryBadge: 'Data Analytics',
      featured: false,
      shortDescription:
        'Comprehensive data analytics project analyzing e-commerce sales to identify revenue trends, product performance, and sales patterns through interactive dashboards.',
      overview:
        'This project focuses on turning raw e-commerce transaction records into strategic business intelligence. Utilizing Excel for data cleaning and preliminary modeling alongside Power BI for dynamic visualization, the analysis reveals product sales distributions, customer buying cycles, and key revenue indicators.',
      problem:
        'Modern e-commerce platforms generate high volumes of transactional records across diverse product lines and regions. Without centralized reporting and KPI visualization, businesses struggle to recognize seasonal sales trends and evaluate product performance.',
      solution:
        'Executed rigorous data cleaning and structuring in Excel, followed by the development of an interactive Power BI dashboard highlighting key performance indicators, revenue movements, product rankings, and purchase patterns to drive data-driven decision-making.',
      technologies: [
        'Excel',
        'Power BI',
        'Data Cleaning',
        'Data Analysis',
        'KPI Analysis',
      ],
      keyFeatures: [
        'Data cleaning and preparation of transactional e-commerce records',
        'Revenue trend analysis across operational cycles',
        'Product performance evaluation and category breakdown',
        'Sales pattern identification and customer purchasing behavior',
        'Interactive KPI dashboard visualizing core business metrics',
        'Actionable data-driven business insights for inventory and sales strategy',
      ],
      resumePoints: [
        'Analyzed e-commerce sales data to identify revenue trends, product performance, and sales patterns.',
        'Built interactive dashboards to visualize key performance indicators and derive data-driven business insights.',
      ],
      highlights: [
        'Revenue Trends',
        'Product Performance',
        'Sales Patterns',
        'KPI Dashboard',
        'Business Insights',
      ],
      image: '/projects/ecommerce-sales.png',
    },
    {
      id: 'pizza-sales-dashboard',
      slug: 'pizza-sales-dashboard',
      title: 'Pizza Sales Analysis Dashboard',
      subtitle: 'Power BI Business Intelligence Dashboard & Restaurant Sales Analytics',
      category: 'Power BI / Business Intelligence',
      categoryBadge: 'Business Intelligence',
      featured: false,
      shortDescription:
        'An interactive Power BI dashboard analyzing sales data to evaluate revenue, order trends, customer preferences, and product performance.',
      overview:
        'A dedicated business intelligence project developed in Power BI to evaluate the operational and sales performance of a restaurant business. The dashboard synthesizes order transactions to identify best-selling menu items, customer size preferences, peak ordering periods, and category revenue share.',
      problem:
        'Restaurant managers need precise visibility into customer demand cycles, peak ordering times, and underperforming menu categories to optimize staffing, manage ingredient inventory, and maximize daily revenue.',
      solution:
        'Analyzed comprehensive sales records and created a dynamic, interactive Power BI dashboard delivering clear visibility into revenue performance, order volume patterns, best-selling products, and peak operational windows.',
      technologies: [
        'Power BI',
        'Data Analysis',
        'Data Visualization',
        'KPI Analysis',
      ],
      keyFeatures: [
        'Revenue analysis across order cycles and pizza categories',
        'Order volume trends and peak order periods identification',
        'Customer preferences breakdown by pizza size and crust type',
        'Product performance ranking highlighting best-selling items',
        'Category performance evaluation across classic, specialty, and supreme pizzas',
        'Interactive dashboard controls for filtering and deep-dive analysis',
      ],
      resumePoints: [
        'Analyzed sales data to evaluate revenue, order trends, customer preferences, and product performance.',
        'Built an interactive Power BI dashboard highlighting best-selling products, peak order periods, and category performance.',
      ],
      highlights: [
        'Revenue Analysis',
        'Order Trends',
        'Customer Preferences',
        'Best-Selling Products',
        'Peak Periods',
        'Category Performance',
      ],
      image: '/projects/pizza-sales.png',
    },
  ],

  education: {
    institution: 'RajaRajeswari College of Engineering',
    degree: 'Bachelor of Engineering — Artificial Intelligence and Machine Learning',
    location: 'Bangalore, India',
    graduationYear: 'Expected 2027',
    cgpa: '7.7',
    highlights: [
      'Core focus on Artificial Intelligence, Machine Learning, and Data Analytics',
      'Strong academic foundation with a cumulative grade point average of 7.7',
      'Hands-on project work in Python, SQL, Power BI, and full-stack applications',
    ],
  },

  certifications: [
    {
      title: 'Data Science and Analytics',
      category: 'Data Science',
      description:
        'Comprehensive training covering data cleaning, statistical modeling, exploratory data analysis, and deriving actionable analytical insights.',
    },
    {
      title: 'Data Visualization using Power BI',
      category: 'Business Intelligence',
      description:
        'Focused on building interactive executive dashboards, DAX queries, data modeling, and KPI performance visualizations.',
    },
    {
      title: 'AI for Beginners',
      category: 'Artificial Intelligence',
      description:
        'Foundational grounding in artificial intelligence concepts, machine learning algorithms, and real-world AI applications.',
    },
  ],
};
