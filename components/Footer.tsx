'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17161a] text-slate-400 py-12 border-t border-[#3a3d47] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="font-mono-code text-xs text-slate-400 text-center md:text-left">
            <p>© {currentYear}. Made with passion by <span className="text-white font-bold">Mihiret Tsegaye Legesse</span>.</p>
            <p className="text-slate-500 mt-1">All rights reserved.</p>
          </div>

          {/* Center Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/mercy306"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111320] border border-[#1f2233] text-slate-300 hover:text-[#66D9ED] hover:border-[#66D9ED] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mihiret-tsegaye-586bba39b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111320] border border-[#1f2233] text-slate-300 hover:text-[#66D9ED] hover:border-[#66D9ED] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:mihirettsegaye307@gmail.com"
              className="p-2 rounded-lg bg-[#111320] border border-[#1f2233] text-slate-300 hover:text-[#DF058D] hover:border-[#DF058D] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="font-mono-code text-xs text-slate-300 hover:text-[#66D9ED] flex items-center gap-2 group transition-colors"
          >
            <span>Scroll to top</span>
            <div className="p-2 rounded-full bg-[#111320] border border-[#1f2233] group-hover:border-[#66D9ED] transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
