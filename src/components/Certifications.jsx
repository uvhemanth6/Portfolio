import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certificationsList = [
    {
      id: 1,
      title: 'MERN Stack Developer Internship Certificate',
      issuer: 'Edubot',
      date: 'July 2024',
      credentialId: 'EDUBOT-MERN-2024-889',
      link: 'https://www.linkedin.com/in/hemanthummadisetty/',
      icon: <ShieldCheck className="text-violet-500" size={24} />
    },
    {
      id: 2,
      title: 'Full Stack Web Development Certification',
      issuer: 'Edunet Foundation',
      date: 'August 2024',
      credentialId: 'EDUNET-FSD-4801',
      link: 'https://www.linkedin.com/in/hemanthummadisetty/',
      icon: <Award className="text-cyan-500" size={24} />
    },
    {
      id: 3,
      title: 'Python Skill Certification',
      issuer: 'HackerRank',
      date: 'May 2024',
      credentialId: 'HR-PYTHON-BASIC-492',
      link: 'https://www.linkedin.com/in/hemanthummadisetty/',
      icon: <Award className="text-pink-500" size={24} />
    },
    {
      id: 4,
      title: 'Machine Learning Concepts & Specialization',
      issuer: 'Coursera',
      date: 'October 2024',
      credentialId: 'COURSERA-ML-893-X29',
      link: 'https://www.linkedin.com/in/hemanthummadisetty/',
      icon: <Award className="text-amber-500" size={24} />
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2">Credentials</h4>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsList.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon */}
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm inline-flex items-center justify-center mb-4">
                  {cert.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                
                {/* Issuer & Date */}
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <Calendar size={12} />
                  <span>Issued: {cert.date}</span>
                </div>

                {/* Cred ID */}
                <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  ID: {cert.credentialId}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:underline"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
