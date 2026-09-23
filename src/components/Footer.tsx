import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail, ArrowDownToLine } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E7E5E4] py-12 text-xs text-[#57534E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left info */}
          <div className="text-center md:text-left space-y-1">
            <span className="font-bold text-sm text-[#1C1917] tracking-tight block">
              {personal.name}
            </span>
            <p className="text-xs text-[#78716C]">
              Aspiring Data Analyst &middot; B.E. AI & ML Student at RajaRajeswari College of Engineering
            </p>
          </div>

          {/* Page Route Links */}
          <div className="flex flex-wrap justify-center gap-6 font-semibold uppercase tracking-wider text-[11px]">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[#57534E] hover:text-[#78350F] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 font-semibold text-[#1C1917]">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#78350F] transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#78350F] transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-[#78350F] transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={personal.resumePath}
              download="B_RITHIKASHREE_Resume.pdf"
              className="hover:text-[#78350F] transition-colors flex items-center gap-1"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E7E5E4] bg-white hover:bg-[#F5EFE6] text-[#1C1917] font-semibold text-xs transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="pt-6 border-t border-[#E7E5E4] text-center text-[11px] text-[#78716C]">
          &copy; {new Date().getFullYear()} {personal.name}. Built with React, TypeScript & React Router. Dedicated Multi-Page Portfolio.
        </div>
      </div>
    </footer>
  );
};
