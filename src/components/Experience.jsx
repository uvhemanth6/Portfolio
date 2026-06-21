import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'MERN Stack Developer Intern',
      company: 'Edubot',
      duration: 'May 2024 - July 2024',
      location: 'Remote, India',
      description: 'Worked on enterprise web applications utilizing MongoDB, Express, React, and Node.js.',
      bullets: [
        'Developed a complete Online Quiz Platform supporting role-based access for students and instructors.',
        'Designed JWT-based authentication pipelines ensuring secure route accesses.',
        'Built automated assessment grading scripts using custom math and logic algorithms.',
        'Implemented modern UI elements with Tailwind CSS and ShadCN UI components.',
        'Validated backend endpoints using Postman to resolve data collisions.'
      ]
    },
    {
      id: 2,
      role: 'AI / ML Learner',
      company: 'Self-initiated Research & Open Source',
      duration: 'August 2024 - Present',
      location: 'SRM University AP',
      description: 'Built deep learning and retrieval-augmented systems focusing on explainability.',
      bullets: [
        'Created NeuroRAG, a medical diagnostic aid pipeline for tumor classification and report lookup.',
        'Structured similarity indexes with FAISS vector search, reducing context lookup latency.',
        'Fine-tuned transformer models (BERT) for precise multi-class classification on academic papers.',
        'Documented research pipelines, dataset preprocessing structures, and Jupyter Notebooks for public use.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2">My Journey</h4>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 timeline-line transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-stretch ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-950 border-4 border-indigo-500 z-10 transform -translate-x-1/2 flex items-center justify-center">
                    <Briefcase size={12} className="text-indigo-400" />
                  </div>

                  {/* Spacer / Left side content in desktop */}
                  <div className="hidden md:block w-1/2 px-8"></div>

                  {/* Card Content on the other side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-all duration-300">
                      
                      {/* Meta elements */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>

                      {/* Header */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-indigo-600 dark:text-cyan-400 mb-4">
                        {exp.company}
                      </h4>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
                        {exp.description}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-3">
                        {exp.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
