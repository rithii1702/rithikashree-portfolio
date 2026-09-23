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
  Laptop, 
  Briefcase, 
  BarChart3, 
  PieChart, 
  Brain, 
  Heart 
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
      {/* 1. HERO SECTION — EXACT MATCH TO REFERENCE               */}
      {/* ======================================================== */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Personal Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Small uppercase label */}
              <div>
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#B88A78] tracking-widest uppercase">
                  TURNING IDEAS INTO INSIGHTS
                </span>
              </div>

              {/* Main Heading: B. RITHIKASHREE in Playfair Display serif */}
              <div className="space-y-3.5">
                <h1 className="font-serif text-[38px] sm:text-[46px] md:text-[50px] lg:text-[56px] font-bold text-[#241F1D] tracking-tight uppercase leading-[1.06]">
                  {personal.name}
                </h1>

                {/* Sub-roles in clean sans-serif/grotesque */}
                <div className="text-base sm:text-lg md:text-[20px] font-sans font-bold text-[#241F1D] tracking-wider uppercase space-y-1">
                  <div>AI &amp; ML STUDENT</div>
                  <div>ASPIRING DATA ANALYST</div>
                </div>

                {/* Short burgundy horizontal line */}
                <div className="w-16 h-0.5 bg-[#6F1D2A] mt-2 mb-4" />
              </div>

              {/* Description */}
              <p className="text-[15px] sm:text-base lg:text-[17px] text-[#6D625C] leading-relaxed max-w-xl">
                Final-year Artificial Intelligence and Machine Learning student interested in Data Analytics, Machine Learning and building practical technology solutions.
              </p>

              {/* Action Buttons */}
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
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#F5EFE6] hover:bg-white text-[#241F1D] hover:text-[#6F1D2A] border border-[#D8CEC4] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs group/res"
                >
                  <span>DOWNLOAD RESUME</span>
                  <ArrowDownToLine className="w-4 h-4 text-[#6F1D2A] group-hover/res:translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Below buttons: Social Links with matching icons */}
              <div className="pt-3 flex items-center gap-6 text-sm text-[#241F1D]">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#6F1D2A] transition-colors font-medium"
                  aria-label="LinkedIn Profile"
                >
                  <span className="w-5 h-5 rounded bg-[#0A66C2] flex items-center justify-center text-white text-xs font-bold">
                    in
                  </span>
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#6F1D2A] transition-colors font-medium"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 text-[#241F1D]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#6F1D2A] transition-colors font-medium"
                  aria-label="Send Email"
                >
                  <span className="w-5 h-5 rounded bg-[#6F1D2A] flex items-center justify-center text-white">
                    <Mail className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span>Email</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Tall Arched Portrait with Exact Reference Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center lg:justify-end items-center"
            >
              <div className="relative flex items-center gap-4 sm:gap-6">
                
                {/* Center Arched Portrait Frame */}
                <div className="relative w-[280px] sm:w-[320px] md:w-[350px] lg:w-[360px] xl:w-[380px]">
                  
                  {/* Soft beige organic shape behind arch */}
                  <div 
                    className="absolute -top-8 -left-8 -right-8 h-[90%] rounded-full bg-[#EBDED0]/80 pointer-events-none -z-10"
                    style={{ transform: 'scale(1.05)' }}
                  />

                  {/* Botanical leaf branch curving along the left edge */}
                  <svg 
                    className="absolute -top-6 -left-12 w-28 h-56 pointer-events-none select-none -z-10 text-[#6F1D2A]/35" 
                    viewBox="0 0 100 200" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                  >
                    <path d="M 50 190 Q 30 110, 80 40 Q 90 20, 95 10" strokeLinecap="round" />
                    <path d="M 40 140 Q 15 130, 20 110 Q 35 120, 42 135" fill="currentColor" fillOpacity="0.08" />
                    <path d="M 46 110 Q 10 90, 25 75 Q 40 85, 48 105" fill="currentColor" fillOpacity="0.08" />
                    <path d="M 58 75 Q 30 50, 48 35 Q 60 55, 60 70" fill="currentColor" fillOpacity="0.08" />
                    <path d="M 70 45 Q 55 25, 70 15 Q 80 30, 72 42" fill="currentColor" fillOpacity="0.08" />
                  </svg>

                  {/* Dot matrix pattern on the upper-left */}
                  <div 
                    className="absolute -top-4 -left-6 w-16 h-16 pointer-events-none opacity-20 -z-10"
                    style={{
                      backgroundImage: 'radial-gradient(#6F1D2A 1.5px, transparent 1.5px)',
                      backgroundSize: '10px 10px',
                    }}
                  />

                  {/* Small decorative sparkle star on upper right */}
                  <div className="absolute -top-2 -right-4 text-[#B88A78] text-xl font-serif select-none pointer-events-none">
                    ✦
                  </div>

                  {/* Arched Photo Container with Thin Burgundy Border */}
                  <div className="relative rounded-t-[170px] sm:rounded-t-[200px] rounded-b-[26px] overflow-hidden border border-[#6F1D2A]/50 bg-white p-1.5 shadow-md">
                    <div className="relative rounded-t-[160px] sm:rounded-t-[190px] rounded-b-[20px] overflow-hidden w-full h-[430px] sm:h-[480px] lg:h-[530px] xl:h-[550px] bg-[#F5EFE6]">
                      <img
                        src="/assets/profile.jpg"
                        alt="B. Rithikashree — Professional Portrait"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center 20%' }}
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Callout: Handwritten Script & Quote Column */}
                <div className="flex flex-col items-start space-y-4 max-w-[140px] sm:max-w-[160px] select-none">
                  {/* Handwritten script: good ideas better tomorrow + Heart */}
                  <div className="text-left">
                    <p className="font-script text-2xl sm:text-3xl text-[#6F1D2A] leading-tight tracking-wide">
                      good<br />
                      ideas<br />
                      better<br />
                      tomorrow
                    </p>
                    <div className="pt-1.5 flex justify-start">
                      <Heart className="w-4 h-4 text-[#6F1D2A] fill-[#6F1D2A]/15" />
                    </div>
                  </div>

                  {/* Thin vertical separator line */}
                  <div className="w-8 h-px bg-[#D8CEC4]" />

                  {/* Small quote */}
                  <div className="text-left text-[11px] sm:text-xs text-[#6D625C] leading-snug">
                    <p>
                      Turning<br />
                      data into<br />
                      insights and<br />
                      ideas into<br />
                      impact.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FOUR-ITEM INFORMATION STRIP (ONE rounded container)   */}
      {/* ======================================================== */}
      <section className="py-8 sm:py-10 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#D8CEC4] bg-white p-6 sm:p-8 lg:p-9 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D8CEC4]">
              
              {/* COLUMN 01: FINAL YEAR */}
              <div className="py-4 sm:py-2 sm:px-6 first:pl-0 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF0EB] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#6F1D2A]" />
                </div>
                <h3 className="font-sans text-xs sm:text-[13px] font-bold text-[#6F1D2A] uppercase tracking-wider">
                  FINAL YEAR
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#6D625C] leading-relaxed">
                  B.E. Artificial Intelligence<br />and Machine Learning
                </p>
              </div>

              {/* COLUMN 02: FOCUS */}
              <div className="py-4 sm:py-2 sm:px-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF0EB] flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#6F1D2A]" />
                </div>
                <h3 className="font-sans text-xs sm:text-[13px] font-bold text-[#6F1D2A] uppercase tracking-wider">
                  FOCUS
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#6D625C] leading-relaxed">
                  Data Analytics<br />Machine Learning<br />Real-world Solutions
                </p>
              </div>

              {/* COLUMN 03: TOOLKIT */}
              <div className="py-4 sm:py-2 sm:px-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF0EB] flex items-center justify-center">
                  <Laptop className="w-6 h-6 text-[#6F1D2A]" />
                </div>
                <h3 className="font-sans text-xs sm:text-[13px] font-bold text-[#6F1D2A] uppercase tracking-wider">
                  TOOLKIT
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#6D625C] leading-relaxed">
                  Python &middot; SQL &middot; Excel<br />Power BI &middot; GitHub<br />VS Code
                </p>
              </div>

              {/* COLUMN 04: OPEN TO */}
              <div className="py-4 sm:py-2 sm:px-6 last:pr-0 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF0EB] flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#6F1D2A]" />
                </div>
                <h3 className="font-sans text-xs sm:text-[13px] font-bold text-[#6F1D2A] uppercase tracking-wider">
                  OPEN TO
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#6D625C] leading-relaxed">
                  Internships<br />Entry-level opportunities<br />Real-world projects
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. WHAT I ENJOY BUILDING (Title case, decorative cards)  */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-18 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#6D625C] uppercase tracking-wider">
                  WHAT DRIVES ME
                </span>
                <div className="w-16 h-px bg-[#D8CEC4]" />
              </div>
              <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[44px] font-bold text-[#241F1D] tracking-tight leading-tight">
                What I Enjoy Building
              </h2>
            </div>
            <span className="text-xs sm:text-sm font-mono font-bold text-[#6F1D2A] uppercase tracking-wider">
              IDEAS &rarr; ANALYSIS &rarr; IMPACT
            </span>
          </div>

          {/* Three Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            
            {/* CARD 01: Data Analysis */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#D8CEC4] p-7 sm:p-8 shadow-xs hover:border-[#6F1D2A]/40 hover:shadow-md transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Left Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAF0EB] flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-[#6F1D2A]" />
                  </div>
                  {/* Decorative outline chart graphic */}
                  <div className="opacity-20 text-[#6F1D2A]">
                    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="6" y="22" width="6" height="14" rx="1" />
                      <rect x="17" y="14" width="6" height="22" rx="1" />
                      <rect x="28" y="8" width="6" height="28" rx="1" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#6F1D2A]">
                    Data Analysis
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[#6D625C] leading-relaxed">
                    Finding patterns and insights from raw data.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 02: Data Visualization */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#D8CEC4] p-7 sm:p-8 shadow-xs hover:border-[#6F1D2A]/40 hover:shadow-md transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Left Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAF0EB] flex items-center justify-center">
                    <PieChart className="w-6 h-6 text-[#6F1D2A]" />
                  </div>
                  {/* Decorative browser line chart graphic */}
                  <div className="opacity-20 text-[#6F1D2A]">
                    <svg className="w-12 h-10" viewBox="0 0 48 36" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="2" width="44" height="32" rx="3" />
                      <line x1="2" y1="10" x2="46" y2="10" />
                      <path d="M 8 26 L 18 18 L 28 22 L 38 14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#6F1D2A]">
                    Data Visualization
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[#6D625C] leading-relaxed">
                    Turning complex information into clear and meaningful dashboards.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 03: Intelligent Systems */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#D8CEC4] p-7 sm:p-8 shadow-xs hover:border-[#6F1D2A]/40 hover:shadow-md transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Left Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAF0EB] flex items-center justify-center">
                    <Brain className="w-6 h-6 text-[#6F1D2A]" />
                  </div>
                  {/* Decorative gear outline graphic */}
                  <div className="opacity-20 text-[#6F1D2A]">
                    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="20" cy="20" r="7" />
                      <path d="M 20 4 L 20 9 M 20 31 L 20 36 M 4 20 L 9 20 M 31 20 L 36 20 M 8.7 8.7 L 12.2 12.2 M 27.8 27.8 L 31.3 31.3 M 8.7 31.3 L 12.2 27.8 M 27.8 12.2 L 31.3 8.7" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#6F1D2A]">
                    Intelligent Systems
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[#6D625C] leading-relaxed">
                    Exploring machine learning and AI applications to solve real-world problems.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CURRENTLY FOCUSED ON / OPEN TO (Two-column layout)    */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            
            {/* Left Column: Currently Focused On */}
            <div className="space-y-4">
              <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#241F1D]">
                Currently Focused On
              </h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2.5">
                  {['SQL', 'Power BI', 'Excel', 'Python'].map((item) => (
                    <span
                      key={item}
                      className="px-5 py-2.5 rounded-full text-[14px] sm:text-[15px] font-medium bg-[#EBE2D8] text-[#241F1D] border border-[#DDD3C7] shadow-2xs hover:border-[#6F1D2A]/40 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="inline-block px-5 py-2.5 rounded-full text-[14px] sm:text-[15px] font-medium bg-[#EBE2D8] text-[#241F1D] border border-[#DDD3C7] shadow-2xs hover:border-[#6F1D2A]/40 transition-colors">
                    Machine Learning
                  </span>
                </div>
              </div>
            </div>

            {/* Thin vertical divider line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#D8CEC4]" />

            {/* Right Column: Open To */}
            <div className="space-y-4 md:pl-8">
              <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#241F1D]">
                Open To
              </h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2.5">
                  {['Data Analyst Internships', 'AI/ML Internships'].map((item) => (
                    <span
                      key={item}
                      className="px-5 py-2.5 rounded-full text-[14px] sm:text-[15px] font-medium bg-[#EBE2D8] text-[#241F1D] border border-[#DDD3C7] shadow-2xs hover:border-[#6F1D2A]/40 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Entry-Level Opportunities', 'Real-World Projects'].map((item) => (
                    <span
                      key={item}
                      className="px-5 py-2.5 rounded-full text-[14px] sm:text-[15px] font-medium bg-[#EBE2D8] text-[#241F1D] border border-[#DDD3C7] shadow-2xs hover:border-[#6F1D2A]/40 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. FINAL CTA — MATCH REFERENCE PANEL                     */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-20 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-[#D8CEC4] bg-gradient-to-r from-[#FAF4ED] via-[#F8ECE3] to-[#F5E2D6] p-8 sm:p-12 lg:p-14 shadow-xs overflow-hidden">
            
            {/* Background decorative wave & graph line on the right */}
            <div className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none opacity-80 hidden md:block select-none overflow-hidden">
              <svg 
                viewBox="0 0 350 250" 
                fill="none" 
                className="w-full h-full object-cover"
              >
                {/* Soft beige/peach organic wave filled */}
                <path 
                  d="M 50 250 Q 150 150 200 190 Q 280 240 350 120 L 350 250 Z" 
                  fill="#EFE0D3" 
                  fillOpacity="0.5" 
                />
                
                {/* Thin burgundy data/graph line with connection dots */}
                <path 
                  d="M 80 210 Q 160 140 220 180 T 320 70" 
                  stroke="#6F1D2A" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  fill="none" 
                />
                <circle cx="80" cy="210" r="3.5" fill="#6F1D2A" />
                <circle cx="220" cy="180" r="3.5" fill="#6F1D2A" />
                <circle cx="320" cy="70" r="3.5" fill="#6F1D2A" />
              </svg>
            </div>

            {/* Handwritten text: "Small steps Big Impact" */}
            <div className="absolute right-8 sm:right-12 bottom-6 sm:bottom-8 select-none hidden md:block text-right z-10">
              <p className="font-script text-2xl sm:text-3xl text-[#6F1D2A] leading-tight tracking-wide">
                Small<br />
                steps<br />
                Big<br />
                Impact
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-6 space-y-3">
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#6F1D2A] uppercase tracking-wider block">
                  LET&apos;S BUILD SOMETHING MEANINGFUL
                </span>
                
                <div>
                  <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-[#241F1D] tracking-tight leading-[1.12]">
                    Curious by nature.<br />
                    Building with purpose.
                  </h2>
                  {/* Short burgundy underline */}
                  <div className="w-16 h-0.5 bg-[#6F1D2A] mt-3" />
                </div>
              </div>

              {/* Middle Column: Description & Action Buttons */}
              <div className="lg:col-span-6 space-y-5">
                <p className="text-[14px] sm:text-base text-[#6D625C] leading-relaxed max-w-md">
                  I&apos;m always excited to learn, collaborate and work on projects that create real impact.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#6F1D2A] hover:bg-[#581721] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs group/btn"
                  >
                    <span>EXPLORE PROJECTS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5EFE6] hover:bg-white text-[#241F1D] hover:text-[#6F1D2A] border border-[#D8CEC4] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs"
                  >
                    <span>ABOUT ME</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#6F1D2A]" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </motion.div>
  );
};
