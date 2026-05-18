import { motion } from 'framer-motion'
import {
  TrendingDown, Sparkles, Zap, Award, Leaf, Smile, LayoutGrid, Target
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const iconMap = { TrendingDown, Sparkles, Zap, Award, Leaf, Smile, LayoutGrid, Target }

const gradients = [
  'from-blue-500 to-cyan-500',
  'from-amber-400 to-yellow-500',
  'from-violet-500 to-purple-600',
  'from-emerald-400 to-teal-500',
  'from-green-400 to-emerald-500',
  'from-rose-400 to-pink-500',
  'from-orange-400 to-amber-500',
  'from-sky-400 to-blue-500',
]

export default function Benefits() {
  const { t } = useLanguage()
  const b = t.benefits

  return (
    <section id="benefits" className="py-28 bg-brand-navy relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gold/4 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-teal/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">{b.sectionLabel}</span>
          <h2 className="section-title text-white mt-1">{b.title}</h2>
          <p className="section-subtitle text-white/55 max-w-2xl mx-auto">{b.subtitle}</p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {b.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap
            const gradient = gradients[i % gradients.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group glass-card p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon size={20} className="text-white" />
                </div>

                {/* Index number */}
                <div className="text-white/10 text-5xl font-bold absolute top-4 right-4 select-none group-hover:text-white/5 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3 className="text-white font-semibold text-sm leading-snug mb-2">{item.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-14 text-center"
        >
          <a href="#contact" className="btn-primary">
            Request Technical Information
          </a>
        </motion.div>
      </div>
    </section>
  )
}
