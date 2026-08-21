import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Ahmed — Applied AI Engineer',
  description:
    'Applied AI Engineer building LLM applications, multi-agent systems, and RAG pipelines. Portfolio of Muhammad Ahmed, Islamabad, Pakistan.',
  generator: 'v0.app',
  openGraph: {
    title: 'Muhammad Ahmed — Applied AI Engineer',
    description:
      'LLM applications, multi-agent systems, RAG pipelines, and AI automation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#171717',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
