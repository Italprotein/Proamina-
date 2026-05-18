import { motion } from 'framer-motion'
import { Linkedin, Instagram, Twitter, ExternalLink, ChevronUp, Phone, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const LANGS = ['en', 'it', 'fr', 'ar']

const WEBSITES = [
  { label: 'italprotein.com', href: 'https://italprotein.com/', desc: 'Italprotein Srl' },
  { label: 'nonelozucchero.it', href: 'https://www.nonelozucchero.it/', desc: 'None lo Zucchero' },
  { label: 'nh2tech.com', href: 'https://nh2tech.com/', desc: 'NH2 Technology' },
]

const PHONES = [
  { number: '+39 339 801 7462', label: 'Italy', flag: '🇮🇹' },
  { number: '051 594 1080', label: 'Italy (office)', flag: '🇮🇹' },
  { number: '+39 393 368 8309', label: 'International', flag: '🌍' },
]

export default function Footer() {
  const { language, setLanguage, t } = useLanguage()
  const ft = t.footer

  return (
    <footer className="bg-[#060d1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-gold/20 bg-white/5 flex items-center justify-center">
                <img src="/assets/Logo.png" alt="Italprotein" className="w-full h-full object-contain p-0.5" />
              </div>
              <div>
                <div className="text-white font-bold">Proamina®</div>
                <div className="text-brand-gold/60 text-xs">by {ft.company}</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">{ft.tagline}</p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5">
              {ft.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-brand-gold transition-colors duration-200 flex items-center gap-1.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Websites & Phone */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Our Websites</h3>
            <ul className="space-y-3 mb-7">
              {WEBSITES.map((site) => (
                <li key={site.href}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2"
                  >
                    <Globe size={13} className="text-brand-teal mt-0.5 flex-shrink-0 group-hover:text-brand-gold transition-colors" />
                    <div>
                      <div className="text-white/80 text-sm group-hover:text-brand-gold transition-colors leading-none">
                        {site.label}
                        <ExternalLink size={10} className="inline ml-1 opacity-50" />
                      </div>
                      <div className="text-white/35 text-xs mt-0.5">{site.desc}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2.5">
              {PHONES.map((p, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-base leading-none">{p.flag}</span>
                  <div>
                    <a
                      href={`tel:${p.number.replace(/\s/g, '')}`}
                      className="text-white/70 text-sm hover:text-brand-gold transition-colors font-medium"
                    >
                      {p.number}
                    </a>
                    <div className="text-white/30 text-[10px]">{p.label}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Language + CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Language</h3>
            <div className="space-y-2 mb-6">
              {LANGS.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                    language === lang ? 'text-brand-gold font-semibold' : 'text-white/50 hover:text-white'
                  }`}
                >
                  <span>{translations[lang].meta.flag}</span>
                  <span>{translations[lang].meta.name}</span>
                </button>
              ))}
            </div>
            <a href="#contact" className="btn-primary text-xs px-5 py-2.5 inline-flex">
              Request Info
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs text-center md:text-left max-w-2xl leading-relaxed">
              {ft.disclaimer}
            </p>
            <div className="flex items-center gap-4 flex-shrink-0">
              <span className="text-white/25 text-xs">{ft.copyright}</span>
              <a
                href="#"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all"
              >
                <ChevronUp size={14} />
              </a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-brand-gold/40 text-xs">{ft.distributed}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
