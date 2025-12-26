import React from 'react';
import { MAKE_AND_TAKES } from '../constants';
import { Hammer, Cone } from 'lucide-react';

const MakeAndTakes: React.FC = () => {
  return (
    <section id="make-and-takes" className="py-20 px-4 md:px-12 bg-retro-red border-t-4 border-black relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-16 justify-center md:justify-start">
          <div className="bg-retro-orange p-3 border-2 border-black shadow-retro-sm">
            <Hammer className="w-8 h-8 text-black" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold bg-white px-6 py-2 border-4 border-black shadow-retro transform -rotate-1">
            MAKE-AND-TAKES
          </h2>
        </div>

        <p className="font-mono text-lg mb-12 max-w-2xl bg-white p-4 border-2 border-black shadow-retro-sm transform rotate-1">
            A collection of rapid prototypes, hobby builds, and hands-on experiments from my workshop.
        </p>

        {MAKE_AND_TAKES.length === 0 ? (
           <div className="flex flex-col items-center justify-center py-16 border-4 border-dashed border-black/30 bg-white/50 rounded-lg">
                <Cone className="w-16 h-16 text-retro-orange mb-4 animate-pulse" />
                <h3 className="font-serif text-2xl font-bold">WORKSHOP CLOSED</h3>
                <p className="font-mono text-gray-600 mt-2">// New projects being machined... check back later.</p>
           </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MAKE_AND_TAKES.map((item, index) => {
               const isDrivePreview = item.imageUrl.includes('drive.google.com') && item.imageUrl.includes('preview');
               return (
                <div 
                key={item.id} 
                className={`
                    group relative bg-white p-4 border-2 border-black shadow-retro 
                    transition-all duration-300 hover:scale-105 hover:z-20 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                    ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
                `}
                >
                {/* "Tape" Effect */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-200/90 rotate-2 border border-yellow-300/50 shadow-sm z-20 opacity-90"></div>

                {/* Image Area */}
                <div className="aspect-square w-full border-2 border-black overflow-hidden bg-gray-100 relative">
                    {isDrivePreview ? (
                        <iframe 
                            src={item.imageUrl} 
                            className="w-full h-full object-cover pointer-events-none" 
                            title={item.title}
                            tabIndex={-1}
                            loading="lazy"
                        ></iframe>
                    ) : (
                        <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    )}
                </div>
                </div>
              );
            })}
            </div>
        )}
      </div>
    </section>
  );
};

export default MakeAndTakes;