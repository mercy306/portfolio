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
            <div className="relative w-full flex justify-center py-8 perspective">
              {/* Phone Frame */}
              <motion.div
                className="relative w-full max-w-xs"
                animate={{ rotateY: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Outer Phone Bezel - Dark gray aluminum frame */}
                <div className="relative bg-gradient-to-b from-gray-700 to-gray-800 rounded-3xl p-3 shadow-2xl border border-gray-600"
                  style={{
                    boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Screen bezels/rounded corners */}
                  <div className="bg-black rounded-3xl overflow-hidden border-8 border-black">
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-40 h-7 bg-black rounded-b-3xl" />
                    
                    {/* Screen content */}
                    <div className="bg-white rounded-2xl overflow-hidden relative w-full">
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="w-full h-auto object-cover"
                        style={{ minHeight: '400px' }}
                      />
                    </div>
                  </div>

                  {/* Side buttons */}
                  <div className="absolute right-0 top-24 w-1 h-16 bg-gray-600 rounded-l" />
                  <div className="absolute right-0 top-44 w-1 h-12 bg-gray-600 rounded-l" />

                  {/* Bottom speaker/bezel */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-60" />
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
