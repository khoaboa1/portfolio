'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'YTChatbox',
    description: 'A Chrome extension that lets users ask natural language questions about any YouTube video. Extracts the video transcript and sends it to an AI backend to generate context-aware answers via a messenger-style chat interface.',
    tech: ['JavaScript', 'Python', 'Flask', 'OpenAI API', 'Chrome Extension'],
    link: 'https://github.com/khoaboa1/YTChatbox',
  },
  {
    name: 'HuffmanCode',
    description: 'A C++ implementation of the Huffman coding algorithm for lossless data compression. Builds a frequency map from input text, constructs a min-heap priority queue, and generates an optimal binary tree to encode data with reduced memory usage.',
    tech: ['C++', 'Data Structures', 'Algorithms'],
    link: 'https://github.com/khoaboa1/HuffmanCode',
  },
  {
    name: 'NotationConverter',
    description: 'A C++ program that converts mathematical expressions between infix, prefix, and postfix notations. Implements a custom doubly linked list data structure to handle the conversion logic.',
    tech: ['C++', 'Doubly Linked List', 'Data Structures'],
    link: 'https://github.com/khoaboa1/NotationConverter',
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
