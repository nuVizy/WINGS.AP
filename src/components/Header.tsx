import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-heading font-semibold tracking-tighter text-white">
          WINGS<span className="text-brand-orange">.AP</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-all hover:text-brand-orange ${location.pathname === link.path ? 'text-brand-orange' : 'text-white/70'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white text-[10px] font-medium uppercase tracking-widest" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-black absolute top-full left-0 right-0 border-t border-white/10 shadow-2xl p-8"
        >
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-2xl font-heading text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
