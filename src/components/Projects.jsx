import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Brain, Activity, BookOpen, Zap, Shield, Heart, HelpCircle, X, CheckCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const Projects = ({ searchQuery, setSearchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI/ML', 'GenAI', 'Full Stack', 'NLP'];

  const projectsData = [
    {
      id: 1,
      name: 'IdeaForge AI',
      category: 'GenAI',
      subcategory: 'Startup Validation',
      tech: ['React.js', 'FastAPI', 'Python', 'Google Gemini API', 'Tailwind CSS', 'REST APIs', 'JSON Memory Store'],
      short: 'An AI-powered startup idea validation platform helping entrepreneurs evaluate business concepts.',
      detailed: 'IdeaForge AI is an advanced validation environment for early-stage business models. It leverages the Google Gemini API to analyze business viability, identify direct and indirect competitors, evaluate critical strengths and weaknesses, and map out market entry opportunities. The system calculates a consolidated feasibility score and lists recommendations to refine concepts, saving entrepreneurs valuable time. A lightweight JSON memory store maintains historical evaluations for version-control and comparisons.',
      features: [
        'AI-powered startup validation',
        'Feasibility scoring & indicators',
        'Competitor analysis & mapping',
        'Strength & weakness matrix',
        'Market opportunity discovery',
        'Actionable improvement reports',
        'Historical concept tracking',
        'Interactive analytics dashboard'
      ],
      status: 'Completed',
      github: 'https://github.com/uvhemanth6/IdeaForge-AI',
      demo: 'https://github.com/uvhemanth6/IdeaForge-AI',
      icon: <Brain className="text-violet-500" size={24} />,
      color: 'from-violet-500 to-fuchsia-500'
    },
    {
      id: 2,
      name: 'NeuroRAG – Tumor Detection',
      category: ['GenAI', 'AI/ML'],
      subcategory: 'Healthcare',
      tech: ['Python', 'TensorFlow', 'VGG16', 'CNN', 'FAISS', 'RAG', 'Google Gemini API', 'NumPy', 'OpenCV'],
      short: 'Healthcare application merging deep learning and RAG to detect brain tumors from MRI scans.',
      detailed: 'NeuroRAG represents an advanced diagnostic aid using AI explainability. It inputs patient MRI scans and runs a deep convolutional network (VGG16 CNN) to classify tumors. Once classified, the system fetches corresponding medical studies from a FAISS vector database. A Google Gemini LLM processes this medical literature and the MRI model prediction to generate a diagnostic report. This RAG methodology ensures diagnoses are backed by verified reference literature.',
      features: [
        'MRI image classification pipeline',
        'Brain tumor detection models',
        'CNN classifier using VGG16',
        'Retrieval-Augmented Generation (RAG)',
        'FAISS vector index querying',
        'Explainable AI diagnostic reports',
        'Medical database retrieval',
        'Printable report generation'
      ],
      status: 'Completed',
      github: 'https://github.com/uvhemanth6/NeuroRAG-Brain-Tumor-Detection-System',
      demo: 'https://github.com/uvhemanth6/NeuroRAG-Brain-Tumor-Detection-System',
      icon: <Activity className="text-emerald-500" size={24} />,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 3,
      name: 'Academic Paper Classifier',
      category: 'NLP',
      subcategory: 'Natural Language Processing',
      tech: ['Python', 'Transformers', 'Hugging Face', 'BERT', 'PyTorch', 'Scikit-Learn', 'Pandas'],
      short: 'A transformer-based NLP system that classifies research papers into academic fields.',
      detailed: 'This project is a transformer-based text classifier designed for digital libraries and academic directories. It fine-tunes a BERT-base-uncased transformer using PyTorch to interpret semantics, syntax, and title/abstract vocabulary. It achieves superior classification accuracy compared to traditional Machine Learning approaches (like SVMs or Naive Bayes) and processes text formatting via an advanced NLP pipeline.',
      features: [
        'Academic paper classification',
        'Transformer-based NLP pipeline',
        'BERT model fine-tuning',
        'Multi-class category mapping',
        'Research paper abstract parser',
        'Robust preprocessing script',
        'Accuracy, recall, & F1 evaluation'
      ],
      status: 'Completed',
      github: 'https://github.com/uvhemanth6/Transformer-Based-Academic-Classifier',
      demo: 'https://github.com/uvhemanth6/Transformer-Based-Academic-Classifier',
      icon: <BookOpen className="text-blue-500" size={24} />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 4,
      name: 'Smart Energy Forecast',
      category: 'AI/ML',
      subcategory: 'Data Analytics',
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Flask', 'FastAPI'],
      short: 'Predictive analytics application forecasting utility energy consumption grid usage.',
      detailed: 'Smart Energy Forecast implements machine learning regressions and time-series modeling to project municipal energy usage based on historical statistics, seasonal shifts, and outdoor temperature. A Python backend handles incoming telemetry and processes predictions, while a frontend graphs consumption trends to identify savings and optimize grid capacity.',
      features: [
        'Grid load forecasting algorithms',
        'Scikit-Learn regression pipelines',
        'Time-series data aggregation',
        'Interactive consumption dashboards',
        'Peak load optimization suggestions',
        'Real-time endpoint predictions'
      ],
      status: 'Completed',
      github: 'https://github.com/uvhemanth6/Smart-Energy-Consumption-',
      demo: 'https://github.com/uvhemanth6/Smart-Energy-Consumption-',
      icon: <Zap className="text-amber-500" size={24} />,
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 5,
      name: 'Credit Card Fraud Detector',
      category: 'AI/ML',
      subcategory: 'FinTech',
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Random Forest', 'Logistic Regression'],
      short: 'Supervised ML platform recognizing anomalous card activities on imbalanced datasets.',
      detailed: 'Designed to target transaction fraud, this ML application works with heavily imbalanced fintech datasets (such as Kaggle credit card logs). The preprocessing script utilizes SMOTE (Synthetic Minority Over-sampling Technique) to balance fraud ratios. Features are passed through Random Forest and Logistic Regression classification models, outputting transaction risk assessments.',
      features: [
        'Real-time fraud classification',
        'Imbalanced data SMOTE handling',
        'Transaction risk scoring algorithms',
        'Anomalous feature engineering',
        'Precision-Recall curve validation',
        'ML model comparative reports'
      ],
      status: 'Completed',
      github: 'https://github.com/uvhemanth6/Credit-Card-Fraud-Detection-',
      demo: 'https://github.com/uvhemanth6/Credit-Card-Fraud-Detection-',
      icon: <Shield className="text-red-500" size={24} />,
      color: 'from-red-500 to-rose-500'
    },
    {
      id: 6,
      name: 'Seva Link',
      category: 'Full Stack',
      subcategory: 'Community Service Portal',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Authentication', 'Tailwind CSS'],
      short: 'Volunteer organization coordinator linking community service agents with NGOs.',
      detailed: 'Seva Link is a full stack volunteering coordinator. It provides NGOs a system to post upcoming community drives and log operational rosters. Volunteers search opportunities, subscribe to rosters, and track completed service milestones. The MERN system secures data using encrypted passwords and JWT tokens.',
      features: [
        'Volunteer service registry',
        'NGO dashboard & opportunity poster',
        'Secure JWT role-based auth',
        'Dynamic event schedule lists',
        'Completed service tracker',
        'Responsive mobile layout'
      ],
      status: 'Completed',
      github: 'https://github.com/uvhemanth6/SevaLink',
      demo: 'https://seva-link.vercel.app/',
      icon: <Heart className="text-pink-500" size={24} />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 7,
      name: 'Online Quiz Platform',
      category: 'Full Stack',
      subcategory: 'MERN Assessment Suite',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Authentication', 'Tailwind CSS', 'ShadCN UI'],
      short: 'Full stack assessment manager with timer limits, auto grading, and teacher portal.',
      detailed: 'Developed during a MERN software internship at Edubot, this tool facilitates student testing. Teachers log in to create multi-choice exams, set strict time bounds, and review submissions. Students take exams on an interactive, timed workspace. The system evaluates quizzes instantly and updates student report cards.',
      features: [
        'Role-based administrative dashboards',
        'Timed test engines (JavaScript)',
        'Automatic scoring & analytics',
        'Quiz creator & editor tools',
        'Historical grade charts',
        'Premium ShadCN components'
      ],
      status: 'Completed',
      github: 'https://github.com/uvhemanth6/online-quiz-platform',
      demo: 'https://online-quiz-platform-e6ca.onrender.com/',
      icon: <HelpCircle className="text-cyan-500" size={24} />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 8,
      name: 'Campus Care',
      category: 'Full Stack',
      subcategory: 'Student Well-being Platform',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT Authentication', 'Tailwind CSS'],
      short: 'A mental health support platform for students featuring motivational resources, interactive games, and chat-based engagement to reduce stress and improve well-being.',
      detailed: 'Campus Care is a mental health and support platform designed specifically for university students. To counter academic burnout and everyday stress, the application aggregates daily motivational resources, runs client-side stress-relief games, and provides interactive chat systems. Utilizing a full stack MERN structure, the app handles session tokens and serves content dynamically based on student preference profiles.',
      features: [
        'Motivational resource catalogs',
        'Interactive stress-relief micro-games',
        'Real-time chat-based engagement',
        'Daily mood & well-being metrics',
        'Secure user session management',
        'Responsive interactive dashboard'
      ],
      status: 'Completed',
      github: 'https://github.com/uvhemanth6/Campus-Care',
      demo: 'https://github.com/uvhemanth6/Campus-Care',
      icon: <Heart className="text-indigo-500" size={24} />,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  // Filter and search logic
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'All' || 
                            (Array.isArray(project.category) ? project.category.includes(selectedCategory) : project.category === selectedCategory);
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.short.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h4 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2">My Work</h4>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${selectedCategory === category
                    ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search bar input locally */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or tech stack..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-sm bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
            <Search className="absolute left-3.5 top-3 text-slate-400" size={16} />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800"
          >
            <p className="text-slate-500 dark:text-slate-400 text-base">No projects found matching your criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:underline"
            >
              Reset filters
            </button>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300"
              >

                {/* Header background accents */}
                <div className="relative p-6 pb-0 flex items-start justify-between">
                  <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center`}>
                    {project.icon}
                  </div>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {Array.isArray(project.category) ? (
                      project.category.map(cat => (
                        <span key={cat} className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
                          {cat}
                        </span>
                      ))
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
                        {project.category}
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-900/50">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold tracking-wider uppercase mb-3">
                    {project.subcategory}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light line-clamp-3">
                    {project.short}
                  </p>
                </div>

                {/* Footer and Buttons */}
                <div className="p-6 pt-0">
                  {/* Tech stack badges (first 3) */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white transition-colors duration-200"
                    >
                      Read Details
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white flex items-center justify-center transition-colors duration-200"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Modal Header */}
                <div className="flex items-start gap-4 mb-6 pr-8">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase">
                      {selectedProject.subcategory}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                      {selectedProject.name}
                    </h3>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {Array.isArray(selectedProject.category) ? (
                    selectedProject.category.map(cat => (
                      <span key={cat} className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
                        Category: {cat}
                      </span>
                    ))
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
                      Category: {selectedProject.category}
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-900/50">
                    Status: {selectedProject.status}
                  </span>
                </div>

                {/* Overview Text */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">Detailed Overview</h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    {selectedProject.detailed}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                        <CheckCircle size={16} className="text-indigo-500 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium text-center shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <GithubIcon size={18} />
                    <span>GitHub Code</span>
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl glass border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-medium text-center flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
