import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, CheckCircle2, Server, Database, Layout, Layers, ShieldCheck, ChevronRight, BarChart3, LineChart } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#1C1917]">Project Not Found</h1>
        <p className="text-sm text-[#57534E]">
          The project route you visited does not exist in this portfolio.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#78350F] text-white text-xs font-semibold uppercase tracking-wider rounded"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  // Find other projects for footer navigation
  const otherProjects = portfolioData.projects.filter((p) => p.slug !== slug);

  return (
    <div className="py-12 md:py-20 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#78350F] hover:text-[#612A0C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <div className="text-xs text-[#78716C] font-medium hidden sm:block">
            Projects / <span className="text-[#1C1917] font-bold">{project.categoryBadge}</span>
          </div>
        </div>

        {/* Project Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 border-b border-[#E7E5E4] pb-8"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-white border border-[#E7E5E4] text-xs font-semibold text-[#78350F]">
              {project.categoryBadge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            {project.subtitle}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-semibold text-[#78716C] uppercase mr-1">
              Tech Stack:
            </span>
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-[#E7E5E4] text-[#1C1917]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          {project.githubUrl && (
            <div className="pt-4 flex items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] hover:bg-[#292524] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          )}
        </motion.div>

        {/* Overview, Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 sm:p-7 shadow-sm space-y-3">
            <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block">
              The Challenge & Problem
            </span>
            <h3 className="text-lg font-bold text-[#1C1917]">
              Context & Inefficiencies Addressed
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 sm:p-7 shadow-sm space-y-3">
            <span className="text-xs font-mono font-bold text-[#6D28D9] uppercase tracking-wider block">
              The Solution
            </span>
            <h3 className="text-lg font-bold text-[#1C1917]">
              Approach & Implementation
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              {project.solution}
            </p>
          </div>

        </div>

        {/* Detailed Overview */}
        <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm space-y-3">
          <h3 className="text-lg font-bold text-[#1C1917]">
            Project Overview
          </h3>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Visual Showcase / Screenshot Placeholder Area */}
        <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E7E5E4] pb-4">
            <div>
              <h3 className="text-lg font-bold text-[#1C1917]">
                Visual Showcase & Dashboard Area
              </h3>
              <p className="text-xs text-[#78716C]">
                Interface workflows and data visualizations designed for this project.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E7E5E4] text-[11px] font-mono text-[#78350F]">
              Dashboard Visuals
            </span>
          </div>

          {/* Actual Project Screenshot */}
          {project.image && (
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#E7E5E4] bg-white flex items-center justify-center shadow-2xs">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-2"
                loading="lazy"
              />
            </div>
          )}

          {/* Project Specific Graphic Representation */}
          {project.slug === 'bagbill' && (
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#1C1917] border-b border-[#E7E5E4] pb-2">
                <span>DIGITAL BILLING SYSTEM // INVOICE WORKSPACE</span>
                <span className="text-[#78350F]">GST REGISTERED</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Module</span>
                  <strong className="text-sm text-[#1C1917]">Bill Book</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Tracks all issued sequential invoices and payment statuses.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Module</span>
                  <strong className="text-sm text-[#78350F]">Party Ledger</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Customer credit/debit transaction records with balance updates.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Engine</span>
                  <strong className="text-sm text-[#1C1917]">PDF Generator</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Compiles automated tax, HSN, and itemized calculations.</p>
                </div>
              </div>
            </div>
          )}

          {project.slug === 'data-detective-ai' && (
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#1C1917] border-b border-[#E7E5E4] pb-2">
                <span>ANALYTICS ENGINE // ANOMALY & PATTERN DISCOVERY</span>
                <span className="text-[#6D28D9]">PYTHON WORKFLOWS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Capability</span>
                  <strong className="text-sm text-[#1C1917]">Dataset Exploration</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Automated feature distributions and correlation matrices.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Capability</span>
                  <strong className="text-sm text-[#6D28D9]">Anomaly Detection</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Identifies potential outliers and data inconsistencies.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Output</span>
                  <strong className="text-sm text-[#1C1917]">Analytical Summary</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Structured visualizations to uncover trends and patterns.</p>
                </div>
              </div>
            </div>
          )}

          {project.slug === 'ecommerce-sales-analysis' && (
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#1C1917] border-b border-[#E7E5E4] pb-2">
                <span>POWER BI & EXCEL // SALES KPI DASHBOARD</span>
                <span className="text-[#78350F]">ANALYTICS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Dimension</span>
                  <strong className="text-sm text-[#1C1917]">Revenue Trends</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Revenue cycles, quarterly movements, and monthly variance.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Dimension</span>
                  <strong className="text-sm text-[#78350F]">Product Performance</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Evaluation of top-performing items and category sales.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Dimension</span>
                  <strong className="text-sm text-[#1C1917]">Sales Patterns</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Order volume behaviors and customer transaction patterns.</p>
                </div>
              </div>
            </div>
          )}

          {project.slug === 'pizza-sales-dashboard' && (
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#1C1917] border-b border-[#E7E5E4] pb-2">
                <span>POWER BI // RESTAURANT SALES DASHBOARD</span>
                <span className="text-[#78350F]">BI DASHBOARD</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Metric Area</span>
                  <strong className="text-sm text-[#1C1917]">Peak Order Periods</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Identification of rush hours and highest volume ordering days.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Metric Area</span>
                  <strong className="text-sm text-[#78350F]">Best-Selling Items</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Revenue rank per pizza recipe, sizing, and crust categories.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E7E5E4]">
                  <span className="text-[10px] text-[#78716C] block uppercase font-mono">Metric Area</span>
                  <strong className="text-sm text-[#1C1917]">Category Performance</strong>
                  <p className="text-[11px] text-[#57534E] mt-1">Sales distribution across classic, specialty, and veggie groups.</p>
                </div>
              </div>
            </div>
          )}

          {/* Clearly labeled screenshot placeholder area */}
          <div className="p-4 rounded-lg bg-[#FAF8F5] border border-dashed border-[#D6D3D1] text-center text-xs text-[#78716C]">
            <span>Asset Gallery: Direct dashboard PNG/JPEG screenshots can be placed in this gallery area.</span>
          </div>
        </div>

        {/* Key Features / Capabilities */}
        <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-[#1C1917]">
            Key Features & Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat) => (
              <div
                key={feat}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#78350F] shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-[#1C1917]">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Section (if present) */}
        {project.architecture && (
          <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#1C1917]">
              Technical Architecture & System Workflow
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-[#78350F] uppercase">
                  Frontend Client
                </span>
                <p className="text-xs text-[#57534E]">
                  {project.architecture.frontend}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-[#6D28D9] uppercase">
                  API & Backend
                </span>
                <p className="text-xs text-[#57534E]">
                  {project.architecture.backend}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-[#78350F] uppercase">
                  Persistent Storage
                </span>
                <p className="text-xs text-[#57534E]">
                  {project.architecture.database}
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#E7E5E4]">
              <span className="text-xs font-mono font-bold text-[#78716C] uppercase tracking-wider block">
                Execution Workflow
              </span>
              <div className="space-y-2">
                {project.architecture.workflows.map((wf, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-[#57534E] p-2.5 rounded bg-[#FAF8F5] border border-[#E7E5E4]">
                    <span className="w-5 h-5 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center font-bold text-[10px] text-[#78350F] shrink-0">
                      {idx + 1}
                    </span>
                    <span>{wf}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* My Contribution / Resume Points */}
        <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm space-y-3">
          <h3 className="text-lg font-bold text-[#1C1917]">
            My Contribution & Work
          </h3>
          <ul className="space-y-2.5">
            {project.resumePoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#57534E]">
                <CheckCircle2 className="w-4 h-4 text-[#78350F] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Navigation & Other Projects */}
        <div className="pt-6 border-t border-[#E7E5E4] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#78350F] hover:text-[#612A0C]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>

            <a
              href="#top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs text-[#78716C] hover:text-[#1C1917] font-semibold"
            >
              Back to Top &uarr;
            </a>
          </div>

          {/* Other projects shortcuts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {otherProjects.slice(0, 3).map((op) => (
              <Link
                key={op.id}
                to={`/projects/${op.slug}`}
                className="p-4 rounded-xl bg-white border border-[#E7E5E4] hover:border-[#78350F] hover:shadow-sm transition-all text-left space-y-1 group"
              >
                <span className="text-[10px] font-mono text-[#78716C] block uppercase">
                  {op.categoryBadge}
                </span>
                <strong className="text-xs font-bold text-[#1C1917] group-hover:text-[#78350F] transition-colors block truncate">
                  {op.title}
                </strong>
                <span className="text-[11px] text-[#78350F] font-semibold flex items-center gap-1 mt-2">
                  <span>View Project</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
