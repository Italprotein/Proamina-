import { motion } from 'framer-motion'
import {
  TrendingUp, Dumbbell, Heart, Leaf, Globe, Users
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const iconMap = { TrendingUp, Dumbbell, Heart, Leaf, Globe, Users }

const tagColors = [
  'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
]

export default function MarketOpportunity() {
  const { t } = useLanguage()
  const m = t.market

  return (
    <section id="market" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">{m.sectionLabel}</span>
          <h2 className="section-title text-brand-navy mt-1">{m.title}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">{m.subtitle}</p>
        </motion.div>

        {/* Trends grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {m.trends.map((trend, i) => {
            const Icon = iconMap[trend.icon] || TrendingUp
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass-card-light p-7 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-gold/5 to-transparent rounded-bl-full" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center mb-5 group-hover:bg-brand-gold transition-colors duration-300">
                  <Icon size={22} className="text-brand-gold group-hover:text-brand-navy transition-colors duration-300" />
                </div>

                {/* Tag */}
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-3 ${tagColors[i % tagColors.length]}`}>
                  {trend.tag}
                </span>

                <h3 className="text-brand-navy font-bold text-base mb-2">{trend.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{trend.desc}</p>

                {/* Asterisk note for placeholders */}
                <p className="text-slate-300 text-[10px] mt-3 italic">
                  * Market insight indicator — verify with current industry research
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Market image strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-3xl overflow-hidden relative h-64"
        >
          <img
            src="/assets/Proamina.png"
            alt="Proamina® protein ingredient"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  )
}
