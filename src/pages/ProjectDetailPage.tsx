import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowLeft, 
  Github, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { 
  pageVariants, 
  reducedPageVariants, 
  fadeInUp, 
  subtleImageFade 
} from '../utils/animationVariants';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { projects } = portfolioData;
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? reducedPageVariants : pageVariants;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-5 sm:pt-7 md:pt-8 pb-10 sm:pb-12"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-8">

        {/* Back to Projects Button */}
        <motion.div variants={fadeInUp}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#E7E5E4] bg-white hover:bg-[#FAF8F5] text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#78350F] transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#78350F]" />
            <span>&larr; Back to Projects</span>
          </Link>
        </motion.div>

        {/* Header Title Section */}
        <motion.div variants={fadeInUp} className="space-y-4 border-b border-[#E7E5E4] pb-5 sm:pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E7E5E4] text-xs font-mono font-bold text-[#78350F]">
              PROJECT {project.number}
            </span>
            {project.category && (
              <span className="px-2.5 py-1 rounded bg-[#F5EFE6] border border-[#E8D5C4] text-xs font-mono font-bold text-[#6F1D2A]">
                {project.category}
              </span>
            )}
            {project.liveUrl && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                LIVE APPLICATION
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight uppercase">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            {project.subtitle}
          </p>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-2xs group"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo ↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-2xs group ${
                  project.liveUrl
                    ? 'bg-[#1C1917] hover:bg-[#292524]'
                    : 'bg-[#78350F] hover:bg-[#612A0C]'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>{project.liveUrl ? 'GitHub ↗' : 'View Project on GitHub ↗'}</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Screenshot Visual Showcase */}
        <motion.div variants={subtleImageFade} className="bg-white rounded-2xl border border-[#E7E5E4] p-4 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-3 text-xs">
            <span className="font-mono text-[#78716C] uppercase font-semibold">Visual Showcase</span>
            <span className="font-mono text-[#78350F] font-semibold">{project.title}</span>
          </div>
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#E7E5E4] bg-[#FAF8F5] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 md:p-8 shadow-xs space-y-3">
          <div className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
            About the Project
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
            Overview
          </h3>
          <p className="text-[15px] sm:text-[16px] text-[#57534E] leading-relaxed">
            {project.overview}
          </p>
        </motion.div>

        {/* Repository Asset Callout (for .pbix / .xlsx projects) */}
        {project.repoFileNotice && (
          <motion.div variants={fadeInUp} className="bg-[#FAF8F5] rounded-2xl border border-[#E7E5E4] p-5 sm:p-6 flex items-start gap-3.5 shadow-xs">
            <div className="p-2 rounded-lg bg-white border border-[#E7E5E4] text-[#78350F] shrink-0">
              <Github className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-base font-bold text-[#1C1917]">
                Project Source &amp; Analytical Files on GitHub
              </h4>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {project.repoFileNotice} You can clone or browse the repository to inspect raw datasets, DAX measures, Pivot Tables, and visual report designs.
              </p>
            </div>
          </motion.div>
        )}

        {/* Problem & Solution Cards */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 shadow-xs space-y-2.5">
            <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block">
              The Context
            </span>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
              The Problem
            </h3>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#57534E] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 shadow-xs space-y-2.5">
            <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block">
              The Implementation
            </span>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
              The Solution
            </h3>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#57534E] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </motion.div>

        {/* Dynamic Data-Driven Architecture (if present) */}
        {project.dataDrivenHighlight && (
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 md:p-8 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#78350F]" />
              <span>Real Dataset Processing &bull; Zero Mock Data</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
              Dynamic, Data-Driven Architecture
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[#57534E] leading-relaxed">
              {project.dataDrivenHighlight}
            </p>
          </motion.div>
        )}

        {/* AI / RAG Feature (if present) */}
        {project.ragFeature && (
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 md:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>AI / RAG Architecture</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
              Retrieval-Augmented Generation (RAG) System
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[#57534E] leading-relaxed">
              {project.ragFeature}
            </p>

            {project.ragWorkflow && project.ragWorkflow.length > 0 && (
              <div className="pt-2">
                <div className="text-xs font-mono font-bold text-[#78716C] uppercase tracking-wider mb-3">
                  RAG Execution Pipeline
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.ragWorkflow.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#78350F] text-white text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-[13px] font-medium text-[#1C1917]">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Key Features & Tech Stack */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-[#1C1917] uppercase tracking-wider font-mono">
              Key Features
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#57534E]">
              {project.keyFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#78350F] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-[#1C1917] uppercase tracking-wider font-mono">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] text-[13px] sm:text-[13.5px] font-semibold text-[#1C1917]"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.highlight && (
              <div className="pt-4 border-t border-[#E7E5E4] space-y-1">
                <span className="text-[11px] font-mono text-[#78716C] uppercase block font-semibold">
                  Highlight
                </span>
                <p className="text-xs sm:text-[13.5px] font-medium text-[#78350F]">
                  {project.highlight}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Key Contributions & Responsibilities */}
        {project.resumePoints && project.resumePoints.length > 0 && (
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 md:p-8 shadow-xs space-y-3">
            <div className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
              Engineering &amp; Responsibilities
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
              Key Contributions
            </h3>
            <ul className="space-y-2 text-[14.5px] sm:text-[15.5px] text-[#57534E] leading-relaxed">
              {project.resumePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#78350F] shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Project Outcome */}
        {project.outcome && (
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 md:p-8 shadow-xs space-y-3">
            <div className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
              Results & Impact
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
              Project Outcome
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[#57534E] leading-relaxed">
              {project.outcome}
            </p>
          </motion.div>
        )}

        {/* Project Links Callout */}
        {(project.liveUrl || project.githubUrl) && (
          <motion.div variants={fadeInUp} className="bg-[#FAF8F5] rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-base font-bold text-[#1C1917]">
                {project.liveUrl ? 'Experience the Project Live' : 'Explore Complete Project on GitHub'}
              </h4>
              <p className="text-xs sm:text-sm text-[#57534E] mt-0.5">
                {project.liveUrl 
                  ? 'Interact with the deployed application or review the GitHub repository implementation.' 
                  : (project.repoFileNotice || 'Review the repository implementation, documentation, and architecture.')}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs whitespace-nowrap"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo ↗</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs whitespace-nowrap ${
                    project.liveUrl
                      ? 'bg-[#1C1917] hover:bg-[#292524]'
                      : 'bg-[#78350F] hover:bg-[#612A0C]'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>{project.liveUrl ? 'GitHub ↗' : 'View Project on GitHub ↗'}</span>
                </a>
              )}
            </div>
          </motion.div>
        )}

        {/* Next Project Footer Link */}
        <motion.div variants={fadeInUp} className="pt-6 sm:pt-7 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#57534E] hover:text-[#78350F] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] hover:bg-[#F5EFE6] border border-[#E7E5E4] rounded-lg text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1C1917] hover:text-[#78350F] transition-colors"
          >
            <span>Next: {nextProject.number} &mdash; {nextProject.title}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#78350F]" />
          </Link>
        </motion.div>

      </div>
    </motion.div>
  );
};
