import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Facebook, Leaf } from 'lucide-react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine if current page has a dark header (like Home hero)
  const isDarkHeader = location.pathname === '/' || location.pathname === '/services' || location.pathname === '/about' || location.pathname === '/gallery' || location.pathname === '/contact' || location.pathname === '/testimonials' || location.pathname === '/request-service';

  return (
    <div className="min-h-screen flex flex-col bg-paper selection:bg-primary selection:text-paper overflow-x-hidden">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'glass-panel py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24 flex justify-between items-center">
          <Link to="/" className="relative z-50 flex items-center group">
            <img 
              src="https://i.imgur.com/T7luw0G.png" 
              alt="Torrez Lawn Care Logo" 
              style={{ width: '162.656px', height: '77.9766px' }} 
              className="object-contain" 
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.15em] font-medium hover-line transition-colors duration-500 ${
                  isScrolled || isMenuOpen ? 'text-ink/80 hover:text-ink' : 'text-paper/80 hover:text-paper'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/request-service"
              className={`text-xs uppercase tracking-[0.15em] font-medium px-8 py-3 transition-all duration-500 ${
                isScrolled || isMenuOpen 
                  ? 'bg-ink text-paper hover:bg-primary hover:text-paper' 
                  : 'bg-paper text-ink hover:bg-primary hover:text-paper'
              }`}
            >
              Request Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-8 h-8 font-light" />
            ) : (
              <Menu className={`w-8 h-8 font-light ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-32 pb-12 px-6 overflow-y-auto"
          >
            <nav className="relative z-10 flex flex-col space-y-4 mt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                >
                  <Link
                    to={link.path}
                    className="text-5xl sm:text-6xl font-serif text-gray-900 hover:text-primary transition-colors font-bold"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + navLinks.length * 0.05, duration: 0.6 }}
                className="pt-12 mt-8 border-t border-gray-200"
              >
                <Link
                  to="/request-service"
                  className="text-lg uppercase tracking-[0.2em] text-primary font-bold flex items-center hover:text-primary-dark transition-colors"
                >
                  Request a Quote <ArrowRight className="ml-4 w-5 h-5" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-paper pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
            <div className="lg:col-span-6">
              <div className="flex items-center mb-8">
                <img 
                  src="https://i.imgur.com/T7luw0G.png" 
                  alt="Torrez Lawn Care Logo" 
                  className="h-24 w-auto object-contain" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <p className="text-paper/70 max-w-md mb-8 leading-relaxed">
                Professional lawn care and landscaping services dedicated to making your outdoor spaces beautiful and healthy.
              </p>
              <Link 
                to="/request-service" 
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light transition-colors"
              >
                Request a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-8 lg:pl-16">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-paper/40 mb-8">Navigation</h4>
                <ul className="space-y-4">
                  {navLinks.map(link => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-sm tracking-wide text-paper/80 hover:text-primary transition-colors">{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-paper/40 mb-8">Contact</h4>
                <ul className="space-y-4 text-sm tracking-wide text-paper/80">
                  <li>Hammond, LA</li>
                  <li>Serving a 45-mile radius</li>
                  <li className="pt-4">
                    <a href="tel:9856624350" className="hover:text-primary transition-colors text-paper">(985) 662-4350</a>
                  </li>
                  <li>
                    <a href="mailto:torrezlawncareservices@gmail.com" className="hover:text-primary transition-colors break-all text-paper">Email Us</a>
                  </li>
                </ul>
                <div className="flex space-x-6 mt-12">
                  <a href="https://www.instagram.com/torrezlawnservices_91" target="_blank" rel="noopener noreferrer" className="text-paper/60 hover:text-primary transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://web.facebook.com/lawnservicestorrez/?ref=PRODASH_UPSELL_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer" className="text-paper/60 hover:text-primary transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-[1px] bg-paper/10 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-paper/40">
            <p>&copy; {new Date().getFullYear()} Torrez Lawn Care</p>
            <p className="mt-4 md:mt-0">Hammond, Louisiana</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
