import { motion } from 'motion/react';
import { Shield, Building2, Home as HomeIcon, Settings, Ruler, Users, Star, ArrowRight, Phone } from 'lucide-react';

const stats = [
  { value: '200+', label: 'Projects Completed' },
  { value: '4.9', label: 'Google Rating', icon: <Star className="text-yellow-400 inline" size={16} /> },
  { value: '36', label: 'Client Reviews' },
  { value: '10+', label: 'Years Experience' },
];

const homeServices = [
  { title: 'Architectural Design', icon: <Ruler size={32} />, desc: 'Custom designs tailored to your vision and lifestyle.' },
  { title: 'Residential Construction', icon: <HomeIcon size={32} />, desc: 'Modern duplexes, bungalows, and apartment complexes.' },
  { title: 'Commercial Buildings', icon: <Building2 size={32} />, desc: 'Professional office spaces, warehouses, and shopping malls.' },
  { title: 'Renovation & Remodelling', icon: <Settings size={32} />, desc: 'Giving old structures a brand new life.' },
  { title: 'Structural Engineering', icon: <Shield size={32} />, desc: 'Solid foundations and earthquake-resistant designs.' },
  { title: 'Project Management', icon: <Users size={32} />, desc: 'End-to-end supervision for peace of mind.' },
];

const featuredProjects = [
  { title: '3-Bedroom Duplex, GRA Benin', image: 'https://images.unsplash.com/photo-1600585154340-be6199bc12a1?auto=format&fit=crop&q=80&w=1000', category: 'Residential' },
  { title: 'Modern Office Hub, Asaba', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000', category: 'Commercial' },
  { title: 'Luxury Villa Renovation, Warri', image: 'https://images.unsplash.com/photo-1512917758584-26a1200c0250?auto=format&fit=crop&q=80&w=1000', category: 'Renovation' },
];

const HomePage = ({ onNavigate }: { onNavigate: (page: any) => void }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541919329513-35f7af297129?auto=format&fit=crop&q=80&w=2000" 
            alt="Construction" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-dark/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building Excellence, One Wall at a Time
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10">
              Trusted Architectural Design & Construction in Benin City, Edo State. We turn your dreams into solid reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <button 
                onClick={() => onNavigate('projects')}
                className="bg-accent text-white px-10 py-4 rounded shadow-2xl font-bold uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
              >
                Explore Projects <ArrowRight className="ml-3" size={18} />
              </button>
              <a 
                href="tel:08162930106"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-all flex items-center justify-center"
              >
                <Phone className="mr-3" size={18} /> 0816 293 0106
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white py-10 shadow-sm border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-black/5 shadow-sm flex flex-col items-center"
              >
                <div className="text-3xl font-display font-bold text-accent mb-1 uppercase tracking-tight">
                  {stat.value}{stat.icon}
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-dark">Our Solid Foundation</h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Solidwall Construction LTD is a premier architectural design and construction firm based in Benin City. For over a decade, we have been at the forefront of delivering quality infrastructure across Edo State and Nigeria. Our commitment to excellence, innovation, and client satisfaction defines every project we undertake.
              </p>
              <button 
                onClick={() => onNavigate('about')}
                className="bg-accent text-white px-8 py-3 rounded font-bold shadow-xl hover:bg-opacity-90 transition-all uppercase tracking-widest text-xs"
              >
                Read Full Story
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1000" 
                  alt="About" 
                  className="w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-dark p-8 rounded-2xl text-white hidden sm:block border-l-4 border-accent shadow-2xl">
                <span className="text-4xl font-bold block text-accent italic">10+</span>
                <span className="text-[10px] uppercase tracking-widest font-medium opacity-60">Years of Craftsmanship</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-dark">Building Modern Infrastructure</h2>
          <p className="text-gray-400 mb-16 text-sm uppercase tracking-widest">Quality designs tailored for Nigerian landscapes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => onNavigate('services')}
                className="group relative bg-white p-8 rounded-2xl border border-black/5 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all text-left cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-3xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all transform origin-top-right">
                  {service.icon}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-3 text-primary-dark">{service.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed pr-12">{service.desc}</p>
                </div>
                <span className="mt-8 text-accent text-[10px] font-bold uppercase tracking-wider flex items-center group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2" size={14} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark">Featured Projects</h2>
              <p className="text-gray-400 mt-2 text-[10px] uppercase tracking-widest font-bold">Excellence in every square meter</p>
            </div>
            <button 
              onClick={() => onNavigate('projects')}
              className="text-accent text-[10px] font-bold uppercase tracking-widest border-b border-accent pb-1 hover:text-primary-dark hover:border-primary-dark transition-all"
            >
              See Portfolio
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => onNavigate('projects')}
              >
                <img 
                  src={`https://images.unsplash.com/photo-${idx === 0 ? '1486406146926-c627a92ad1ab' : '1503387762-592dea58ef23'}?auto=format&fit=crop&q=80&w=1000`} 
                  alt="Project" 
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="bg-accent text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest mb-3 inline-block">
                    {idx === 0 ? 'Residential' : 'Commercial'}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {idx === 0 ? 'Royal Palms Estate' : 'The Glass Tower'}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">Benin City, Edo State</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-accent text-6xl font-serif opacity-20 block mb-4 italic">"</span>
            <p className="text-xl md:text-2xl font-medium text-primary-dark leading-relaxed italic mb-8">
              "Solidwall Construction handled our project with extreme professionalism. Their attention to detail in the architectural design phase was matched only by their expertise during the actual build."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full mb-4 flex items-center justify-center font-bold text-primary-dark">EO</div>
              <h4 className="font-bold text-primary-dark">Engr. Osas O.</h4>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Real Estate Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">Ready to build your <span className="text-accent">dream project?</span></h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">From concept to completion, we provide end-to-end expertise for all your construction needs in Nigeria.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-accent text-white px-10 py-5 rounded-lg font-bold shadow-2xl hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm"
              >
                Start Your Project
              </button>
              <a 
                href="tel:08162930106"
                className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center uppercase tracking-widest text-sm"
              >
                <Phone className="mr-2" size={18} /> Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
        {/* Background Accent Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>
      </section>
    </div>
  );
};

export default HomePage;
