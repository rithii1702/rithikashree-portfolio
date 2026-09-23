export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryBadge: string;
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
      description: 'Machine learning fundamentals, deep learning neural networks, computer vision, and predictive workflows.',
      skills: [
        'Machine Learning',
        'Scikit-learn',
        'Deep Learning',
        'U-Net',
        'Computer Vision',
      ],
    },
    {
      name: 'DEVELOPMENT',
      code: 'FULLSTACK // 03',
      description: 'Full-stack web application development, reactive user interfaces, and backend REST APIs.',
      skills: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Flask',
        'FastAPI',
        'MongoDB',
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
        'Kaggle',
        'Streamlit',
      ],
    },
  ],

  projects: [
    {
      id: 'nishkaamkrishi',
      slug: 'nishkaamkrishi',
      title: 'NishkaamKrishi',
      subtitle: 'AI Agriculture Platform for Crop & Soil Disease Prediction',
      category: 'AI & Machine Learning',
      categoryBadge: 'AI / Machine Learning',
      shortDescription:
        'An AI-assisted agricultural platform engineered to detect plant diseases from leaf imagery and recommend soil nutrient treatments to optimize crop yields.',
      overview:
        'NishkaamKrishi is an artificial intelligence-driven agriculture support platform developed to assist farmers and agronomists in rapid disease diagnosis. The system processes visual leaf data and soil indicators using machine learning models to identify crop pathology, evaluate disease severity, and provide actionable treatment recommendations.',
      problem:
        'Crop diseases and soil nutrient deficiencies cause severe agricultural loss when detected late. Traditional laboratory testing is inaccessible for many farmers, leading to delayed interventions.',
      solution:
        'Built an intelligent diagnostics pipeline using Python and Scikit-learn integrated with Flask and Streamlit, enabling instant identification of crop diseases and dynamic recommendation workflows.',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Flask', 'Pandas', 'Streamlit'],
      keyFeatures: [
        'Multi-class crop disease detection from image inputs',
        'Soil nutrient diagnostic and balancing recommendations',
        'Interactive Streamlit user interface with real-time feedback',
        'Lightweight Python Flask backend for model inference',
        'Comprehensive dataset processing with Pandas and NumPy',
      ],
      resumePoints: [
        'Engineered an AI-assisted smart agriculture platform providing crop disease identification and soil nutrient analysis.',
        'Integrated Scikit-learn machine learning models with a Streamlit interface and Flask REST endpoints.',
      ],
      highlights: [
        'AI Agriculture',
        'Disease Detection',
        'Scikit-learn',
        'Flask API',
        'Streamlit UI',
      ],
      image: '/projects/nishkaamkrishi.png',
      githubUrl: 'https://github.com/rithii1702/NishkaamKrishi',
      liveDemoUrl: 'https://github.com/rithii1702/NishkaamKrishi',
    },
    {
      id: 'road-extraction',
      slug: 'road-extraction',
      title: 'Road Extraction from Satellite Images',
      subtitle: 'Deep Learning with U-Net & Computer Vision for Remote Sensing Analysis',
      category: 'Computer Vision & Deep Learning',
      categoryBadge: 'AI / Machine Learning',
      shortDescription:
        'A semantic segmentation pipeline leveraging the U-Net deep learning architecture to extract road networks from high-resolution satellite imagery.',
      overview:
        'A remote sensing deep learning application designed to automate the extraction of complex road networks from satellite and aerial photography. Utilizing an encoder-decoder U-Net architecture with skip connections, the pipeline performs pixel-level semantic segmentation across diverse urban and rural terrains.',
      problem:
        'Manual road mapping from satellite imagery is time-consuming and prone to human error, hindering disaster response planning and automated urban navigation updates.',
      solution:
        'Implemented a deep convolutional neural network based on U-Net in Python with PyTorch/TensorFlow, achieving robust feature segmentation across varying lighting and surface conditions.',
      technologies: ['Python', 'Deep Learning', 'U-Net', 'Computer Vision', 'PyTorch', 'NumPy'],
      keyFeatures: [
        'Encoder-decoder U-Net architecture with skip connections',
        'Pixel-wise binary semantic road mask generation',
        'Data augmentation pipelines for satellite aerial imagery',
        'Evaluation metrics including Intersection over Union (IoU) and Dice coefficient',
        'GPU-accelerated inference for high-resolution tiles',
      ],
      resumePoints: [
        'Implemented a deep learning semantic segmentation pipeline using U-Net architecture to extract road networks from satellite imagery.',
        'Optimized computer vision data preprocessing and evaluation metrics using NumPy and PyTorch.',
      ],
      highlights: [
        'U-Net Architecture',
        'Computer Vision',
        'Satellite Imagery',
        'Semantic Segmentation',
        'Deep Learning',
      ],
      image: '/projects/road-extraction.png',
      githubUrl: 'https://github.com/rithii1702/road-extraction-satellite',
      liveDemoUrl: 'https://github.com/rithii1702/road-extraction-satellite',
    },
    {
      id: 'ecommerce-sales',
      slug: 'ecommerce-sales',
      title: 'E-Commerce Sales Analysis',
      subtitle: 'Revenue Trends, Product Performance & Sales Pattern Analytics',
      category: 'Data Analytics & Business Reporting',
      categoryBadge: 'Data & Analytics',
      shortDescription:
        'Comprehensive data analytics project analyzing e-commerce transactions to identify revenue trends, product performance, and sales patterns through interactive dashboards.',
      overview:
        'This project focuses on turning raw e-commerce transaction records into strategic business intelligence. Utilizing Excel for data cleaning and preliminary modeling alongside Power BI for dynamic visualization, the analysis reveals product sales distributions, customer buying cycles, and key revenue indicators.',
      problem:
        'Modern e-commerce platforms generate high volumes of transactional records across diverse product lines and regions. Without centralized reporting and KPI visualization, businesses struggle to recognize seasonal sales trends and evaluate product performance.',
      solution:
        'Executed rigorous data cleaning and structuring in Excel, followed by the development of an interactive Power BI dashboard highlighting key performance indicators, revenue movements, product rankings, and purchase patterns to drive data-driven decision-making.',
      technologies: ['Excel', 'Power BI', 'SQL', 'Data Cleaning', 'Data Visualization', 'KPI Analysis'],
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
        'Power BI Visuals',
      ],
      image: '/projects/ecommerce-sales.png',
      githubUrl: 'https://github.com/rithii1702/ecommerce-sales-analysis',
      liveDemoUrl: 'https://github.com/rithii1702/ecommerce-sales-analysis',
    },
    {
      id: 'pizza-dashboard',
      slug: 'pizza-dashboard',
      title: 'Pizza Sales Dashboard',
      subtitle: 'Interactive Power BI Restaurant Sales & Customer Preference Analytics',
      category: 'Power BI / Business Intelligence',
      categoryBadge: 'Data & Analytics',
      shortDescription:
        'An interactive Power BI dashboard analyzing sales data to evaluate revenue, order trends, customer preferences, and product performance.',
      overview:
        'A dedicated business intelligence project developed in Power BI to evaluate the operational and sales performance of a restaurant business. The dashboard synthesizes order transactions to identify best-selling menu items, customer size preferences, peak ordering periods, and category revenue share.',
      problem:
        'Restaurant managers need precise visibility into customer demand cycles, peak ordering times, and underperforming menu categories to optimize staffing, manage ingredient inventory, and maximize daily revenue.',
      solution:
        'Analyzed comprehensive sales records and created a dynamic, interactive Power BI dashboard delivering clear visibility into revenue performance, order volume patterns, best-selling products, and peak operational windows.',
      technologies: ['Power BI', 'Excel', 'DAX', 'Data Analysis', 'Data Visualization', 'KPI Analysis'],
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
        'DAX Measures',
      ],
      image: '/projects/pizza-sales.png',
      githubUrl: 'https://github.com/rithii1702/pizza-sales-analysis',
      liveDemoUrl: 'https://github.com/rithii1702/pizza-sales-analysis',
    },
    {
      id: 'global-population-dashboard',
      slug: 'global-population-dashboard',
      title: 'Global Population Dashboard',
      subtitle: 'Demographic Trends, Growth Projections & Geospatial Distribution Analytics',
      category: 'Data Analytics & Visualization',
      categoryBadge: 'Data & Analytics',
      shortDescription:
        'An interactive demographic analytics dashboard visualizing global population trends, fertility metrics, regional distributions, and future growth projections.',
      overview:
        'The Global Population Dashboard consolidates multi-decade demographic datasets to provide comprehensive insights into global human development patterns. Utilizing Power BI and advanced Excel modeling, the project analyzes population shifts across 195+ countries, urban vs. rural growth, median age indicators, and regional dependency ratios.',
      problem:
        'Global demographic trends are recorded in dense, disparate statistical repositories that make it difficult for researchers and policy analysts to identify regional shifts and demographic aging trends.',
      solution:
        'Standardized diverse international datasets into clean relational schemas and built an interactive Power BI dashboard with dynamic geospatial maps, time-series projections, and regional drill-downs.',
      technologies: ['Power BI', 'Excel', 'Data Modeling', 'Data Visualization', 'DAX', 'Geospatial Analytics'],
      keyFeatures: [
        'Multi-decade demographic trend analysis spanning 195+ countries',
        'Interactive geospatial mapping showing density and migration trends',
        'Fertility, mortality, and median age correlation dashboards',
        'DAX measures for rolling averages and regional growth rates',
        'Dynamic filtering by continent, income bracket, and developmental stage',
      ],
      resumePoints: [
        'Developed an interactive Power BI demographic dashboard evaluating global population dynamics and regional growth projections.',
        'Modeled complex time-series datasets and formulated DAX expressions for demographic indicators.',
      ],
      highlights: [
        'Demographic Modeling',
        'Power BI Mapping',
        'DAX Expressions',
        'Global Trends',
        'Time-Series',
      ],
      image: '/projects/global-population.png',
      githubUrl: 'https://github.com/rithii1702/global-population-analytics',
      liveDemoUrl: 'https://github.com/rithii1702/global-population-analytics',
    },
    {
      id: 'pathiq',
      slug: 'pathiq',
      title: 'PathIQ',
      subtitle: 'Intelligent Workflow & Decision Analytics Engine',
      category: 'AI-Driven Systems & Analytics',
      categoryBadge: 'Development',
      shortDescription:
        'An intelligent recommendation and decision pathing application leveraging Python APIs, machine learning heuristics, and interactive interfaces.',
      overview:
        'PathIQ is an intelligent guidance system engineered to assist learners and technical professionals in discovering optimal learning and career pathways. By combining algorithmic scoring with responsive interfaces, PathIQ generates structured milestone paths tailored to candidate goals and skill proficiencies.',
      problem:
        'Students and aspiring technical professionals face information overload when charting career roadmaps, lacking structured, data-driven milestones aligned with market skill demands.',
      solution:
        'Architected an end-to-end full-stack platform using React, TypeScript, and FastAPI that evaluates user competency inputs against curriculum nodes to recommend personalized learning trajectories.',
      technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Machine Learning', 'MongoDB', 'Tailwind CSS'],
      keyFeatures: [
        'Intelligent path recommendation algorithm based on user skill inputs',
        'FastAPI backend providing low-latency scoring endpoints',
        'Dynamic step-by-step roadmap visualization built with React & TypeScript',
        'Persistent user progress and goal tracking in MongoDB',
        'Integrated analytics for monitoring milestone completion rates',
      ],
      resumePoints: [
        'Built PathIQ, an intelligent decision and pathway recommendation system using FastAPI, React, and Machine Learning.',
        'Engineered responsive interfaces and REST API endpoints for real-time roadmap generation and user progress tracking.',
      ],
      highlights: [
        'FastAPI Backend',
        'React & TypeScript',
        'Path Recommendation',
        'MongoDB Storage',
        'Machine Learning',
      ],
      image: '/projects/pathiq.png',
      githubUrl: 'https://github.com/rithii1702/PathIQ',
      liveDemoUrl: 'https://github.com/rithii1702/PathIQ',
    },
    {
      id: 'bagbill',
      slug: 'bagbill',
      title: 'BagBill — Digital Billing and Business Record System',
      subtitle: 'Full-Stack Digital Billing Application & Business Record Management',
      category: 'Full-Stack Web & Business Systems',
      categoryBadge: 'Development',
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
      liveDemoUrl: 'https://github.com/rithii1702/BagBill',
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
