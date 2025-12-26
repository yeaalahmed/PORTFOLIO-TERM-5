import React from 'react';
import { PROJECTS } from '../constants';
import { Zap, DollarSign, Settings, ShieldCheck, TrendingUp, PlayCircle } from 'lucide-react';

const PedalGeneratorSection: React.FC = () => {
  const project = PROJECTS.find(p => p.id === '1');

  if (!project) return null;

  return (
    <section id="pedal-generator" className="py-20 px-4 md:px-12 bg-retro-yellow border-t-4 border-black relative overflow-hidden scroll-mt-28">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
        }}>
      </div>
      
      {/* Animated Gear */}
      <div className="absolute -right-20 top-20 opacity-10 hidden lg:block animate-[spin_10s_linear_infinite]">
        <Settings size={300} strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8 sticky top-32">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1 font-mono font-bold transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <Zap className="w-4 h-4 text-retro-yellow" />
                FEATURED ENGINEERING
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-vintage-black drop-shadow-sm">
                PEDAL-POWERED <br/>
                <span className="text-retro-red decoration-4 underline decoration-black">GENERATOR</span>
            </h2>

            <div className="bg-white border-4 border-black p-6 shadow-retro relative transform rotate-1">
                <p className="font-mono text-lg leading-relaxed mb-4 text-gray-800">
                    {project.longDescription}
                </p>
                
                {/* Decorative Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-gray-500 shadow-sm"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">
                <div className="flex items-center gap-3 bg-retro-teal/20 border-2 border-black p-3 font-bold">
                    <div className="bg-retro-teal p-1 border border-black">
                        <DollarSign className="w-5 h-5 text-black" />
                    </div>
                    <span>$1,400 FUNDING SECURED</span>
                </div>
                <div className="flex items-center gap-3 bg-retro-orange/20 border-2 border-black p-3 font-bold">
                    <div className="bg-retro-orange p-1 border border-black">
                        <ShieldCheck className="w-5 h-5 text-black" />
                    </div>
                    <span>SAFETY ENGINEERED</span>
                </div>
                 <div className="flex items-center gap-3 bg-white border-2 border-black p-3 font-bold col-span-1 md:col-span-2">
                    <div className="bg-black text-white p-1 border border-black">
                        <TrendingUp className="w-5 h-5" />
                    </div>
                    <span>HIGH STABILITY ELECTRICAL OUTPUT</span>
                </div>
            </div>
        </div>

        {/* Visuals Column */}
        <div className="order-1 lg:order-2 flex flex-col gap-12">
            
             {/* 1. Main Cover Image */}
             <div className="relative group">
                 {/* Backing Card */}
                 <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
                 
                 <div className="aspect-[4/3] w-full border-4 border-black bg-white p-2 relative z-10 transition-transform hover:-translate-x-1 hover:-translate-y-1">
                    {project.coverUrl ? (
                        <iframe 
                            src={project.coverUrl} 
                            className="w-full h-full object-cover pointer-events-none" 
                            title="Pedal Generator Preview"
                            tabIndex={-1}
                        ></iframe>
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center font-mono">
                            NO PREVIEW AVAILABLE
                        </div>
                    )}
                    
                    {/* Tape Effect */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/50 border border-white/60 rotate-2 backdrop-blur-sm pointer-events-none"></div>
                 </div>
                 
                 {/* Label */}
                 <div className="absolute -bottom-6 -left-4 bg-retro-red text-white px-6 py-2 font-mono font-bold border-4 border-black transform -rotate-2 z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    PROTOTYPE V1.0
                 </div>
             </div>

             {/* 2. Video Demo */}
             <div className="relative group mt-4">
                 <div className="flex items-center gap-2 mb-2 font-mono font-bold">
                    <PlayCircle className="w-5 h-5" />
                    <span>LIVE DEMONSTRATION</span>
                 </div>
                 
                 {/* Backing Card */}
                 <div className="absolute inset-0 bg-retro-teal translate-x-3 translate-y-3 border-4 border-black top-8"></div>
                 
                 <div className="aspect-[4/3] w-full border-4 border-black bg-black p-1 relative z-10 transition-transform hover:-translate-x-1 hover:-translate-y-1">
                    <iframe 
                        src="https://drive.google.com/file/d/1V2-7tJuo50D9Bib5JiwvPk2D10CHvsNU/preview" 
                        className="w-full h-full object-cover" 
                        title="Pedal Generator Video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                 </div>
             </div>

        </div>

      </div>
    </section>
  );
};

export default PedalGeneratorSection;