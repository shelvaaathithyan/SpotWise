import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-gray-200/50 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="font-bold text-2xl tracking-tight text-spot-dark flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-spot-dark to-slate-700 shadow-sm flex items-center justify-center">
            <span className="text-white text-sm font-black">S</span>
          </div>
          SpotWise
        </Link>
        
        {/* Center: Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <Link to="/" className="text-spot-dark transition-colors">Home</Link>
          <Link to="/live" className="hover:text-spot-dark transition-colors">Dashboard</Link>
          <a href="#how-it-works" className="hover:text-spot-dark transition-colors">How it Works</a>
          <a href="#about" className="hover:text-spot-dark transition-colors">About</a>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center">
          <Link to="/live">
            <Button variant="primary" size="sm" className="hidden md:inline-flex shadow-lg shadow-spot-dark/10">
              View Live Parking
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
