import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart3, 
  BrainCircuit, 
  Layers, 
  Wrench, 
  Sparkles,
  ExternalLink,
  Github
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { ResumeCTA } from '../components/ResumeCTA';
import { portfolioData, ProjectItem } from '../data/portfolioData';

export const HomePage: React.FC = () => {
  const { skills, projects, education } = portfolioData;

  // Selected preview projects for landing page
  const previewProjects = projects.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="flex flex-col"
    >
      {/* 1. Hero Section with Candidate Portrait */}
      <Hero />

      {/* 2. Short Introduction Section */}
      <section className="py-16 md:py-20 border-b border-[#E7E5E4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block">
                01 // Introduction
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight">
                Aspiring Data Analyst blending machine learning foundations with business intelligence.
              </h2>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-2xl">
                Currently pursuing a Bachelor of Engineering in Artificial Intelligence & Machine Learning at <strong>RajaRajeswari College of Engineering</strong> (CGPA {education.cgpa}). I focus on deriving actionable insights from structured data using Excel, Power BI, Python, and SQL.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] hover:bg-[#F5EFE6] border border-[#E7E5E4] text-[#1C1917] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                >
                  <span>Read More About Me</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#78350F]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-3">
              <span className="text-[10px] font-mono text-[#78716C] uppercase block font-semibold">
                Quick Snapshot
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#E7E5E4]">
                  <span className="text-[#57534E]">Degree:</span>
                  <strong className="text-[#1C1917]">B.E. AI & ML</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E7E5E4]">
                  <span className="text-[#57534E]">Institution:</span>
                  <strong className="text-[#1C1917]">RRCE, Bangalore</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E7E5E4]">
                  <span className="text-[#57534E]">CGPA:</span>
                  <strong className="text-[#78350F]">{education.cgpa}</strong>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#57534E]">Graduation:</span>
                  <strong className="text-[#1C1917]">2027</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Projects Preview */}
      <section className="py-16 md:py-24 border-b border-[#E7E5E4] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block">
                02 // Projects Preview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight uppercase">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#78350F] hover:text-[#612A0C] transition-colors"
            >
              <span>Explore All {projects.length} Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewProjects.map((project: ProjectItem) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-[#E7E5E4] p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E7E5E4] text-[10px] font-mono text-[#78350F] inline-block font-semibold">
                    {project.categoryBadge}
                  </span>
                  <h3 className="text-base font-bold text-[#1C1917]">
                    <Link to={`/projects/${project.slug}`} className="hover:text-[#78350F] transition-colors">
                      {project.title}
                    </Link>
                  </h3>
                  
                  {/* Image */}
                  <div className="w-full aspect-video rounded-lg overflow-hidden border border-[#E7E5E4] bg-[#FAF8F5]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-1"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-xs text-[#57534E] leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E7E5E4] flex items-center justify-between">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#78350F]"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#1C1917] hover:text-[#78350F] transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Short Skills Preview */}
      <section className="py-16 md:py-20 border-b border-[#E7E5E4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block">
                03 // Skillset Preview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight uppercase">
                Technical Toolkit
              </h2>
            </div>
            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#78350F] hover:text-[#612A0C] transition-colors"
            >
              <span>View Complete Skillset</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((group) => (
              <div
                key={group.name}
                className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-3"
              >
                <span className="text-[10px] font-mono text-[#78716C] uppercase font-bold block">
                  {group.code}
                </span>
                <h3 className="text-sm font-bold text-[#1C1917]">
                  {group.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-white border border-[#E7E5E4] text-[10px] font-semibold text-[#1C1917]"
                    >
                      {s}
                    </span>
                  ))}
                  {group.skills.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-white border border-[#E7E5E4] text-[10px] font-semibold text-[#78350F]">
                      +{group.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Dedicated Resume CTA */}
      <ResumeCTA />

      {/* 6. Contact Preview Banner */}
      <section className="py-14 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-white border border-[#E7E5E4] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block">
                04 // Get In Touch
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1C1917] tracking-tight">
                Looking for an analytical thinker who can turn data into impact?
              </h2>
              <p className="text-xs sm:text-sm text-[#57534E]">
                I am open to internships, technical projects, and career discussions.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-xs shrink-0"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </motion.div>
  );
};
