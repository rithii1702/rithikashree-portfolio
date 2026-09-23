import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowDownToLine, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E7E5E4]'
          : 'bg-[#FAF8F5] border-b border-[#E7E5E4]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group text-left"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#78350F] group-hover:scale-125 transition-transform duration-200"></span>
          <div>
            <span className="font-bold tracking-tight text-base sm:text-lg text-[#1C1917] block leading-none">
              {portfolioData.personal.name}
            </span>
            <span className="text-[10px] uppercase font-medium tracking-wide text-[#78716C] block mt-0.5">
              Data Analytics Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase font-semibold tracking-wider text-[#57534E]">
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="relative py-1.5 transition-colors duration-200 hover:text-[#78350F]"
              >
                <span
                  className={
                    isActive ? 'text-[#78350F] font-bold' : 'text-[#57534E]'
                  }
                >
                  {item.label}
                </span>

                {/* Subtle burgundy active underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#78350F] rounded-full"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={portfolioData.personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#F5EFE6] border border-[#E7E5E4] text-[#1C1917] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-2xs"
          >
            <span>Resume</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#78350F]" />
          </a>
          <a
            href={portfolioData.personal.resumePath}
            download="B_RITHIKASHREE_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={portfolioData.personal.resumePath}
            download="B_RITHIKASHREE_Resume.pdf"
            className="p-2 text-[#78350F] hover:bg-[#F5EFE6] rounded"
            title="Download Resume"
          >
            <ArrowDownToLine className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C1917] hover:bg-[#F5EFE6] rounded transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E7E5E4] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-semibold rounded transition-colors ${
                    isActive
                      ? 'bg-[#F5EFE6] text-[#78350F] border-l-2 border-[#78350F]'
                      : 'text-[#57534E] hover:bg-[#F5EFE6] hover:text-[#1C1917]'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#E7E5E4] space-y-2">
            <a
              href={portfolioData.personal.resumePath}
              download="B_RITHIKASHREE_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#78350F] text-white text-xs font-semibold uppercase tracking-wider rounded shadow-xs"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <a
              href={portfolioData.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-[#E7E5E4] text-[#1C1917] text-xs font-semibold uppercase tracking-wider rounded"
            >
              <span>View Resume ↗</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#78350F]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
