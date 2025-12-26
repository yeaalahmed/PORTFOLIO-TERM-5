import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { PORTFOLIO_EMAIL, PORTFOLIO_LINKEDIN } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-retro-red border-t-4 border-black">
      <div className="max-w-3xl mx-auto bg-vintage-cream border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#FFF]">
        <h2 className="font-serif text-4xl font-bold mb-8 text-center underline decoration-wavy decoration-retro-teal decoration-4">
          GET IN TOUCH
        </h2>
        
        <div className="font-mono text-center mb-10 text-gray-700 space-y-2">
          <p>Interested in working together? I'm currently open for Co-op opportunities.</p>
          <p className="font-bold text-lg">{PORTFOLIO_EMAIL}</p>
        </div>

        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                    type="text" 
                    placeholder="FULL NAME" 
                    className="w-full bg-white border-2 border-black p-4 font-mono focus:bg-retro-yellow/20 focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                />
                <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    className="w-full bg-white border-2 border-black p-4 font-mono focus:bg-retro-yellow/20 focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                />
            </div>
            <textarea 
                rows={5} 
                placeholder="MESSAGE SPECIFICATIONS..." 
                className="w-full bg-white border-2 border-black p-4 font-mono focus:bg-retro-yellow/20 focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
            ></textarea>
            
            <button className="bg-black text-white font-mono font-bold text-xl py-4 border-4 border-transparent hover:bg-white hover:text-black hover:border-black hover:shadow-retro transition-all">
                TRANSMIT MESSAGE
            </button>
        </div>

        <div className="mt-12 flex justify-center gap-8 border-t-2 border-black pt-8">
            <a href={`mailto:${PORTFOLIO_EMAIL}`} className="p-3 bg-white border-2 border-black hover:bg-retro-teal hover:-translate-y-1 transition-all shadow-retro-sm">
                <Mail className="w-6 h-6" />
            </a>
            <a href={`https://${PORTFOLIO_LINKEDIN}`} target="_blank" rel="noreferrer" className="p-3 bg-white border-2 border-black hover:bg-retro-teal hover:-translate-y-1 transition-all shadow-retro-sm">
                <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white border-2 border-black hover:bg-retro-teal hover:-translate-y-1 transition-all shadow-retro-sm">
                <Github className="w-6 h-6" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;