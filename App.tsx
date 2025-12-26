import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import { PORTFOLIO_OWNER } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-vintage-cream text-vintage-black relative">
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      
      <main className="flex flex-col">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-black text-white py-8 text-center font-mono border-t-4 border-retro-orange">
        <p>© 2025 {PORTFOLIO_OWNER}. Engineered with React & Tailwind.</p>
        <p className="text-xs mt-2 text-gray-500">Styled with vintage precision.</p>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;