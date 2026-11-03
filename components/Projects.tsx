'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, BookOpen, X, RotateCcw } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string | null;
  embedUrl?: string;
  featured: boolean;
}

const projects: ProjectItem[] = [
  {
    id: 'sixty-six-bible',
    title: 'The Holy Bible (መጽሐፍ ቅዱስ)',
    category: 'web',
    categoryLabel: 'Holy Bible & Study PWA',
    description:
      'A full-featured bilingual (Amharic & English) Holy Bible progressive web app with a luxury dark glass UI, full-text scripture search, instant reference navigation, parallel commentaries, daily devotionals, offline reading support, and an interactive Amharic & English on-screen keyboard.',
    tags: ['React', 'TypeScript', 'Vite', 'PWA / Offline', 'Bilingual UI', 'Tailwind CSS'],
    image: '/holy-bible.png',
    github: 'https://github.com/mercy306/Bible-',
    live: 'http://localhost:3001',
    embedUrl: 'http://localhost:3001',
    featured: true,
  },
  {
    id: 'museum-of-you',
    title: 'The Museum of You - 3D Interactive Birthday Villa',
    category: 'web',
    categoryLabel: '3D WebGL & Interactive Experience',
    description:
      'An immersive 3D architectural birthday retrospective and celebration villa. Built with Next.js, Three.js, React Three Fiber, and Web Audio API. Features first-person exploration of a modern luxury glass villa, realistic botanicals, memory galleries, interactive candle blowing with confetti fireworks, an acoustic music box synthesizer, and a digital friend wishes guestbook.',
    tags: ['Next.js', 'Three.js', 'React Three Fiber', 'Web Audio API', 'Tailwind CSS', 'TypeScript'],
    image: '/museum-of-you.png',
    github: 'https://github.com/mercy306/museum-of-you',
    live: 'https://mercy306.github.io/museum-of-you/',
    featured: true,
  },
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
      'A cinematic 3D cultural reconstruction and action RPG set in Ethiopia\'s UNESCO fortified city of Harar Jugol. Built with Three.js, featuring a CGI cinematic intro fly-through, photo-accurate Shoa Gate (የሐረር በር), intimate cobblestone alleys, live street atmosphere, real-time combat, dynamic weather, and 2-player online co-op.',
    tags: ['Three.js', 'CGI Cinematic', 'Harar Jugol 3D', 'PBR & Bloom', 'WebSockets', 'Vite'],
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
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [iframeKey, setIframeKey] = useState<number>(0);

  const getResolvedUrl = (url?: string | null) => {
    if (!url) return '';
    if (typeof window !== 'undefined' && url.includes('localhost:3001')) {
      return url.replace('localhost', window.location.hostname);
    }
    return url;
  };

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

                  {/* Hover Overlay for In-Portfolio Open */}
                  {project.embedUrl && (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveModalProject(project);
                        setIframeKey((k) => k + 1);
                      }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#0b0c10]/75 backdrop-blur-[2px] transition-opacity duration-300 z-10 cursor-pointer"
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161826] border border-[#66D9ED] text-[#66D9ED] text-xs font-semibold shadow-lg shadow-[#66D9ED]/20 hover:scale-105 transition-transform">
                        <BookOpen className="w-4 h-4" />
                        Open Inside Portfolio
                      </span>
                    </button>
                  )}
                  
                  {/* Action Link Icons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                    {project.embedUrl && (
                      <button
                        type="button"
                        onClick={() => {
                          setActiveModalProject(project);
                          setIframeKey((k) => k + 1);
                        }}
                        className="p-2.5 rounded-full bg-[#66D9ED]/15 border border-[#66D9ED]/40 text-[#66D9ED] hover:bg-[#66D9ED] hover:text-[#0b0c10] transition-all cursor-pointer shadow-md"
                        aria-label="Open Inside Portfolio"
                        title="Open Inside Portfolio"
                      >
                        <BookOpen className="w-4 h-4" />
                      </button>
                    )}
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
                      {project.embedUrl ? (
                        <button
                          type="button"
                          onClick={() => {
                            setActiveModalProject(project);
                            setIframeKey((k) => k + 1);
                          }}
                          className="hover:text-[#66D9ED] transition-colors inline-flex items-center gap-1.5 text-left font-bold cursor-pointer"
                        >
                          {project.title}
                          <BookOpen className="w-4 h-4 opacity-70" />
                        </button>
                      ) : project.live ? (
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

                    {/* Button Row */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {project.embedUrl && (
                        <button
                          type="button"
                          onClick={() => {
                            setActiveModalProject(project);
                            setIframeKey((k) => k + 1);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/10 text-[#66D9ED] border border-[#66D9ED]/40 hover:bg-[#66D9ED] hover:text-[#0b0c10] transition-all cursor-pointer shadow-sm"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>📖 Open Inside Portfolio</span>
                        </button>
                      )}
                      {project.live && (
                        <a
                          href={getResolvedUrl(project.live)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/10 text-[#66D9ED] border border-[#66D9ED]/30 hover:bg-[#66D9ED] hover:text-[#0b0c10] transition-all"
                        >
                          {project.id === 'codebuddy' ? '🤖 Open in Telegram' : '🚀 Open Live Tab'}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
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

      {/* In-Portfolio Live Modal Reader */}
      {activeModalProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveModalProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-6xl h-[92vh] bg-[#0E1013] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#141720]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#66D9ED]" />
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {activeModalProject.title}
                  </h3>
                </div>
                <span className="hidden sm:inline-block text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-[#66D9ED] border border-[#66D9ED]/30 font-mono">
                  Live Interactive Reader
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIframeKey((k) => k + 1)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                  title="Reload App"
                  aria-label="Reload App"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <a
                  href={getResolvedUrl(activeModalProject.embedUrl || activeModalProject.live)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-[#66D9ED] hover:bg-white/5 rounded-lg transition-colors inline-flex items-center gap-1 text-xs"
                  title="Open in Full Tab"
                >
                  <span className="hidden md:inline">Open in Tab</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer ml-1"
                  aria-label="Close"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Iframe Content */}
            <div className="flex-1 w-full h-full bg-[#0E1013] relative">
              <iframe
                key={iframeKey}
                src={getResolvedUrl(activeModalProject.embedUrl || activeModalProject.live)}
                className="w-full h-full border-0"
                title={activeModalProject.title}
                allow="clipboard-write; fullscreen"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
