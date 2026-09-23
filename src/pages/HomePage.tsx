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
      className="flex flex-col bg-[#F5EFE6] text-[#241F1D]"
    >
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Strong two-column, personal & elegant)  */}
      {/* ======================================================== */}
      <section className="relative py-14 sm:py-18 lg:py-24 border-b border-[#D8CEC4] overflow-hidden bg-[#F5EFE6]">
        {/* Subtle background coordinate dot pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04]" 
          style={{ 
            backgroundImage: 'radial-gradient(#6F1D2A 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Personal Introduction & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6 sm:space-y-7"
            >
              {/* Small label: 13-14px */}
              <div className="inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#6F1D2A] tracking-widest uppercase">
                  AI &middot; ML ENGINEERING &middot; 2026
                </span>
              </div>

              {/* Main heading: 50-58px desktop, 38-44px tablet, 32-38px mobile */}
              <div className="space-y-3.5">
                <h1 className="font-serif text-[34px] sm:text-[40px] md:text-[44px] lg:text-[54px] font-bold text-[#241F1D] tracking-tight uppercase leading-[1.08]">
                  {personal.name}
                </h1>

                {/* Short burgundy divider */}
                <div className="w-16 h-0.5 bg-[#6F1D2A]" />

                {/* Sub-roles: clean sans / monospace combination */}
                <div className="text-base sm:text-lg md:text-[20px] font-mono font-bold text-[#241F1D] tracking-wider uppercase space-y-1">
                  <div>AI &amp; ML STUDENT</div>
                  <div className="text-[#6F1D2A]">ASPIRING DATA ANALYST</div>
                </div>
              </div>

              {/* Description: 15-17px */}
              <p className="text-[15px] sm:text-base lg:text-[17px] text-[#6D625C] leading-relaxed max-w-xl">
                Final-year Artificial Intelligence and Machine Learning student interested in Data Analytics, Machine Learning and building practical technology solutions.
              </p>

              {/* Action Buttons: comfortable padding */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#6F1D2A] hover:bg-[#581721] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs group/btn"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="B_RITHIKASHREE_Resume.pdf"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-white hover:bg-[#FAF6F0] text-[#241F1D] hover:text-[#6F1D2A] border border-[#D8CEC4] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs group/res"
                >
                  <span>DOWNLOAD RESUME</span>
                  <ArrowDownToLine className="w-4 h-4 text-[#6F1D2A] group-hover/res:translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center gap-6 text-sm text-[#6D625C]">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#6F1D2A] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#6F1D2A]" />
                  <span className="font-semibold">LinkedIn</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#6F1D2A] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#6F1D2A]" />
                  <span className="font-semibold">GitHub</span>
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#6F1D2A] transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#6F1D2A]" />
                  <span className="font-semibold">Email</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Tall Vertical Portrait (400-450px wide, 550-620px high) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center lg:justify-end items-center"
            >
              <div className="relative w-[310px] sm:w-[350px] lg:w-[420px] xl:w-[440px] max-w-full">
                
                {/* Behind the photo: subtle decorative circles & data grid */}
                <div 
                  className="absolute -inset-4 sm:-inset-6 rounded-3xl border border-[#D8CEC4] bg-white/40 pointer-events-none -z-10"
                  style={{
                    backgroundImage: 'radial-gradient(#6F1D2A 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                    opacity: 0.12,
                  }}
                />

                {/* Thin decorative circle shapes */}
                <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full border border-[#6F1D2A]/15 pointer-events-none -z-10" />
                <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full border border-[#6F1D2A]/10 pointer-events-none -z-10" />

                {/* Thin botanical line flourish */}
                <svg 
                  className="absolute -top-10 -left-10 w-28 h-28 pointer-events-none opacity-25 select-none -z-10 hidden sm:block" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  stroke="#6F1D2A" 
                  strokeWidth="1.2"
                >
                  <path d="M 10 90 Q 30 50, 70 30 Q 85 20, 95 10" strokeLinecap="round" />
                  <path d="M 45 45 Q 60 40, 65 52 Q 52 58, 45 45 Z" fill="#6F1D2A" fillOpacity="0.08" />
                  <path d="M 68 32 Q 80 25, 88 35 Q 75 42, 68 32 Z" fill="#6F1D2A" fillOpacity="0.08" />
                </svg>

                {/* Delicate corner data crosshairs */}
                <div className="absolute -top-3 -left-3 text-[#6F1D2A]/40 font-mono text-xs select-none pointer-events-none">+</div>
                <div className="absolute -bottom-3 -right-3 text-[#6F1D2A]/40 font-mono text-xs select-none pointer-events-none">+</div>

                {/* Top-right subtle quote badge: "Turning data into insights and ideas into impact." */}
                <div className="absolute -top-6 -right-3 sm:-right-5 max-w-[220px] px-3.5 py-2 bg-white/95 backdrop-blur-xs rounded-xl border border-[#D8CEC4] shadow-xs select-none hidden sm:block z-10">
                  <p className="text-[11px] sm:text-xs text-[#6D625C] italic leading-snug">
                    &ldquo;Turning data into insights and ideas into impact.&rdquo;
                  </p>
                </div>

                {/* Clean Professional Photo Crop - Tall Vertical Portrait with Thin Burgundy Border */}
                <div className="relative rounded-2xl overflow-hidden border border-[#6F1D2A]/40 bg-white p-1.5 shadow-md">
                  <div className="relative rounded-xl overflow-hidden w-full h-[450px] sm:h-[490px] lg:h-[570px] xl:h-[590px] bg-[#F5EFE6]">
                    <img
                      src="/assets/profile.jpg"
                      alt="B. Rithikashree — Professional Portrait"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center center' }}
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Bottom-left phrase: "good ideas better tomorrow" */}
                <div className="absolute -bottom-5 -left-3 sm:-left-5 px-4 py-2 bg-white/95 backdrop-blur-xs rounded-xl border border-[#D8CEC4] shadow-xs select-none z-10">
                  <p className="font-serif italic text-xs sm:text-[13px] text-[#6F1D2A] leading-tight">
                    &ldquo;good ideas,<br />
                    better<br />
                    tomorrow&rdquo;
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. AT A GLANCE STRIP (ONE large horizontal container)    */}
      {/* ======================================================== */}
      <section className="border-b border-[#D8CEC4] bg-white py-12 sm:py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D8CEC4]">
            
            {/* 01: Final Year */}
            <div className="py-5 sm:py-2 sm:px-7 first:pl-0 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#6F1D2A] uppercase tracking-wider">
                  01
                </span>
                <GraduationCap className="w-5 h-5 text-[#6F1D2A]" />
              </div>
              <h3 className="font-serif text-[20px] sm:text-[21px] lg:text-[22px] font-bold text-[#241F1D] uppercase tracking-wide">
                FINAL YEAR
              </h3>
              <p className="text-[15px] sm:text-base lg:text-[16px] text-[#6D625C] leading-relaxed">
                B.E. Artificial Intelligence<br className="hidden sm:inline" />
                and Machine Learning
              </p>
            </div>

            {/* 02: Focus */}
            <div className="py-5 sm:py-2 sm:px-7 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#6F1D2A] uppercase tracking-wider">
                  02
                </span>
                <Target className="w-5 h-5 text-[#6F1D2A]" />
              </div>
              <h3 className="font-serif text-[20px] sm:text-[21px] lg:text-[22px] font-bold text-[#241F1D] uppercase tracking-wide">
                FOCUS
              </h3>
              <p className="text-[15px] sm:text-base lg:text-[16px] text-[#6D625C] leading-relaxed">
                Data Analytics<br />
                Machine Learning<br />
                Real-world Solutions
              </p>
            </div>

            {/* 03: Toolkit */}
            <div className="py-5 sm:py-2 sm:px-7 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#6F1D2A] uppercase tracking-wider">
                  03
                </span>
                <Wrench className="w-5 h-5 text-[#6F1D2A]" />
              </div>
              <h3 className="font-serif text-[20px] sm:text-[21px] lg:text-[22px] font-bold text-[#241F1D] uppercase tracking-wide">
                TOOLKIT
              </h3>
              <p className="text-[15px] sm:text-base lg:text-[16px] text-[#6D625C] leading-relaxed">
                Python &middot; SQL &middot; Excel<br />
                Power BI &middot; GitHub<br />
                VS Code
              </p>
            </div>

            {/* 04: Open To */}
            <div className="py-5 sm:py-2 sm:px-7 last:pr-0 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#6F1D2A] uppercase tracking-wider">
                  04
                </span>
                <Sparkles className="w-5 h-5 text-[#6F1D2A]" />
              </div>
              <h3 className="font-serif text-[20px] sm:text-[21px] lg:text-[22px] font-bold text-[#241F1D] uppercase tracking-wide">
                OPEN TO
              </h3>
              <p className="text-[15px] sm:text-base lg:text-[16px] text-[#6D625C] leading-relaxed">
                Internships<br />
                Entry-level opportunities<br />
                Real-world projects
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. WHAT I ENJOY BUILDING (40-46px desktop, 3 spacious)   */}
      {/* ======================================================== */}
      <section className="py-18 md:py-24 border-b border-[#D8CEC4] bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D8CEC4] pb-5">
            <div>
              <span className="text-xs sm:text-[13px] font-mono font-bold text-[#6F1D2A] uppercase tracking-wider block mb-1.5">
                AREAS OF INTEREST
              </span>
              <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-bold text-[#241F1D] tracking-tight uppercase leading-tight">
                WHAT I ENJOY BUILDING
              </h2>
            </div>
            <span className="text-xs sm:text-sm font-mono font-bold text-[#6F1D2A] uppercase tracking-wider">
              IDEAS &rarr; ANALYSIS &rarr; IMPACT
            </span>
          </div>

          {/* Three Spacious Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 01: DATA ANALYSIS */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#D8CEC4] p-7 md:p-8 shadow-xs hover:border-[#6F1D2A]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5 min-h-[220px]"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-[#6F1D2A]">
                    01
                  </span>
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-[#6F1D2A]" />
                </div>
                <h3 className="font-serif text-[20px] sm:text-[21px] lg:text-[22px] font-bold text-[#6F1D2A] uppercase tracking-tight">
                  DATA ANALYSIS
                </h3>
                <p className="text-[15px] sm:text-base lg:text-[16px] text-[#6D625C] leading-relaxed italic">
                  &ldquo;Finding patterns and insights from raw data.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* 02: DATA VISUALIZATION */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#D8CEC4] p-7 md:p-8 shadow-xs hover:border-[#6F1D2A]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5 min-h-[220px]"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-[#6F1D2A]">
                    02
                  </span>
                  <PieChart className="w-5 h-5 sm:w-6 sm:h-6 text-[#6F1D2A]" />
                </div>
                <h3 className="font-serif text-[20px] sm:text-[21px] lg:text-[22px] font-bold text-[#6F1D2A] uppercase tracking-tight">
                  DATA VISUALIZATION
                </h3>
                <p className="text-[15px] sm:text-base lg:text-[16px] text-[#6D625C] leading-relaxed italic">
                  &ldquo;Turning complex information into clear and meaningful dashboards.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* 03: INTELLIGENT SYSTEMS */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#D8CEC4] p-7 md:p-8 shadow-xs hover:border-[#6F1D2A]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5 min-h-[220px]"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-[#6F1D2A]">
                    03
                  </span>
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#6F1D2A]" />
                </div>
                <h3 className="font-serif text-[20px] sm:text-[21px] lg:text-[22px] font-bold text-[#6F1D2A] uppercase tracking-tight">
                  INTELLIGENT SYSTEMS
                </h3>
                <p className="text-[15px] sm:text-base lg:text-[16px] text-[#6D625C] leading-relaxed italic">
                  &ldquo;Exploring machine learning and AI applications to solve real-world problems.&rdquo;
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CURRENTLY FOCUSED ON / OPEN TO (Readable 15-16px pills)*/}
      {/* ======================================================== */}
      <section className="py-16 md:py-20 border-b border-[#D8CEC4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            
            {/* Left: CURRENTLY FOCUSED ON */}
            <div className="space-y-4">
              <span className="text-sm sm:text-base font-mono font-bold text-[#6F1D2A] uppercase tracking-wider block">
                CURRENTLY FOCUSED ON
              </span>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {['SQL', 'Power BI', 'Excel', 'Python', 'Machine Learning'].map((item) => (
                  <span
                    key={item}
                    className="px-5 py-2.5 rounded-full text-[15px] sm:text-base font-semibold bg-[#F5EFE6] text-[#241F1D] border border-[#D8CEC4] hover:border-[#6F1D2A]/50 transition-colors shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: OPEN TO */}
            <div className="space-y-4">
              <span className="text-sm sm:text-base font-mono font-bold text-[#6F1D2A] uppercase tracking-wider block">
                OPEN TO
              </span>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'Data Analyst Internships',
                  'AI/ML Internships',
                  'Entry-Level Opportunities',
                  'Real-World Projects',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-5 py-2.5 rounded-full text-[15px] sm:text-base font-semibold bg-[#F5EFE6] text-[#241F1D] border border-[#D8CEC4] hover:border-[#6F1D2A]/50 transition-colors shadow-2xs"
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
      {/* 5. FINAL CTA (Wide rounded panel, warm beige tint & BR)  */}
      {/* ======================================================== */}
      <section className="py-18 md:py-26 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-[#D8CEC4] bg-gradient-to-br from-white via-[#FAF6F0] to-[#F5ECE5] p-8 sm:p-12 md:p-16 shadow-xs overflow-hidden">
            
            {/* Very faint oversized "BR" background decorative element */}
            <div className="absolute right-4 -bottom-14 font-serif text-[180px] sm:text-[230px] lg:text-[280px] font-black text-[#6F1D2A]/[0.035] select-none pointer-events-none leading-none">
              BR
            </div>

            {/* Subtle decorative botanical / data artwork on the right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20 hidden md:block select-none overflow-hidden">
              <svg 
                viewBox="0 0 300 400" 
                fill="none" 
                stroke="#6F1D2A" 
                strokeWidth="1.2"
                className="w-full h-full object-cover"
              >
                {/* Botanical stem and leaves */}
                <path d="M 150 400 Q 160 250 220 100 Q 240 50 260 20" strokeLinecap="round" />
                <path d="M 170 300 Q 210 280 230 300 Q 200 320 170 300 Z" fill="#6F1D2A" fillOpacity="0.08" />
                <path d="M 185 240 Q 140 220 130 240 Q 160 260 185 240 Z" fill="#6F1D2A" fillOpacity="0.08" />
                <path d="M 205 180 Q 250 160 270 180 Q 240 200 205 180 Z" fill="#6F1D2A" fillOpacity="0.08" />
                <path d="M 225 120 Q 180 100 170 120 Q 200 140 225 120 Z" fill="#6F1D2A" fillOpacity="0.08" />
                {/* Data coordinate lines */}
                <line x1="50" y1="80" x2="280" y2="80" strokeDasharray="3 3" strokeOpacity="0.5" />
                <line x1="50" y1="200" x2="280" y2="200" strokeDasharray="3 3" strokeOpacity="0.5" />
                <line x1="50" y1="320" x2="280" y2="320" strokeDasharray="3 3" strokeOpacity="0.5" />
                <circle cx="220" cy="100" r="3" fill="#6F1D2A" />
                <circle cx="170" cy="300" r="3" fill="#6F1D2A" />
                <circle cx="205" cy="180" r="3" fill="#6F1D2A" />
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl space-y-6">
              {/* Small label: 13-14px */}
              <span className="text-xs sm:text-sm font-mono font-bold text-[#6F1D2A] uppercase tracking-wider block">
                LET&apos;S BUILD SOMETHING MEANINGFUL
              </span>

              {/* Large heading: 38-44px desktop */}
              <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-bold text-[#241F1D] tracking-tight uppercase leading-[1.14]">
                CURIOUS BY NATURE.<br />
                BUILDING WITH PURPOSE.
              </h2>

              {/* Description text: 15-17px */}
              <p className="text-[15px] sm:text-base lg:text-[17px] text-[#6D625C] leading-relaxed">
                &ldquo;I&apos;m always excited to learn, collaborate and work on projects that create real impact.&rdquo;
              </p>

              {/* Buttons with comfortable sizing */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#6F1D2A] hover:bg-[#581721] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs group/btn"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-white hover:bg-[#FAF6F0] text-[#241F1D] hover:text-[#6F1D2A] border border-[#D8CEC4] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs"
                >
                  <span>ABOUT ME</span>
                  <ArrowRight className="w-4 h-4 text-[#6F1D2A]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </motion.div>
  );
};
