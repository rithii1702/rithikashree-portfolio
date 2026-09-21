import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const { projects } = portfolioData;

  const filterOptions = [
    'All',
    'Data Analytics',
    'Business Intelligence',
    'Full-Stack',
    'AI & Analytics',
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.categoryBadge === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#E7E5E4] bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider text-[#78350F] uppercase">
              03 // Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight uppercase">
              Projects
            </h2>
            <p className="text-sm text-[#57534E] max-w-xl">
              Practical work in Power BI business intelligence, data cleaning, exploratory analysis, and data-driven systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 ${
                  activeFilter === filter
                    ? 'bg-[#78350F] text-white shadow-2xs'
                    : 'bg-[#FAF8F5] text-[#57534E] border border-[#E7E5E4] hover:bg-[#F5EFE6] hover:text-[#1C1917]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Equal treatment for all 4 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: ProjectItem) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="bg-[#FAF8F5] rounded-xl border border-[#E7E5E4] p-6 sm:p-7 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#E7E5E4] text-xs font-semibold text-[#78350F]">
                      {project.categoryBadge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1C1917] tracking-tight hover:text-[#78350F] transition-colors">
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs font-medium text-[#78716C] mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Exactly ONE Project Image in 16:9 aspect ratio directly below project title */}
                  <div className="w-full aspect-video rounded-lg overflow-hidden border border-[#E7E5E4] bg-white flex items-center justify-center group/img shadow-2xs">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-1 group-hover/img:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-[11px] font-semibold bg-white text-[#1C1917] border border-[#E7E5E4]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Resume bullet points */}
                  <div className="bg-white rounded-lg border border-[#E7E5E4] p-3.5 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#78716C] block">
                      Core Resume Points
                    </span>
                    <ul className="space-y-1 text-xs text-[#57534E]">
                      {project.resumePoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#78350F] font-bold">&bull;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action buttons */}
                <div className="pt-6 mt-6 border-t border-[#E7E5E4] flex items-center justify-between gap-3">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#78350F] hover:text-[#612A0C] transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#78350F] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
