"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "es" | "en"

interface Translations {
  [key: string]: {
    es: string
    en: string
  }
}

// Traducciones del sitio
export const translations: Translations = {
  // Navegación
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.about": { es: "Sobre Mí", en: "About Me" },
  "nav.projects": { es: "Proyectos", en: "Projects" },
  "nav.collection": { es: "Colección", en: "Collection" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  
  // Página inicio
  "home.welcome": { es: "Bienvenido a mi", en: "Welcome to my" },
  "home.portfolio": { es: "Portafolio", en: "Portfolio" },
  "home.personalPortfolio": { es: "Portafolio Personal", en: "Personal Portfolio" },
  "home.description": { es: "Aquí podrás conocer mi perfil como estudiante de Ingeniería de Software, así como mis proyectos, habilidades y experiencias en el desarrollo de soluciones tecnológicas.", en: "Here you can learn about my profile as a Software Engineering student, as well as my projects, skills, and experiences in developing technological solutions." },
  "home.commitment": { es: "Este portafolio refleja mi compromiso con la precisión técnica, el aprendizaje continuo y el trabajo en equipo. Te invito a explorar cada sección para descubrir mi enfoque profesional y mi forma de trabajar.", en: "This portfolio reflects my commitment to technical precision, continuous learning, and teamwork. I invite you to explore each section to discover my professional approach and way of working." },
  "home.yearsExp": { es: "Años Exp.", en: "Years Exp." },
  "home.projects": { es: "Proyectos", en: "Projects" },
  "home.passion": { es: "Pasión", en: "Passion" },
  "home.enterPortfolio": { es: "Entrar al Portafolio", en: "Enter Portfolio" },
  "home.viewHome": { es: "Ver Inicio", en: "View Home" },
  
  // Sección bienvenida
  "welcome.title": { es: "Bienvenido a mi", en: "Welcome to my" },
  "welcome.portfolio": { es: "Portafolio", en: "Portfolio" },
  "welcome.history": { es: "Historia", en: "History" },
  "welcome.historyText": { es: "Mi interés por la tecnología comenzó desde que descubrí mi gusto por el diseño, la innovación y la creación de nuevas soluciones. Actualmente, me encuentro cursando quinto semestre de Ingeniería de Software, una carrera que elegí porque me permite materializar ideas a través de la programación. A lo largo de mi formación, he fortalecido habilidades que me permiten desarrollar soluciones tecnológicas, combinando creatividad y lógica para aportar valor en cada proyecto.", en: "My interest in technology began when I discovered my passion for design, innovation, and creating new solutions. Currently, I am in my fifth semester of Software Engineering, a career I chose because it allows me to materialize ideas through programming. Throughout my education, I have strengthened skills that allow me to develop technological solutions, combining creativity and logic to add value to each project." },
  
  // Botones
  "btn.software": { es: "Software", en: "Software" },
  "btn.studies": { es: "Estudios", en: "Studies" },
  "btn.goals": { es: "Metas", en: "Goals" },
  "btn.comment": { es: "Comentar", en: "Comment" },
  "btn.close": { es: "Cerrar", en: "Close" },
  "btn.downloadCV": { es: "Descargar hoja de vida", en: "Download Resume" },
  "btn.contact": { es: "Contacto", en: "Contact" },
  "btn.readMore": { es: "Leer más", en: "Read more" },
  "btn.readLess": { es: "Leer menos", en: "Read less" },
  "btn.softwareSkills": { es: "Habilidades de Software", en: "Software Skills" },
  
  // Software content
  "software.title": { es: "Software & Herramientas", en: "Software & Tools" },
  "software.text": { es: "Domino tecnologías como Java, Python, TypeScript, SQL y HTML, y cuento con experiencia trabajando con herramientas y frameworks como React, Vite, Django y Unity. Además, aplico patrones de diseño y estructuras de datos para desarrollar soluciones organizadas, eficientes y escalables. Me enfoco en escribir código claro, mantenible y orientado a buenas prácticas de desarrollo. Me interesa especialmente la parte visual y gráfica del desarrollo, ya que disfruto crear interfaces atractivas y bien estructuradas.", en: "I master technologies such as Java, Python, TypeScript, SQL, and HTML, and I have experience working with tools and frameworks like React, Vite, Django, and Unity. Additionally, I apply design patterns and data structures to develop organized, efficient, and scalable solutions. I focus on writing clear, maintainable code oriented towards best development practices. I am especially interested in the visual and graphic aspects of development, as I enjoy creating attractive and well-structured interfaces." },
  
  // Studies content
  "studies.title": { es: "Formación Académica", en: "Academic Background" },
  "studies.text": { es: "Estudiante de quinto semestre de Ingeniería de Sistemas, con enfoque en desarrollo de software y gran interés en el diseño y la parte visual de las aplicaciones. Actualmente, me encuentro en la etapa final de un tecnólogo en Desarrollo Multimedia y Web. He fortalecido mis conocimientos a través de formación complementaria, incluyendo un curso de Programación Orientada a Objetos, y continúo en constante aprendizaje para mejorar mis habilidades técnicas y profesionales.", en: "Fifth-semester Systems Engineering student, focused on software development with a strong interest in design and the visual aspects of applications. Currently, I am in the final stage of a Multimedia and Web Development technician degree. I have strengthened my knowledge through complementary training, including an Object-Oriented Programming course, and I continue to constantly learn to improve my technical and professional skills." },
  
  // Goals content
  "goals.title": { es: "Mis Objetivos", en: "My Goals" },
  "goals.text": { es: "Mi meta principal es culminar mi carrera profesional y graduarme con honores, consolidando una base sólida en el desarrollo de software. A futuro, aspiro a continuar mi formación con una maestría enfocada en áreas como diseño, desarrollo de videojuegos o ciberseguridad, con el objetivo de especializarme y aportar soluciones innovadoras en el ámbito tecnológico.", en: "My main goal is to complete my professional career and graduate with honors, building a solid foundation in software development. In the future, I aspire to continue my education with a master's degree focused on areas such as design, video game development, or cybersecurity, with the aim of specializing and contributing innovative solutions in the technological field." },
  
  // Presentación
  "presentation.title": { es: "Presentación Breve", en: "Brief Presentation" },
  "presentation.text": { es: "Desarrolladora en formación con enfoque en la construcción de soluciones eficientes y bien organizadas, interesada en seguir fortaleciendo tanto mis habilidades técnicas como creativas.", en: "Developer in training focused on building efficient and well-organized solutions, interested in continuing to strengthen both my technical and creative skills." },
  "presentation.adaptText": { es: "Me adapto con facilidad a nuevos entornos de trabajo y herramientas, y disfruto enfrentar retos que me permitan crecer profesionalmente.", en: "I adapt easily to new work environments and tools, and I enjoy facing challenges that allow me to grow professionally." },
  "presentation.workText": { es: "Mi trabajo se caracteriza por el compromiso, la buena comunicación y la capacidad de aportar ideas que mejoren los resultados, cualidades que han sido valoradas positivamente por compañeros y docentes en distintos proyectos.", en: "My work is characterized by commitment, good communication, and the ability to contribute ideas that improve results, qualities that have been positively valued by colleagues and teachers in various projects." },
  
  // Testimonios
  "testimonials.title": { es: "Personas con las que he trabajado", en: "People I've worked with" },
  "testimonial.client": { es: "Cliente", en: "Client" },
  "testimonial.teammate": { es: "Compañera de equipo", en: "Teammate" },
  "testimonial.colleague": { es: "Colega desarrollador", en: "Developer colleague" },
  "testimonial.camilo": { es: "Trabajar con ella fue una experiencia muy profesional. Necesitábamos una página web moderna y funcional, y logró entregar justo lo que buscábamos. Destaco especialmente su capacidad para entender los requerimientos y proponer mejoras en la interfaz.", en: "Working with her was a very professional experience. We needed a modern and functional website, and she delivered exactly what we were looking for. I especially highlight her ability to understand requirements and propose interface improvements." },
  "testimonial.ana": { es: "Fue una pieza clave en el desarrollo del proyecto. Siempre aportó ideas claras y soluciones eficientes a los problemas técnicos.", en: "She was a key piece in the project development. She always contributed clear ideas and efficient solutions to technical problems." },
  "testimonial.daniel": { es: "Me impresionó la forma en que aborda los problemas de programación. Se preocupa por la calidad del código y la optimización.", en: "I was impressed by the way she approaches programming problems. She cares about code quality and optimization." },
  
  // Sección canción / video
  "video.title": { es: "Video Personal", en: "Personal Video" },
  "video.play": { es: "Reproducir", en: "Play" },
  "video.pause": { es: "Pausar", en: "Pause" },
  
  // Mi canción
  "song.title": { es: "Mi Canción Favorita", en: "My Favorite Song" },
  "song.clickToListen": { es: "Click para escuchar", en: "Click to listen" },
  "song.playing": { es: "Reproduciendo...", en: "Playing..." },
  "song.special": { es: "Esta canción me genera amor y paz, me la dedicó la persona más importante en mi vida, mi mamá", en: "This song generates love and peace for me, it was dedicated to me by the most important person in my life, my mom" },
  
  // Momentos
  "moments.title": { es: "Momentos", en: "Moments" },
  
  // Comentarios
  "comments.title": { es: "Deja tu comentario", en: "Leave your comment" },
  "comments.placeholder": { es: "Escribe tu comentario...", en: "Write your comment..." },
  "comments.success": { es: "Comentario enviado con éxito", en: "Comment sent successfully" },
  "comments.sending": { es: "Enviando...", en: "Sending..." },
  
  // Contacto
  "contact.title": { es: "Contacto", en: "Contact" },
  "contact.myData": { es: "Mis Datos de Contacto", en: "My Contact Information" },
  "contact.socialMedia": { es: "Redes Sociales", en: "Social Media" },
  "contact.phone": { es: "Teléfono", en: "Phone" },
  "contact.email": { es: "Correo Electrónico", en: "Email" },
  "contact.location": { es: "Ubicación", en: "Location" },
  
  // About
  "about.title": { es: "Sobre", en: "About" },
  "about.me": { es: "Mí", en: "Me" },
  "about.text1": { es: "Soy una persona que vive a toda velocidad siempre curiosa y en movimiento. Desde niña, la creatividad y el diseño me han acompañado, moldeando mi manera de ver el mundo y mi forma de actuar: con pasión, detalle y ganas de ir siempre un paso más allá.", en: "I am a person who lives at full speed, always curious and on the move. Since childhood, creativity and design have accompanied me, shaping my way of seeing the world and my way of acting: with passion, detail, and the desire to always go one step further." },
  "about.text2": { es: "Me encanta desafiar mis propios límites, aprender cosas nuevas cada día y encontrar la belleza en la precisión y el ritmo de la vida. Para mí, la vida es dinámica: se trata de adaptarse, avanzar con energía y disfrutar cada momento con intensidad.", en: "I love challenging my own limits, learning new things every day, and finding beauty in the precision and rhythm of life. For me, life is dynamic: it's about adapting, moving forward with energy, and enjoying every moment with intensity." },
  "about.text3": { es: "Creo en dejar huella, en aportar con entusiasmo y en transformar cada experiencia en algo memorable.", en: "I believe in leaving a mark, contributing with enthusiasm, and transforming every experience into something memorable." },
  "about.speed": { es: "velocidad", en: "speed" },
  "about.limits": { es: "propios límites", en: "own limits" },
  "about.mark": { es: "huella", en: "mark" },
  
  // Habilidades
  "skills.title": { es: "Habilidades de Software", en: "Software Skills" },
  "skills.uiux": { es: "Diseño UI/UX", en: "UI/UX Design" },
  "skills.programming": { es: "Lenguajes de Programación", en: "Programming Languages" },
  "skills.dataStructures": { es: "Estructuras de Datos", en: "Data Structures" },
  "skills.algorithms": { es: "Algoritmos", en: "Algorithms" },
  "skills.versionControl": { es: "Control de Versiones (Git)", en: "Version Control (Git)" },
  "skills.databases": { es: "Bases de Datos", en: "Databases" },
  
  // Estudios sección
  "education.title": { es: "Estudios", en: "Education" },
  "education.current": { es: "Ingeniería en Software", en: "Software Engineering" },
  "education.tech": { es: "Tecnología en Desarrollo Multimedia y Web", en: "Multimedia and Web Development Technology" },
  "education.highschool": { es: "Bachiller", en: "High School" },
  
  // Objetivos sección
  "objectives.title": { es: "Objetivos", en: "Objectives" },
  "objectives.excellence": { es: "Excelencia Técnica", en: "Technical Excellence" },
  "objectives.excellenceDesc": { es: "Dominar las últimas tecnologías", en: "Master the latest technologies" },
  "objectives.design": { es: "Diseño con Pasión", en: "Design with Passion" },
  "objectives.designDesc": { es: "Crear interfaces que enamoren", en: "Create interfaces that captivate" },
  "objectives.impact": { es: "Impacto Global", en: "Global Impact" },
  "objectives.impactDesc": { es: "Crear soluciones que marquen la diferencia", en: "Create solutions that make a difference" },
  
  // Proyectos
  "projects.title": { es: "Mis Proyectos", en: "My Projects" },
  "projects.viewList": { es: "Ver Lista", en: "View List" },
  "projects.selectProject": { es: "Selecciona un proyecto:", en: "Select a project:" },
  "projects.preview": { es: "Vista Previa", en: "Preview" },
  "projects.files": { es: "archivos", en: "files" },
  "projects.projectFiles": { es: "Archivos del proyecto:", en: "Project files:" },
  "projects.open": { es: "Abrir", en: "Open" },
  "projects.notFound": { es: "No se encontraron proyectos", en: "No projects found" },
  
  // Colección
  "collection.title": { es: "Colección Visual", en: "Visual Collection" },
  "collection.description": { es: "Una galería de momentos capturados de mi carrera profesional. Cada imagen cuenta una historia de creatividad, pasión y excelencia.", en: "A gallery of moments captured from my professional career. Each image tells a story of creativity, passion, and excellence." },
  "collection.all": { es: "Todas", en: "All" },
  "collection.development": { es: "Desarrollo", en: "Development" },
  "collection.design": { es: "Diseño", en: "Design" },
  "collection.events": { es: "Eventos", en: "Events" },
  "collection.showing": { es: "Mostrando", en: "Showing" },
  "collection.of": { es: "de", en: "of" },
  "collection.images": { es: "imágenes", en: "images" },
  "collection.notFound": { es: "No se encontraron imágenes", en: "No images found" },
  "collection.category": { es: "Categoría:", en: "Category:" },
  
  // Footer
  "footer.rights": { es: "Todos los derechos reservados", en: "All rights reserved" },
  "footer.tagline": { es: "Velocidad • Pasión • Excelencia", en: "Speed • Passion • Excellence" },
  
  // Programación passion
  "passion.title": { es: "La Programación es mi Pasión", en: "Programming is my Passion" },
  "passion.subtitle": { es: "Donde otros ven límites, yo veo oportunidades para innovar y crear experiencias únicas.", en: "Where others see limits, I see opportunities to innovate and create unique experiences." },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-language") as Language
    if (savedLang && (savedLang === "es" || savedLang === "en")) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("portfolio-language", lang)
  }

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) return key
    return translation[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
