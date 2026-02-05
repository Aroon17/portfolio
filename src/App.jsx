import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github, Globe, Mail, Linkedin, Layers3, Bot, Scissors, ShoppingCart,
  Server, Cpu, Database, Cloud, MessageCircle, FileDown
} from "lucide-react";

function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 ${className}`}>
      {children}
    </div>
  );
}
function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
function Button({ variant = "solid", size = "md", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl transition-colors";
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2", lg: "px-5 py-2.5" };
  const variants = {
    solid: "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:opacity-90",
    outline: "border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/60",
  };
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default function Portfolio() {
  /* ---- Idioma (ES por defecto) ---- */
  const [lang, setLang] = useState("es");
  const dict = {
    en: {
      nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact" },
      role: "Full Stack Developer",
      tagline: "I build clean, scalable web apps using React, Node.js, Laravel, MySQL and AWS.",
      aboutMe: "About me",
      aboutText:
        "I have one year of hands-on experience delivering real products: a veterinary booking system (Laravel/MySQL), an NLP chatbot on AWS with OpenAI and Aurora, a barber shop website (React/Node), and an e-commerce web app. Focused on quality, performance, and clean architecture.",
      production: "PRODUCTION",
      viewProjects: "View Projects",
      contact: "Contact",
      featured: "Featured Projects",
      featuredSub: "A selection of my recent work. Live links or paper when available.",
      skills: "Skills",
      letsWork: "Let’s work together",
      openTo: "Open to web development, integrations and cloud projects.",
      email: "Email",
      whatsapp: "WhatsApp",
      downloadCV: "Download CV",
      live: "Live site",
      paper: "Paper",
      copyEmail: "Copy email",
      copied: "Copied!",
    },
    es: {
      nav: { about: "Acerca de", projects: "Proyectos", skills: "Habilidades", contact: "Contacto" },
      role: "Desarrollador Full Stack",
      tagline: "Construyo aplicaciones web escalables y limpias con React, Node.js, Laravel, MySQL y AWS.",
      aboutMe: "Sobre mí",
      aboutText:
        "Cuento con un año de experiencia entregando productos reales: un sistema de reservas para veterinarias (Laravel/MySQL), un chatbot de PLN en AWS con OpenAI y Aurora, un sitio web para barbería (React/Node) y una aplicación web de e-commerce. Enfocado en calidad, rendimiento y arquitectura limpia.",
      production: "EN PRODUCCIÓN",
      viewProjects: "Ver proyectos",
      contact: "Contacto",
      featured: "Proyectos Destacados",
      featuredSub: "Selección de mi trabajo reciente. Enlaces en vivo o paper cuando esté disponible.",
      skills: "Habilidades",
      letsWork: "Trabajemos juntos",
      openTo: "Abierto a desarrollo web, integraciones y proyectos en la nube.",
      email: "Correo",
      whatsapp: "WhatsApp",
      downloadCV: "Descargar CV",
      live: "Sitio en vivo",
      paper: "Artículo",
      copyEmail: "Copiar correo",
      copied: "¡Copiado!",
    },
  };
  const t = useMemo(() => dict[lang], [lang]);


  const profile = useMemo(() => ({
    name: "Víctor Aroon Ordinola Cano",
    brand: "Victor Ordinola",
    email: "aron.ordi456@gmail.com",
    phone: "+51 982 675 867",
    whatsapp: "https://wa.me/51941210140",
    avatarUrl: "/profile.jpg",
    location: "Lima, Peru",
  }), []);

  const links = useMemo(() => ({
    github: "https://github.com/Aroon17",
    linkedin: "https://www.linkedin.com/in/victor-aroon-ordinola-cano-57a276303/",

  }), []);


  const projects = useMemo(() => [
    {
      title: { en: "Barber Shop Website", es: "Barber Shop Website" },
      icon: <Scissors className="w-5 h-5" />,
      stack: ["React", "Node.js", "Express", "AWS", "Ubuntu", "PM2"],
      summary: {
        en: "Modern landing + reviews + visit counter; backend API on EC2 with PM2, connected to MySQL/Aurora.",
        es: "Landing moderna con reseñas y contador de visitas; backend en EC2 con PM2 y conexión a MySQL/Aurora.",
      },
      demo: "https://infernobarberstudio.com/",
      production: true,
      liveLabel: "Live site",
    },
    {
      title: { en: "Veterinary Appointment Management System", es: "Sistema de Gestión de Citas para Veterinarias" },
      icon: <Layers3 className="w-5 h-5" />,
      stack: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JS"],
      summary: {
        en: "End-to-end booking platform for veterinary clinics: roles, schedule management, reminders, and reporting.",
        es: "Plataforma integral de reservas para clínicas veterinarias: roles, gestión de agenda, recordatorios y reportes.",
      },
    },
    {
      title: { en: "NLP-based Chatbot for Customer Service (Transportation)", es: "Chatbot basado en PLN para Atención al Cliente (Transporte)" },
      icon: <Bot className="w-5 h-5" />,
      stack: ["OpenAI", "AWS EC2", "Aurora MySQL", "Node.js"],
      summary: {
        en: "Chatbot on AWS with secure endpoints, prompts, and analytics to automate FAQs and booking assistance.",
        es: "Chatbot en AWS con endpoints seguros, prompts y analíticas para automatizar preguntas frecuentes y asistencia de reservas.",
      },
      demo: "https://repositorio.ucv.edu.pe/handle/20.500.12692/156958",
      liveLabel: "Paper",
    },
    {
      title: { en: "E-commerce Web App", es: "Aplicación Web de E-commerce" },
      icon: <ShoppingCart className="w-5 h-5" />,
      stack: ["React", "Node.js", "MySQL", "JWT", "i18n"],
      summary: {
        en: "Catalog, product detail pages, cart, mini-cart, reviews, and secure API. Built as capstone of my specialization.",
        es: "Catálogo, fichas de producto, carrito y mini-carrito, reseñas y API segura. Desarrollado como proyecto de especialización.",
      },
    },
  ], []);

  /* ---- Copiar correo ---- */
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); alert(t.copied); } catch {}
  };

  return (
    /* Tema fijo oscuro/azul */
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">{profile.brand}</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">{t.nav.about}</a>
            <a href="#projects" className="hover:opacity-80">{t.nav.projects}</a>
            <a href="#skills" className="hover:opacity-80">{t.nav.skills}</a>
            <a href="#contact" className="hover:opacity-80">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle language"
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="px-2 py-1 text-xs rounded-xl border border-slate-700 hover:bg-slate-800/70"
            >
              {lang.toUpperCase()}
            </button>
            <a href={links.github} aria-label="GitHub" className="p-2 hover:opacity-80"><Github className="w-5 h-5" /></a>
            <a href={links.linkedin} aria-label="LinkedIn" className="p-2 hover:opacity-80"><Linkedin className="w-5 h-5" /></a>
            {/* Website eliminado */}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="about" className="max-w-6xl mx-auto px-4 pt-12 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
        >
          <Card className="col-span-2">
            <CardContent>
              <h1 className="text-3xl md:text-4xl font-bold">{t.role}</h1>
              <p className="mt-3 text-slate-300 leading-relaxed">{t.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2"><Server className="w-4 h-4" /> {profile.location}</span>
                <span className="inline-flex items-center gap-2"><Cpu className="w-4 h-4" /> Full Stack</span>
                <span className="inline-flex items-center gap-2"><Database className="w-4 h-4" /> SQL</span>
                <span className="inline-flex items-center gap-2"><Cloud className="w-4 h-4" /> AWS</span>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#projects"><Button className="rounded-2xl">{t.viewProjects}</Button></a>
                <a href="#contact"><Button variant="outline" className="rounded-2xl">{t.contact}</Button></a>
                <a href="/cv.pdf" download="Victor_Ordinola_CV.pdf">
                  <Button variant="outline" className="rounded-2xl">
                    <FileDown className="w-4 h-4 mr-2" />{t.downloadCV}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <img src={profile.avatarUrl} alt="Profile" className="w-24 h-24 rounded-full border border-slate-700 object-cover mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-center">{t.aboutMe}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {t.aboutText}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">{t.featured}</h2>
          <p className="text-slate-400 mt-1">{t.featuredSub}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title.en} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="hover:border-slate-700 transition-colors">
                <CardContent>
                  <div className="flex items-center gap-2 text-slate-100">
                    {p.icon}
                    <h3 className="text-lg font-semibold">{p.title[lang]}</h3>
                    {p.production && (
                      <span className="ml-2 text-[10px] uppercase tracking-wide bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full">
                        {t.production}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">{p.summary[lang]}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-slate-700 px-2 py-1">{s}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    {p.demo ? (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <Button className="rounded-2xl" size="sm">
                          <Globe className="w-4 h-4 mr-2" />
                          {p.liveLabel ? (p.liveLabel === "Live site" ? t.live : p.liveLabel === "Paper" ? t.paper : p.liveLabel) : "Demo"}
                        </Button>
                      </a>
                    ) : null}
                    <a href="#contact">
                      <Button variant="outline" className="rounded-2xl" size="sm">
                        <Mail className="w-4 h-4 mr-2" />{t.contact}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.skills}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { group: "Frontend", items: ["React", "HTML5", "CSS3", "TailwindCSS", "Vite"] },
            { group: "Backend", items: ["Node.js", "Express", "PHP", "Laravel"] },
            { group: "Database", items: ["MySQL", "Aurora MySQL"] },
            { group: "Cloud & DevOps", items: ["AWS EC2", "PM2", "Ubuntu", "GitHub", "GitLab"] },
            { group: "AI", items: ["OpenAI API", "Prompt Engineering"] },
          ].map((g) => (
            <Card key={g.group}>
              <CardContent>
                <h3 className="font-semibold mb-2">{g.group}</h3>
                <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
                  {g.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <Card>
          <CardContent className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">{t.letsWork}</h2>
              <p className="text-slate-300 mt-2">{t.openTo}</p>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> <span className="font-medium">{profile.email}</span>
                  <Button variant="outline" size="sm" className="ml-2 rounded-xl" onClick={copyEmail}>
                    {t.copyEmail}
                  </Button>
                </div>
                <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp: <a className="underline" href={profile.whatsapp} target="_blank" rel="noreferrer">{profile.phone}</a></div>
                <div className="flex items-center gap-2"><Linkedin className="w-4 h-4" /> <a className="underline" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
              </div>
            </div>
            <div className="flex gap-3">
              <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                <Button className="rounded-2xl"><MessageCircle className="w-4 h-4 mr-2" /> {t.whatsapp}</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA flotante: solo WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-2">
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
          title={t.whatsapp}
          className="p-3 rounded-full shadow-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:opacity-90"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

      <footer className="py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
      </footer>
    </div>
  );
}
