import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartProvider from '@/components/CartProvider'

export const metadata: Metadata = {
  title: 'PrecisionMetabolismLab — At-Home Metabolism Test Kit',
  description: 'Understand your metabolism from home with the At-Home Metabolism Test Kit from TrevCore LLC.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-espresso antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
