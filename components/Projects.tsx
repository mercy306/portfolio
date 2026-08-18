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
    image: '/faith-journey-icon.png',
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
            <div className="relative w-full flex justify-center py-8">
              {/* Phone Frame */}
              <div className="relative w-full max-w-xs">
                {/* Outer Phone Bezel */}
                <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl transform perspective">
                  {/* Screen */}
                  <div className="bg-white rounded-3xl overflow-hidden">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Phone Details */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl" />
                </div>
              </div>
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
      </div>
    </section>
  );
}
