'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-slate-50 dark:bg-slate-800">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 dark:from-slate-700 dark:via-slate-800 dark:to-cyan-800/30 -z-10"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-700 dark:text-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm{' '}
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Mihiret Tsegaye Legesse
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Developer & Problem Solver
          </motion.p>

          <motion.p
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I build exceptional digital experiences that combine elegant code with 
            beautiful design. Let's turn your ideas into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <motion.a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-600 dark:border-slate-500 bg-slate-800 dark:bg-slate-700 text-white rounded-lg font-medium hover:border-blue-500 dark:hover:border-blue-500 hover:bg-slate-700 dark:hover:bg-slate-600 transition-all transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block p-3 rounded-full bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-slate-300/50 dark:hover:bg-slate-700/50 transition-all"
          >
            <ArrowDown className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
