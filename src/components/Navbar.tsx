import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowDownToLine, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Education', target: 'education' },
    { label: 'Certifications', target: 'certifications' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/#' + target);
    } else {
      const elem = document.getElementById(target);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E7E5E4]'
          : 'bg-[#FAF8F5] border-b border-[#E7E5E4]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group text-left"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
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
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase font-semibold tracking-wider text-[#57534E]">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(e) => handleNavClick(e, item.target)}
              className="hover:text-[#78350F] transition-colors py-1 relative hover:-translate-y-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={portfolioData.personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#F5EFE6] border border-[#E7E5E4] text-[#1C1917] text-xs font-semibold uppercase tracking-wider rounded transition-colors"
          >
            <span>View Resume</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#78350F]" />
          </a>
          <a
            href={portfolioData.personal.resumePath}
            download="B_RITHIKASHREE_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
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
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E7E5E4] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(e) => handleNavClick(e, item.target)}
                className="px-3 py-2 text-sm font-medium text-[#1C1917] hover:bg-[#F5EFE6] rounded transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E7E5E4] space-y-2">
            <a
              href={portfolioData.personal.resumePath}
              download="B_RITHIKASHREE_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#78350F] text-white text-xs font-semibold uppercase tracking-wider rounded shadow-sm"
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
              <span>View Resume</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#78350F]" />
            </a>

            <div className="flex justify-around pt-2 text-xs font-semibold text-[#78350F]">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="hover:underline"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
