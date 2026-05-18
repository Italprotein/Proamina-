import { motion } from 'framer-motion'
import { Video, FileText, BookOpen, FlaskConical, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const iconMap = { Video, FileText, BookOpen, FlaskConical }

export default function B2BProcess() {
  const { t } = useLanguage()
  const p = t.process

  return (
    <section id="process" className="py-28 bg-brand-navy relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">{p.sectionLabel}</span>
          <h2 className="section-title text-white mt-1">{p.title}</h2>
          <p className="section-subtitle text-white/55 max-w-2xl mx-auto">{p.subtitle}</p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-gold/30 via-brand-gold/60 to-brand-gold/30" />

          {p.steps.map((step, i) => {
            const Icon = iconMap[step.icon] || Video
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Step number + icon */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div className="relative w-24 h-24 rounded-full bg-brand-navy border-2 border-brand-gold/30 flex flex-col items-center justify-center group-hover:border-brand-gold transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(201,162,39,0.2)]">
                    <Icon size={24} className="text-brand-gold mb-1" />
                    <span className="text-brand-gold/60 text-[10px] font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-white font-bold text-base mb-3">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow between steps */}
                {i < p.steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 -right-3 z-20 w-6 h-6 items-center justify-center">
                    <ArrowRight size={14} className="text-brand-gold/40" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Start with a Video Call
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
