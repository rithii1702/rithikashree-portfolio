import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 border-b border-[#E7E5E4] bg-[#FAF8F5] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#78350F] uppercase">
            04 // Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Academic Background
          </h2>
        </div>

        {/* Education Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#E7E5E4] pb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#F5EFE6] text-[#78350F] shrink-0 mt-1">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917]">
                  {education.institution}
                </h3>
                <p className="text-base font-semibold text-[#78350F] mt-1">
                  {education.degree}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#78716C] mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#78350F]" />
                    {education.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#78350F]" />
                    {education.graduationYear}
                  </span>
                </div>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5EFE6] border border-[#E8D5C4] text-[#78350F] font-bold text-sm">
                <Award className="w-4 h-4" />
                CGPA: {education.cgpa}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-[#78716C] uppercase tracking-wider block">
              Program Highlights & Academic Focus
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {education.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] text-xs text-[#57534E] leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
