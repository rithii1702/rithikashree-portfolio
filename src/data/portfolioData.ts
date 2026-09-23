export interface ProjectItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  resumePoints: string[];
  highlight: string;
  image: string;
  githubUrl?: string;
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
      code: 'WORKFLOW // 04',
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
      title: 'Data Detective AI',
      subtitle: 'Intelligent Data Analysis & Automated Exploration Platform',
      shortDescription:
        'An intelligent data analysis platform that allows users to upload datasets, explore data, perform exploratory data analysis, generate insights, and interact with their data.',
      overview:
        'Data Detective AI is an analytical tool built to assist data professionals in rapidly understanding raw, complex datasets. By blending algorithmic data processing with analytical visualization, the application facilitates quick discovery of underlying trends, data distributions, and potential outliers.',
      problem:
        'Unfamiliar datasets often contain hidden distributions, skewed variables, and subtle anomalies that take hours of repetitive exploratory coding to identify. Analysts need a systematic way to accelerate preliminary data diagnostics.',
      solution:
        'Constructed an AI-assisted analytics workflow that expedites dataset exploration through automated statistical profiling, feature correlation analysis, and anomaly detection routines, allowing data analysts to uncover meaningful patterns faster.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Data Analysis'],
      keyFeatures: [
        'Interactive dataset upload and automated exploratory data analysis (EDA)',
        'Statistical profiling and feature distribution analysis',
        'Pattern and trend discovery across tabular variables',
        'Potential anomaly and outlier detection workflows',
        'Dynamic visualization interface built with React & TypeScript',
      ],
      resumePoints: [
        'Developed Data Detective AI, an intelligent data analysis platform to simplify dataset exploration and uncover actionable patterns.',
        'Implemented exploratory data analysis workflows and interactive visualization to detect statistical trends and anomalies.',
      ],
      highlight: 'AI-powered data exploration and automated insights.',
      image: '/projects/data-detective.png',
      githubUrl: 'https://github.com/rithii1702',
    },
    {
      id: 'bagbill',
      number: '02',
      slug: 'bagbill',
      title: 'BagBill',
      subtitle: 'Digital Billing & Calculation Business System',
      shortDescription:
        'A digital billing and calculation system designed to help businesses manage bag sales, billing information, GST calculations and invoice records digitally.',
      overview:
        'BagBill is a comprehensive digital billing and record management system developed to replace manual paper-based business billing. The application streamlines end-to-end business transactions: from creating GST-compliant customer invoices with automated line-item calculations to managing sequential numbering, party ledgers, and downloadable invoices.',
      problem:
        'Manual billing and paper-based record keeping create significant overhead for businesses. They frequently lead to calculation errors, manual GST calculation mismatches, sequence misallocations, difficulty tracking customer payment balances, and lost paper records.',
      solution:
        'Engineered an integrated digital billing system utilizing React on the frontend, supported by Node.js and Express REST APIs. The platform automates all tax and pricing computations, enforces sequential invoice numbering, tracks client credit/debit in a dedicated Party Ledger, and produces instant invoice summaries.',
      technologies: ['React', 'Node.js', 'Express'],
      keyFeatures: [
        'GST invoice generation with automated line-item tax calculations',
        'Sequential invoice numbering system',
        'Bill Book for complete transaction history',
        'Party Ledger for tracking customer and vendor balances',
        'Product Management module with pricing records',
        'Interactive business dashboard & calculation summary',
      ],
      resumePoints: [
        'Developed BagBill, a digital billing and calculation application to replace manual business billing and record management.',
        'Implemented GST invoice generation, automated calculations, payment tracking, and sequential invoice numbering.',
        'Built Bill Book, Party Ledger, and Product Management modules with Express and Node.js REST APIs.',
      ],
      highlight: 'Digitalizes traditional manual billing and business record management.',
      image: '/projects/bagbill.png',
      githubUrl: 'https://github.com/rithii1702/BagBill',
    },
    {
      id: 'ecommerce-sales',
      number: '03',
      slug: 'ecommerce-sales',
      title: 'E-Commerce Sales Analysis',
      subtitle: 'Sales Performance, Revenue Trends & Business Insights',
      shortDescription:
        'A data analysis and visualization project focused on understanding sales performance, revenue trends, products and business insights.',
      overview:
        'This project focuses on turning raw e-commerce transaction records into strategic business intelligence. Utilizing Excel for data cleaning and preliminary modeling alongside Power BI for dynamic visualization, the analysis reveals product sales distributions, customer buying cycles, and key revenue indicators.',
      problem:
        'Modern e-commerce platforms generate high volumes of transactional records across diverse product lines and regions. Without centralized reporting and KPI visualization, businesses struggle to recognize seasonal sales trends and evaluate product performance.',
      solution:
        'Executed rigorous data cleaning and structuring in Excel, followed by the development of an interactive Power BI dashboard highlighting key performance indicators, revenue movements, product rankings, and purchase patterns to drive data-driven decision-making.',
      technologies: ['Excel', 'Power BI'],
      keyFeatures: [
        'Data cleaning and preparation of transactional e-commerce records in Excel',
        'Revenue trend analysis across operational cycles',
        'Product performance evaluation and category breakdown',
        'Sales pattern identification and customer purchasing behavior',
        'Interactive KPI dashboard visualizing core business metrics in Power BI',
      ],
      resumePoints: [
        'Analyzed e-commerce sales data to identify revenue trends, product performance, and sales patterns.',
        'Built interactive dashboards to visualize key performance indicators and derive data-driven business insights.',
      ],
      highlight: 'Interactive KPI dashboards visualizing revenue trends and product performance.',
      image: '/projects/ecommerce-sales.png',
      githubUrl: 'https://github.com/rithii1702',
    },
    {
      id: 'pizza-dashboard',
      number: '04',
      slug: 'pizza-dashboard',
      title: 'Pizza Sales Dashboard',
      subtitle: 'Interactive Restaurant Sales Analytics & Order Trends',
      shortDescription:
        'An interactive Power BI dashboard analyzing pizza orders, revenue, product performance and sales trends.',
      overview:
        'A dedicated business intelligence project developed in Power BI to evaluate the operational and sales performance of a restaurant business. The dashboard synthesizes order transactions to identify best-selling menu items, customer size preferences, peak ordering periods, and category revenue share.',
      problem:
        'Restaurant managers need precise visibility into customer demand cycles, peak ordering times, and underperforming menu categories to optimize staffing, manage ingredient inventory, and maximize daily revenue.',
      solution:
        'Analyzed comprehensive sales records and created a dynamic, interactive Power BI dashboard delivering clear visibility into revenue performance, order volume patterns, best-selling products, and peak operational windows.',
      technologies: ['Power BI'],
      keyFeatures: [
        'Revenue analysis across order cycles and pizza categories',
        'Order volume trends and peak order periods identification',
        'Customer preferences breakdown by pizza size and crust type',
        'Product performance ranking highlighting best-selling items',
        'Interactive dashboard controls for filtering and deep-dive analysis',
      ],
      resumePoints: [
        'Analyzed sales data to evaluate revenue, order trends, customer preferences, and product performance.',
        'Built an interactive Power BI dashboard highlighting best-selling products, peak order periods, and category performance.',
      ],
      highlight: 'Interactive Power BI dashboard evaluating orders, peak periods, and product rankings.',
      image: '/projects/pizza-sales.png',
      githubUrl: 'https://github.com/rithii1702',
    },
  ],

  education: {
    institution: 'RajaRajeswari College of Engineering',
    degree: 'Bachelor of Engineering — Artificial Intelligence and Machine Learning',
    location: 'Bangalore, India',
    graduationYear: 'Expected Graduation: 2027',
    cgpa: '7.7',
    highlights: [
      'Core coursework in Data Structures, Database Systems, Artificial Intelligence, and Machine Learning.',
      'Active focus on applied Data Analytics, Business Intelligence dashboards, and automated computational models.',
      'Academic and extracurricular projects combining predictive AI models with scalable full-stack web applications.',
    ],
  },

  certifications: [
    {
      title: 'Data Science and Analytics',
      category: 'Data Analytics & Statistics',
      description: 'Comprehensive study of data manipulation, statistical analysis, exploratory visualization, and analytical decision modeling.',
    },
    {
      title: 'Data Visualization using Power BI',
      category: 'Business Intelligence',
      description: 'Hands-on dashboard development, report formulation, DAX measures, and business KPI tracking using Microsoft Power BI.',
    },
    {
      title: 'AI for Beginners',
      category: 'Artificial Intelligence',
      description: 'Foundational concepts in artificial intelligence, neural networks, machine learning paradigms, and computer vision workflows.',
    },
  ],
};
