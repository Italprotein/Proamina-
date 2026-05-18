import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = t.meta.lang
    document.documentElement.dir = t.meta.dir
  }, [language, t.meta])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir: t.meta.dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
