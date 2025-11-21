import { Menu, Rocket, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="inline-flex items-center gap-2 group">
              <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 p-[1px]">
                <div className="h-full w-full rounded-[10px] bg-black grid place-content-center">
                  <Sparkles className="h-5 w-5 text-cyan-300 group-hover:rotate-6 transition-transform" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">Flames Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
              <a href="#work" className="text-white/70 hover:text-white transition-colors">Work</a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
                <Rocket className="h-4 w-4" />
                <span>Start a project</span>
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3">
              <a href="#services" className="block text-white/80">Services</a>
              <a href="#work" className="block text-white/80">Work</a>
              <a href="#about" className="block text-white/80">About</a>
              <a href="#contact" className="block text-white/80">Contact</a>
              <a href="#contact" className="block mt-2 rounded-lg bg-white/10 text-white px-4 py-2 text-center">Start a project</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
