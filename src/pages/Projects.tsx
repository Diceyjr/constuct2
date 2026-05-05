import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Tag, ExternalLink } from 'lucide-react';

type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Renovation' | 'Ongoing';

const projects = [
  { id: 1, title: '3-Bedroom Duplex, GRA Benin', category: 'Residential', location: 'GRA, Benin City', image: 'https://images.unsplash.com/photo-1600585154340-be6199bc12a1?auto=format&fit=crop&q=80&w=800', desc: 'A luxury residential project featuring modern smart home features, premium finishes, and a spacious landscaped garden in the prestigious GRA area.' },
  { id: 2, title: 'Modern Office Hub', category: 'Commercial', location: 'Ugbowo, Benin City', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800', desc: 'A state-of-the-art office complex designed for maximum collaboration and efficiency. Features solar power integration and open-plan workspaces.' },
  { id: 3, title: 'Village Villa Renovation', category: 'Renovation', location: 'Igueben, Edo State', image: 'https://images.unsplash.com/photo-1512917758584-26a1200c0250?auto=format&fit=crop&q=80&w=800', desc: 'Transforming a traditional family house into a modern sanctuary while preserving its historical character.' },
  { id: 4, title: 'Shopping Plaza Extension', category: 'Ongoing', location: 'Sapele Rd, Benin', image: 'https://images.unsplash.com/photo-1541919329513-35f7af297129?auto=format&fit=crop&q=80&w=800', desc: 'Expanding a city retail hub with 20 additional modern storefronts and improved parking facilities.' },
  { id: 5, title: 'Luxury 4-Bedroom Flat', category: 'Residential', location: 'Warri, Delta', image: 'https://images.unsplash.com/photo-1600607687940-c52af046397c?auto=format&fit=crop&q=80&w=800', desc: 'A contemporary high-rise apartment with panoramic city views and top-tier security systems.' },
  { id: 6, title: 'Industrial Warehouse Design', category: 'Commercial', location: 'Auchi, Edo', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', desc: 'Structural engineering and design for a high-capacity logistics warehouse facility.' },
  { id: 7, title: 'Bungalow Remodel', category: 'Renovation', location: 'Ekpoma, Edo', image: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=800', desc: 'Full interior and facade update for a 4-bedroom family bungalow.' },
  { id: 8, title: 'Civic Center Design', category: 'Commercial', location: 'Asaba, Delta', image: 'https://images.unsplash.com/photo-1554435493-94764d990736?auto=format&fit=crop&q=80&w=800', desc: 'An iconic community center designed for events and public services.' },
  { id: 9, title: 'New Estate Infrastructure', category: 'Ongoing', location: 'Sapele, Delta', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', desc: 'Developing the foundational infrastructure - roads, drainage, and utilities - for a new private gated estate.' }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-64 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1500" 
            alt="Projects Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-dark/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Portfolio</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Explore some of our landmark projects across Nigeria.</p>
        </div>
      </section>

      {/* Projects Filter & Grid */}
      <section className="py-16 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(['All', 'Residential', 'Commercial', 'Renovation', 'Ongoing'] as ProjectCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full font-semibold transition-all ${filter === cat ? 'bg-accent text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:from-accent/90 transition-all duration-300 flex flex-col justify-end p-6">
                    <span className="text-xs font-bold text-accent group-hover:text-white uppercase mb-2">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                    <div className="flex items-center text-gray-300 text-sm group-hover:text-white/80">
                        <MapPin size={14} className="mr-1" /> {project.location}
                    </div>
                    <button className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-accent px-4 py-2 rounded font-bold text-sm flex items-center w-fit">
                        View Details <ExternalLink size={14} className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 bg-black/80 backdrop-blur-sm"
               onClick={() => setSelectedProject(null)}
            ></motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 100, scale: 0.8 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: 100, scale: 0.8 }}
               className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/50 backdrop-blur-md p-2 rounded-full hover:bg-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover min-h-[300px]"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className="md:w-1/2 p-10 space-y-6">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded text-sm font-bold uppercase tracking-wider">{selectedProject.category}</span>
                    <h2 className="text-3xl font-bold text-primary-dark">{selectedProject.title}</h2>
                    
                    <div className="grid grid-cols-2 gap-4 border-y py-6">
                        <div className="flex items-center text-sm text-gray-500">
                            <MapPin size={18} className="text-accent mr-3" />
                            <span>{selectedProject.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                            <Calendar size={18} className="text-accent mr-3" />
                            <span>Completed 2024</span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed italic">
                        {selectedProject.desc}
                    </p>

                    <div className="space-y-2">
                        <h4 className="font-bold text-sm text-primary-dark uppercase">Services Delivered:</h4>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="bg-gray-100 px-2 py-1 rounded">Architectural Design</span>
                          <span className="bg-gray-100 px-2 py-1 rounded">Site Supervision</span>
                          <span className="bg-gray-100 px-2 py-1 rounded">Interior Finishing</span>
                        </div>
                    </div>

                    <button 
                       onClick={() => setSelectedProject(null)}
                       className="w-full bg-primary-dark text-white py-4 rounded-lg font-bold hover:bg-accent transition-colors mt-8"
                    >
                        Close Preview
                    </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="bg-light-bg py-16 text-center italic border-t">
          <p className="max-w-2xl mx-auto text-gray-500 px-4">
              "We were looking for a construction partner who understands the Benin GRA environment. Solidwall didn't just deliver a building, they delivered a masterpiece." — Homeowner, GRA Benin
          </p>
      </section>
    </div>
  );
};

export default ProjectsPage;
