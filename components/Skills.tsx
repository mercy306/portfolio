'use client';

import { motion } from 'framer-motion';
import { Code, Monitor, Smartphone, Wrench } from 'lucide-react';

export default function Skills() {
  const expertiseCards = [
    {
      title: 'Software',
      titleSub: 'Development',
      underlineClass: 'chonky-underline-magenta',
      icon: Code,
      iconColor: 'text-[#DF058D]',
      codeText:
        'Experienced in both functional and OOP languages: JavaScript, TypeScript, PHP, Python, Java, and C++.',
      skills: ['JavaScript', 'TypeScript', 'Node.js', 'PHP', 'Python', 'Java'],
    },
    {
      title: 'Frontend Dev',
      titleSub: 'React & Next.js',
      underlineClass: 'chonky-underline-blue',
      icon: Monitor,
      iconColor: 'text-[#2C49D8]',
      codeText:
        'Passionate about responsive UI/UX design, modern component architecture, React.js, Next.js, and Tailwind CSS.',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'REST APIs'],
    },
    {
      title: 'Mobile & DB',
      titleSub: 'React Native & SQL',
      underlineClass: 'chonky-underline-yellow',
      icon: Smartphone,
      iconColor: 'text-[#FF6B2B]',
      codeText:
        'Skilled in cross-platform mobile app development with React Native, and database design with MySQL, PostgreSQL, and MongoDB.',
      skills: ['React Native', 'MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'Tools & Systems',
      titleSub: 'DevOps & IT Admin',
      underlineClass: 'chonky-underline-violet',
      icon: Wrench,
      iconColor: 'text-[#9440E8]',
      codeText:
        'Experienced in version control, system administration, software testing, IT support, and MS Office tools.',
      skills: ['Git / GitHub', 'Vercel', 'System Admin', 'MS Excel / Office'],
    },
  ];

  return (
    <section id="expertise" className="py-28 relative bg-[#0b0c10] overflow-hidden">
      {/* Background glow */}
      <div className="glowing-orb glowing-orb-cyan w-[500px] h-[500px] top-10 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            My Expertise
          </h2>
          <div className="w-16 h-1 bg-[#66D9ED] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* 4-Column Code-Editor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="tamal-card p-6 rounded-xl relative flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-[#181a28] border border-[#272b42] group-hover:border-[#66D9ED] transition-colors">
                      <IconComponent className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-snug">
                        <span className={`${card.underlineClass} chonky-underline-hover`}>
                          {card.title}
                        </span>
                        <br />
                        <span className="text-slate-300 font-normal text-base">
                          {card.titleSub}
                        </span>
                      </h3>
                    </div>
                  </div>

                  {/* Code Editor Styled Description */}
                  <div className="code-editor-style pl-5 my-6 text-slate-300 font-mono-code text-xs leading-relaxed">
                    <div className="code-editor-tag-start">
                      <p className="text-slate-300">{card.codeText}</p>
                    </div>
                    <div className="code-editor-tag-end" />
                  </div>
                </div>

                {/* Tech Pill Tags */}
                <div className="pt-4 border-t border-[#181b2c] flex flex-wrap gap-1.5">
                  {card.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-[#161826] border border-[#23273e] text-slate-400 font-mono-code text-[11px] hover:text-[#66D9ED] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
