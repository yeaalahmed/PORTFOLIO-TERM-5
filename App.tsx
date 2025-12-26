import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import MakeAndTakes from './components/MakeAndTakes';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import PedalGeneratorSection from './components/PedalGeneratorSection';
import { PORTFOLIO_OWNER } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-vintage-cream text-vintage-black relative">
      <Navbar />
      
      <main className="flex flex-col">
        <Hero />
        <Projects />
        <MakeAndTakes />
        <PedalGeneratorSection />
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