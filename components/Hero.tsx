import React from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { PORTFOLIO_TITLE, PORTFOLIO_OWNER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-[90vh] flex flex-col justify-center items-center px-4 relative overflow-hidden bg-vintage-cream">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-4 border-black bg-retro-red opacity-20 hidden md:block"></div>
      <div className="absolute bottom-40 right-10 w-48 h-48 border-4 border-black bg-retro-teal opacity-20 hidden md:block rotate-12"></div>
      
      <div className="max-w-5xl text-center z-10 space-y-8">
        <div className="inline-block bg-black text-white px-4 py-1 font-mono font-bold tracking-widest mb-4 transform -rotate-2">
          EST. 2025 • PORTFOLIO
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-vintage-black leading-tight drop-shadow-[4px_4px_0px_rgba(78,205,196,1)]">
          {PORTFOLIO_OWNER.toUpperCase()}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-orange to-retro-red stroke-black" style={{WebkitTextStroke: '1px black'}}>
            MECHANICAL ENGINEERING STUDENT
          </span>
        </h1>
        
        <p className="font-mono text-lg md:text-xl mt-6 max-w-3xl mx-auto border-l-4 border-retro-navy pl-6 text-left md:text-center md:border-l-0 md:pl-0 leading-relaxed">
          Third-year Co-op Student at <span className="font-bold">Memorial University</span>, NL.<br/>
          I design, analyze, and build efficient mechanical systems. <br/>
          <span className="text-retro-orange font-bold">Experienced in CAD (Onshape), Prototyping, and NDT.</span>
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
          <a 
            href="#projects"
            className="px-8 py-4 bg-retro-yellow border-4 border-black font-mono font-bold text-xl shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2"
          >
            VIEW PROJECTS
          </a>
          <button 
            className="px-8 py-4 bg-white border-4 border-black font-mono font-bold text-xl shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            RESUME.PDF
          </button>
        </div>
      </div>

      <a href="#projects" className="absolute bottom-10 animate-bounce">
        <ChevronDown size={48} strokeWidth={3} />
      </a>
    </section>
  );
};

export default Hero;