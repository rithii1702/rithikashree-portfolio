import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
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
    <footer className="bg-[#F5EFE6] border-t border-[#D8CEC4] py-8 sm:py-10 text-xs text-[#6D625C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* LEFT: Copyright notice */}
          <div className="text-center md:text-left text-xs sm:text-[13px] font-medium text-[#6D625C]">
            &copy; 2026 {personal.name}. All rights reserved.
          </div>

          {/* RIGHT: Navigation Links + Small circular Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-semibold uppercase tracking-wider text-xs sm:text-[13px]">
            <div className="flex items-center gap-5 sm:gap-7">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[#6D625C] hover:text-[#6F1D2A] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Small circular Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#6D625C] hover:text-[#6F1D2A] transition-colors group cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span className="w-7 h-7 rounded-full border border-[#D8CEC4] bg-white flex items-center justify-center shadow-2xs group-hover:border-[#6F1D2A] transition-colors">
                <ArrowUp className="w-3.5 h-3.5 text-[#6F1D2A] group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <span className="hidden sm:inline">Back to Top</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
