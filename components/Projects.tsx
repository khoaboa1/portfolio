'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Project Name 1',
    description: 'Short description of the project. What problem it solves, what you built, and what impact it had.',
    tech: ['Tech 1', 'Tech 2', 'Tech 3'],
    link: '#',
  },
  {
    name: 'Project Name 2',
    description: 'Short description of the project. What problem it solves, what you built, and what impact it had.',
    tech: ['Tech 1', 'Tech 2', 'Tech 3'],
    link: '#',
  },
  {
    name: 'Project Name 3',
    description: 'Short description of the project. What problem it solves, what you built, and what impact it had.',
    tech: ['Tech 1', 'Tech 2', 'Tech 3'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-32 px-8 border-t border-[#27272a]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-[#a1a1aa] text-xs uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Work
        </motion.p>
        <motion.h2
          className="text-[#fafafa] font-bold mb-16"
          style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="space-y-px">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-8 border border-[#27272a] p-8 hover:border-[#52525b] hover:bg-[#111111] transition-all block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[#3f3f46] text-xs font-mono">0{i + 1}</span>
                  <h3 className="text-[#fafafa] text-lg font-medium group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                </div>
                <p className="text-[#71717a] text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-[#27272a] text-[#52525b] text-xs px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-[#3f3f46] group-hover:text-[#fafafa] transition-colors text-lg mt-1 flex-shrink-0">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
