'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 'codebuddy',
    title: 'CodeBuddy - AI Coding Tutor Bot',
    category: 'ai',
    categoryLabel: 'AI & Bot Development',
    description:
      'A 24/7 bilingual (English & Amharic) interactive programming tutor bot deployed on the cloud. Features a sandboxed code execution engine, AST parsing, typo-tolerant verification, and conversational lessons across Python, JavaScript, HTML, CSS, SQL, and C#.',
    tags: ['Python', 'aiogram', 'Telegram Bot API', 'Docker', 'Render', 'SQLite'],
    image: '/codebuddy.png',
    github: 'https://github.com/mercy306/codebuddy',
    live: 'https://t.me/CodeBuddyLearningBot',
    featured: true,
  },
  {
    id: 'shadow-quest',
    title: 'Shadow Quest: Harar Jugol 3D',
    category: 'game',
    categoryLabel: '3D Real-World City & Action RPG',
    description:
      'A photorealistic 3D cultural reconstruction and action RPG set in Ethiopia\'s UNESCO fortified city of Harar Jugol. Built with Three.js, featuring authentic two-tone cobalt blue architecture, intimate cobblestone alleys, Shoa Gate, live street atmosphere, real-time combat, dynamic weather, and 2-player online co-op.',
    tags: ['Three.js', 'Harar Jugol 3D', 'JavaScript', 'PBR & Bloom', 'WebSockets', 'Vite'],
    image: '/shadow-quest.png',
    github: 'https://github.com/mercy306/shadow-quest',
    live: 'https://mercy306.github.io/shadow-quest/',
    featured: true,
  },
  {
    id: 'counselconnect',
    title: 'Online Counselling Platform',
    category: 'web',
    categoryLabel: 'Web Development',
    description:
      'A full-stack web counselling system connecting clients with professional counselors. Features real-time chat UI, appointment scheduling, user authentication, and MongoDB database storage.',
    tags: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/counselconnect.png',
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
    image: '/harar-guide.png',
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
    image: '/smart-folder-video-player.jpg',
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
    image: '/school-management.png',
    github: 'https://github.com/mercy306/school-management',
    live: 'https://school-management-pro-rho.vercel.app',
    featured: false,
  },
  {
    id: 'small-business-management-system',
    title: 'Small Business Management System',
    category: 'web',
    categoryLabel: 'Web Development',
    description:
      'A full-stack business management and point-of-sale platform with multi-tenant accounts, role-based access control, inventory tracking, sales management, and financial reporting.',
    tags: ['FastAPI', 'React', 'TypeScript', 'Tailwind CSS', 'SQLite'],
    image: '/school-management.png',
    github: 'https://github.com/mercy306/small-business-management-system',
    live: 'https://small-business-management-system.vercel.app',
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
        {/* Projects Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">My Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
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
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#66D9ED] transition-colors inline-flex items-center gap-1.5"
                        >
                          {project.title}
                          <ExternalLink className="w-4 h-4 opacity-70" />
                        </a>
                      ) : (
                        project.title
                      )}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    {project.live && (
                      <div className="mb-3">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/10 text-[#66D9ED] border border-[#66D9ED]/30 hover:bg-[#66D9ED] hover:text-[#0b0c10] transition-all"
                        >
                          {project.id === 'codebuddy' ? '🤖 Open in Telegram' : '🚀 Open Live Demo'}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
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
