import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartProvider from '@/components/CartProvider'
import { BUSINESS } from '@/lib/config'

export const metadata: Metadata = {
  title: `${BUSINESS.brandName} — At-Home Metabolism Test Kit`,
  description: `Understand your metabolism from home with the At-Home Metabolism Test Kit from ${BUSINESS.brandName}.`,
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
