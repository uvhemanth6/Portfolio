import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, Users, BookOpen, Loader2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const GitHubIntegration = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        // Fetch profile
        const profileRes = await fetch('https://api.github.com/users/uvhemanth6');
        if (!profileRes.ok) throw new Error('Failed to fetch GitHub profile');
        const profileData = await profileRes.json();
        setProfile(profileData);

        // Fetch repos
        const reposRes = await fetch('https://api.github.com/users/uvhemanth6/repos?sort=updated&per_page=6');
        if (!reposRes.ok) throw new Error('Failed to fetch GitHub repositories');
        const reposData = await reposRes.json();
        
        // Filter out fork repositories and keep top projects if possible
        const originalRepos = reposData.filter(repo => !repo.fork);
        setRepos(originalRepos.slice(0, 4));
        setError(false);
      } catch (err) {
        console.error(err);
        setError(true);
        // Fallback Mock Data in case of rate limits or offline mode
        setProfile({
          avatar_url: './assets/img/profile.jpg',
          name: 'U. Venkata Hemanth',
          login: 'uvhemanth6',
          bio: 'B.Tech CSE student specializing in AI/ML and Web Development.',
          public_repos: 12,
          followers: 8,
          following: 15,
          html_url: 'https://github.com/uvhemanth6'
        });
        setRepos([
          {
            id: 101,
            name: 'IdeaForge-AI',
            description: 'AI-powered startup idea validation platform using Google Gemini API.',
            stargazers_count: 5,
            forks_count: 2,
            language: 'JavaScript',
            html_url: 'https://github.com/uvhemanth6/ideaforge-ai'
          },
          {
            id: 102,
            name: 'NeuroRAG',
            description: 'Intelligent MRI scanner brain tumor classifier integrated with FAISS vector search.',
            stargazers_count: 4,
            forks_count: 1,
            language: 'Python',
            html_url: 'https://github.com/uvhemanth6/neurorag'
          },
          {
            id: 103,
            name: 'Online-Quiz-Platform',
            description: 'Full stack assessment manager with timer limits and auto evaluation.',
            stargazers_count: 3,
            forks_count: 1,
            language: 'JavaScript',
            html_url: 'https://github.com/uvhemanth6/online-quiz-platform'
          },
          {
            id: 104,
            name: 'Academic-Paper-Classifier',
            description: 'Transformer based BERT text pipeline classifying scientific documents.',
            stargazers_count: 2,
            forks_count: 0,
            language: 'Python',
            html_url: 'https://github.com/uvhemanth6/academic-paper-classifier'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2">Open Source</h4>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            GitHub <span className="text-gradient">Contributions</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="text-indigo-500 animate-spin mb-4" size={40} />
            <p className="text-sm text-slate-500 dark:text-slate-400">Loading GitHub developer profile...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            
            {/* Profile Overview Card */}
            {profile && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-inner mb-4">
                  <img src={profile.avatar_url} alt={profile.name} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{profile.name || 'U. Venkata Hemanth'}</h3>
                <p className="text-xs font-mono text-indigo-600 dark:text-cyan-400">@{profile.login}</p>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-light leading-relaxed px-4">
                  {profile.bio || 'B.Tech Student | AI & ML Engineer | Full Stack Developer'}
                </p>

                {/* Profile Stats */}
                <div className="grid grid-cols-3 gap-4 w-full mt-6 py-4 border-t border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{profile.public_repos}</h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-semibold">Repos</p>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{profile.followers}</h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-semibold">Followers</p>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{profile.following}</h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-semibold">Following</p>
                  </div>
                </div>

                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <GithubIcon size={14} />
                  <span>Explore GitHub Profile</span>
                </a>
              </motion.div>
            )}

            {/* Top Repos list */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider mb-2 flex items-center gap-2">
                <BookOpen size={16} className="text-indigo-500" />
                Featured Repositories
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {repos.map((repo, idx) => (
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={repo.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate mb-1">
                        {repo.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed line-clamp-2 mt-1">
                        {repo.description || 'No description available for this project.'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/50 font-bold">
                        {repo.language || 'Python'}
                      </span>
                      
                      <div className="flex items-center gap-3 text-slate-400">
                        <span className="flex items-center gap-1 text-[10px]">
                          <Star size={12} />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1 text-[10px]">
                          <GitFork size={12} />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default GitHubIntegration;
