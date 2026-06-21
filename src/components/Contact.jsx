import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'venkatahemanth488@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 dark:from-indigo-500/5 dark:to-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2">Get In Touch</h4>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Simplified Premium Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 relative group"
        >
          {/* Subtle top indicator */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

          {/* Central Icon */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-500 dark:from-indigo-600 dark:to-cyan-400 p-[1px] flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-8">
            <div className="w-full h-full rounded-[15px] bg-white dark:bg-slate-950 flex items-center justify-center text-indigo-600 dark:text-cyan-400">
              <Mail size={28} className="animate-pulse" />
            </div>
          </div>

          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Let's build something amazing together!
          </h3>
          
          <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-8 max-w-lg mx-auto">
            Whether you have an internship opportunity, a project concept to validate, or simply want to chat about AI/ML models or web development, my inbox is always open. I'll get back to you as soon as possible!
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            
            {/* Interactive Email Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 flex flex-col items-center text-center relative group/email hover:border-indigo-500/30 dark:hover:border-cyan-500/30 transition-all duration-300">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 mb-3">
                <Mail size={20} />
              </div>
              <h4 className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1">Email Address</h4>
              <a 
                href={`mailto:${emailAddress}`}
                className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors break-all mb-3"
              >
                {emailAddress}
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200 active:scale-95"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-green-500" />
                    <span className="text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Location Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 flex flex-col items-center text-center hover:border-indigo-500/30 dark:hover:border-cyan-500/30 transition-all duration-300">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 mb-3">
                <MapPin size={20} />
              </div>
              <h4 className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1">Location</h4>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Andhra Pradesh, India
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-light">
                Open to remote & relocation
              </p>
            </div>

          </div>

          {/* Primary Action Button (Mailto Direct Link) */}
          <a
            href={`mailto:${emailAddress}`}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 dark:from-indigo-500 dark:to-cyan-500 dark:hover:from-indigo-400 dark:hover:to-cyan-400 text-white font-semibold text-sm shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all duration-200 mb-8"
          >
            <span>Email Me Directly</span>
            <ExternalLink size={16} />
          </a>

          {/* Social Channels Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Or connect via</span>
            <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
          </div>

          {/* Social Channels buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/uvhemanth6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-transparent dark:border-slate-700/50 transition-colors duration-200"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hemanthummadisetty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-transparent dark:border-slate-700/50 transition-colors duration-200"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
