import { motion } from 'framer-motion'
import {
  Shield, Tag, Leaf, CheckCircle, Star, ShieldCheck
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const iconMap = { Shield, Tag, Leaf, CheckCircle, Star, ShieldCheck }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function WhatIsProamina() {
  const { t } = useLanguage()
  const w = t.whatIs

  return (
    <section id="what-is" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top label + heading */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div {...fadeUp(0)}>
            <span className="section-label">{w.sectionLabel}</span>
            <h2 className="section-title text-brand-navy mt-1">{w.title}</h2>
            <p className="mt-4 text-brand-teal font-medium text-base">{w.subtitle}</p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="space-y-5">
            <p className="text-slate-600 leading-relaxed">{w.description}</p>
            <p className="text-slate-500 leading-relaxed">{w.description2}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="btn-primary text-sm px-6 py-3">
                Request Info
              </a>
              <a href="#benefits" className="btn-ghost text-sm px-6 py-3">
                Key Benefits
              </a>
            </div>
          </motion.div>
        </div>

        {/* Split layout: image left, properties right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Product image column */}
          <motion.div
            {...fadeUp(0.15)}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Background blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-brand-teal/10 rounded-3xl blur-2xl scale-110" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl">
                <img
                  src="/assets/proamina-powder-marble.jpg"
                  alt="Proamina® protein ingredient"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card px-5 py-4">
                    <div className="text-white font-bold text-lg">Proamina®</div>
                    <div className="text-white/70 text-sm mt-0.5">Patented Amino Acid-Based Protein Ingredient</div>
                    <div className="flex items-center gap-2 mt-3">
                      <img src="/assets/Logo.png" alt="Italprotein" className="w-6 h-6 rounded-md object-cover opacity-80" />
                      <span className="text-brand-gold text-xs font-medium">Distributed by Italprotein</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Properties grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {w.properties.map((prop, i) => {
              const Icon = iconMap[prop.icon] || Shield
              return (
                <motion.div
                  key={i}
                  {...fadeUp(0.1 + i * 0.07)}
                  className="group p-5 rounded-2xl border border-slate-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-amber-50/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold/15 to-brand-teal/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={18} className="text-brand-gold" />
                  </div>
                  <h3 className="font-semibold text-brand-navy text-sm mb-1">{prop.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{prop.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
