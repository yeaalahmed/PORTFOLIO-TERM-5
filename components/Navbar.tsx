import React from 'react';
import { Wrench } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-vintage-cream border-b-4 border-black px-6 py-4 flex justify-between items-center shadow-retro">
      <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
        <div className="bg-retro-orange p-2 border-2 border-black group-hover:bg-retro-yellow transition-colors">
            <Wrench className="w-6 h-6 text-black" />
        </div>
        <span className="font-serif text-2xl font-bold tracking-tighter hover:underline decoration-retro-teal decoration-4">
          YEAAL TAKIAN AHMED
        </span>
      </div>
    </nav>
  );
};

export default Navbar;