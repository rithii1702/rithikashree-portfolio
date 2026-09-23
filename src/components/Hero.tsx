import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDownToLine, ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroPortraitProps {
  className?: string;
  isMobile?: boolean;
}

const HeroPortrait: React.FC<HeroPortraitProps> = ({ className = '', isMobile = false }) => {
  return (
    <div
      className={`relative mx-auto ${
        isMobile
          ? 'w-full max-w-[250px] sm:max-w-[280px]'
          : 'w-full max-w-[360px] xl:max-w-[390px]'
      } ${className}`}
    >
      {/* Behind the photo: subtle decorative data-grid pattern matching portfolio */}
      <div
        className="absolute -inset-2.5 sm:-inset-3.5 rounded-2xl border border-[#E7E5E4] bg-[#FAF8F5]/90 pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#78350F 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          opacity: 0.16,
        }}
      />

      {/* Subtle technical corner markings */}
      <div className="absolute -top-3.5 -left-3.5 text-[#78350F]/30 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute -bottom-3.5 -right-3.5 text-[#78350F]/30 font-mono text-xs select-none pointer-events-none">+</div>

      {/* Subtle rounded-rectangle crop with thin burgundy border */}
      <div className="relative rounded-2xl overflow-hidden border border-[#78350F]/35 bg-white p-1 shadow-2xs">
        <div className="relative rounded-xl overflow-hidden aspect-[4/5] w-full bg-[#FAF8F5]">
          <img
            src="/assets/profile.jpg"
            alt="B. Rithikashree — Professional Portrait"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>

      {/* Clean, minimalist identifier tag */}
      <div className="absolute -bottom-2.5 right-3 px-2 py-0.5 bg-white border border-[#E7E5E4] rounded text-[10px] font-mono font-medium text-[#78350F] shadow-2xs flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#78350F]" />
        <span>B. RITHIKASHREE</span>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E7E5E4] overflow-hidden">
      {/* Subtle grid background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(#1C1917 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E7E5E4] text-xs font-semibold text-[#78350F]">
              <span className="w-2 h-2 rounded-full bg-[#78350F] animate-pulse"></span>
              <span>AI & ML Student · Aspiring Data Analyst</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1C1917] tracking-tight leading-tight">
                {personal.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#78350F]">
                {personal.role} &middot; <span className="text-[#57534E]">{personal.subrole}</span>
              </p>
            </div>

            {/* Quote / Supporting statement */}
            <blockquote className="border-l-2 border-[#78350F] pl-4 py-1 text-lg sm:text-xl text-[#1C1917] font-medium italic">
              "{personal.tagline}"
            </blockquote>

            {/* Concise professional summary */}
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-2xl">
              {personal.summary}
            </p>

            {/* Mobile Portrait: Displayed below name & introduction on mobile, centered with clean spacing */}
            <div className="lg:hidden py-3 flex justify-center">
              <HeroPortrait isMobile={true} />
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={personal.resumePath}
                download="B_RITHIKASHREE_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-[#FAF8F5] text-[#1C1917] border border-[#E7E5E4] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <ArrowDownToLine className="w-4 h-4 text-[#78350F]" />
                <span>Download Resume</span>
              </a>

              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-[#FAF8F5] text-[#57534E] hover:text-[#1C1917] border border-[#E7E5E4] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <span>View Resume</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#78350F]" />
              </a>
            </div>

            {/* Contact & Social bar */}
            <div className="pt-6 border-t border-[#E7E5E4] flex flex-wrap items-center gap-6 text-xs text-[#57534E]">
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-[#78350F]" />
                <span>{personal.location}</span>
              </div>

              <div className="flex items-center gap-4 font-semibold">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1C1917] hover:text-[#78350F] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1C1917] hover:text-[#78350F] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-1.5 text-[#1C1917] hover:text-[#78350F] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Desktop Professional Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:flex lg:col-span-5 items-center justify-center lg:justify-end"
          >
            <HeroPortrait />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
