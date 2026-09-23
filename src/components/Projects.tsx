import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#E7E5E4] bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Simple, no category filters */}
        <div className="mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#78350F] uppercase mb-2">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight uppercase">
            PROJECTS
          </h2>
        </div>

        {/* 2-Column Grid on Desktop, Vertical Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="bg-[#FAF8F5] rounded-xl border border-[#E7E5E4] p-6 sm:p-7 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Project Number & Title */}
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

                {/* Exactly ONE Project Image in 16:9 aspect ratio directly below project title */}
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

                {/* Technologies */}
                <div>
                  <div className="text-[11px] font-mono font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                    Technologies
                  </div>
                  <p className="text-xs font-semibold text-[#1C1917]">
                    {project.technologies.join(' · ')}
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Bottom Action buttons */}
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
