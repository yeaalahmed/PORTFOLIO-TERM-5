import React from 'react';
import { Download, ChevronDown, Zap } from 'lucide-react';
import { PORTFOLIO_TITLE, PORTFOLIO_OWNER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-[90vh] flex flex-col justify-center px-4 relative overflow-hidden bg-vintage-cream py-10">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-4 border-black bg-retro-red opacity-20 hidden md:block"></div>
      <div className="absolute bottom-40 right-10 w-48 h-48 border-4 border-black bg-retro-teal opacity-20 hidden md:block rotate-12"></div>
      
      <div className="max-w-[1400px] mx-auto z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Image */}
        <div className="col-span-1 lg:col-span-3 flex justify-center lg:justify-end order-2 lg:order-1">
             <div className="relative w-64 h-64 lg:w-72 lg:h-72 rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                {/* Decorative backing */}
                <div className="absolute inset-0 bg-retro-orange translate-x-3 translate-y-3 border-4 border-black"></div>
                
                {/* Image Container */}
                <div className="absolute inset-0 border-4 border-black overflow-hidden bg-white z-10">
                     <iframe 
                        src="https://drive.google.com/file/d/1xoAfrzA09UYn0Io3RlHugOA4dO0iGLuO/preview" 
                        className="w-full h-full pointer-events-none scale-[1.35] object-cover" 
                        style={{ border: 'none' }}
                        title="Profile Left"
                        tabIndex={-1}
                     ></iframe>
                </div>
            </div>
        </div>

        {/* Center Text Content */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center text-center space-y-8 order-1 lg:order-2">
            <div className="inline-block bg-black text-white px-4 py-1 font-mono font-bold tracking-widest mb-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(255,107,107,1)]">
                EST. 2025 • PORTFOLIO
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-vintage-black leading-tight drop-shadow-[4px_4px_0px_rgba(78,205,196,1)]">
                {PORTFOLIO_OWNER.toUpperCase()}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-orange to-retro-red stroke-black block mt-2 text-4xl md:text-5xl lg:text-6xl" style={{WebkitTextStroke: '1px black'}}>
                    MECHANICAL ENGINEERING
                </span>
            </h1>
            
            <p className="font-mono text-lg md:text-xl mt-6 max-w-xl bg-white/40 p-4 leading-relaxed shadow-sm">
                Third-year Co-op Student at <span className="font-bold">Memorial University</span>, NL.<br/>
                I design, analyze, and build efficient mechanical systems. <br/>
                <span className="text-retro-orange font-bold">Experienced in CAD (Onshape), Prototyping, and NDT.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center flex-wrap">
                <a 
                    href="#projects"
                    className="px-6 py-4 bg-retro-yellow border-4 border-black font-mono font-bold text-lg shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2"
                >
                    VIEW PROJECTS
                </a>
                <a 
                    href="#pedal-generator"
                    className="px-6 py-4 bg-retro-orange border-4 border-black font-mono font-bold text-lg shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2"
                >
                    <Zap className="w-5 h-5" />
                    PEDAL GEN
                </a>
                <button 
                    className="px-6 py-4 bg-white border-4 border-black font-mono font-bold text-lg shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2"
                >
                    <Download className="w-5 h-5" />
                    RESUME.PDF
                </button>
            </div>
        </div>

        {/* Right Image */}
        <div className="col-span-1 lg:col-span-3 flex justify-center lg:justify-start order-3 lg:order-3">
             <div className="relative w-64 h-64 lg:w-72 lg:h-72 rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                {/* Decorative backing */}
                <div className="absolute inset-0 bg-retro-teal translate-x-3 translate-y-3 border-4 border-black"></div>
                
                {/* Image Container */}
                <div className="absolute inset-0 border-4 border-black overflow-hidden bg-white z-10">
                     <iframe 
                        src="https://drive.google.com/file/d/17BC1HYJrLZbPHaafGpAmwbt_tn8LTNwe/preview" 
                        className="w-full h-full pointer-events-none scale-[1.35] object-cover" 
                        style={{ border: 'none' }}
                        title="Profile Right"
                        tabIndex={-1}
                     ></iframe>
                </div>
            </div>
        </div>

      </div>

      <a href="#projects" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown size={48} strokeWidth={3} />
      </a>
    </section>
  );
};

export default Hero;