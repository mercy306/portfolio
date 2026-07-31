'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  const techBadges = [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'PHP',
    'MongoDB',
    'MySQL',
    'React Native',
    'Tailwind CSS',
  ];

  return (
    <section
      id="hero-section"
      className="min-h-screen flex flex-col justify-center items-center relative pt-28 pb-16 overflow-hidden bg-[#0b0c10]"
    >
      {/* Background Ambient Orbs inspired by tamalsen.dev */}
      <div className="glowing-orb glowing-orb-yellow w-[500px] h-[500px] -top-20 -left-20 animate-pulse" />
      <div className="glowing-orb glowing-orb-cyan w-[600px] h-[600px] top-1/3 -right-20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="glowing-orb glowing-orb-magenta w-[450px] h-[450px] -bottom-20 left-1/4 animate-pulse" style={{ animationDelay: '3s' }} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f2233_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 my-auto">
        {/* Terminal Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131522] border border-[#23273e] text-[#66D9ED] font-mono-code text-xs sm:text-sm mb-8 shadow-inner"
        >
          <Terminal className="w-4 h-4 text-[#DF058D]" />
          <span>hello_world.tsx</span>
          <span className="w-2 h-2 rounded-full bg-[#66D9ED] animate-ping" />
        </motion.div>

        {/* Big Name Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white mb-6"
        >
          Mihiret Tsegaye
        </motion.h1>

        {/* Sub-headline with Chonky Underline Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 max-w-3xl mx-auto leading-snug">
            Full Stack Developer,{' '}
            <span className="chonky-underline-magenta chonky-underline-hover font-semibold">
              Front-end
            </span>{' '}
            &{' '}
            <span className="chonky-underline-blue chonky-underline-hover font-semibold">
              Mobile Specialist
            </span>.
          </h2>
        </motion.div>

        {/* Short Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Computer Science graduate from Haramaya University & former Front-end Developer Intern at the Ethiopian Road Administration. Devoted to building web & mobile experiences with React, Next.js, and modern tech.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-16"
        >
          <a
            href="#work"
            className="px-8 py-3.5 rounded-lg bg-[#2C49D8] text-white font-mono-code font-semibold text-sm hover:bg-[#3856ed] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#2C49D8]/30 flex items-center gap-2"
          >
            <Code className="w-4 h-4" />
            <span>// view_work</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg bg-[#141624] border border-[#2b304c] text-slate-200 font-mono-code font-semibold text-sm hover:border-[#66D9ED] hover:text-[#66D9ED] transition-all transform hover:-translate-y-0.5"
          >
            <span>// contact_me</span>
          </a>
        </motion.div>

        {/* Tech Stack Marquee / Badges ("As featured in" style) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 border-t border-[#181b2c] max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-mono-code text-slate-500 uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B2B]" />
            <span>Technologies & Skills</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-3.5 py-1.5 rounded-md bg-[#121422] border border-[#1e2238] text-slate-300 text-xs sm:text-sm font-mono-code hover:border-[#66D9ED]/50 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Downward Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 z-10"
      >
        <a
          href="#expertise"
          aria-label="Scroll to expertise"
          className="p-3 rounded-full bg-[#121422] border border-[#22263d] text-slate-400 hover:text-[#66D9ED] hover:border-[#66D9ED] transition-all flex items-center justify-center group animate-bounce"
        >
          <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
