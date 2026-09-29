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
      id: 'data-detective',
      number: '01',
      slug: 'data-detective',
      title: 'DATA DETECTIVE AI',
      subtitle: 'AI-Powered Data Analytics & RAG Dataset Exploration Platform',
      category: 'AI | Data Analytics | Data Science',
      shortDescription:
        'An AI-powered data analysis platform that helps users upload datasets, explore and analyze data, generate visualizations and insights, and interact with their data using natural language through a RAG-based AI assistant.',
      overview:
        'Data Detective AI is an AI-powered data analytics platform that helps users upload datasets, explore and clean data, perform exploratory data analysis, generate visualizations, and obtain meaningful insights. The platform features a Retrieval-Augmented Generation (RAG) interaction layer, allowing users to ask natural-language questions about their uploaded dataset and receive context-aware responses grounded in the available data.',
      problem:
        'Analyzing raw datasets often requires multiple manual steps, including checking data quality, performing EDA, creating visualizations, and interpreting results.',
      solution:
        'Built Data Detective AI to bring dataset processing, EDA, visualization, automated insights, and AI-assisted analysis into a single platform.',
      ragFeature:
        'Implemented a RAG-based AI interaction layer that retrieves relevant information from the uploaded dataset/context before generating responses, allowing users to ask questions about their data using natural language.',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express',
        'RAG',
        'Gemini AI',
        'Data Analytics',
      ],
      keyFeatures: [
        'Dataset upload and analysis with automated parsing and structure detection',
        'Automated EDA, statistical summaries, and metric comparisons',
        'Missing-value and duplicate detection with automated data cleaning tools',
        'Data visualization with dynamic interactive charts',
        'Automated insights and data storytelling identifying key trends',
        'AI-powered data interaction with conversational assistance',
        'RAG-based contextual question answering over uploaded datasets',
        'Gemini API integration for grounded generative intelligence',
        'Dataset management and exportable analytical reports',
      ],
      highlightsList: [
        'Dataset Upload & Analysis',
        'Automated EDA & Cleaning',
        'Interactive Data Visualizations',
        'RAG-Based Contextual Q&A',
        'Gemini AI Integration',
      ],
      resumePoints: [
        'Designed and developed the responsive web interface using React, TypeScript, and modern UI components.',
        'Engineered the end-to-end data analytics workflow including CSV processing, missing-value detection, and dynamic charting.',
        'Implemented the RAG-based AI interaction layer with Node.js, Express, and Google Gemini API to query uploaded datasets via natural language.',
        'Connected frontend components with backend data processing services through modular REST APIs.',
      ],
      highlight: 'RAG Contextual Q&A · Automated EDA · Gemini AI · Data Visualizations',
      outcome:
        'Created an interactive analytics platform that combines traditional data-analysis workflows with AI-assisted dataset exploration.',
      image: '/projects/data-detective.png',
      githubUrl: 'https://github.com/rithii1702/data-detective-ai',
      liveUrl: 'https://data-detective-ai.vercel.app',
    },
    {
      id: 'bagbill',
      number: '02',
      slug: 'bagbill',
      title: 'BAGBILL',
      subtitle: 'Digital Billing & Business Management',
      category: 'Full-Stack | Web App | Business System',
      shortDescription:
        'Full-stack billing application that digitizes invoice creation, product management, GST calculations, business settings, and billing records.',
      overview:
        'BagBill is a full-stack digital billing and business management application designed to help businesses create, manage, and organize invoices, products, parties, and billing records digitally instead of relying on manual bill books. It provides a complete workflow from automated GST calculations and invoice preview to sequential numbering and persistent party transaction records.',
      problem:
        'Manual billing and paper-based record keeping create significant overhead for businesses. They frequently lead to calculation errors, manual GST calculation mismatches, sequence misallocations, difficulty tracking customer payment balances, and lost paper records.',
      solution:
        'Engineered an integrated full-stack digital billing system with React, TypeScript, and Vite on the frontend and Node.js, Express, and MongoDB Atlas on the backend. The platform automates GST and price calculations, generates sequential invoice numbers, manages customer ledgers, and provides instant invoice summaries.',
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Node.js',
        'Express.js',
        'MongoDB Atlas',
        'REST APIs',
        'Render',
        'Vercel',
      ],
      keyFeatures: [
        'Digital invoice creation with live preview and automated calculations',
        'Product and party management with customer ledgers and rate tracking',
        'Automated GST/tax calculation supporting CGST, SGST, IGST, and round-offs',
        'Centralized Bill Book with billing history and status filtering',
        'Business settings and customizable invoice preferences',
        'Persistent data storage backed by MongoDB Atlas cloud database',
        'Full-stack REST API architecture connecting frontend and backend services',
        'Instant PDF invoice generation and export capabilities',
      ],
      highlightsList: [
        'Digital Invoice Creation',
        'Product & Party Management',
        'GST/Tax Calculation',
        'MongoDB Atlas Database',
        'Full-Stack REST APIs',
      ],
      resumePoints: [
        'Architected and built BagBill, a full-stack digital billing web application using React, TypeScript, Vite, and Tailwind CSS.',
        'Engineered backend REST APIs with Node.js and Express to manage invoices, products, parties, and business settings.',
        'Designed persistent database schemas with MongoDB Atlas for reliable transaction history and party ledger accounting.',
        'Implemented automated GST/tax calculation engines, sequential bill numbering, and dynamic invoice generation.',
      ],
      highlight: 'Digital Invoicing · GST Calculations · MongoDB Atlas · REST APIs',
      outcome:
        'Eliminates paper bill books and manual calculation errors, accelerates invoice generation, and gives business owners instant visibility into billing records, outstanding balances, and GST summaries.',
      image: '/projects/bagbill.png',
      githubUrl: 'https://github.com/rithii1702/BagBill',
      liveUrl: 'https://bag-bill-iota.vercel.app',
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
