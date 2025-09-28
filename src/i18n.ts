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
    en: "My name is Kiana DellaGatta, I am a Multimedia Design student in my 3rd semester, focusing on digital design, especially UX/UI and graphic design. I am passionate about creating creative solutions that speak to the target audience. During my internship, I want to gain insight into professional design processes and teamwork. As a colleague, I am collaborative, communicative, and contribute with creativity.",
    da: "Mit navn er Kiana DellaGatta. Jeg er multimediedesign-studerende på 3. semester med fokus på digitalt design – især UX/UI og grafisk design. Jeg brænder for at skabe kreative løsninger, der taler til målgruppen. Under min praktik vil jeg gerne få indsigt i professionelle designprocesser og teamwork. Som kollega er jeg samarbejdende, kommunikativ og bidrager med kreativitet.",
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
