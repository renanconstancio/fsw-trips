import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  variable:'--font-poppins', 
  weight: ['400'],
  preload: false
})

export const metadata = {
  title: 'FSW Trips',
  description: 'Sistema de viagens top',
}

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session
}) {
  return (
    <html lang="pt-br" className={propins.variable}>
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
