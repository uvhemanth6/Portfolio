import React from 'react';
import { Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left copyright info */}
        <p className="text-xs text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} U. Venkata Hemanth. All rights reserved.
        </p>

        {/* Center credits */}
        <p className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
          <span>Crafted with</span>
          <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
          <span>using React & Tailwind CSS</span>
        </p>

        {/* Right social handles */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/uvhemanth6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/hemanthummadisetty/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="https://www.instagram.com/_uv.hemanth/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors"
            aria-label="Instagram Profile"
          >
            <InstagramIcon size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
