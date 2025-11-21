export default function CTA() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Have a brief? Let’s build something remarkable</h2>
          <p className="mt-4 text-white/70">Tell us about your goals and timeline. We’ll come back with sharp ideas and a clear plan.</p>

          <form className="mt-8 grid gap-3 text-left">
            <input type="text" placeholder="Your name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input type="email" placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <textarea rows="4" placeholder="Tell us about your project" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black hover:bg-white/90">Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
