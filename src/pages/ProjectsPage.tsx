import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Github, CheckCircle2 } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

export const ProjectsPage: React.FC = () => {
  const { projects } = portfolioData;

  const featuredProject = projects.find((p) => p.id === 'data-detective') || projects[0];
  const standardProjects = projects.filter((p) => p.id !== 'data-detective');

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

        {/* ======================================================== */}
        {/* 01 — FEATURED PROJECT: DATA DETECTIVE AI                 */}
        {/* Slightly larger, first, prominent beige + burgundy card   */}
        {/* ======================================================== */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            whileHover={{ y: -3 }}
            className="bg-white rounded-2xl border-2 border-[#E7E5E4] hover:border-[#78350F]/40 p-6 sm:p-8 md:p-10 shadow-xs hover:shadow-lg transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details & Copy */}
              <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xs font-mono font-bold text-[#78350F] tracking-wider uppercase">
                      {featuredProject.number}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FAF8F5] border border-[#E7E5E4] text-[#78350F]">
                      Featured Project
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1917] tracking-tight hover:text-[#78350F] transition-colors uppercase">
                    <Link to={`/projects/${featuredProject.slug}`}>
                      {featuredProject.title}
                    </Link>
                  </h2>

                  {/* Quote */}
                  {featuredProject.quote && (
                    <blockquote className="mt-3 text-xs sm:text-sm text-[#44403C] italic border-l-2 border-[#78350F] pl-3 py-0.5 leading-relaxed bg-[#FAF8F5]/60 rounded-r">
                      &ldquo;{featuredProject.quote}&rdquo;
                    </blockquote>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {featuredProject.shortDescription}
                </p>

                {/* Technologies */}
                <div>
                  <div className="text-[11px] font-mono font-bold text-[#78716C] uppercase tracking-wider mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-[11px] font-semibold bg-[#FAF8F5] text-[#1C1917] border border-[#E7E5E4]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3 Concise Highlights */}
                {featuredProject.highlightsList && (
                  <div className="pt-2">
                    <div className="text-[11px] font-mono font-bold text-[#78716C] uppercase tracking-wider mb-2">
                      Key Highlights
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#57534E]">
                      {featuredProject.highlightsList.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#78350F] shrink-0" />
                          <span className="font-medium text-[#1C1917]">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-4 border-t border-[#E7E5E4] flex flex-wrap items-center gap-3">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs group/btn"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] hover:bg-[#F5EFE6] text-[#1C1917] hover:text-[#78350F] border border-[#E7E5E4] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#78350F]" />
                    </a>
                  )}
                </div>

              </div>

              {/* Right Column: ONE Strong Project Screenshot */}
              <div className="lg:col-span-6">
                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="block w-full aspect-video rounded-xl overflow-hidden border border-[#E7E5E4] bg-[#FAF8F5] group/img shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-contain p-2 group-hover/img:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </Link>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C] mt-2 px-1">
                  <span>Interactive Dashboard & Analytics</span>
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="text-[#78350F] hover:underline"
                  >
                    Explore Details &rarr;
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* ======================================================== */}
        {/* PROJECTS 02, 03, 04 — Standard Clean 2-Column Grid       */}
        {/* Unchanged structure for other three projects              */}
        {/* ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-3">
            <span className="text-xs font-mono font-bold text-[#78716C] uppercase tracking-wider">
              More Projects
            </span>
            <span className="text-xs font-mono text-[#78716C]">
              02 &mdash; 04
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standardProjects.map((project: ProjectItem) => (
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
                  <Link
                    to={`/projects/${project.slug}`}
                    className="block w-full aspect-video rounded-xl overflow-hidden border border-[#E7E5E4] bg-[#FAF8F5] group/img shadow-2xs"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-2 group-hover/img:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                  </Link>

                  {/* Technologies */}
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded text-[11px] font-semibold bg-[#FAF8F5] text-[#1C1917] border border-[#E7E5E4]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

      </div>
    </motion.div>
  );
};
