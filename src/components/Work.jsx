export default function Work() {
  const projects = [
    {
      tag: 'Fintech',
      title: 'Velocity Pay',
      desc: 'A new brand and a blazing fast web app for a startup handling millions in volume.',
      img: 'https://images.unsplash.com/photo-1551281044-8b55a0a1f7b0?q=80&w=1600&auto=format&fit=crop',
    },
    {
      tag: 'SaaS',
      title: 'Atlas Cloud',
      desc: 'Dashboard design system and product overhaul for a B2B platform.',
      img: 'https://images.unsplash.com/photo-1551281043-00e0643c45a9?q=80&w=1600&auto=format&fit=crop',
    },
    {
      tag: 'E‑commerce',
      title: 'NOVA',
      desc: 'Conversion-led storefront with a modular content system.',
      img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
    }
  ]

  return (
    <section id="work" className="relative bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected work</h2>
          <a href="#contact" className="text-sm text-white/70 hover:text-white">Work with us →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href="#contact" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={p.img} alt={p.title} className="h-56 w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs text-white/60">{p.tag}</p>
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-white/70 text-sm">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
