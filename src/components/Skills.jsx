import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Code, Server, Wrench, Flame, BookOpen } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const categories = [
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain size={18} /> },
    { id: 'frontend', name: 'Frontend Web Dev', icon: <Code size={18} /> },
    { id: 'backend', name: 'Backend & Databases', icon: <Server size={18} /> },
    { id: 'tools', name: 'Languages & Tools', icon: <Wrench size={18} /> },
    { id: 'core', name: 'Core Subjects', icon: <BookOpen size={18} /> },
  ];

  const skillsData = {
    ai: [
      { name: 'Python', desc: 'Primary ML research & script design language' },
      { name: 'TensorFlow / Keras', desc: 'Deep learning: VGG16, CNN model development' },
      { name: 'PyTorch', desc: 'Neural network training, NLP architectures' },
      { name: 'Retrieval-Augmented Generation (RAG)', desc: 'Medical diagnostic systems with LLMs' },
      { name: 'Hugging Face / BERT', desc: 'Transformers, fine-tuning classification models' },
      { name: 'FAISS Vector Search', desc: 'Vector database operations & search optimization' },
      { name: 'Google Gemini API', desc: 'GenAI LLM prompt engineering and API logic' },
      { name: 'Scikit-Learn', desc: 'Supervised ML algorithms & feature engineering' },
      { name: 'OpenCV / NumPy / Pandas', desc: 'Computer vision & exploratory data analysis' },
    ],
    frontend: [
      { name: 'React', desc: 'SPA layouts, interactive components, hook dynamics' },
      { name: 'Node', desc: 'Runtime engines, server scripting, CLI utility setups' },
      { name: 'Express', desc: 'Routing systems, backend APIs, client endpoints' },
      { name: 'MongoDB', desc: 'NoSQL structures, dynamic schemas, database queries' },
      { name: 'CSS', desc: 'Responsive designs, page templates, custom theme styles' },
      { name: 'JavaScript', desc: 'Asynchronous fetches, interactive DOM functions, ES6 logic' },
    ],
    backend: [
      { name: 'Node.js', desc: 'Runtime engines, local tools, REST endpoints' },
      { name: 'Express.js', desc: 'Server setup, routing systems, token logic' },
      { name: 'FastAPI', desc: 'Python REST gateways, model deployment endpoints' },
      { name: 'MongoDB', desc: 'NoSQL collections, validation schemas, query logs' },
      { name: 'JWT Authentication', desc: 'JSON web tokens for secure user roles & access' },
      { name: 'REST APIs & CORS', desc: 'Cross-origin communication, JSON structures' },
    ],
    tools: [
      { name: 'C / C++', desc: 'DSA principles, pointer arithmetic, memory control' },
      { name: 'SQL / Databases', desc: 'Relational database schema structure & querying' },
      { name: 'Git & GitHub', desc: 'Version control, repository administration, pull requests' },
      { name: 'Jupyter Notebooks', desc: 'ML experiment building & visualization pipelines' },
      { name: 'VS Code & PyCharm', desc: 'Code optimization, dev environments, debugging tools' },
      { name: 'Postman', desc: 'API route validation & header authentication testing' },
    ],
    core: [
      { name: 'Computer Networks (CN)', desc: 'Network topologies, OSI model layers, TCP/IP protocols, subnetting' },
      { name: 'Operating Systems (OS)', desc: 'Process scheduling, thread control, memory management, file systems, synchronization' },
      { name: 'Database Management Systems (DBMS)', desc: 'SQL structures, schema normalization, transaction logs, ACID constraints' },
      { name: 'Object-Oriented Programming (OOPS)', desc: 'Classes, inheritance, polymorphism, interfaces, encapsulation' },
    ],
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 relative">
      
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2">
            My Expertise
          </h4>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Headers */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 scale-105'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Board */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData[activeTab].map((skill) => (
                <div 
                  key={skill.name} 
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Flame size={14} className="text-indigo-500 dark:text-cyan-400 fill-indigo-500/20" />
                    <h4 className="text-base font-semibold text-slate-800 dark:text-white">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
