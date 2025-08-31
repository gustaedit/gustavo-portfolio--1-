"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Code, Globe, BarChart, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { type Language, getTranslation } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"


function sendToWhatsapp() {
  // Número de telefone de destino (formato internacional: código do país + DDD + número)
  const phoneNumber = "5571987338414"

  // Coleta os dados dos campos do formulário
  const name = (document.getElementById("name") as HTMLInputElement)?.value
  const email = (document.getElementById("email") as HTMLInputElement)?.value
  const service = (document.getElementById("service") as HTMLSelectElement)?.value
  const message = (document.getElementById("message") as HTMLTextAreaElement)?.value

  // Validação simples para verificar se os campos estão preenchidos
  if (name === "" || email === "" || message === "") {
    alert("Por favor, preencha todos os campos obrigatórios (Nome, Email, Mensagem).")
    return
  }

  // Formata a mensagem conforme solicitado
  const formattedMessage = `my name is ${name}\nmy email is ${email}\nI need this service: ${service}\nMessage: ${message}`

  // Codifica a mensagem para ser usada em uma URL
  const encodedMessage = encodeURIComponent(formattedMessage)

  // Monta a URL final do WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  // Abre a URL em uma nova aba
  window.open(url, "_blank")
}

export default function PortfolioPage() {
  const [language, setLanguage] = useState<Language>("pt")
  const [t, setT] = useState(getTranslation("pt"))

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
      setT(getTranslation(savedLanguage))
    }
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setT(getTranslation(newLanguage))
    localStorage.setItem("language", newLanguage)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-900 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">{t.backToHome}</span>
            </Link>
            <div className="text-2xl font-bold text-green-600">Gustavo Alves</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#cybersecurity" className="text-slate-600 hover:text-green-600 transition-colors">
                {t.cybersecurity}
              </Link>
              <Link href="/#certificates" className="text-slate-600 hover:text-green-600 transition-colors">
                {t.certificates}
              </Link>
              <Link href="/#contact" className="text-slate-600 hover:text-green-600 transition-colors">
                {t.contact}
              </Link>
              <LanguageToggle onLanguageChange={handleLanguageChange} currentLanguage={language} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in">{t.portfolioTitle}</h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">{t.portfolioSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3" asChild>
                <Link href="#projects">
                  {t.seeProjects} <Code className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 bg-transparent"
                asChild
              >
                <Link href="#contact">{t.requestQuote}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: t.projectsDelivered },
              { number: "100%", label: t.satisfiedClients },
              { number: "24h", label: t.technicalSupport },
              { number: "5 Anos", label: t.experience },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.featuredProjects}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t.featuredProjectsDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Rui Rezende - Cultura Sertaneja",
                category: t.institutionalSite,
                description: t.ruiRezendeDesc,
                image: "/images/rui.jpeg",
                tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
                icon: Globe,
                url: "https://ruirezende.netlify.app/",
              },
              {
                title: "Team Ramos - " + t.consulting,
                category: t.landingPage,
                description: t.teamRamosDesc,
                image: "/images/team-ramos-site.jpeg",
                tech: ["React", "CSS Modules", "Netlify", "Performance Optimization"],
                icon: BarChart,
                url: "https://teamramos.netlify.app/",
              },
              {
                title: "Ler Rápido - Leitura Dinâmica",
                category: t.educationalPlatform,
                description:
                  language === "pt"
                    ? "Plataforma educacional focada em técnicas de leitura rápida e compreensão textual. Interface intuitiva com exercícios práticos e acompanhamento de progresso."
                    : "Educational platform focused on speed reading techniques and text comprehension. Intuitive interface with practical exercises and progress tracking.",
                image: "/images/lerrapido-site.jpeg",
                tech: ["HTML5", "CSS3", "JavaScript", "Progressive Web App"],
                icon: GraduationCap,
                url: "https://lerrapido.netlify.app/",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white border-0 shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <project.icon className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-slate-900 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                      <Link href={project.url} target="_blank" rel="noopener noreferrer">
                        {t.viewOnline}
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.developmentProcess}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t.developmentProcessDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: t.discoveryPlanning,
                description: t.discoveryPlanningDesc,
                icon: "🎯",
              },
              {
                step: "02",
                title: t.designPrototyping,
                description: t.designPrototypingDesc,
                icon: "🎨",
              },
              {
                step: "03",
                title: t.developmentTesting,
                description: t.developmentTestingDesc,
                icon: "⚡",
              },
              {
                step: "04",
                title: t.deployMaintenance,
                description: t.deployMaintenanceDesc,
                icon: "🚀",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {phase.step}
                  </div>
                  <div className="text-4xl mb-4">{phase.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.technologiesTools}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t.technologiesToolsDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: t.frontend,
                technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
              },
              {
                category: t.backend,
                technologies: ["Node.js", "Python", "Laravel", "PostgreSQL", "MongoDB", "Redis"],
              },
              {
                category: t.devopsCloud,
                technologies: ["AWS", "Vercel", "Docker", "GitHub Actions", "Cloudflare", "Analytics"],
              },
            ].map((stack, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 text-center mb-4">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {stack.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="bg-slate-50 hover:bg-green-50 border border-slate-200 hover:border-green-200 rounded-lg p-3 text-center transition-all duration-300 cursor-default"
                      >
                        <span className="text-slate-700 font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.readyToStart}</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">{t.readyToStartDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-slate-100 font-semibold px-8 py-3"
              onClick={sendToWhatsapp}
            >
              {t.requestQuote}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/">{t.knowOtherServices}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">{t.allRightsReserved}</p>
        </div>
      </footer>
    </div>
  )
}
