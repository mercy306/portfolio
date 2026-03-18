'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-100 dark:bg-slate-950">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-slate-100 to-cyan-100 dark:from-slate-900 dark:via-slate-950/20 dark:to-slate-950 -z-10"></div>
      
      {/* Decorative glow effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full shadow-lg shadow-blue-500/30"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            {/* Profile Image Placeholder */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
              
              {/* Inner container */}
              <div className="relative bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-950 rounded-xl flex items-center justify-center shadow-2xl overflow-hidden border border-slate-300 dark:border-slate-700 transform group-hover:scale-105 transition-transform duration-300">
                {/* Replace this with your actual photo */}
                {/* Example: <Image src="/profile.jpg" alt="Mihiret Tsegaye" fill className="object-cover" /> */}
                <User className="w-32 h-32 text-slate-400 dark:text-slate-500" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Hello! I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mihiret Tsegaye Legesse</span>
            </h3>
            
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
                A motivated Junior IT Professional and Front-end Developer with a Bachelor's degree 
                in Computer Science from <span className="font-semibold text-blue-500">Haramaya University</span>. 
                I'm passionate about creating efficient, user-focused digital solutions and maintaining reliable systems.
              </p>
              
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
                My expertise spans full-stack web development with experience in React, Next.js, 
                TypeScript, Node.js, PHP, and various databases. During my internship at the 
                <span className="font-semibold text-blue-500"> Ethiopian Road Administration</span>, 
                I gained practical experience building dynamic websites and connecting front-end components to databases.
              </p>
              
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
                I'm committed to teamwork, continuous learning, and professional growth in the 
                technology field. When I'm not coding, you can find me exploring new tech trends 
                or contributing to community projects.
              </p>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/30"
              >
                Let's Talk
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-slate-600 dark:border-slate-500 bg-slate-800 dark:bg-slate-700 text-white rounded-lg font-medium hover:border-blue-500 dark:hover:border-blue-500 hover:bg-slate-700 dark:hover:bg-slate-600 transition-all transform hover:-translate-y-1"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
