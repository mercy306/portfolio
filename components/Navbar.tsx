'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '// home', href: '#hero-section' },
    { name: '// expertise', href: '#expertise' },
    { name: '// work', href: '#work' },
    { name: '// experience', href: '#experience' },
    { name: '// contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1a1a1a]/85 backdrop-blur-xl border-b border-[#3a3d47] py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <motion.a
            href="#hero-section"
            className="flex items-center gap-2 group text-white font-mono-code font-bold text-lg tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded bg-[#161825] border border-[#2a2e45] flex items-center justify-center text-[#66D9ED] group-hover:border-[#66D9ED] transition-colors">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="text-slate-100 group-hover:text-[#66D9ED] transition-colors">
              Mihiret Tsegaye<span className="text-[#66D9ED]">.dev</span>
            </span>
          </motion.a>

          {/* Desktop Code-Comment Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="font-mono-code text-slate-300 hover:text-[#66D9ED] transition-colors text-sm font-medium tracking-wide relative group py-1"
                whileHover={{ y: -1 }}
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#66D9ED] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Right Social Quick Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/mercy306"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#141624] border border-[#22263d] text-slate-300 hover:text-[#66D9ED] hover:border-[#66D9ED]/40 transition-all"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mihiret-tsegaye-586bba39b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#141624] border border-[#22263d] text-slate-300 hover:text-[#66D9ED] hover:border-[#66D9ED]/40 transition-all"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="mailto:mihirettsegaye307@gmail.com"
              className="p-2 rounded-lg bg-[#141624] border border-[#22263d] text-slate-300 hover:text-[#DF058D] hover:border-[#DF058D]/40 transition-all"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#141624] border border-[#22263d] text-slate-200 hover:text-[#66D9ED]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0b0c10] border-b border-[#1f2233] px-6 py-6"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono-code text-slate-200 hover:text-[#66D9ED] text-base py-2 border-b border-[#161826] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 flex items-center space-x-5">
              <a
                href="https://github.com/mercy306"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#141624] border border-[#22263d] text-slate-200 hover:text-[#66D9ED]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mihiret-tsegaye-586bba39b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#141624] border border-[#22263d] text-slate-200 hover:text-[#66D9ED]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mihirettsegaye307@gmail.com"
                className="p-2.5 rounded-lg bg-[#141624] border border-[#22263d] text-slate-200 hover:text-[#DF058D]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
