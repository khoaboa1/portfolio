'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'Email', value: 'ldkhoa03@email.com', href: 'mailto:ldkhoa03@email.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/khoa-le-507900317', href: 'https://www.linkedin.com/in/khoa-le-507900317/' },
  { label: 'GitHub', value: 'github.com/khoaboa1', href: 'https://github.com/khoaboa1' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0a0a0a] py-32 px-8 border-t border-[#27272a]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-[#a1a1aa] text-xs uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Connect
        </motion.p>
        <motion.h2
          className="text-[#fafafa] font-bold mb-16"
          style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div className="space-y-10">
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              Open to new opportunities, collaborations, or just a conversation. Reach out anytime.
            </p>
            <div>
              {links.map((item) => (
                <div
                  key={item.label}
                  className="border-t border-[#27272a] py-4 flex justify-between items-center"
                >
                  <span className="text-[#52525b] text-xs uppercase tracking-widest">{item.label}</span>
                  <a
                    href={item.href}
                    className="text-[#a1a1aa] text-sm hover:text-[#fafafa] transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
              <div className="border-t border-[#27272a]" />
            </div>
          </div>

          {/* Right: form */}
          <form
            action="mailto:your@email.com"
            method="post"
            encType="text/plain"
            className="space-y-5"
          >
            {[
              { label: 'Name', type: 'text', name: 'name', placeholder: 'Your name' },
              { label: 'Email', type: 'email', name: 'email', placeholder: 'your@email.com' },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-[#52525b] text-xs uppercase tracking-widest block mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border border-[#27272a] text-[#fafafa] text-sm px-4 py-3 focus:outline-none focus:border-[#52525b] placeholder-[#3f3f46] transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="text-[#52525b] text-xs uppercase tracking-widest block mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Your message..."
                className="w-full bg-transparent border border-[#27272a] text-[#fafafa] text-sm px-4 py-3 focus:outline-none focus:border-[#52525b] placeholder-[#3f3f46] resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#fafafa] text-[#0a0a0a] text-sm font-medium py-3 hover:bg-[#d4d4d8] transition-colors uppercase tracking-widest"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
