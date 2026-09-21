import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#E7E5E4] bg-[#FAF8F5] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#78350F] uppercase">
            06 // Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm text-[#57534E] max-w-2xl">
            Currently open to Data Analyst internships, full-time junior positions, and analytics project collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 shadow-sm space-y-6">
              
              <div>
                <h3 className="font-bold text-xl text-[#1C1917]">
                  {personal.name}
                </h3>
                <p className="text-xs text-[#78716C] mt-0.5">
                  Bangalore, India &middot; Aspiring Data Analyst
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#1C1917]">
                
                {/* Email with copy button */}
                <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-[#78350F] shrink-0" />
                    <a
                      href={`mailto:${personal.email}`}
                      className="font-mono text-xs hover:text-[#78350F] truncate"
                    >
                      {personal.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded hover:bg-white text-[#78350F] transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#78350F] shrink-0" />
                  <a
                    href={`tel:${personal.phone}`}
                    className="font-mono text-xs hover:text-[#78350F]"
                  >
                    {personal.phone}
                  </a>
                </div>

                {/* Location */}
                <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E7E5E4] flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#78350F] shrink-0" />
                  <span className="text-xs text-[#57534E]">
                    {personal.location}
                  </span>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#E7E5E4] space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#78716C] block">
                  Professional Profiles
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-[#E7E5E4] hover:border-[#78350F] hover:bg-[#FAF8F5] text-xs font-semibold text-[#1C1917] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#78350F]" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#78716C]" />
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-[#E7E5E4] hover:border-[#78350F] hover:bg-[#FAF8F5] text-xs font-semibold text-[#1C1917] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-[#78350F]" />
                      <span>GitHub Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#78716C]" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-lg text-[#1C1917] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#78716C] mb-6">
                Fill out the form below or write directly to <strong className="text-[#78350F]">{personal.email}</strong>.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-lg bg-[#FAF8F5] border border-[#E8D5C4] space-y-3">
                  <div className="flex items-center gap-2 text-[#78350F] font-bold text-sm">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Message Ready!</span>
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. The contact form UI is ready for future production service integration. 
                    You can also send this message directly via your email client.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${personal.email}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`}
                      className="px-4 py-2 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="px-4 py-2 border border-[#E7E5E4] text-xs font-semibold text-[#1C1917] rounded hover:bg-[#FAF8F5]"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E5E4] bg-[#FAF8F5] text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#78350F]/20 focus:border-[#78350F] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E5E4] bg-[#FAF8F5] text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#78350F]/20 focus:border-[#78350F] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your inquiry, role opportunity, or data project..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E5E4] bg-[#FAF8F5] text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#78350F]/20 focus:border-[#78350F] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#78350F] hover:bg-[#612A0C] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
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
    </section>
  );
};
