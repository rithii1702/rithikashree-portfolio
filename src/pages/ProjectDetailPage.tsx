import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Layers,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { projects } = portfolioData;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="min-h-screen py-10 md:py-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Back to Projects Button */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#E7E5E4] bg-white hover:bg-[#FAF8F5] text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#78350F] transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#78350F]" />
            <span>&larr; Back to Projects</span>
          </Link>
        </div>

        {/* Header Title Section */}
        <div className="space-y-4 border-b border-[#E7E5E4] pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-white border border-[#E7E5E4] text-xs font-mono font-semibold text-[#78350F]">
              {project.categoryBadge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            {project.subtitle}
          </p>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] hover:bg-[#292524] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-2xs"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-2xs"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Screenshot Visual Showcase */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-4 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-3 text-xs">
            <span className="font-mono text-[#78716C] uppercase font-semibold">Visual Showcase</span>
            <span className="font-mono text-[#78350F] font-semibold">{project.category}</span>
          </div>
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#E7E5E4] bg-[#FAF8F5] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain p-2"
              loading="lazy"
            />
          </div>
        </div>

        {/* Problem & Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-xs space-y-2">
            <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block">
              The Challenge & Problem
            </span>
            <h3 className="text-base font-bold text-[#1C1917]">
              Context & Inefficiencies Addressed
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-xs space-y-2">
            <span className="text-xs font-mono font-bold text-[#6D28D9] uppercase tracking-wider block">
              The Solution
            </span>
            <h3 className="text-base font-bold text-[#1C1917]">
              Approach & Implementation
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-8 shadow-xs space-y-3">
          <h3 className="text-lg font-bold text-[#1C1917]">
            Project Overview
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Key Features & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-[#1C1917] uppercase tracking-wider font-mono">
              Key Features
            </h3>
            <ul className="space-y-2 text-xs text-[#57534E]">
              {project.keyFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#78350F] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-[#1C1917] uppercase tracking-wider font-mono">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] text-xs font-semibold text-[#1C1917]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E7E5E4] space-y-2">
              <span className="text-[11px] font-mono text-[#78716C] uppercase block font-semibold">
                Highlights
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2 py-0.5 rounded bg-[#F5EFE6] border border-[#E8D5C4] text-[10px] font-mono font-semibold text-[#78350F]"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Next Project Footer Link */}
        <div className="pt-8 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#57534E] hover:text-[#78350F] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] hover:bg-[#F5EFE6] border border-[#E7E5E4] rounded-lg text-xs font-bold uppercase tracking-wider text-[#1C1917] hover:text-[#78350F] transition-colors"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#78350F]" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
};
