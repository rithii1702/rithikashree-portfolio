import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Check, 
  Copy, 
  Send,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { 
  pageVariants, 
  reducedPageVariants, 
  fadeInUp 
} from '../utils/animationVariants';

export const ContactPage: React.FC = () => {
  const { personal } = portfolioData;
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? reducedPageVariants : pageVariants;

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-5 sm:pt-7 md:pt-8 pb-10 sm:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-8">

        {/* Breadcrumb & Page Heading */}
        <motion.div variants={fadeInUp} className="space-y-3 border-b border-[#E7E5E4] pb-5 sm:pb-6">
          <nav className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#78716C] uppercase">
            <Link to="/" className="hover:text-[#78350F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#78350F]">Contact</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight uppercase">
                Let's Connect
              </h1>
              <p className="text-sm sm:text-base text-[#57534E] mt-2 max-w-2xl">
                Open to Data Analyst and AI/ML internships, entry-level opportunities, and technical collaborations.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E7E5E4] text-xs font-semibold text-[#78350F]">
              <span className="w-2 h-2 rounded-full bg-[#78350F] animate-pulse" />
              <span>Available for Roles</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Contact & Opportunity Statement */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-6">
            
            {/* Open for Opportunities Card */}
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 md:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Career Opportunities</span>
              </div>
              
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] tracking-tight">
                Seeking Data Analyst & Analytics Internships
              </h2>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#57534E] leading-relaxed">
                I am actively looking for internship and entry-level opportunities in <strong>Data Analytics, Business Intelligence, and AI/ML</strong>. I bring hands-on experience in <strong>Power BI, Excel, SQL, and Python</strong>, ready to create immediate analytical value for your team.
              </p>

              <div className="pt-4 border-t border-[#E7E5E4] space-y-2 text-xs sm:text-[13px] text-[#57534E]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#78350F]" />
                  <span>Immediate availability for internships</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#78350F]" />
                  <span>Open to Bangalore-based or remote roles</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 md:p-8 shadow-xs space-y-4">
              <div className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
                Direct Channels
              </div>

              <div className="space-y-3">
                {/* Email card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-white border border-[#E7E5E4] text-[#78350F]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono text-[#78716C] block uppercase">Email</span>
                      <a href={`mailto:${personal.email}`} className="text-xs sm:text-sm font-bold text-[#1C1917] hover:text-[#78350F] truncate block">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white hover:bg-[#F5EFE6] border border-[#E7E5E4] text-xs font-semibold text-[#1C1917] transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-[#78350F]" />}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F5EFE6] border border-[#E7E5E4] hover:border-[#E8D5C4] flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-[#E7E5E4] text-[#78350F]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#78716C] block uppercase">LinkedIn</span>
                      <span className="text-xs sm:text-sm font-bold text-[#1C1917]">B. Rithikashree</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#78350F]" />
                </a>

                {/* GitHub Card */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F5EFE6] border border-[#E7E5E4] hover:border-[#E8D5C4] flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-[#E7E5E4] text-[#1C1917]">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#78716C] block uppercase">GitHub</span>
                      <span className="text-xs sm:text-sm font-bold text-[#1C1917]">rithii1702</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#78350F]" />
                </a>

                {/* Location & Phone */}
                <div className="pt-1 grid grid-cols-2 gap-3 text-xs sm:text-[13px]">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-1">
                    <span className="text-[10px] font-mono text-[#78716C] uppercase block">Location</span>
                    <span className="font-bold text-[#1C1917] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#78350F]" />
                      {personal.location}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] space-y-1">
                    <span className="text-[10px] font-mono text-[#78716C] uppercase block">Phone</span>
                    <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="font-bold text-[#1C1917] hover:text-[#78350F] flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#78350F]" />
                      {personal.phone}
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>

          {/* Right Column: Clean Simple Contact Form */}
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E7E5E4] p-6 sm:p-7 md:p-8 shadow-xs space-y-5">
              <div className="space-y-1 border-b border-[#E7E5E4] pb-4">
                <span className="text-[11px] font-mono font-semibold text-[#78350F] uppercase tracking-wider block">
                  Message Form
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] tracking-tight">
                  Send a Direct Note
                </h2>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-[#F5EFE6] border border-[#E8D5C4] text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#78350F] text-white flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-xs text-[#57534E] max-w-md mx-auto">
                    Your message draft has been received. You can also contact me directly at{' '}
                    <a href={`mailto:${personal.email}`} className="text-[#78350F] font-bold underline">
                      {personal.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="text-xs font-semibold text-[#78350F] hover:underline pt-2 block mx-auto"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-[13px] font-semibold text-[#1C1917] block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hiring Manager"
                        className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-[#E7E5E4] text-xs sm:text-sm focus:outline-none focus:border-[#78350F] bg-[#FAF8F5]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-[13px] font-semibold text-[#1C1917] block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-[#E7E5E4] text-xs sm:text-sm focus:outline-none focus:border-[#78350F] bg-[#FAF8F5]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-[13px] font-semibold text-[#1C1917] block">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Rithikashree, we are interested in discussing an opportunity..."
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-[#E7E5E4] text-xs sm:text-sm focus:outline-none focus:border-[#78350F] bg-[#FAF8F5]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs sm:text-[13.5px] font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
};
