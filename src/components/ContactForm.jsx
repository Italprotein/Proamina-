import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, Video, CheckCircle, Globe, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const WEBSITES = [
  { label: 'italprotein.com', href: 'https://italprotein.com/' },
  { label: 'nonelozucchero.it', href: 'https://www.nonelozucchero.it/' },
  { label: 'nh2tech.com', href: 'https://nh2tech.com/' },
]

const PHONES = [
  { number: '+39 339 801 7462', label: '🇮🇹 Italy' },
  { number: '051 594 1080', label: '🇮🇹 Italy (office)' },
  { number: '+39 393 368 8309', label: '🌍 International' },
]

export default function ContactForm() {
  const { t } = useLanguage()
  const c = t.contact
  const f = c.form

  const [form, setForm] = useState({
    name: '', company: '', role: '', country: '', email: '', category: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const set = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-white/8 transition-all duration-200'
  const labelClass = 'block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide'

  return (
    <section id="contact" className="py-28 bg-brand-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.04),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label">{c.sectionLabel}</span>
          <h2 className="section-title text-white mt-1">{c.title}</h2>
          <p className="section-subtitle text-white/55 max-w-2xl mx-auto">{c.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Company card */}
            <div className="glass-card p-7">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-brand-gold/20">
                  <img src="/assets/Logo.png" alt="Italprotein" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-bold">Italprotein Srl</div>
                  <div className="text-brand-gold text-xs mt-0.5">{c.distributed}</div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Video call */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Video size={14} className="text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Book a Video Call</div>
                    <div className="text-white/50 text-xs mt-0.5">30-min intro with our team</div>
                  </div>
                </div>

                {/* Phone numbers */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={14} className="text-brand-teal" />
                  </div>
                  <div className="space-y-1.5">
                    {PHONES.map((p, i) => (
                      <div key={i}>
                        <a
                          href={`tel:${p.number.replace(/\s/g, '')}`}
                          className="text-white/80 text-sm hover:text-brand-gold transition-colors font-medium"
                        >
                          {p.number}
                        </a>
                        <span className="text-white/35 text-xs ml-2">{p.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our websites */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe size={14} className="text-violet-400" />
                  </div>
                  <div className="space-y-1.5">
                    {WEBSITES.map((site) => (
                      <div key={site.href}>
                        <a
                          href={site.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 text-sm hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                        >
                          {site.label}
                          <ExternalLink size={10} className="opacity-50" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Product visual */}
            <div className="rounded-2xl overflow-hidden relative">
              <img
                src="/assets/proamina-products.png"
                alt="Proamina® Products"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-bold text-sm">Proamina® Protein Ingredient</div>
                <div className="text-white/60 text-xs">Technical info available under mutual NDA</div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-teal/20 flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-brand-teal" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{f.success}</h3>
                <p className="text-white/55 text-sm">Our team will review your message and be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                {/* Row 1: Name + Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{f.name}</label>
                    <input required value={form.name} onChange={set('name')} placeholder={f.name} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{f.company}</label>
                    <input required value={form.company} onChange={set('company')} placeholder={f.company} className={inputClass} />
                  </div>
                </div>

                {/* Row 2: Role + Country */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{f.role}</label>
                    <input required value={form.role} onChange={set('role')} placeholder={f.role} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{f.country}</label>
                    <input required value={form.country} onChange={set('country')} placeholder={f.country} className={inputClass} />
                  </div>
                </div>

                {/* Row 3: Email + Category */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{f.email}</label>
                    <input required type="email" value={form.email} onChange={set('email')} placeholder={f.email} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{f.category}</label>
                    <select required value={form.category} onChange={set('category')} className={inputClass + ' cursor-pointer'}>
                      <option value="" disabled className="bg-brand-navy">{f.category}</option>
                      {f.categories.map((cat) => (
                        <option key={cat} value={cat} className="bg-brand-navy">{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>{f.message}</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    placeholder={f.messagePlaceholder}
                    className={inputClass + ' resize-none'}
                  />
                </div>

                {/* Privacy note */}
                <p className="text-white/30 text-xs">
                  By submitting this form, you agree to be contacted by Italprotein regarding Proamina®. Your information is used solely for B2B communication purposes.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-brand-navy/30 border-t-brand-navy rounded-full animate-spin" />
                      {f.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {f.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
