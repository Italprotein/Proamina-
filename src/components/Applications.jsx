import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Applications() {
  const { t } = useLanguage()
  const a = t.applications
  const [active, setActive] = useState(null)

  return (
    <section id="applications" className="py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">{a.sectionLabel}</span>
          <h2 className="section-title text-brand-navy mt-1">{a.title}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">{a.subtitle}</p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {a.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* Background image */}
              <div className="relative h-52">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />

                {/* Emoji badge */}
                <div className="absolute top-4 left-4 text-3xl">{item.emoji}</div>

                {/* Category label */}
                <div className="absolute top-4 right-4 bg-brand-gold/90 text-brand-navy text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {item.category}
                </div>

                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-base">{item.title}</h3>
                </div>
              </div>

              {/* Content below image */}
              <div className="bg-white p-4">
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>

                {/* Opportunity tag */}
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-slate-100"
                    >
                      <div className="flex items-start gap-2">
                        <ArrowRight size={12} className="text-brand-gold mt-0.5 flex-shrink-0" />
                        <p className="text-brand-gold text-xs font-medium">{item.opportunity}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  className="mt-3 text-brand-gold text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200"
                >
                  {active === i ? 'Less' : 'Opportunity'}
                  <ArrowRight size={11} className={`transition-transform duration-200 ${active === i ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom product image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-4"
        >
          {[
            '/assets/barattolo.png',
            '/assets/bustina-cappuccino.jpg',
            '/assets/sacchetti-proteine-logo.png',
            '/assets/Sacco_pasticceria.png',
            '/assets/fronte_bustina.jpg',
            '/assets/espresso_cuore.jpg',
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="rounded-xl overflow-hidden border border-slate-200 aspect-square"
            >
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
