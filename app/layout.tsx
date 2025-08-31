import type { Metadata, Viewport } from 'next' // Importe também o 'Viewport'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// METADADOS DE CONTEÚDO
export const metadata: Metadata = {
  title: 'Gustavo Alves de Andrade - Especialista em Cibersegurança & Desenvolvedor Full Stack',
  description: 'Especialista em cibersegurança com formação em Engenharia de Software. Serviços de pentest, SOC analysis, cloud security e desenvolvimento web profissional.',
  keywords: 'cibersegurança, pentest, SOC analysis, cloud security, LGPD, desenvolvimento web, full stack, Salvador, Bahia',
  authors: [{ name: 'Gustavo Alves de Andrade' }],
  creator: 'Gustavo Alves de Andrade',
  publisher: 'Gustavo Alves de Andrade',
  robots: 'index, follow',
  metadataBase: new URL('https://gustavoalves.dev'), // Adicione a URL base aqui
  alternates: {
    canonical: '/', // A URL canônica agora é relativa à base
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gustavoalves.dev',
    title: 'Gustavo Alves de Andrade - Especialista em Cibersegurança',
    description: 'Especialista em cibersegurança e desenvolvedor full stack. Serviços profissionais de segurança digital e criação de sites.',
    siteName: 'Gustavo Alves Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gustavo Alves de Andrade - Cibersegurança & Desenvolvimento',
    description: 'Especialista em cibersegurança e desenvolvedor full stack profissional.',
  },
  generator: 'v0.app', // 'generator' faz parte de 'metadata'
  // Metadados geográficos podem ser incluídos aqui também
  verification: {
    // Adicione tokens de verificação do Google, etc., aqui se necessário
  },
  other: {
    'geo.region': 'BR-BA',
    'geo.placename': 'Salvador',
    'geo.position': '-12.9714;-38.5014',
    'ICBM': '-12.9714, -38.5014'
  }
}

// CONFIGURAÇÕES DE TELA E EXIBIÇÃO
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#10b981',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // O Next.js irá gerar as tags <head> e <html> automaticamente
    // com base nos objetos 'metadata' e 'viewport'
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}