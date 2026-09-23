import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, CheckCircle2 } from 'lucide-react';
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
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight uppercase">
                Projects
              </h1>
              <p className="text-sm sm:text-base text-[#57534E] mt-2 max-w-2xl">
                Practical work in data analytics, business intelligence dashboards, and web application tools.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E7E5E4] text-[#78350F] self-start sm:self-auto">
              04 Case Studies
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ALL FOUR PROJECTS — UNIFIED FULL-WIDTH HORIZONTAL LAYOUT  */}
        {/* Same visual weight, padding, typography, and structure   */}
        {/* Project 01: Text LEFT / Image RIGHT                      */}
        {/* Project 02: Image LEFT / Text RIGHT                      */}
        {/* Project 03: Text LEFT / Image RIGHT                      */}
        {/* Project 04: Image LEFT / Text RIGHT                      */}
        {/* Mobile: Text -> Image -> Buttons                         */}
        {/* ======================================================== */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project: ProjectItem, index: number) => {
            const isEven = index % 2 === 1; // Project 02 (index 1), Project 04 (index 3)

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: index * 0.05, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl border border-[#E7E5E4] hover:border-[#78350F]/40 p-6 sm:p-8 md:p-10 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                  {/* 1. TEXT CONTENT SECTION */}
                  {/* On Mobile: order-1 */}
                  {/* On Desktop: Left (cols 1-6) for odd, Right (cols 7-12) for even */}
                  <div
                    className={`order-1 lg:col-span-6 space-y-5 flex flex-col justify-between ${
                      isEven ? 'lg:col-start-7 lg:row-start-1' : 'lg:col-start-1 lg:row-start-1'
                    }`}
                  >
                    <div>
                      {/* Small project number: 01 — PROJECT */}
                      <div className="text-xs font-mono font-bold text-[#78350F] tracking-wider uppercase mb-2">
                        {project.number} &mdash; PROJECT
                      </div>

                      {/* Project title */}
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight hover:text-[#78350F] transition-colors uppercase">
                        <Link to={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h2>
                    </div>

                    {/* Short professional description */}
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* TECHNOLOGIES */}
                    <div>
                      <div className="text-[11px] font-mono font-bold text-[#78716C] uppercase tracking-wider mb-2">
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

                    {/* KEY HIGHLIGHTS */}
                    {project.highlightsList && project.highlightsList.length > 0 && (
                      <div className="pt-1">
                        <div className="text-[11px] font-mono font-bold text-[#78716C] uppercase tracking-wider mb-2">
                          Key Highlights
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#57534E]">
                          {project.highlightsList.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#78350F] shrink-0" />
                              <span className="font-medium text-[#1C1917]">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* 2. IMAGE PREVIEW SECTION */}
                  {/* On Mobile: order-2 (between text and buttons) */}
                  {/* On Desktop: Right (cols 7-12) for odd, Left (cols 1-6) for even; row-span-2 */}
                  <div
                    className={`order-2 lg:col-span-6 w-full ${
                      isEven
                        ? 'lg:col-start-1 lg:row-start-1 lg:row-span-2'
                        : 'lg:col-start-7 lg:row-start-1 lg:row-span-2'
                    }`}
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      className="block w-full aspect-video rounded-xl overflow-hidden border border-[#E7E5E4] bg-[#FAF8F5] group/img shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/img:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    </Link>
                  </div>

                  {/* 3. ACTION BUTTONS SECTION */}
                  {/* On Mobile: order-3 (bottom) */}
                  {/* On Desktop: row-start-2 aligned with text column */}
                  <div
                    className={`order-3 lg:col-span-6 pt-4 border-t border-[#E7E5E4] flex flex-wrap items-center gap-3 ${
                      isEven ? 'lg:col-start-7 lg:row-start-2' : 'lg:col-start-1 lg:row-start-2'
                    }`}
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs group/btn"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] hover:bg-[#F5EFE6] text-[#1C1917] hover:text-[#78350F] border border-[#E7E5E4] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs group/gh"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/gh:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
};
