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
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5EFE6]/95 backdrop-blur-md shadow-xs border-b border-[#D8CEC4]'
          : 'bg-[#F5EFE6] border-b border-[#D8CEC4]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group text-left"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#6F1D2A] group-hover:scale-125 transition-transform duration-200"></span>
          <div>
            <span className="font-bold tracking-tight text-base sm:text-lg text-[#241F1D] block leading-none">
              {portfolioData.personal.name}
            </span>
            <span className="text-[10px] uppercase font-medium tracking-wide text-[#6D625C] block mt-1">
              Data Analytics Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items (14-15px) */}
        <nav className="hidden md:flex items-center gap-7 text-sm uppercase font-semibold tracking-wider text-[#6D625C]">
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="relative py-1.5 transition-colors duration-200 hover:text-[#6F1D2A]"
              >
                <span
                  className={
                    isActive ? 'text-[#6F1D2A] font-bold' : 'text-[#6D625C]'
                  }
                >
                  {item.label}
                </span>

                {/* Burgundy active underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#6F1D2A] rounded-full"
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#FAF6F0] border border-[#D8CEC4] text-[#241F1D] hover:text-[#6F1D2A] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-2xs"
          >
            <span>Resume</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#6F1D2A]" />
          </a>
          <a
            href={portfolioData.personal.resumePath}
            download="B_RITHIKASHREE_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#6F1D2A] hover:bg-[#581721] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-xs"
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
            className="p-2 text-[#6F1D2A] hover:bg-[#FAF6F0] rounded"
            title="Download Resume"
          >
            <ArrowDownToLine className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#241F1D] hover:bg-[#FAF6F0] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#6F1D2A]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-[#D8CEC4] bg-[#F5EFE6] px-4 py-4 space-y-3"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm uppercase font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#6F1D2A] text-white font-bold'
                      : 'text-[#6D625C] hover:bg-[#FAF6F0] hover:text-[#6F1D2A]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </NavLink>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#D8CEC4] flex gap-2">
            <a
              href={portfolioData.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[#D8CEC4] bg-white text-xs font-semibold text-[#241F1D]"
            >
              <span>View Resume</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#6F1D2A]" />
            </a>
            <a
              href={portfolioData.personal.resumePath}
              download="B_RITHIKASHREE_Resume.pdf"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#6F1D2A] text-xs font-semibold text-white"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};
