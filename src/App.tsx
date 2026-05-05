import { useState } from 'react';
import { Navbar, Footer, Sidebar, WhatsAppButton, type Page } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'projects':
        return <Projects />;
      case 'testimonials':
        return <Testimonials />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white bg-primary-dark overflow-x-hidden">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="flex flex-1">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <main className="flex-grow pt-[70px] pb-[40px] lg:pl-[80px] bg-[#f9f9f9] min-h-screen">
          {renderPage()}
        </main>
      </div>

      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}

