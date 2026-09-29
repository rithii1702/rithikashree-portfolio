import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, CheckCircle2, ExternalLink } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

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

        {/* All 4 Projects in unified alternating layout */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project: ProjectItem, index: number) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="bg-[#FAF8F5] rounded-2xl border border-[#E7E5E4] p-6 sm:p-8 md:p-10 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Text */}
                  <div
                    className={`order-1 lg:col-span-6 space-y-4 ${
                      isEven ? 'lg:col-start-7 lg:row-start-1' : 'lg:col-start-1 lg:row-start-1'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-[#78350F] tracking-wider uppercase mb-1">
                      <span>{project.number} &mdash; PROJECT</span>
                      {project.liveUrl && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10.5px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          LIVE
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight uppercase">
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                      {project.shortDescription}
                    </p>
                    <div>
                      <div className="text-[11px] font-mono font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded text-[11px] font-semibold bg-white text-[#1C1917] border border-[#E7E5E4]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.highlightsList && (
                      <ul className="space-y-1 text-xs text-[#57534E]">
                        {project.highlightsList.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#78350F] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Image */}
                  <div
                    className={`order-2 lg:col-span-6 w-full ${
                      isEven
                        ? 'lg:col-start-1 lg:row-start-1 lg:row-span-2'
                        : 'lg:col-start-7 lg:row-start-1 lg:row-span-2'
                    }`}
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      className="block w-full aspect-video rounded-xl overflow-hidden border border-[#E7E5E4] bg-white group/img shadow-2xs"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/img:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    </Link>
                  </div>

                  {/* Buttons */}
                  <div
                    className={`order-3 lg:col-span-6 pt-4 border-t border-[#E7E5E4] flex flex-wrap items-center gap-3 ${
                      isEven ? 'lg:col-start-7 lg:row-start-2' : 'lg:col-start-1 lg:row-start-2'
                    }`}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo ↗</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs ${
                          project.liveUrl
                            ? 'bg-white hover:bg-[#FAF8F5] text-[#1C1917] hover:text-[#78350F] border border-[#E7E5E4]'
                            : 'bg-[#78350F] hover:bg-[#612A0C] text-white'
                        }`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub ↗</span>
                      </a>
                    )}
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#78350F] hover:text-[#612A0C] px-2 py-2"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
