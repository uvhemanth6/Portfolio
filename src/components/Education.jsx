import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award, CheckCircle } from 'lucide-react';

const Education = () => {
  const courses = [
    'Data Structures & Algorithms',
    'Design and Analysis of Algorithms',
    'Machine Learning & Deep Learning',
    'Natural Language Processing (NLP)',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOP)',
    'Web Development Technologies',
    'Software Engineering Principles'
  ];

  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-950/40 relative">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2">My Background</h4>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Layout Grid */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all"
          >
            
            {/* Degree & Univ Title */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-base font-semibold text-indigo-600 dark:text-cyan-400 mt-1">
                    Computer Science Engineering
                  </p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    SRM University AP (Andhra Pradesh, India)
                  </p>
                </div>
              </div>
              
              <div className="flex flex-shrink-0 items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40 self-start">
                <Calendar size={12} />
                <span>2023 - 2027</span>
              </div>
            </div>

            {/* Specialization & Core summary */}
            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2">
                <Award size={16} className="text-violet-500" />
                Specialization Area
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Specializing in <strong className="font-semibold text-slate-950 dark:text-white">Artificial Intelligence & Machine Learning</strong>. Focuses on deep neural networks, computer vision, retrieval architectures, and transformer pipelines, alongside standard computer science fundamentals.
              </p>
            </div>

            {/* Relevant Coursework */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2">
                <BookOpen size={16} className="text-cyan-500" />
                Key Coursework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courses.map((course) => (
                  <div key={course} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50">
                    <CheckCircle size={14} className="text-indigo-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Education;
