import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-[#E7E5E4] bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#78350F] uppercase">
            05 // Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-sm text-[#57534E] max-w-2xl">
            Credible certifications confirming competency in Data Science, Power BI dashboarding, and Artificial Intelligence foundations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#FAF8F5] rounded-xl border border-[#E7E5E4] p-6 flex flex-col justify-between hover:shadow-sm transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-white border border-[#E7E5E4] text-[11px] font-semibold text-[#78350F]">
                    {cert.category}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#78350F]" />
                </div>

                <h3 className="text-base font-bold text-[#1C1917]">
                  {cert.title}
                </h3>

                <p className="text-xs text-[#57534E] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E7E5E4] flex items-center gap-1.5 text-xs text-[#78716C]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#78350F]" />
                <span>Verified Certification Credential</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
