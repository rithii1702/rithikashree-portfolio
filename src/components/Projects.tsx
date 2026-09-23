import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Github, CheckCircle2 } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const featuredProject = projects.find((p) => p.id === 'data-detective') || projects[0];
  const standardProjects = projects.filter((p) => p.id !== 'data-detective');

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#E7E5E4] bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div>
          <div className="text-xs font-semibold tracking-wider text-[#78350F] uppercase mb-2">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight uppercase">
            PROJECTS
          </h2>
        </div>

        {/* Featured Project: 01 DATA DETECTIVE AI */}
        {featuredProject && (
          <div className="bg-[#FAF8F5] rounded-2xl border-2 border-[#E7E5E4] p-6 sm:p-8 md:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#78350F] tracking-wider uppercase">
                    {featuredProject.number}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-white border border-[#E7E5E4] text-[#78350F]">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight uppercase">
                  <Link to={`/projects/${featuredProject.slug}`}>
                    {featuredProject.title}
                  </Link>
                </h3>
                {featuredProject.quote && (
                  <p className="text-xs sm:text-sm text-[#44403C] italic border-l-2 border-[#78350F] pl-3 py-0.5">
                    &ldquo;{featuredProject.quote}&rdquo;
                  </p>
                )}
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {featuredProject.shortDescription}
                </p>
                <div>
                  <div className="text-[11px] font-mono font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                    Technologies
                  </div>
                  <p className="text-xs font-semibold text-[#1C1917]">
                    {featuredProject.technologies.join(' · ')}
                  </p>
                </div>
                {featuredProject.highlightsList && (
                  <ul className="space-y-1 text-xs text-[#57534E]">
                    {featuredProject.highlightsList.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#78350F] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="pt-4 border-t border-[#E7E5E4] flex items-center gap-3">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#78350F] hover:text-[#612A0C]"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#1C1917] hover:text-[#78350F]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-6">
                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="block w-full aspect-video rounded-xl overflow-hidden border border-[#E7E5E4] bg-white group/img shadow-2xs"
                >
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-contain p-2 group-hover/img:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Standard Projects 02, 03, 04 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standardProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="bg-[#FAF8F5] rounded-xl border border-[#E7E5E4] p-6 sm:p-7 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono font-bold text-[#78350F] tracking-wider mb-1">
                    {project.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1917] tracking-tight hover:text-[#78350F] transition-colors">
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="block w-full aspect-video rounded-lg overflow-hidden border border-[#E7E5E4] bg-white group/img shadow-2xs"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-2 group-hover/img:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </Link>

                <div>
                  <div className="text-[11px] font-mono font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                    Technologies
                  </div>
                  <p className="text-xs font-semibold text-[#1C1917]">
                    {project.technologies.join(' · ')}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E7E5E4] flex items-center justify-between gap-4">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#78350F] hover:text-[#612A0C] transition-colors group/link"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
