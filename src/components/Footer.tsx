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
    <footer className="bg-[#F5EFE6] border-t border-[#D8CEC4] py-10 text-xs text-[#6D625C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright notice */}
          <div className="text-center sm:text-left text-xs sm:text-[13px] font-medium text-[#6D625C]">
            &copy; 2026 {personal.name}. All rights reserved.
          </div>

          {/* Minimal Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-7 font-semibold uppercase tracking-wider text-xs sm:text-[13px]">
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

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#D8CEC4] bg-white hover:bg-[#FAF6F0] text-[#241F1D] hover:text-[#6F1D2A] font-semibold text-xs sm:text-[13px] transition-colors shadow-2xs group"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#6F1D2A] group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
};
