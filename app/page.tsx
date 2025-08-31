"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Award, ChevronRight, Phone, Mail, MapPin } from "lucide-react"
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

export default function HomePage() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-green-500/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-green-400">Gustavo Alves</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#cybersecurity" className="text-slate-300 hover:text-green-400 transition-colors">
                {t.cybersecurity}
              </Link>
              <Link href="/portfolio" className="text-slate-300 hover:text-green-400 transition-colors">
                {t.webDevelopment}
              </Link>
              <Link href="#certificates" className="text-slate-300 hover:text-green-400 transition-colors">
                {t.certificates}
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-green-400 transition-colors">
                {t.contact}
              </Link>
              <LanguageToggle onLanguageChange={handleLanguageChange} currentLanguage={language} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Gustavo Alves
              <span className="block text-green-400">de Andrade</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">{t.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3" asChild>
                <Link href="#cybersecurity">
                  {t.securityServices} <Shield className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-3 bg-transparent"
                asChild
              >
                <Link href="/portfolio">
                  {t.websiteDevelopment} <Code className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section id="cybersecurity" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.cyberTitle}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t.cyberSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-green-400 mb-6">{t.aboutGustavo}</h3>
              <div className="space-y-4 text-slate-300">
                <p>{t.aboutText1}</p>
                <p>{t.aboutText2}</p>
                <p>{t.aboutText3}</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/gustavo-profile.png"
                alt="Gustavo Alves de Andrade - Especialista em Cibersegurança"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: t.pentest,
                description: t.pentestDesc,
                icon: Shield,
              },
              {
                title: t.socAnalysis,
                description: t.socAnalysisDesc,
                icon: Shield,
              },
              {
                title: t.cloudSecurity,
                description: t.cloudSecurityDesc,
                icon: Shield,
              },
              {
                title: t.lgpdConsulting,
                description: t.lgpdConsultingDesc,
                icon: Shield,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-slate-700/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <service.icon className="h-12 w-12 text-green-400 mb-4" />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-4 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.certificatesTitle}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t.certificatesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Analista SOC",
                institution: "IBSEC",
                status: t.completed,
                description: t.socAnalystDesc,
              },
              {
                title: "Introdução ao Hacking e Pentest 2.0",
                institution: "Solyd",
                status: t.completed,
                description: t.hackingPentestDesc,
              },
              {
                title: "Santander Bootcamp Cibersegurança #2",
                institution: "DIO / Coursera",
                status: t.completed,
                description: t.santanderBootcampDesc,
              },
              {
                title: "Cybersecurity Essentials",
                institution: "Cisco",
                status: t.completed,
                description: t.ciscoEssentialsDesc,
              },
              {
                title: "FIAP Cybersecurity Course",
                institution: "FIAP",
                status: t.completed,
                description: t.fiapCourseDesc,
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-green-500/20 hover:border-green-500/50 hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Award className="h-8 w-8 text-green-400" />
                    <Badge
                      variant={cert.status === t.completed ? "default" : "secondary"}
                      className={cert.status === t.completed ? "bg-green-500 text-black" : "bg-yellow-500 text-black"}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-white group-hover:text-green-400 transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-green-400 font-semibold">{cert.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.contactTitle}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t.contactSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-6">{t.contactInfo}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-green-400" />
                  <span className="text-slate-300">+55 (71) 98733-8414</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-green-400" />
                  <span className="text-slate-300">gustaaa.edit@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-green-400" />
                  <span className="text-slate-300">Coimbra, Coimbra - Portugal</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-green-400" />
                  <span className="text-slate-300">Salvador, Bahia - Brasil</span>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-semibold w-full" asChild>
                  <Link
                    href="https://wa.me/5571987338414?text=Vamos%20trabalhar%20juntos%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.whatsappDirect}
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="bg-slate-700/50 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-white">{t.sendMessage}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{t.name}</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:border-green-500 focus:outline-none"
                    placeholder={t.yourFullName}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{t.email}</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:border-green-500 focus:outline-none"
                    placeholder={t.yourEmail}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{t.service}</label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  >
                    <option>{t.cybersecurity}</option>
                    <option>{t.webDevelopment}</option>
                    <option>{t.lgpdConsulting}</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{t.message}</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:border-green-500 focus:outline-none"
                    placeholder={t.describeProject}
                  ></textarea>
                </div>
                <Button
                  type="button"
                  onClick={sendToWhatsapp}
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold"
                >
                  {t.sendMessageBtn} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-green-500/20">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">{t.allRightsReserved}</p>
        </div>
      </footer>
    </div>
  )
}
