import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, ExternalLink, FileText, CheckCircle2, GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeCTA: React.FC = () => {
  const { personal, education } = portfolioData;

  return (
    <section id="resume" className="py-16 md:py-20 bg-white border-b border-[#E7E5E4] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-[#FAF8F5] border border-[#E7E5E4] p-8 sm:p-12 shadow-sm relative overflow-hidden"
        >
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-[#F5EFE6] pointer-events-none opacity-60" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E5E4] text-xs font-bold text-[#78350F] uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Curriculum Vitae</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1917] tracking-tight">
                Looking for an Aspiring Data Analyst?
              </h2>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Download my verified resume to review my academic performance at <strong>{education.institution}</strong> (CGPA {education.cgpa}), hands-on dashboard projects in Power BI & Excel, and full-stack software development experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-[#57534E]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#78350F] shrink-0" />
                <span>B.E. in Artificial Intelligence & Machine Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#78350F] shrink-0" />
                <span>Hands-on: Excel, Power BI, Python, SQL, MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#78350F] shrink-0" />
                <span>Expected Graduation: {education.graduationYear} (CGPA: {education.cgpa})</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#78350F] shrink-0" />
                <span>Location: {personal.location}</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={personal.resumePath}
                download="B_RITHIKASHREE_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF8F5] text-[#1C1917] border border-[#E7E5E4] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <span>View Resume</span>
                <ExternalLink className="w-4 h-4 text-[#78350F]" />
              </a>
            </div>

            <p className="text-[11px] text-[#78716C] pt-1">
              File: <code className="font-mono text-[#1C1917]">B_RITHIKASHREE_Resume.pdf</code> &middot; Format: PDF &middot; Strictly verified resume
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
