import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const { projects } = portfolioData;

  const filterOptions = [
    'All',
    'Data & Analytics',
    'AI / Machine Learning',
    'Development',
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.categoryBadge === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="min-h-screen py-10 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Breadcrumb & Page Heading */}
        <div className="space-y-3 border-b border-[#E7E5E4] pb-8">
          <nav className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#78716C] uppercase">
            <Link to="/" className="hover:text-[#78350F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#78350F]">Projects</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight uppercase">
                Selected Projects
              </h1>
              <p className="text-sm sm:text-base text-[#57534E] mt-2 max-w-2xl">
                Practical work in Power BI business intelligence, data modeling, exploratory analysis, deep learning, and data-driven systems.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                    activeFilter === filter
                      ? 'bg-[#78350F] text-white shadow-2xs'
                      : 'bg-white text-[#57534E] border border-[#E7E5E4] hover:bg-[#F5EFE6] hover:text-[#1C1917]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: ProjectItem) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E7E5E4] text-[11px] font-mono font-semibold text-[#78350F]">
                      {project.categoryBadge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-[#1C1917] tracking-tight hover:text-[#78350F] transition-colors">
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs font-medium text-[#78716C] mt-1 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* ONE ACTUAL PROJECT SCREENSHOT (16:9 Aspect Ratio) */}
                  <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#E7E5E4] bg-[#FAF8F5] flex items-center justify-center group/img shadow-2xs">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-1 group-hover/img:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FAF8F5] text-[#1C1917] border border-[#E7E5E4]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FAF8F5] text-[#78716C] border border-[#E7E5E4]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Short description */}
                  <p className="text-xs text-[#57534E] leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Bottom Action buttons */}
                <div className="pt-5 mt-5 border-t border-[#E7E5E4] flex items-center justify-between gap-2">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#78350F] hover:text-[#612A0C] transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-[#1C1917] hover:text-[#78350F] transition-colors rounded hover:bg-[#FAF8F5]"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-[#1C1917] hover:text-[#78350F] transition-colors rounded hover:bg-[#FAF8F5]"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
};
