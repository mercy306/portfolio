'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 'counselconnect',
    title: 'Online Counselling Platform',
    category: 'web',
    categoryLabel: 'Web Development',
    description:
      'A full-stack web counselling system connecting clients with professional counselors. Features real-time chat UI, appointment scheduling, user authentication, and MongoDB database storage.',
    tags: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: 'https://opengraph.githubassets.com/1/mercy306/counselconnect',
    github: 'https://github.com/mercy306/counselconnect',
    live: 'https://counselconnect-neon.vercel.app',
    featured: false,
  },
  {
    id: 'harar-guide',
    title: 'Harar Cultural Guide',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    description:
      "A comprehensive React Native mobile app showcasing Harar's rich UNESCO cultural heritage with interactive site navigation and audio guides.",
    tags: ['React Native', 'JavaScript', 'Audio Player', 'Mobile UI'],
    image: 'https://opengraph.githubassets.com/1/mercy306/harar-cultural-guide',
    github: 'https://github.com/mercy306/harar-cultural-guide',
    live: 'https://harar-cultural-guide.vercel.app',
    featured: false,
  },
  {
    id: 'faith-journey',
    title: 'FaithJourney Game',
    category: 'game',
    categoryLabel: 'Interactive Game',
    description:
      'An engaging interactive game application built with Kotlin and Android featuring uplifting gameplay mechanics, level progression, and intuitive user interfaces.',
    tags: ['Kotlin', 'Android SDK', 'Game Dev', 'Mobile UI'],
    image: '/faith-journey-game.jpg',
    github: 'https://github.com/mercy306/FaithJourney',
    live: null,
    featured: true,
  },
  {
    id: 'smart-folder-video-player',
    title: 'Smart Folder Video Player',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    description:
      'An intelligent Android media player application featuring smart folder organization, gesture controls, playlist management, and smooth video playback.',
    tags: ['Kotlin', 'Android SDK', 'ExoPlayer', 'Media UI'],
    image: 'https://opengraph.githubassets.com/1/mercy306/SmartFolderVideoPlayer',
    github: 'https://github.com/mercy306/SmartFolderVideoPlayer',
    live: null,
    featured: false,
  },
  {
    id: 'school-mgmt',
    title: 'School Management System',
    category: 'web',
    categoryLabel: 'Web Development',
    description:
      'A comprehensive web application for managing student records, grade tracking, course enrollments, and administrative workflows using PHP and MySQL.',
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    image: 'https://opengraph.githubassets.com/1/mercy306/school-management',
    github: 'https://github.com/mercy306/school-management',
    live: 'https://school-management-pro-rho.vercel.app',
    featured: false,
  },
];

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured) || projects[0];

  return (
    <section id="work" className="py-28 relative bg-[#0b0c10] overflow-hidden">
      {/* Ambient background orb */}
      <div className="glowing-orb glowing-orb-magenta w-[600px] h-[600px] top-1/4 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Featured Project Section - Side by Side Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-2">
                My
              </h2>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                Work
              </h2>
            </div>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-mono max-w-md">
              Architected and deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA. Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#161826] border border-[#23273e] text-slate-300 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Featured Project Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-6"
          >
            {/* Featured Project Label */}
            <div className="text-right w-full">
              <p className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-2">
                Featured Project
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {featuredProject.title}
              </h3>
            </div>

            {/* Phone Mockup Container */}
            <div className="relative w-full flex justify-center py-8" style={{ perspective: '3000px' }}>
              {/* Phone Frame - iPhone Pro Style - REALISTIC */}
              <motion.div
                className="relative"
                animate={{ rotateY: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                  width: '240px',
                  height: '480px',
                }}
              >
                {/* FRONT - Screen Side */}
                <div
                  className="absolute inset-0"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {/* Outer frame - Stainless steel */}
                  <div className="w-full h-full relative rounded-3xl overflow-hidden"
                    style={{
                      background: '#e5e5e5',
                      boxShadow: `
                        0 20px 50px rgba(0,0,0,0.4),
                        inset -1px 0 1px rgba(255,255,255,0.3),
                        inset 1px 0 1px rgba(0,0,0,0.3),
                        inset 0 1px 1px rgba(255,255,255,0.2),
                        inset 0 -1px 1px rgba(0,0,0,0.2)
                      `,
                      border: '0px',
                    }}
                  >
                    {/* Screen area with thin bezel */}
                    <div className="absolute inset-1.5 bg-black rounded-2xl overflow-hidden shadow-inner">
                      {/* Dynamic Island */}
                      <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 z-20 w-20 h-5 bg-black rounded-full" />
                      
                      {/* Screen Display - Image */}
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Subtle screen reflection */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* BACK - Camera Side */}
                <div
                  className="absolute inset-0"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {/* Back frame - Stainless steel matching front */}
                  <div className="w-full h-full relative rounded-3xl overflow-hidden"
                    style={{
                      background: '#d8d8d8',
                      boxShadow: `
                        0 20px 50px rgba(0,0,0,0.4),
                        inset -1px 0 1px rgba(255,255,255,0.3),
                        inset 1px 0 1px rgba(0,0,0,0.3),
                        inset 0 1px 1px rgba(255,255,255,0.2),
                        inset 0 -1px 1px rgba(0,0,0,0.2)
                      `,
                    }}
                  >
                    {/* Glass panel with subtle texture */}
                    <div className="absolute inset-1.5 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 rounded-2xl overflow-hidden">
                      {/* Glass reflection top-left */}
                      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl" />
                      
                      {/* Camera Island */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-32 rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                          boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1)'
                        }}
                      >
                        {/* Camera lenses - tight spacing like real iPhone */}
                        <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4">
                          {/* Main camera */}
                          <div className="w-8 h-8 rounded-full bg-black/90 relative" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.5)' }}>
                            <div className="absolute inset-1.5 rounded-full bg-gradient-to-b from-gray-900 to-black" />
                          </div>
                          
                          {/* Telephoto camera */}
                          <div className="w-6 h-6 rounded-full bg-black/90 relative" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.5)' }}>
                            <div className="absolute inset-1 rounded-full bg-gradient-to-b from-gray-900 to-black" />
                          </div>
                        </div>
                        
                        {/* Flash */}
                        <div className="absolute bottom-4 right-4 w-3 h-4 bg-yellow-50 rounded-sm" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.4)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center w-full pt-6">
              {featuredProject.live && (
                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                GitHub
                <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* All Other Projects Grid */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter((p) => !p.featured).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden group flex flex-col justify-between border border-[#23273e] bg-[#161826] hover:border-[#66D9ED] transition-all"
              >
                {/* Image Preview */}
                <div className="relative h-48 overflow-hidden bg-[#0b0c10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/40 to-transparent opacity-80" />
                  
                  {/* Links */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-[#161826]/90 border border-[#23273e] text-white hover:text-[#66D9ED] hover:border-[#66D9ED] transition-all"
                      aria-label="GitHub Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[#66D9ED] text-xs font-mono uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-2 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#23273e]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded text-xs bg-[#0b0c10] border border-[#23273e] text-slate-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
