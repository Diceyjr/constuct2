import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Facebook, Instagram, Linkedin, MapPin, Clock, Home, Info, Briefcase, LayoutGrid, FileText, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'about' | 'services' | 'projects' | 'testimonials' | 'blog' | 'contact';

// --- Shared Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: Page) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`h-[70px] flex items-center fixed w-full z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-primary-dark shadow-lg' : 'bg-primary-dark/95'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
          <span className="text-2xl font-display font-bold tracking-tight text-accent italic">SOLIDWALL</span>
          <span className="text-2xl font-display font-bold tracking-tight text-white ml-2">CONSTRUCTION</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors hover:text-accent uppercase tracking-wider ${currentPage === link.id ? 'text-accent' : 'text-white/80 hover:text-white'}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-accent text-white px-5 py-2.5 rounded shadow-lg font-semibold uppercase text-xs tracking-wider transition-transform hover:scale-105 active:scale-95"
          >
            Get Free Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[70px] left-0 w-full md:hidden bg-primary-dark border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left py-3 text-lg font-medium border-b border-white/5 ${currentPage === link.id ? 'text-accent' : 'text-white'}`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-accent text-white py-4 rounded font-bold text-center uppercase tracking-widest text-sm mt-4"
              >
                Get Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Sidebar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const sidebarItems: { id: Page; icon: any }[] = [
    { id: 'home', icon: <Home size={22} /> },
    { id: 'about', icon: <Info size={22} /> },
    { id: 'services', icon: <Briefcase size={22} /> },
    { id: 'projects', icon: <LayoutGrid size={22} /> },
    { id: 'contact', icon: <Send size={22} /> },
  ];

  return (
    <aside className="hidden lg:flex w-[80px] fixed top-[70px] bottom-[40px] left-0 border-r border-white/10 flex-col items-center py-10 space-y-12 bg-secondary-dark z-40">
      {sidebarItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setCurrentPage(item.id);
            window.scrollTo(0, 0);
          }}
          className={`p-3 rounded-xl transition-all duration-300 ${currentPage === item.id ? 'bg-white/10 text-accent ring-1 ring-accent/30 shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
        >
          {item.icon}
        </button>
      ))}
      <div className="mt-auto pb-4">
         <motion.a 
           href="https://wa.me/2348162930106" 
           target="_blank"
           animate={{ opacity: [0.5, 1, 0.5] }}
           transition={{ repeat: Infinity, duration: 2 }}
           className="text-accent cursor-pointer"
         >
           <MessageSquare size={32} fill="currentColor" className="opacity-80" />
         </motion.a>
      </div>
    </aside>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="h-[40px] fixed bottom-0 w-full bg-primary-dark border-t border-white/10 flex items-center justify-between px-6 lg:px-10 text-[10px] text-gray-400 uppercase tracking-widest z-50">
      <div className="truncate pr-4">© 2025 Solidwall Construction LTD. Benin City, Edo State.</div>
      <div className="flex space-x-4 lg:space-x-8 shrink-0">
        <span className="hidden sm:inline">Facebook</span>
        <span className="hidden sm:inline">Instagram</span>
        <span className="hidden sm:inline">LinkedIn</span>
        <span className="text-accent font-bold">WhatsApp: 0816 293 0106</span>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/2348162930106?text=Hello%20Solidwall%20Construction%2C%20I'd%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="lg:hidden fixed bottom-14 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <MessageSquare size={28} />
    </motion.a>
  );
};

export { Navbar, Footer, Sidebar, WhatsAppButton };
export type { Page };
