import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Database, Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { education, personal } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#E7E5E4] bg-[#FAF8F5] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#78350F] uppercase">
            01 // About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Aspiring Data Analyst with Engineering & AI Background
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-[#57534E] text-base leading-relaxed"
          >
            <p className="text-lg text-[#1C1917] font-medium leading-relaxed">
              I am an Artificial Intelligence and Machine Learning engineering student at{' '}
              <strong className="text-[#78350F]">{education.institution}</strong> in Bangalore, India, 
              actively preparing for a professional career in <strong className="text-[#1C1917]">Data Analytics</strong>.
            </p>

            <p>
              My hands-on experience spans <strong className="text-[#1C1917]">Excel, Power BI, Python, and SQL basics</strong>, 
              focusing on data cleaning, exploratory analysis, and building interactive dashboards that communicate clear business insights. 
              I enjoy examining raw datasets, identifying trends, spotting anomalies, and presenting findings in an intuitive, executive-ready format.
            </p>

            <p>
              In addition to core analytics, my academic background in AI & ML and practical project work have given me 
              thorough experience building <strong className="text-[#1C1917]">data-driven full-stack applications</strong> using React, TypeScript, Node.js, 
              Express.js REST APIs, and MongoDB. This enables me to understand not just how data is analyzed, but how it is captured, stored, and integrated into operational systems.
            </p>

            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E7E5E4]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#78350F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] text-sm block">Data Cleaning & Modeling</span>
                    <span className="text-xs text-[#78716C]">Excel formulas, data transformation, SQL querying</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#78350F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] text-sm block">Dashboard Visualization</span>
                    <span className="text-xs text-[#78716C]">Power BI, KPI analysis, category performance</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#78350F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] text-sm block">AI-Assisted Analytics</span>
                    <span className="text-xs text-[#78716C]">Trend discovery, anomaly exploration, Python workflows</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#78350F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] text-sm block">Data-Driven Applications</span>
                    <span className="text-xs text-[#78716C]">React, Express.js REST APIs, MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Academic & Career Profile Cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Education Snapshot Card */}
            <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#F5EFE6] text-[#78350F]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#78716C] uppercase">Academics</span>
                  <h3 className="font-bold text-[#1C1917] text-base">B.E. in Artificial Intelligence & Machine Learning</h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-[#57534E] border-t border-[#E7E5E4] pt-3">
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#78716C]">Institution:</span>
                  <span className="font-semibold text-[#1C1917] text-right">{education.institution}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#78716C]">Location:</span>
                  <span className="font-semibold text-[#1C1917]">{education.location}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#78716C]">Graduation:</span>
                  <span className="font-semibold text-[#1C1917]">{education.graduationYear}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#78716C]">Cumulative Grade:</span>
                  <span className="px-2 py-0.5 rounded bg-[#F5EFE6] text-[#78350F] font-bold text-xs">
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Career Focus Snapshot Card */}
            <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#F5EFE6] text-[#78350F]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#78716C] uppercase">Career Target</span>
                  <h3 className="font-bold text-[#1C1917] text-base">Data Analyst & Analytics Roles</h3>
                </div>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Focused on entry-level and internship positions in business intelligence, business reporting, data visualization, and data analytics.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
