export interface ProjectItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  category?: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  ragFeature?: string;
  ragWorkflow?: string[];
  dataDrivenHighlight?: string;
  technologies: string[];
  keyFeatures: string[];
  resumePoints: string[];
  highlight: string;
  highlightsList: string[];
  outcome?: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  repoFileNotice?: string;
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
      name: 'DATA & ANALYTICS',
      code: 'ANALYTICS // 01',
      description: 'Foundational analytical programming, SQL querying, spreadsheet modeling, and business intelligence dashboards.',
      skills: [
        'Python',
        'SQL',
        'Excel',
        'Power BI',
        'Pandas',
        'NumPy',
        'Data Visualization',
      ],
    },
    {
      name: 'AI / MACHINE LEARNING',
      code: 'AI-ML // 02',
      description: 'Machine learning fundamentals, statistical profiling, pattern recognition, and predictive workflows.',
      skills: [
        'Machine Learning',
        'Scikit-learn',
        'Deep Learning',
        'Statistical Modeling',
        'Data Analysis',
      ],
    },
    {
      name: 'DEVELOPMENT',
      code: 'FULLSTACK // 03',
      description: 'Web application development, reactive user interfaces, and backend REST APIs.',
      skills: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'REST APIs',
      ],
    },
    {
      name: 'TOOLS',
      code: 'TOOLKIT // 04',
      description: 'Version control, interactive notebooks, developer environments, and analytical sharing platforms.',
      skills: [
        'GitHub',
        'VS Code',
        'Jupyter',
        'PowerPoint',
        'Canva',
      ],
    },
  ],

  projects: [
    {
      id: 'bagbill',
      number: '01',
      slug: 'bagbill',
      title: 'BAGBILL — DIGITAL BILLING & BUSINESS RECORD SYSTEM',
      subtitle: 'Digital Billing & Business Record System',
      category: 'Full-Stack | Business System | Web Application',
      shortDescription:
        'A full-stack digital billing and business record management system built for a real bag-selling business. It replaces handwritten bill-book records with digital billing, invoice generation, party management, product management, payment tracking, reports, and persistent business records.',
      overview:
        'BagBill is a full-stack digital billing and business record management system built for a real bag-selling business. It replaces handwritten bill-book records with digital billing, invoice generation, party management, product management, payment tracking, reports, and persistent business records. Built with React, TypeScript, Vite, Node.js, Express, and MongoDB, the system provides a complete workflow from itemized billing and automated GST calculations to customer ledgers and instant PDF invoice downloads—all operating on a clean empty-state architecture where new users start fresh with their own real business records.',
      problem:
        'Manual handwritten bill books and paper registers lead to calculation mistakes, inaccurate GST computations, invoice sequence errors, misplaced receipts, and tedious payment tracking for customer balances.',
      solution:
        'Built a comprehensive digital billing and business record management platform featuring automated price and GST calculations, sequential invoice generation, customer party ledgers, product management, business analytics, and instant PDF invoice downloads.',
      dataDrivenHighlight:
        'BagBill features a clean empty-state experience with zero mock, demo, sample, or seeded business records. The database and interface start completely fresh, enabling business owners to configure their profile and record their own real-world parties, products, bills, and payments with full persistence in MongoDB Atlas.',
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'REST APIs',
        'Recharts',
        'jsPDF',
      ],
      keyFeatures: [
        'Digital bill creation with automatic calculations',
        'GST calculation and invoice generation',
        'Sequential invoice numbering',
        'Bill Book and transaction history',
        'Party management and Party Ledger',
        'Product management',
        'Payment tracking',
        'Dashboard and business reports',
        'PDF invoice generation',
        'Persistent MongoDB storage',
        'REST API based backend',
        'Clean empty-state experience with NO mock/demo business data',
        'New users start with an empty system and add their own real business records',
      ],
      highlightsList: [
        'Digital bill creation & auto calculations',
        'GST calculation & sequential invoices',
        'Party management & Party Ledger',
        'Dashboard & business reports',
        'Clean empty-state with MongoDB persistence',
      ],
      resumePoints: [
        'Architected and built BagBill, a full-stack digital billing and business record management system using React, TypeScript, Vite, and Tailwind CSS.',
        'Engineered backend REST APIs with Node.js, Express, and Mongoose for sequential invoice generation, party ledgers, product management, and business reports.',
        'Designed persistent MongoDB Atlas schemas ensuring data integrity, payment tracking (paid/partial/unpaid), and automated GST computations.',
        'Delivered a clean empty-state production architecture with zero mock or demo records, enabling real business users to manage their own transactions.',
      ],
      highlight: 'Digital Invoicing · GST Calculations · MongoDB Atlas · REST APIs',
      outcome:
        'Eliminates manual paper bill books and calculation errors, accelerates invoice generation, and gives business owners instant visibility into billing records, outstanding balances, GST summaries, and customer ledgers.',
      image: '/projects/bagbill.png',
      githubUrl: 'https://github.com/rithii1702/BagBill',
      liveUrl: 'https://bag-bill-iota.vercel.app',
    },
    {
      id: 'data-detective',
      number: '02',
      slug: 'data-detective',
      title: 'DATA DETECTIVE AI',
      subtitle: 'AI-Powered Data Analytics & RAG Dataset Exploration Platform',
      category: 'AI | Data Analytics | Data Science',
      shortDescription:
        'AI-powered data analysis platform with dynamic dataset analysis, automated insights, visualizations, and RAG-based AI interaction.',
      overview:
        'Data Detective AI is an AI-powered data analysis platform that enables users to upload datasets, explore and clean data, generate dynamic visualizations and automated insights, and interact with their uploaded data using a RAG-based AI assistant. Built on a strictly data-driven architecture, the application starts in an intentional empty state and analyzes actual user-uploaded CSV datasets dynamically—computing health scores, missing values, duplicates, and EDA metrics without relying on static or mock data.',
      problem:
        'Users need an easier way to explore and understand complex datasets without spending hours writing repetitive exploratory data analysis code, configuring visualization scripts, or relying on canned static dashboards that fail on actual data.',
      solution:
        'Built Data Detective AI as a web-based AI data analysis platform that processes uploaded datasets and provides dynamic analysis, visualizations, automated insights, and natural-language interaction grounded directly in the user’s real data.',
      dataDrivenHighlight:
        'The application has been engineered to be strictly data-driven: when no dataset has been uploaded, the platform displays an intentional empty state prompting the user to upload a CSV. Dashboard metrics, charts, health scores, missing values, duplicate counts, and AI recommendations are never populated with fake values—all insights are dynamically generated only after a real dataset is uploaded and processed.',
      ragFeature:
        'Features a Retrieval-Augmented Generation (RAG) AI interaction layer integrated with the Google Gemini API. When users ask questions, the system retrieves relevant structural and statistical context directly from the uploaded dataset, ensuring responses are context-aware and strictly grounded in the user’s actual data rather than hallucinated.',
      ragWorkflow: [
        'User uploads dataset',
        'Dataset is processed',
        'Relevant information is retrieved',
        'User asks a question',
        'Relevant dataset context is provided to the AI',
        'AI generates a context-aware response',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express',
        'Gemini AI',
        'RAG',
        'Data Analytics',
        'REST API',
      ],
      keyFeatures: [
        'CSV dataset upload with automated schema parsing and structure detection',
        'Dynamic dataset exploration and automated EDA',
        'Missing-value analysis and duplicate-row detection',
        'Dataset quality and health score analysis',
        'Automated data cleaning and sanitization',
        'Dynamic data visualizations with interactive Recharts',
        'Automated insights and data storytelling identifying key trends',
        'AI-powered data interaction with conversational assistance',
        'RAG-based contextual question answering over uploaded datasets',
        'Gemini AI integration for grounded generative intelligence',
        'Dataset-aware AI assistant with zero mock-data dependencies',
        'Analysis generated dynamically and exclusively from user-uploaded data',
      ],
      highlightsList: [
        'Upload and analyze real datasets',
        'Automated EDA and data-quality analysis',
        'Dynamic visualizations and insights',
        'RAG-based AI data interaction',
        'Dataset-aware AI assistant',
      ],
      resumePoints: [
        'Architected Data Detective AI, a full-stack data analytics platform featuring automated EDA, dynamic visualizations, and RAG-based AI interaction.',
        'Engineered a data-driven React/TypeScript frontend with zero-mock empty states, dynamically computing health scores, missing values, and charts upon dataset upload.',
        'Implemented a Node.js/Express backend integrating Google Gemini API and a custom RAG retrieval pipeline for context-grounded dataset Q&A.',
        'Built automated data cleaning routines, duplicate-row detection, and interactive Recharts visualizations for rapid exploratory analysis.',
      ],
      highlight: 'Upload Real Data · Automated EDA · RAG Contextual Q&A · Dynamic Visualizations',
      outcome:
        'Delivers an interactive, data-driven analytics platform that turns raw user-uploaded CSV datasets into clean data profiles, dynamic visualizations, and context-aware AI insights without any reliance on synthetic or static mock data.',
      image: '/projects/data-detective.png',
      githubUrl: 'https://github.com/rithii1702/data-detective-ai',
      liveUrl: 'https://data-detective-ai.vercel.app',
    },
    {
      id: 'ecommerce-sales',
      number: '03',
      slug: 'ecommerce-sales',
      title: 'E-COMMERCE SALES ANALYSIS',
      subtitle: 'Sales Performance, Revenue Trends & Business Insights',
      category: 'Data Analytics',
      shortDescription:
        'Excel-based sales analysis exploring revenue, product performance, customer purchasing patterns, trends, KPIs, Pivot Tables, charts, and business insights.',
      overview:
        'E-Commerce Sales Analysis is an in-depth data analytics project focused on turning raw transactional records into actionable business intelligence using Microsoft Excel. Utilizing structured data cleaning, Pivot Tables, dynamic charts, and executive KPI summaries, the analysis reveals product sales distributions, seasonal revenue trends, and customer buying cycles. The complete Excel .xlsx project file is available in the GitHub repository.',
      problem:
        'Modern e-commerce platforms generate high volumes of transactional records across diverse product lines and regions. Without structured reporting and dynamic KPI visualization, businesses struggle to recognize seasonal sales trends, evaluate product margin performance, and understand customer purchasing habits.',
      solution:
        'Conducted end-to-end data cleaning, data normalization, and statistical modeling in Microsoft Excel. Developed interactive Pivot Tables, calculated fields, and multi-chart dashboards to extract actionable trends in revenue, order volumes, and customer behavior.',
      technologies: ['Microsoft Excel', 'Pivot Tables', 'Data Analysis', 'KPI Dashboards'],
      keyFeatures: [
        'Complete .xlsx Excel workbook with formulas, Pivot Tables, and charts available on GitHub',
        'Data cleaning, transformation, and structuring of raw transactional e-commerce records',
        'Revenue trend analysis and monthly/quarterly sales performance evaluation',
        'Pivot Table breakdown analyzing category sales, product rankings, and profit margins',
        'Customer purchasing pattern discovery and order distribution modeling',
        'Executive KPI dashboard visualizing core business metrics and financial insights',
      ],
      highlightsList: [
        'Complete .xlsx File on GitHub',
        'Pivot Tables & Dynamic Charts',
        'Revenue & Profit Margin KPIs',
        'Customer Purchasing Trends',
      ],
      resumePoints: [
        'Analyzed e-commerce transactional data using Microsoft Excel to uncover revenue trends, product rankings, and seasonal buying patterns.',
        'Structured complex datasets using Pivot Tables, VLOOKUP/INDEX-MATCH, and custom formulas for granular business intelligence.',
        'Designed interactive executive dashboards highlighting core financial KPIs, sales distributions, and category performance.',
        'Documented analysis methodology and published the complete workbook (.xlsx) to GitHub for public review and reproducibility.',
      ],
      highlight: 'Excel .xlsx on GitHub · Pivot Tables · Revenue Analysis · Business KPIs',
      outcome:
        'Delivered executive-level clarity into top revenue contributors, category profitability, and customer purchasing behaviors through dynamic Excel dashboards. The complete .xlsx workbook is hosted and documented on GitHub.',
      image: '/projects/ecommerce-sales.png',
      githubUrl: 'https://github.com/rithii1702/ecommerce-sales-analysis',
      repoFileNotice: 'Complete Excel .xlsx project file is available in the GitHub repository.',
    },
    {
      id: 'pizza-dashboard',
      number: '04',
      slug: 'pizza-dashboard',
      title: 'PIZZA SALES ANALYSIS',
      subtitle: 'Power BI Dashboard & Restaurant Performance Analytics',
      category: 'Data Analytics',
      shortDescription:
        'Interactive Power BI dashboard analyzing pizza sales performance, product trends, revenue, and business KPIs.',
      overview:
        'Pizza Sales Analysis is a dedicated business intelligence project developed in Power BI to evaluate the operational and sales performance of a restaurant business. The dashboard synthesizes order transactions to identify best-selling menu items, customer size preferences, peak ordering periods, and category revenue share. The complete .pbix Power BI project file is available in the GitHub repository.',
      problem:
        'Restaurant managers need precise visibility into customer demand cycles, peak ordering times, and underperforming menu categories to optimize staffing, manage ingredient inventory, and maximize daily revenue.',
      solution:
        'Analyzed comprehensive sales records and created a dynamic, interactive Power BI dashboard with DAX calculations and customized KPI metrics, delivering clear visibility into revenue performance, order volume patterns, best-selling products, and peak operational windows.',
      technologies: ['Power BI', 'DAX', 'Data Analytics', 'Business Intelligence'],
      keyFeatures: [
        'Interactive Power BI dashboard with dynamic filtering and KPI metric cards',
        'Complete .pbix Power BI project file available directly in the GitHub repository',
        'Revenue and order volume analysis across peak operational hours and days',
        'Customer preference breakdown by pizza category, size, and quantity',
        'Best-selling and worst-selling product performance rankings',
        'Interactive slicers and date filtering for deep-dive operational analysis',
      ],
      highlightsList: [
        'Complete .pbix File on GitHub',
        'Interactive Power BI Dashboard',
        'Revenue & Order Trend KPIs',
        'Peak Operational Hours Analysis',
      ],
      resumePoints: [
        'Built an end-to-end Power BI analytics dashboard to evaluate restaurant sales performance, revenue drivers, and order volumes.',
        'Engineered DAX measures to calculate average order value, total revenue, pizza category market share, and peak sales periods.',
        'Visualized menu item performance to pinpoint best-selling vs underperforming products and size preferences.',
        'Published the complete Power BI project (.pbix) and analytical dataset to GitHub for full transparency and reproducibility.',
      ],
      highlight: 'Power BI .pbix on GitHub · DAX Measures · Peak Hours Analysis · Revenue KPIs',
      outcome:
        'Enabled management to pinpoint peak order hours, optimize kitchen staffing schedules, and tailor inventory purchases based on proven customer size and flavor preferences. The full .pbix Power BI model is available in the GitHub repository.',
      image: '/projects/pizza-sales.png',
      githubUrl: 'https://github.com/rithii1702/pizza-sales-analysis',
      repoFileNotice: 'Complete .pbix Power BI project file is available in the GitHub repository.',
    },
  ],

  education: {
    institution: 'RajaRajeswari College of Engineering',
    degree: 'Bachelor of Engineering — Artificial Intelligence and Machine Learning',
    location: 'Bangalore, India',
    graduationYear: 'Expected Graduation: 2027',
    cgpa: '7.7 / 10',
    highlights: [
      'Core focus on Machine Learning, AI algorithms, database systems, and statistical data modeling.',
      'Active participant in technical workshops, data hackathons, and analytics competitions.',
      'Hands-on coursework covering Data Structures, Python for Data Science, and Database Management.',
    ],
  },

  certifications: [
    {
      title: 'Data Analytics and Visualization',
      category: 'Accenture (Forage Virtual Experience)',
      description:
        'Completed practical simulation in data discovery, data modeling, clean dataset architecture, and stakeholder KPI presentation.',
    },
    {
      title: 'Data Analytics Course Training',
      category: 'Professional Coursework',
      description:
        'Comprehensive practical training in Excel data manipulation, SQL relational querying, and Power BI business dashboard design.',
    },
    {
      title: 'Career Essentials in Data Analysis',
      category: 'Microsoft and LinkedIn Learning',
      description:
        'Foundational principles in data exploration, modern business intelligence reporting, and structured analytical problem-solving.',
    },
  ],
};
