import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowDownToLine, 
  Linkedin, 
  Github, 
  Mail, 
  GraduationCap, 
  Target, 
  Wrench, 
  Sparkles, 
  BarChart3, 
  PieChart, 
  Cpu 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const HomePage: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="flex flex-col"
    >
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Two-column, premium personal intro)    */}
      {/* ======================================================== */}
      <section className="relative py-12 md:py-20 lg:py-24 border-b border-[#E7E5E4] overflow-hidden bg-[#FAF8F5]">
        {/* Subtle background coordinate grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035]" 
          style={{ 
            backgroundImage: 'radial-gradient(#1C1917 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Personal Introduction & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Small label */}
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#78350F] tracking-widest uppercase">
                  AI & ML ENGINEERING &middot; 2026
                </span>
              </div>

              {/* Main heading */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1C1917] tracking-tight uppercase leading-[1.08]">
                  {personal.name}
                </h1>

                {/* Small burgundy horizontal line */}
                <div className="w-16 h-0.5 bg-[#78350F]" />

                {/* Sub-roles */}
                <div className="text-sm sm:text-base font-mono font-bold text-[#1C1917] tracking-wider uppercase space-y-1">
                  <div>AI & ML STUDENT</div>
                  <div className="text-[#78350F]">ASPIRING DATA ANALYST</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl">
                Final-year Artificial Intelligence and Machine Learning student interested in Data Analytics, Machine Learning and building practical technology solutions.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs group/btn"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="B_RITHIKASHREE_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#F5EFE6] text-[#1C1917] hover:text-[#78350F] border border-[#E7E5E4] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs group/res"
                >
                  <span>DOWNLOAD RESUME</span>
                  <ArrowDownToLine className="w-3.5 h-3.5 text-[#78350F] group-hover/res:translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Small Social Icons */}
              <div className="pt-2 flex items-center gap-5 text-xs text-[#57534E]">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#78350F] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-[#78350F]" />
                  <span className="font-semibold">LinkedIn</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#78350F] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-[#78350F]" />
                  <span className="font-semibold">GitHub</span>
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#78350F] transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4 text-[#78350F]" />
                  <span className="font-semibold">Email</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Large Strong Vertical Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center lg:justify-end items-center"
            >
              <div className="relative w-[300px] sm:w-[320px] lg:w-[420px] xl:w-[440px] max-w-full">
                
                {/* Behind the photo: subtle decorative circles & data grid */}
                <div 
                  className="absolute -inset-4 sm:-inset-6 rounded-3xl border border-[#E7E5E4] bg-white/40 pointer-events-none -z-10"
                  style={{
                    backgroundImage: 'radial-gradient(#78350F 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                    opacity: 0.14,
                  }}
                />

                {/* Thin decorative circle art */}
                <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full border border-[#78350F]/15 pointer-events-none -z-10" />
                <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full border border-[#78350F]/10 pointer-events-none -z-10" />

                {/* Delicate corner data crosshairs */}
                <div className="absolute -top-3 -left-3 text-[#78350F]/40 font-mono text-xs select-none pointer-events-none">+</div>
                <div className="absolute -bottom-3 -right-3 text-[#78350F]/40 font-mono text-xs select-none pointer-events-none">+</div>

                {/* Clean Professional Photo Crop - Strong Vertical Portrait with Thin Burgundy Border */}
                <div className="relative rounded-2xl overflow-hidden border border-[#78350F]/40 bg-white p-1.5 shadow-md">
                  <div className="relative rounded-xl overflow-hidden w-full h-[420px] sm:h-[450px] lg:h-[580px] xl:h-[600px] bg-[#FAF8F5]">
                    <img
                      src="/assets/profile.jpg"
                      alt="B. Rithikashree — Professional Portrait"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center center' }}
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Handwritten-style decorative phrase near photo */}
                <div className="absolute -bottom-5 -left-3 sm:-left-5 px-3.5 py-1.5 bg-white/95 backdrop-blur-xs rounded-xl border border-[#E7E5E4] shadow-xs select-none">
                  <p className="font-serif italic text-xs text-[#78350F] leading-tight">
                    &ldquo;good ideas,<br />better tomorrow&rdquo;
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. AT A GLANCE (Horizontal 4-column compact strip)       */}
      {/* ======================================================== */}
      <section className="border-b border-[#E7E5E4] bg-white py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E7E5E4]">
            
            {/* 01: Final Year */}
            <div className="py-4 sm:py-0 sm:px-6 first:pl-0 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#78350F] uppercase tracking-wider">
                  01
                </span>
                <GraduationCap className="w-4 h-4 text-[#78350F]" />
              </div>
              <h3 className="text-xs font-mono font-bold text-[#1C1917] uppercase tracking-wider">
                FINAL YEAR
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                B.E. Artificial Intelligence and Machine Learning
              </p>
            </div>

            {/* 02: Focus */}
            <div className="py-4 sm:py-0 sm:px-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#78350F] uppercase tracking-wider">
                  02
                </span>
                <Target className="w-4 h-4 text-[#78350F]" />
              </div>
              <h3 className="text-xs font-mono font-bold text-[#1C1917] uppercase tracking-wider">
                FOCUS
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Data Analytics &middot; Machine Learning &middot; Real-world Solutions
              </p>
            </div>

            {/* 03: Toolkit */}
            <div className="py-4 sm:py-0 sm:px-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#78350F] uppercase tracking-wider">
                  03
                </span>
                <Wrench className="w-4 h-4 text-[#78350F]" />
              </div>
              <h3 className="text-xs font-mono font-bold text-[#1C1917] uppercase tracking-wider">
                TOOLKIT
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Python &middot; SQL &middot; Excel<br />
                Power BI &middot; GitHub &middot; VS Code
              </p>
            </div>

            {/* 04: Open To */}
            <div className="py-4 sm:py-0 sm:px-6 last:pr-0 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#78350F] uppercase tracking-wider">
                  04
                </span>
                <Sparkles className="w-4 h-4 text-[#78350F]" />
              </div>
              <h3 className="text-xs font-mono font-bold text-[#1C1917] uppercase tracking-wider">
                OPEN TO
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Internships &middot; Entry-level opportunities &middot; Real-world projects
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. WHAT I ENJOY BUILDING (3 clean cards, no screenshots) */}
      {/* ======================================================== */}
      <section className="py-16 md:py-24 border-b border-[#E7E5E4] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E7E5E4] pb-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block mb-1">
                Areas of Interest
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight uppercase">
                WHAT I ENJOY BUILDING
              </h2>
            </div>
            <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
              IDEAS &rarr; ANALYSIS &rarr; IMPACT
            </span>
          </div>

          {/* Three Clean Cards in One Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 01: DATA ANALYSIS */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-7 shadow-xs hover:border-[#78350F]/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#78350F]">
                    01
                  </span>
                  <BarChart3 className="w-5 h-5 text-[#78350F]" />
                </div>
                <h3 className="text-lg font-bold text-[#78350F] uppercase tracking-tight">
                  DATA ANALYSIS
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed italic">
                  &ldquo;Finding patterns and insights from raw data.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* 02: DATA VISUALIZATION */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-7 shadow-xs hover:border-[#78350F]/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#78350F]">
                    02
                  </span>
                  <PieChart className="w-5 h-5 text-[#78350F]" />
                </div>
                <h3 className="text-lg font-bold text-[#78350F] uppercase tracking-tight">
                  DATA VISUALIZATION
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed italic">
                  &ldquo;Turning complex information into clear and meaningful dashboards.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* 03: INTELLIGENT SYSTEMS */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-7 shadow-xs hover:border-[#78350F]/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#78350F]">
                    03
                  </span>
                  <Cpu className="w-5 h-5 text-[#78350F]" />
                </div>
                <h3 className="text-lg font-bold text-[#78350F] uppercase tracking-tight">
                  INTELLIGENT SYSTEMS
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed italic">
                  &ldquo;Exploring machine learning and AI applications to solve real-world problems.&rdquo;
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CURRENTLY FOCUSED ON / OPEN TO (Clean 2-column strip) */}
      {/* ======================================================== */}
      <section className="py-16 md:py-20 border-b border-[#E7E5E4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            
            {/* Left: CURRENTLY FOCUSED ON */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block">
                CURRENTLY FOCUSED ON
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {['SQL', 'Power BI', 'Excel', 'Python', 'Machine Learning'].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#1C1917] border border-[#E7E5E4] hover:border-[#78350F]/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: OPEN TO */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block">
                OPEN TO
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'Data Analyst Internships',
                  'AI/ML Internships',
                  'Entry-Level Opportunities',
                  'Real-World Projects',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#1C1917] border border-[#E7E5E4] hover:border-[#78350F]/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SHORT PERSONAL CTA (Wide, elegant, with botanical art)*/}
      {/* ======================================================== */}
      <section className="py-16 md:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-[#E7E5E4] bg-white p-8 sm:p-12 md:p-16 shadow-xs overflow-hidden">
            
            {/* Subtle decorative botanical line illustration on the right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20 hidden md:block select-none overflow-hidden">
              <svg 
                viewBox="0 0 300 400" 
                fill="none" 
                stroke="#78350F" 
                strokeWidth="1.2"
                className="w-full h-full object-cover"
              >
                {/* Botanical stem and leaves */}
                <path d="M 150 400 Q 160 250 220 100 Q 240 50 260 20" strokeLinecap="round" />
                <path d="M 170 300 Q 210 280 230 300 Q 200 320 170 300 Z" fill="#78350F" fillOpacity="0.08" />
                <path d="M 185 240 Q 140 220 130 240 Q 160 260 185 240 Z" fill="#78350F" fillOpacity="0.08" />
                <path d="M 205 180 Q 250 160 270 180 Q 240 200 205 180 Z" fill="#78350F" fillOpacity="0.08" />
                <path d="M 225 120 Q 180 100 170 120 Q 200 140 225 120 Z" fill="#78350F" fillOpacity="0.08" />
                {/* Subtle coordinate data lines */}
                <line x1="50" y1="80" x2="280" y2="80" strokeDasharray="3 3" strokeOpacity="0.5" />
                <line x1="50" y1="200" x2="280" y2="200" strokeDasharray="3 3" strokeOpacity="0.5" />
                <line x1="50" y1="320" x2="280" y2="320" strokeDasharray="3 3" strokeOpacity="0.5" />
                <circle cx="220" cy="100" r="3" fill="#78350F" />
                <circle cx="170" cy="300" r="3" fill="#78350F" />
                <circle cx="205" cy="180" r="3" fill="#78350F" />
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl space-y-6">
              {/* Small label */}
              <span className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider block">
                LET&apos;S BUILD SOMETHING MEANINGFUL
              </span>

              {/* Large heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight uppercase leading-tight">
                CURIOUS BY NATURE.<br />
                BUILDING WITH PURPOSE.
              </h2>

              {/* Short text */}
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                &ldquo;I&apos;m always excited to learn, collaborate and work on projects that create real impact.&rdquo;
              </p>

              {/* Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs group/btn"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF8F5] hover:bg-[#F5EFE6] text-[#1C1917] hover:text-[#78350F] border border-[#E7E5E4] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs"
                >
                  <span>ABOUT ME</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#78350F]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </motion.div>
  );
};
