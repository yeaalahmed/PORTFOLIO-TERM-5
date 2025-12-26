import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import { X, ExternalLink, Calendar, FileText, PlayCircle } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 md:px-12 bg-retro-teal border-t-4 border-black relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-4 w-4 bg-black"></div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold bg-white px-4 py-1 border-4 border-black shadow-retro">
            SELECTED WORKS
          </h2>
          <div className="flex-grow h-1 bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project) => {
            const displayCoverUrl = project.coverUrl || (project.useVideoAsCover ? project.videoUrl : null);
            
            return (
            <div 
              key={project.id} 
              className="group relative bg-vintage-cream border-4 border-black p-4 shadow-retro hover:shadow-retro-hover hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer flex flex-col"
              onClick={(e) => {
                // Prevent opening modal if clicking directly on an interactive iframe
                // But since the iframe captures events, this click might not fire if clicking inside iframe.
                // We'll let the user click the title/description to open details if they are busy watching the video.
                setSelectedProject(project);
              }}
            >
              <div className="relative aspect-video w-full overflow-hidden border-2 border-black mb-4 bg-gray-200 transition-all duration-500">
                {displayCoverUrl ? (
                    <div className="w-full h-full relative">
                        <iframe 
                            src={displayCoverUrl} 
                            className="w-full h-full object-cover pointer-events-none" 
                            allowFullScreen
                            loading="lazy"
                            title={project.title}
                            tabIndex={-1}
                        ></iframe>
                        {/* Overlay to catch clicks and ensure modal opens, since we treat this as a cover photo */}
                        <div className="absolute inset-0 z-10"></div>
                    </div>
                ) : (
                    <>
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-retro-teal text-black border-2 border-black px-2 py-1 font-mono text-xs font-bold uppercase">
                          {project.category}
                        </div>
                        {project.videoUrl && (
                          <div className="absolute center inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-retro-red border-2 border-black rounded-full p-2">
                               <PlayCircle className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        )}
                    </>
                )}
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-retro-orange transition-colors">
                    {project.title}
                </h3>
                <span className="font-mono text-sm border border-black px-2 rounded-full mt-1 bg-white">
                    {project.year}
                </span>
              </div>
              
              <p className="font-mono text-sm mb-6 text-gray-700 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold font-mono bg-retro-yellow/50 px-2 py-1 border border-black">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-retro-red rounded-full border-2 border-black z-10"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-retro-navy rounded-full border-2 border-black z-10"></div>
            </div>
          )})}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-vintage-cream border-4 border-black w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
              className="absolute top-4 right-4 p-2 bg-retro-red border-2 border-black hover:bg-red-400 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                    <span className="font-mono text-retro-navy font-bold tracking-widest uppercase text-sm">Project No. 0{selectedProject.id}</span>
                    <h2 className="font-serif text-4xl font-bold leading-none">{selectedProject.title}</h2>
                </div>

                <div className="flex gap-4 font-mono text-sm border-y-2 border-black py-4">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedProject.year}</span>
                    </div>
                    <div className="w-px bg-black"></div>
                    <div className="font-bold">{selectedProject.category}</div>
                </div>

                <p className="font-mono text-gray-800 leading-relaxed text-sm md:text-base">
                  {selectedProject.longDescription}
                </p>

                {/* Video Player */}
                {selectedProject.videoUrl && (
                  <div className="py-2">
                     <h4 className="font-bold font-serif text-lg mb-2 flex items-center gap-2">
                        <PlayCircle className="w-5 h-5" /> PROJECT DEMO
                     </h4>
                     <div className="aspect-video w-full bg-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
                        <iframe 
                            src={selectedProject.videoUrl} 
                            className="w-full h-full" 
                            allowFullScreen
                            loading="lazy"
                            title="Project Video"
                        ></iframe>
                    </div>
                  </div>
                )}

                {selectedProject.pdfUrl && (
                  <div className="py-2">
                    <a 
                      href={selectedProject.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-retro-teal border-2 border-black font-mono font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
                    >
                      <FileText className="w-4 h-4" />
                      VIEW FULL REPORT (PDF)
                    </a>
                  </div>
                )}
                
                {selectedProject.drawingsUrl && (
                  <div className="py-2">
                    <a 
                      href={selectedProject.drawingsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-retro-yellow border-2 border-black font-mono font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
                    >
                      <FileText className="w-4 h-4" />
                      VIEW DRAWINGS
                    </a>
                  </div>
                )}

                <div className="space-y-2 pt-2">
                    <h4 className="font-bold font-serif text-lg">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono text-xs font-bold">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
              </div>

              <div className="border-t-4 md:border-t-0 md:border-l-4 border-black bg-gray-100 p-8 flex flex-col items-center justify-center gap-4">
                <div className={`w-full ${selectedProject.id === '5' ? 'aspect-[9/16]' : 'aspect-video'} border-4 border-black bg-white p-2 shadow-retro transform rotate-1`}>
                    {/* Render Cover URL or Image in the modal sidebar */}
                    {selectedProject.coverUrl ? (
                         <iframe 
                            src={selectedProject.coverUrl} 
                            className="w-full h-full object-cover pointer-events-none" 
                            title="Project Cover"
                            tabIndex={-1}
                        ></iframe>
                    ) : (
                        <img 
                            src={selectedProject.imageUrl} 
                            alt={selectedProject.title}
                            className="w-full h-full object-cover border border-gray-200" 
                        />
                    )}
                </div>
                {selectedProject.id !== '5' && selectedProject.id !== '3' && selectedProject.id !== '4' && selectedProject.id !== '6' && selectedProject.id !== '2' && (
                    <div className="w-full aspect-video border-4 border-black bg-white p-2 shadow-retro transform -rotate-2 mt-4">
                        <img 
                            src={`https://picsum.photos/600/400?random=${selectedProject.id}99`} 
                            alt="Diagram"
                            className="w-full h-full object-cover grayscale opacity-80" 
                        />
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;