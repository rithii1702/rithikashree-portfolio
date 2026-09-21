import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Terminal, Database, Globe, BrainCircuit, Wrench } from 'lucide-react';
import { portfolioData, SkillGroup } from '../data/portfolioData';

const skillIcons: Record<string, React.ReactNode> = {
  'Data Analytics': <BarChart2 className="w-5 h-5 text-[#78350F]" />,
  'Programming': <Terminal className="w-5 h-5 text-[#78350F]" />,
  'Databases': <Database className="w-5 h-5 text-[#78350F]" />,
  'Web & Backend': <Globe className="w-5 h-5 text-[#78350F]" />,
  'AI & Machine Learning': <BrainCircuit className="w-5 h-5 text-[#6D28D9]" />,
  'Tools': <Wrench className="w-5 h-5 text-[#78350F]" />,
};

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#E7E5E4] bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#78350F] uppercase">
            02 // Technical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Categorized Technical Toolkit
          </h2>
          <p className="text-sm text-[#57534E] max-w-2xl">
            Practical skills applied across data analytics, business intelligence dashboards, programming, and software engineering.
          </p>
        </div>

        {/* Categorized Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group: SkillGroup, idx: number) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#FAF8F5] border border-[#E7E5E4] rounded-xl p-6 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E7E5E4]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white border border-[#E7E5E4]">
                      {skillIcons[group.name] || <Wrench className="w-5 h-5 text-[#78350F]" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#1C1917]">
                        {group.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#78716C]">
                        {group.code}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-[#E7E5E4] text-[#57534E]">
                    {group.skills.length}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#57534E] my-3 leading-relaxed">
                  {group.description}
                </p>

                {/* Badges List */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white text-[#1C1917] border border-[#E7E5E4] shadow-2xs hover:border-[#78350F] hover:text-[#78350F] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
