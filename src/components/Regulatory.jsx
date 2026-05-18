import { motion } from 'framer-motion'
import { ShieldCheck, FileText, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Regulatory() {
  const { t } = useLanguage()
  const r = t.regulatory

  return (
    <section id="regulatory" className="py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">{r.sectionLabel}</span>
          <h2 className="section-title text-brand-navy mt-1">{r.title}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">{r.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left: regulatory properties */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {r.properties.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-gold/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                    <ShieldCheck size={15} className="text-brand-gold" />
                  </div>
                  <h3 className="text-brand-navy font-semibold text-sm">{prop.title}</h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{prop.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: NDA info panel */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Product image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/retro_bustina.jpg"
                alt="Proamina® product"
                className="w-full h-52 object-cover"
              />
            </div>

            {/* NDA info box */}
            <div className="bg-brand-navy rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center">
                  <FileText size={18} className="text-brand-gold" />
                </div>
                <h3 className="text-white font-bold">Technical Documentation</h3>
              </div>
              <p className="text-white/65 text-sm leading-relaxed mb-6">{r.ndaNote}</p>
              <a href="#contact" className="btn-primary text-sm w-full justify-center">
                {r.ndaButton}
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Compliance note */}
            <div className="border border-brand-teal/20 rounded-2xl p-5 bg-brand-teal/5">
              <p className="text-slate-600 text-xs leading-relaxed">
                <strong className="text-brand-navy">Important:</strong> Final product regulatory compliance and label claims remain the responsibility of the manufacturer. Proamina® is provided as a B2B ingredient for technical evaluation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
