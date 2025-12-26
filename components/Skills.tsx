import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-20 px-4 md:px-12 bg-retro-teal/20 border-t-4 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16 flex-wrap gap-4">
          <h2 className="font-serif text-5xl font-bold bg-white px-4 border-4 border-black shadow-retro inline-block transform -rotate-1">
            TECHNICAL ARSENAL
          </h2>
          <div className="bg-black text-white font-mono px-4 py-2 text-sm">
            // COMPETENCY MATRIX
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-white border-4 border-black p-6 shadow-retro-sm">
              <h3 className="font-mono text-xl font-bold border-b-4 border-black pb-2 mb-6 uppercase text-retro-navy">
                {category}
              </h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between font-bold font-mono text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-4 w-full border-2 border-black p-0.5 bg-vintage-cream">
                      <div 
                        className="h-full bg-retro-orange border-r-2 border-black repeating-linear-gradient"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.1) 5px, rgba(0,0,0,0.1) 10px)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;