import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, CheckCircle2, ExternalLink } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { 
  pageVariants, 
  reducedPageVariants, 
  fadeInUp, 
  staggerContainer 
} from '../utils/animationVariants';

export const ProjectsPage: React.FC = () => {
  const { projects } = portfolioData;
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? reducedPageVariants : pageVariants;

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-5 sm:pt-7 md:pt-8 pb-10 sm:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-8">

        {/* Section Header */}
        <motion.div variants={fadeInUp} className="space-y-2.5 sm:space-y-3 border-b border-[#E7E5E4] pb-5 sm:pb-6">
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
              <p className="text-[15px] sm:text-[16px] text-[#57534E] mt-2 max-w-2xl leading-relaxed">
                Practical work in data analytics, business intelligence dashboards, and web application tools.
              </p>
            </div>
            <span className="text-[13px] font-mono font-semibold px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E7E5E4] text-[#78350F] self-start sm:self-auto shrink-0">
              04 Case Studies
            </span>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* ALL FOUR PROJECTS — UNIFIED FULL-WIDTH HORIZONTAL LAYOUT  */}
        {/* Same visual weight, padding, typography, and structure   */}
        {/* Project 01: Text LEFT / Image RIGHT                      */}
        {/* Project 02: Image LEFT / Text RIGHT                      */}
        {/* Project 03: Text LEFT / Image RIGHT                      */}
        {/* Project 04: Image LEFT / Text RIGHT                      */}
        {/* Mobile: Text -> Image -> Buttons                         */}
        {/* ======================================================== */}
        <motion.div variants={staggerContainer} className="space-y-7 sm:space-y-8">
          {projects.map((project: ProjectItem, index: number) => {
            const isEven = index % 2 === 1; // Project 02 (index 1), Project 04 (index 3)

            return (
              <motion.article
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl border border-[#E7E5E4] hover:border-[#78350F]/40 p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

                  {/* 1. TEXT CONTENT SECTION */}
                  {/* On Mobile: order-1 */}
                  {/* On Desktop: Left (cols 1-6) for odd, Right (cols 7-12) for even */}
                  <div
                    className={`order-1 lg:col-span-6 space-y-4 sm:space-y-5 flex flex-col justify-between ${
                      isEven ? 'lg:col-start-7 lg:row-start-1' : 'lg:col-start-1 lg:row-start-1'
                    }`}
                  >
                    <div>
                      {/* Small project number: 01 — PROJECT */}
                      <div className="flex flex-wrap items-center gap-2 text-[12px] sm:text-[13px] font-mono font-bold tracking-wider uppercase mb-1.5">
                        <span className="text-[#78350F]">{project.number} &mdash; PROJECT</span>
                        {project.category && (
                          <>
                            <span className="text-[#D8CEC4]">&bull;</span>
                            <span className="text-[#6F1D2A]">{project.category}</span>
                          </>
                        )}
                        {project.liveUrl && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10.5px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            LIVE
                          </span>
                        )}
                      </div>

                      {/* Project title & Subtitle */}
                      <div>
                        <h2 className="font-serif text-2xl sm:text-[26px] md:text-[28px] font-bold text-[#1C1917] tracking-tight hover:text-[#78350F] transition-colors uppercase leading-tight">
                          <Link to={`/projects/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h2>
                        {project.subtitle && (
                          <p className="text-xs sm:text-[13px] font-mono text-[#78350F] font-semibold tracking-wide uppercase mt-1">
                            {project.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Short professional description */}
                    <p className="text-[15px] sm:text-[16px] text-[#57534E] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* TECHNOLOGIES */}
                    <div>
                      <div className="text-xs font-mono font-bold text-[#78716C] uppercase tracking-wider mb-2">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg text-[13px] sm:text-[13.5px] font-semibold bg-[#FAF8F5] text-[#1C1917] border border-[#E7E5E4]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* KEY HIGHLIGHTS */}
                    {project.highlightsList && project.highlightsList.length > 0 && (
                      <div className="pt-0.5">
                        <div className="text-xs font-mono font-bold text-[#78716C] uppercase tracking-wider mb-2">
                          Key Highlights
                        </div>
                        <ul className="space-y-1.5 text-[13.5px] sm:text-[14px] text-[#57534E]">
                          {project.highlightsList.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#78350F] shrink-0" />
                              <span className="font-medium text-[#1C1917]">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* REPOSITORY ASSET NOTICE (e.g. .pbix / .xlsx) */}
                    {project.repoFileNotice && (
                      <div className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] text-[12px] sm:text-[13px] font-mono text-[#78350F]">
                        <span className="font-bold shrink-0">📁 Repo Asset:</span>
                        <span className="text-[#57534E]">{project.repoFileNotice}</span>
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
                    className={`order-3 lg:col-span-6 pt-3.5 sm:pt-4 border-t border-[#E7E5E4] flex flex-wrap items-center gap-3 ${
                      isEven ? 'lg:col-start-7 lg:row-start-2' : 'lg:col-start-1 lg:row-start-2'
                    }`}
                  >
                    {project.liveUrl ? (
                      <>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs sm:text-[13.5px] font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs group/live"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo ↗</span>
                        </a>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#FAF8F5] hover:bg-[#F5EFE6] text-[#1C1917] hover:text-[#78350F] border border-[#E7E5E4] text-xs sm:text-[13.5px] font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs group/gh"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub ↗</span>
                          </a>
                        )}
                      </>
                    ) : (
                      <>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs sm:text-[13.5px] font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs group/gh"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Project on GitHub</span>
                            <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </>
                    )}

                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-lg transition-colors text-[#78350F] hover:underline group/btn"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </motion.div>
  );
};
