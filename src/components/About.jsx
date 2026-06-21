import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Code2, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <BookOpen className="text-violet-500" size={20} />, label: "Specialization", val: "AI & Machine Learning" },
    { icon: <Briefcase className="text-cyan-500" size={20} />, label: "Internship", val: "MERN Dev at Edubot" },
    { icon: <GraduationCap className="text-pink-500" size={20} />, label: "Education", val: "SRM University AP" },
    { icon: <Code2 className="text-amber-500" size={20} />, label: "Portfolio", val: "8+ Core Projects" }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2"
          >
            Get to Know Me
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            About <span className="text-gradient">Myself</span>
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 sm:w-80 flex flex-col gap-4">
              {/* Glow backdrop */}
              <div className="absolute -inset-1 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-2xl blur-xl group-hover:scale-105 transition-transform duration-300"></div>

              {/* Photo Card container */}
              <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 z-10">
                <img
                  src="./assets/img/hemanth.jpeg"
                  alt="U. Venkata Hemanth"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback
                    e.target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400";
                  }}
                />
              </div>

              {/* Info Card - Separated below */}
              <div className="w-full p-4 rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-md text-center z-10 group-hover:border-indigo-500/30 dark:group-hover:border-cyan-500/30 transition-all duration-300">
                <p className="text-[10px] text-indigo-600 dark:text-cyan-400 font-bold tracking-widest uppercase">B.Tech CSE (AI-ML)</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-white mt-1">SRM University AP</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Description & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-slate-800 dark:text-slate-100 leading-snug">
              Designing the future of Web Applications & Artificial Intelligence
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-base">
              I am U. Venkata Hemanth, a Computer Science and Engineering student at SRM University AP, graduating in 2027. I am passionate about building scalable software solutions across Full Stack Development, Artificial Intelligence, Machine Learning, and Generative AI. My expertise spans the MERN Stack, modern frontend frameworks, backend development, REST APIs, databases, and cloud-ready applications, enabling me to create end-to-end products from concept to deployment.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-base">
              Beyond web development, I work extensively with Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, and Transformer-based architectures to solve real-world problems through intelligent systems. I enjoy combining robust software engineering principles with cutting-edge AI technologies to develop impactful applications that are both innovative and user-centric.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-base">
              Driven by curiosity and continuous learning, I actively explore Data Structures & Algorithms, and emerging AI advancements while building projects that bridge the gap between traditional software development and next-generation intelligent solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-start gap-3 hover:shadow-md dark:hover:border-slate-700 transition-all"
                >
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <h5 className="text-xs text-slate-400 dark:text-slate-500 font-medium">{stat.label}</h5>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white mt-0.5">{stat.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
