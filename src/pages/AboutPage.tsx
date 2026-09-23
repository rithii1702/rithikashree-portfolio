import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BrainCircuit, 
  BarChart3, 
  Sparkles, 
  BookOpen, 
  MapPin, 
  ArrowRight,
  Award
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  const { personal, education, certifications } = portfolioData;

  const currentLearning = [
    {
      title: 'Advanced SQL Query Optimization',
      category: 'Data & Databases',
      description: 'Complex window functions, CTEs, query indexing, execution plan analysis, and relational data modeling.',
    },
    {
      title: 'Power BI DAX Patterns & Modeling',
      category: 'Business Intelligence',
      description: 'Advanced time-intelligence DAX measures, star schema architectures, and performance optimization.',
    },
    {
      title: 'Deep Learning & Computer Vision (U-Net)',
      category: 'Artificial Intelligence',
      description: 'Convolutional neural networks, semantic segmentation architectures, and model evaluation metrics.',
    },
    {
      title: 'FastAPI & Analytical API Deployment',
      category: 'Development',
      description: 'Building asynchronous REST endpoints to serve ML predictions and analytical pipelines.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="min-h-screen py-10 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Breadcrumb & Page Heading */}
        <div className="space-y-3 border-b border-[#E7E5E4] pb-8">
          <nav className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#78716C] uppercase">
            <Link to="/" className="hover:text-[#78350F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#78350F]">About</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight uppercase">
                About Me
              </h1>
              <p className="text-sm sm:text-base text-[#57534E] mt-2 max-w-2xl">
                Background, academic foundation, analytical approach, and technical interests.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E7E5E4] text-xs font-semibold text-[#78350F]">
              <span className="w-2 h-2 rounded-full bg-[#78350F] animate-pulse" />
              <span>Bangalore, India &middot; Expected 2027</span>
            </div>
          </div>
        </div>

        {/* Narrative & Career Interests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-8 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>My Journey & Focus</span>
              </div>
              
              <h2 className="text-2xl font-bold text-[#1C1917] tracking-tight">
                Turning complex datasets into structured, actionable business intelligence.
              </h2>

              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                I am a Bachelor of Engineering student specializing in <strong>Artificial Intelligence and Machine Learning</strong> at <strong>RajaRajeswari College of Engineering</strong> in Bangalore. My primary focus and professional aspiration lie in <strong>Data Analytics</strong>, business intelligence, and applied computational modeling.
              </p>

              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Throughout my academic coursework and independent projects, I have developed strong, practical hands-on proficiency in <strong>Python, SQL, Excel, and Power BI</strong>. I take pride in cleaning messy tabular datasets, identifying hidden trends, formulating reliable KPIs, and designing interactive dashboards that make quantitative data straightforward for decision-makers.
              </p>

              <div className="pt-4 border-t border-[#E7E5E4] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-1">
                  <span className="text-[10px] font-mono text-[#78716C] uppercase block">Location</span>
                  <span className="font-bold text-[#1C1917] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#78350F]" />
                    {personal.location}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-1">
                  <span className="text-[10px] font-mono text-[#78716C] uppercase block">Academic Standing</span>
                  <span className="font-bold text-[#78350F]">
                    CGPA {education.cgpa} &middot; B.E. AI & ML
                  </span>
                </div>
              </div>
            </div>

            {/* Career Interests Card */}
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
                Focus Areas // Career Interests
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#1C1917] text-sm">
                    <BarChart3 className="w-4 h-4 text-[#78350F]" />
                    <span>Data Analytics</span>
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Exploratory data analysis, data cleaning pipelines, business metric calculation, and dashboard development using Power BI, Excel, SQL, and Python.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#1C1917] text-sm">
                    <BrainCircuit className="w-4 h-4 text-[#6D28D9]" />
                    <span>Machine Learning</span>
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Applied machine learning for pattern discovery, classification, regression, and deep learning computer vision architectures for real-world automated systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1C1917] tracking-tight">
                  {education.institution}
                </h3>
                <p className="text-xs font-semibold text-[#78350F] mt-1">
                  {education.degree}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#78716C] mt-2 font-mono">
                  <span>{education.location}</span>
                  <span>&bull;</span>
                  <span>{education.graduationYear}</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] text-xs font-bold text-[#1C1917]">
                <span>Verified Standing:</span>
                <span className="text-[#78350F] font-mono text-sm">CGPA {education.cgpa}</span>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E7E5E4]">
                <span className="text-[11px] font-mono uppercase text-[#78716C] font-semibold block">
                  Academic Highlights:
                </span>
                <ul className="space-y-2 text-xs text-[#57534E]">
                  {education.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#78350F] font-bold mt-0.5">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verified Certifications Card */}
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Verified Certifications</span>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.title} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <strong className="text-xs font-bold text-[#1C1917]">{cert.title}</strong>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#E7E5E4] text-[#78350F]">
                        {cert.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#57534E] leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* What I Am Currently Learning Section */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E7E5E4] pb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#78350F]" />
              <h2 className="text-lg font-bold text-[#1C1917] tracking-tight uppercase">
                What I Am Currently Learning
              </h2>
            </div>
            <span className="text-xs font-mono text-[#78716C]">
              CONTINUOUS GROWTH & SKILL EXPANSION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentLearning.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-2 hover:border-[#78350F]/40 transition-colors"
              >
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white border border-[#E7E5E4] text-[#78350F] inline-block">
                  {item.category}
                </span>
                <h3 className="text-xs font-bold text-[#1C1917]">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#57534E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Page Navigation CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F5EFE6] border border-[#E8D5C4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-[#1C1917]">
              Want to see my practical projects in action?
            </h3>
            <p className="text-xs text-[#57534E]">
              Explore dashboards, computer vision models, and full-stack systems.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-xs"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#FAF8F5] text-[#1C1917] border border-[#E7E5E4] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
            >
              <span>Contact Me</span>
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
