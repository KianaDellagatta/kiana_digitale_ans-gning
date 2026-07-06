// src/i18n.ts
export type Lang = "en" | "da";

export const translations: Record<string, { en: string; da: string }> = {
  // Header navigation
  "nav.about": { en: "About", da: "Om" },
  "nav.skills": { en: "Skills", da: "Færdigheder" },
  "nav.contact": { en: "Contact", da: "Kontakt" },

  // Index page content
  "about.h2": { en: "About", da: "Om" },
  "about.p": {
    en: "Hi, I'm Kiana, a Multimedia Designer passionate about visual storytelling, branding, packaging, and digital design. I love creating designs that not only look beautiful but also solve problems and connect with people. My work spans graphic design, UI/UX, branding, and print, and I’m always excited to learn new skills, explore new ideas, and bring concepts to life through thoughtful design.",
    da: "Hej, jeg hedder Kiana og er multimediedesigner med en passion for visuel historiefortælling, branding, emballagedesign og digitalt design. Jeg elsker at skabe design, der ikke kun ser godt ud, men også løser problemer og skaber en forbindelse til brugeren. Mit arbejde spænder over grafisk design, UI/UX, branding og trykte medier, og jeg motiveres af hele tiden at lære nyt, udforske nye idéer og omsætte koncepter til gennemtænkte designløsninger.",
  },

  "languages.h3": { en: "Languages", da: "Sprog" },

  "education.h3": { en: "Education", da: "Uddannelse" },
  "education.p": {
    en: "Multimediedesigner, EK - Københavns Erhvervsakademi",
    da: "Multimediedesigner, EK - Københavns Erhvervsakademi",
  },

  // Skills heading intentionally NOT translated

  "past.h2": { en: "Past Projects", da: "Tidligere projekter" },
  "logofolio.h3": { en: "Logofolio", da: "Logofolio" },
  "characters.h3": { en: "Character Design", da: "Karakterdesign" },
};
