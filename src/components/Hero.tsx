import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDownToLine, ExternalLink, Github, Linkedin, Mail, MapPin, Database, BarChart3, LineChart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E7E5E4] overflow-hidden">
      {/* Subtle grid background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(#1C1917 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E7E5E4] text-xs font-semibold text-[#78350F]">
              <span className="w-2 h-2 rounded-full bg-[#78350F] animate-pulse"></span>
              <span>AI & ML Student · Aspiring Data Analyst</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1C1917] tracking-tight leading-tight">
                {personal.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#78350F]">
                {personal.role} &middot; <span className="text-[#57534E]">{personal.subrole}</span>
              </p>
            </div>

            {/* Quote / Supporting statement */}
            <blockquote className="border-l-2 border-[#78350F] pl-4 py-1 text-lg sm:text-xl text-[#1C1917] font-medium italic">
              "{personal.tagline}"
            </blockquote>

            {/* Concise professional summary */}
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-2xl">
              {personal.summary}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePath}
                download="B_RITHIKASHREE_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-[#FAF8F5] text-[#1C1917] border border-[#E7E5E4] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <ArrowDownToLine className="w-4 h-4 text-[#78350F]" />
                <span>Download Resume</span>
              </a>

              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-[#FAF8F5] text-[#57534E] hover:text-[#1C1917] border border-[#E7E5E4] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <span>View Resume</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#78350F]" />
              </a>
            </div>

            {/* Contact & Social bar */}
            <div className="pt-6 border-t border-[#E7E5E4] flex flex-wrap items-center gap-6 text-xs text-[#57534E]">
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-[#78350F]" />
                <span>{personal.location}</span>
              </div>

              <div className="flex items-center gap-4 font-semibold">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1C1917] hover:text-[#78350F] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1C1917] hover:text-[#78350F] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-1.5 text-[#1C1917] hover:text-[#78350F] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Data Analytics Architecture Showcase Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 shadow-sm space-y-5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E7E5E4]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#E7E5E4]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#E7E5E4]"></span>
                  <span className="ml-2 text-xs font-mono font-semibold text-[#78716C] uppercase tracking-wider">
                    Analytics Workflow
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F5EFE6] text-[#78350F] font-semibold">
                  END-TO-END
                </span>
              </div>

              {/* Workflow stages representation */}
              <div className="space-y-3">
                
                {/* Stage 1: Data Ingestion & Relational Prep */}
                <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#1C1917]">
                    <div className="flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-[#78350F]" />
                      <span>Data Ingestion & Cleaning</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#78716C]">Excel / SQL / Python</span>
                  </div>
                  <p className="text-[11px] text-[#57534E]">
                    Structuring raw records, handling missing values, standardizing tabular schemas.
                  </p>
                </div>

                {/* Stage 2: Exploratory Modeling & Analysis */}
                <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#1C1917]">
                    <div className="flex items-center gap-2">
                      <LineChart className="w-3.5 h-3.5 text-[#6D28D9]" />
                      <span>Exploratory & KPI Analysis</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#78716C]">Trends / Patterns / Anomalies</span>
                  </div>
                  {/* Subtle clean SVG trend visual without fake numbers */}
                  <div className="h-8 w-full flex items-end gap-1.5 pt-1">
                    <div className="w-1/6 bg-[#E7E5E4] h-3 rounded-t-sm" />
                    <div className="w-1/6 bg-[#E7E5E4] h-5 rounded-t-sm" />
                    <div className="w-1/6 bg-[#E8D5C4] h-4 rounded-t-sm" />
                    <div className="w-1/6 bg-[#78350F] h-7 rounded-t-sm" />
                    <div className="w-1/6 bg-[#6D28D9] h-6 rounded-t-sm" />
                    <div className="w-1/6 bg-[#78350F] h-8 rounded-t-sm" />
                  </div>
                </div>

                {/* Stage 3: Dashboard & Business Reporting */}
                <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#1C1917]">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-3.5 h-3.5 text-[#78350F]" />
                      <span>Business Intelligence & Dashboards</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#78716C]">Power BI / Tableau</span>
                  </div>
                  <p className="text-[11px] text-[#57534E]">
                    Interactive reports, category performance evaluation, and decision-ready dashboards.
                  </p>
                </div>

                {/* Stage 4: Web Applications & Database Integration */}
                <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#1C1917]">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-[#78350F]" />
                      <span>Data-Driven Applications</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#78716C]">React / Express / MongoDB</span>
                  </div>
                  <p className="text-[11px] text-[#57534E]">
                    Full-stack business tools with automated calculations and persistent database storage.
                  </p>
                </div>

              </div>

              {/* Bottom footer tag */}
              <div className="pt-2 border-t border-[#E7E5E4] flex items-center justify-between text-[11px] text-[#78716C]">
                <span>RajaRajeswari College of Eng.</span>
                <span className="font-semibold text-[#78350F]">B.E. AIML &middot; 2027</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
