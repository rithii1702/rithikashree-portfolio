import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  BarChart3, 
  BrainCircuit, 
  Layers, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  Database,
  LineChart,
  Code2,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { 
  pageVariants, 
  reducedPageVariants, 
  fadeInUp 
} from '../utils/animationVariants';

export const SkillsPage: React.FC = () => {
  const { skills } = portfolioData;
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? reducedPageVariants : pageVariants;

  const categoryIcons: Record<string, React.ReactNode> = {
    'DATA & ANALYTICS': <BarChart3 className="w-5 h-5 text-[#78350F]" />,
    'AI / MACHINE LEARNING': <BrainCircuit className="w-5 h-5 text-[#6D28D9]" />,
    'DEVELOPMENT': <Layers className="w-5 h-5 text-[#78350F]" />,
    'TOOLS': <Wrench className="w-5 h-5 text-[#78350F]" />,
  };

  const methodologies = [
    {
      icon: <Database className="w-4 h-4 text-[#78350F]" />,
      title: 'Data Cleaning & Schema Structuring',
      desc: 'Filtering anomalous entries, handling nulls, normalizing tabular records, and designing clean relational schemas.',
    },
    {
      icon: <LineChart className="w-4 h-4 text-[#6D28D9]" />,
      title: 'Exploratory & KPI Analysis',
      desc: 'Formulating business KPIs, detecting seasonal trends, cohort breakdown, and computing variance metrics.',
    },
    {
      icon: <BarChart3 className="w-4 h-4 text-[#78350F]" />,
      title: 'Dashboard Formulation & DAX',
      desc: 'Building intuitive interactive Power BI dashboards, KPI metric scorecards, and custom DAX time-series measures.',
    },
    {
      icon: <Code2 className="w-4 h-4 text-[#78350F]" />,
      title: 'Predictive & Computer Vision Workflows',
      desc: 'Training Scikit-learn models and implementing deep learning U-Net networks for image feature segmentation.',
    },
  ];

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-5 sm:pt-7 md:pt-8 pb-10 sm:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-8">

        {/* Breadcrumb & Page Heading */}
        <motion.div variants={fadeInUp} className="space-y-2.5 sm:space-y-3 border-b border-[#E7E5E4] pb-5 sm:pb-6">
          <nav className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#78716C] uppercase">
            <Link to="/" className="hover:text-[#78350F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#78350F]">Skills</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight uppercase">
                Technical Skills & Toolkit
              </h1>
              <p className="text-[15px] sm:text-[16px] text-[#57534E] mt-2 max-w-2xl leading-relaxed">
                Practical competencies across data analytics, machine learning, application development, and workflow tools.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E5E4] text-[13px] font-mono font-semibold text-[#78350F] shadow-2xs shrink-0">
              <Terminal className="w-3.5 h-3.5" />
              <span>4 Core Domains</span>
            </div>
          </div>
        </motion.div>

        {/* 4 Core Skills Domains Grid */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {skills.map((group) => (
            <div
              key={group.name}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 md:p-8 shadow-xs space-y-5 hover:shadow-md transition-shadow duration-200"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 border-b border-[#E7E5E4] pb-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-semibold text-[#78716C] uppercase tracking-wider block">
                    {group.code}
                  </span>
                  <div className="flex items-center gap-2.5">
                    {categoryIcons[group.name] || <BarChart3 className="w-5 h-5 text-[#78350F]" />}
                    <h2 className="font-serif text-xl sm:text-[22px] font-bold text-[#1C1917] tracking-tight">
                      {group.name}
                    </h2>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E7E5E4] text-xs font-mono font-semibold text-[#78350F]">
                  {group.skills.length} Skills
                </span>
              </div>

              {/* Group Description */}
              <p className="text-[14.5px] sm:text-[15.5px] text-[#57534E] leading-relaxed">
                {group.description}
              </p>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#F5EFE6] border border-[#E7E5E4] hover:border-[#E8D5C4] text-[13px] sm:text-[14px] font-semibold text-[#1C1917] transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#78350F]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Analytical Workflow & Methodologies */}
        <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 md:p-8 shadow-xs space-y-5 sm:space-y-6">
          <div className="space-y-1 border-b border-[#E7E5E4] pb-4">
            <span className="text-[11px] font-mono font-semibold text-[#78350F] uppercase tracking-wider block">
              Methodology
            </span>
            <h2 className="font-serif text-xl sm:text-[22px] font-bold text-[#1C1917] tracking-tight uppercase">
              How I Apply These Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {methodologies.map((m) => (
              <div key={m.title} className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-2">
                <div className="flex items-center gap-2">
                  {m.icon}
                  <h3 className="font-serif text-[15px] font-bold text-[#1C1917]">{m.title}</h3>
                </div>
                <p className="text-[13px] sm:text-[14px] text-[#57534E] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA to Projects */}
        <motion.div variants={fadeInUp} className="p-6 sm:p-8 rounded-2xl bg-[#F5EFE6] border border-[#E8D5C4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-lg sm:text-[20px] font-bold text-[#1C1917]">
              Interested in seeing these skills applied to real datasets?
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E]">
              Browse the projects catalog to inspect interactive dashboards, machine learning models, and code repositories.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

      </div>
    </motion.div>
  );
};
