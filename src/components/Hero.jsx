import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] grid place-items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Full-service design & development agency
        </p>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          We craft bold digital brands and high‑impact products
        </h1>
        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          Strategy, identity, web, and apps. We partner with ambitious teams to design beautiful experiences and ship fast, scalable software.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition-colors">Start a project</a>
          <a href="#work" className="pointer-events-auto inline-flex items-center rounded-lg bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition-colors">See our work</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
