import { Code2, Palette, Rocket, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand & Identity',
    desc: 'Positioning, naming, visual identity systems, and design language that resonates.'
  },
  {
    icon: Code2,
    title: 'Web & Product',
    desc: 'From landing pages to complex SaaS — React, Next.js, FastAPI, and cloud infrastructure.'
  },
  {
    icon: Rocket,
    title: 'Growth & Performance',
    desc: 'Analytics, experimentation, and speed improvements that move metrics.'
  },
  {
    icon: Sparkles,
    title: 'AI & Automation',
    desc: 'Strategy and implementation to weave AI into your product and workflows.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What we do</h2>
          <p className="text-white/60 max-w-xl">A senior team across strategy, design, and engineering. We love complex problems and clean execution.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-white/20 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
