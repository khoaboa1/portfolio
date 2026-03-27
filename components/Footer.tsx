export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#27272a] px-8 py-6 flex items-center justify-between">
      <span className="text-[#3f3f46] text-xs uppercase tracking-widest">Last Name First Name</span>
      <span className="text-[#3f3f46] text-xs">© {new Date().getFullYear()}</span>
    </footer>
  )
}
