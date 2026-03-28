'use client'

import { motion } from 'framer-motion'

const skills: Record<string, string[]> = {
  Languages: ['C++', 'JavaScript', 'C#'],
  Frontend: ['React', 'Angular'],
  'Backend & Data': ['Node.js', 'Python', 'SQL'],
  'DevOps & Other': ['Docker', 'Git'],
}

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-32 px-8 border-t border-[#27272a]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-[#a1a1aa] text-xs uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About
        </motion.p>
        <motion.h2
          className="text-[#fafafa] font-bold mb-16"
          style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: bio + education */}
          <div className="space-y-10">
            <div>
              <p className="text-[#52525b] text-xs uppercase tracking-widest mb-3">Bio</p>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">
                I'm a Computer Science graduate student at Tulane University with a background in full-stack development and a growing focus on research at the intersection of software and applied science. I enjoy building tools that are both technically sound and genuinely useful. Outside of work, you'll find me in the kitchen experimenting with new recipes, or out on a trail hiking.
              </p>
            </div>

            <div>
              <p className="text-[#52525b] text-xs uppercase tracking-widest mb-5">Education</p>
              <div className="space-y-5">
                <div className="border-l border-[#27272a] pl-5">
                  <p className="text-[#fafafa] text-sm font-medium">Bachelor, Computer Science</p>
                  <p className="text-[#a1a1aa] text-xs mt-1">University of South Florida — 2025</p>
                  <p className="text-[#52525b] text-xs mt-0.5">GPA: 3.8</p>
                </div>
                <div className="border-l border-[#27272a] pl-5">
                  <p className="text-[#fafafa] text-sm font-medium">Master, Computer Science</p>
                  <p className="text-[#a1a1aa] text-xs mt-1">Tulane University — May 2026 (Currently)</p>
                  <p className="text-[#52525b] text-xs mt-0.5">GPA: X.XX</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#52525b] text-xs uppercase tracking-widest mb-2">Location</p>
              <p className="text-[#a1a1aa] text-sm">New Orleans, Louisiana</p>
            </div>
          </div>

          {/* Right: skills */}
          <div>
            <p className="text-[#52525b] text-xs uppercase tracking-widest mb-6">Skills</p>
            <div className="space-y-7">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-[#3f3f46] text-xs uppercase tracking-widest mb-3">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[#27272a] text-[#a1a1aa] text-xs px-3 py-1 hover:border-[#52525b] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
