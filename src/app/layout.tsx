"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from 'rjs-sticky-footer/Footer';
import FooterContent from './Components/FooterContent/FooterContent';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anirudh Venkataramanan',
  description: 'Anirudh Venkataramanan website',
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
        <Footer
        background={'#000000'}
        opacity={1}
        footerBody={<FooterContent/>}
        isSticky={true}
        />
      </body>
    </html>
  )
}