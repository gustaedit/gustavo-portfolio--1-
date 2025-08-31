/** @type {import('next').NextConfig} */
const nextConfig = {
  // O bloco 'images' foi atualizado para o novo padrão 'remotePatterns'.
  // Se 'placeholder.svg' for um arquivo local, remova este bloco 'images' inteiro.
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholder.svg', // Substitua pelo domínio real, ex: 'cdn.example.com'
      },
    ],
  },
  
  // A opção 'compress' foi removida, pois é padrão no Next.js moderno.
  
  poweredByHeader: false,
  reactStrictMode: true,
  
  // O bloco 'experimental' foi removido, pois 'optimizeCss' já é padrão.

  // Os cabeçalhos de segurança estão ótimos e podem ser mantidos como estão.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig