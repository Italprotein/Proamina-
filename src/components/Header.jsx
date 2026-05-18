import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const LANGS = ['en', 'it', 'fr', 'ar']

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.whatIs, href: '#what-is' },
    { label: t.nav.benefits, href: '#benefits' },
    { label: t.nav.applications, href: '#applications' },
    { label: t.nav.clients, href: '#clients' },
    { label: t.nav.market, href: '#market' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-navy/95 backdrop-blur-xl shadow-2xl border-b border-white/5'
          : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300">
              <img src="/assets/Logo Officiale.png" alt="Italprotein" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm leading-none">Proamina®</div>
              <div className="text-brand-gold/70 text-[10px] font-medium tracking-wide mt-0.5">by Italprotein</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                <span>{translations[language].meta.flag}</span>
                <span className="hidden sm:inline">{translations[language].meta.name}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-40 bg-brand-navy border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  >
                    {LANGS.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setLangOpen(false) }}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-white/5 transition-colors ${
                          language === lang ? 'text-brand-gold font-semibold' : 'text-white/80'
                        }`}
                      >
                        <span>{translations[lang].meta.flag}</span>
                        <span>{translations[lang].meta.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA button */}
            <a href="#contact" className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5">
              {t.nav.requestInfo}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-navy/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white/80 hover:text-white text-sm font-medium px-4 py-3 rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center mt-3">
                {t.nav.requestInfo}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
