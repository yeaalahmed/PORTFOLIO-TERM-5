import React from 'react';
import { Menu, X, Wrench } from 'lucide-react';

interface NavbarProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu, isMenuOpen }) => {
  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-vintage-cream border-b-4 border-black px-6 py-4 flex justify-between items-center shadow-retro">
      <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
        <div className="bg-retro-orange p-2 border-2 border-black group-hover:bg-retro-yellow transition-colors">
            <Wrench className="w-6 h-6 text-black" />
        </div>
        <span className="font-serif text-2xl font-bold tracking-tighter hover:underline decoration-retro-teal decoration-4">
          Y. AHMED
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-mono font-bold text-lg uppercase tracking-widest hover:text-retro-red hover:underline decoration-4 underline-offset-4 transition-all"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 border-2 border-black bg-retro-teal shadow-retro-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-vintage-cream border-b-4 border-black p-4 flex flex-col gap-4 shadow-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xl font-bold border-2 border-black p-3 text-center hover:bg-retro-yellow transition-colors shadow-retro-sm"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;