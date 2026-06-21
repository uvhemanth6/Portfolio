import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import GitHubIntegration from './components/GitHubIntegration';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      {/* Navigation Bar */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Main Content Sections */}
      <main className="bg-gradient-mesh min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Experience />
        <Education />
        <Certifications />
        <GitHubIntegration />
        <Contact />
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
