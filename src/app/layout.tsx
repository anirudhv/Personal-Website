import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anirudh Venkataramanan',
  description: 'Anirudh Venkataramanan website',
  icons: {
    icon: '/photo.jpg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}