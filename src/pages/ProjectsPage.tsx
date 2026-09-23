import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

export const ProjectsPage: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="min-h-screen py-10 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="space-y-3 border-b border-[#E7E5E4] pb-8">
          <nav className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#78716C] uppercase">
            <Link to="/" className="hover:text-[#78350F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#78350F]">Projects</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight uppercase">
                Projects
              </h1>
              <p className="text-sm sm:text-base text-[#57534E] mt-2 max-w-2xl">
                Practical work in data analytics, business intelligence dashboards, and web application tools.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E7E5E4] text-[#78350F] self-start sm:self-auto">
              04 Projects
            </span>
          </div>
        </div>

        {/* Clean 2-Column Grid on Desktop / Vertical Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: ProjectItem) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Project Number & Title */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#78350F] tracking-wider block">
                    {project.number} &mdash; PROJECT
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1C1917] tracking-tight hover:text-[#78350F] transition-colors">
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                </div>

                {/* Project Image/Preview (16:9 Aspect Ratio) */}
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#E7E5E4] bg-[#FAF8F5] flex items-center justify-center group/img shadow-2xs">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-2 group-hover/img:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-[11px] font-semibold bg-[#FAF8F5] text-[#1C1917] border border-[#E7E5E4]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Highlight */}
                {project.highlight && (
                  <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] text-xs text-[#57534E]">
                    <strong className="text-[#1C1917] block font-mono text-[10px] uppercase text-[#78350F] mb-0.5">
                      Key Highlight
                    </strong>
                    <span>{project.highlight}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#E7E5E4] flex items-center justify-between gap-3">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#78350F] hover:text-[#612A0C] transition-colors"
                >
                  <span>View Project &rarr;</span>
                </Link>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#78350F] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub &rarr;</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};
