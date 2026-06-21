import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

const Hero = () => {
  const roles = [
    "AI & Machine Learning Engineer",
    "Full Stack Developer",
    "Generative AI Specialist",
    "Problem Solver"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayedText(prev => prev.slice(0, -1));
        setTypingSpeed(50); // Delete faster
      } else {
        setDisplayedText(prev => currentRole.slice(0, prev.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayedText === currentRole) {
        // Wait at the end of typing
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-gradient-mesh">
      
      {/* Background glowing spheres */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold"
          >
            <Brain size={14} className="animate-spin-slow" />
            <span>Welcome to my Tech Portfolio</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight"
          >
            Hi, I'm <span className="text-gradient">U. Venkata Hemanth</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-8 text-xl sm:text-2xl font-medium text-indigo-600 dark:text-cyan-400"
          >
            <span>{displayedText}</span>
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 max-w-xl text-base sm:text-lg font-light leading-relaxed"
          >
            B.Tech Computer Science student at <strong className="font-semibold text-slate-950 dark:text-white">SRM University AP</strong> (2023-2027) specializing in Artificial Intelligence, Machine Learning, and Full Stack MERN Development. Building high-performance algorithms and intelligent web apps.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2 group transition-all duration-300"
            >
              Explore Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-xl glass border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/40 text-slate-800 dark:text-white font-medium flex items-center justify-center gap-2 transition-all duration-300"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-5 pt-4"
          >
            <a 
              href="https://github.com/uvhemanth6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hemanthummadisetty/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href="https://www.instagram.com/_uv.hemanth/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            >
              <InstagramIcon size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Side Visuals */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Spinning glowing border */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/20 dark:border-indigo-500/30 scale-105 animate-spin-slow"></div>
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/20 dark:border-cyan-500/30 scale-110 animate-spin-reverse-slow"></div>
            
            {/* Main Avatar Container */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl glass-nav relative z-10 flex items-center justify-center">
              <img 
                src="./assets/img/profile.png" 
                alt="U. Venkata Hemanth Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback in case image is missing during reload
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";
                }}
              />
            </div>
            
            {/* Tech badges floating */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-3 rounded-2xl glass shadow-lg border-indigo-500/20 z-20 flex items-center gap-2"
            >
              <Brain size={18} className="text-purple-500" />
              <span className="text-xs font-semibold text-slate-800 dark:text-white">AI / ML</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 p-3 rounded-2xl glass shadow-lg border-cyan-500/20 z-20 flex items-center gap-2"
            >
              <Code size={18} className="text-cyan-500" />
              <span className="text-xs font-semibold text-slate-800 dark:text-white">Full Stack</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
