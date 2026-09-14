import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartProvider from '@/components/CartProvider'
import { BUSINESS } from '@/lib/config'

export const metadata: Metadata = {
  title: `${BUSINESS.brandName} — Smart Body Composition Scale`,
  description: `Track your weight and body composition trends from home with the Smart Body Composition Scale from ${BUSINESS.brandName}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-warm text-graphite antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
