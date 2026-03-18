'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[9999] bg-white/80 dark:bg-slate-800/40 backdrop-blur-md border-b border-slate-300 dark:border-slate-500 shadow-xl"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="text-xl font-bold text-slate-900 dark:text-white drop-shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-bold text-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
             
            >
              <FileText className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/mercy306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mihiret-tsegaye-586bba39b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:mihirettsegaye307@gmail.com"
              className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 dark:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-semibold"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center space-x-4">
              <a
                     >
                <FileText className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/mercy306"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mihiret-tsegaye-586bba39b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mihirettsegaye307@gmail.com"
                className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
