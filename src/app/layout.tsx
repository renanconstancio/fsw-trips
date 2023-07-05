import Header from '@/components/Header'
import './globals.css'

import { NextAuthProvider } from '@/providers/auth'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400'],
})

export const metadata = {
  title: 'FSW Trips',
  description: 'Sistema de viagens top',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${poppins.variable}`}>
      <body>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
