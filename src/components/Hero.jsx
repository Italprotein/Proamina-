import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-navy">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-powder-gold.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-blue-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,184,154,0.06),transparent_60%)]" />
      </div>

      {/* Floating grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text content */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p {...fadeUp(0.15)} className="text-brand-teal text-sm font-medium mb-4 tracking-wide">
              {t.hero.eyebrow}
            </motion.p>

            {/* Heading */}
            <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              {t.hero.title}
              <br />
              <span className="gradient-text">{t.hero.titleLine2}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.3)} className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                {t.hero.cta1}
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-outline">
                <Play size={14} className="fill-current" />
                {t.hero.cta2}
              </a>
              <a href="#applications" className="btn-ghost">
                {t.hero.cta3}
              </a>
            </motion.div>
          </div>

          {/* Right — product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center relative min-h-[480px]"
          >
            {/* Glow ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-brand-gold/5 blur-3xl" />
            <div className="absolute w-[320px] h-[320px] rounded-full border border-brand-gold/10" />
            <div className="absolute w-[420px] h-[420px] rounded-full border border-white/5" />

            {/* Proamina product image */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 flex items-center justify-center"
            >
              <img
                src="/assets/Proamina-removebg-preview.png"
                alt="Proamina® Product"
                className="max-w-[420px] w-full h-auto max-h-[480px] object-contain drop-shadow-[0_24px_64px_rgba(201,162,39,0.3)]"
                style={{ imageRendering: 'auto' }}
              />
            </motion.div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-8 -right-4 glass-card px-4 py-3 text-white text-xs"
            >
              <div className="text-brand-gold font-bold text-sm">Patented</div>
              <div className="text-white/60">Formula Protection</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-12 -left-4 glass-card px-4 py-3 text-white text-xs"
            >
              <div className="text-brand-teal font-bold text-sm">Non-GMO · Vegan</div>
              <div className="text-white/60">Clean Origin</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {t.hero.stats.map((stat, i) => (
            <div key={i} className="border-l-2 border-brand-gold/30 pl-4">
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-white/50 text-xs mt-0.5 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#what-is"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  )
}
