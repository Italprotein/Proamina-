import { motion } from 'framer-motion'
import { Check, Users, ShoppingBag, AlertCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function TargetClients() {
  const { t } = useLanguage()
  const tc = t.targetClients

  return (
    <section id="clients" className="py-28 bg-brand-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">{tc.sectionLabel}</span>
          <h2 className="section-title text-white mt-1">{tc.title}</h2>
          <p className="section-subtitle text-white/55 max-w-2xl mx-auto">{tc.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">

          {/* B2B Companies */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center">
                <Users size={18} className="text-brand-gold" />
              </div>
              <h3 className="text-white font-bold text-lg">{tc.b2bTitle}</h3>
            </div>
            <ul className="space-y-3">
              {tc.b2bClients.map((client, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <Check size={14} className="text-brand-teal mt-0.5 flex-shrink-0" />
                  <span className="text-white/75 text-sm">{client}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Consumer segments + Disclaimer */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                  <ShoppingBag size={18} className="text-brand-teal" />
                </div>
                <h3 className="text-white font-bold text-lg">{tc.consumerTitle}</h3>
              </div>
              <ul className="space-y-3">
                {tc.consumerMarkets.map((market, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check size={14} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/75 text-sm">{market}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Disclaimer card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border border-brand-teal/20 bg-brand-teal/5 rounded-2xl p-6"
            >
              <div className="flex gap-3">
                <AlertCircle size={16} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <p className="text-white/60 text-xs leading-relaxed">{tc.disclaimer}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="#contact" className="btn-primary">
            Request Proamina® Information
          </a>
        </motion.div>
      </div>
    </section>
  )
}
