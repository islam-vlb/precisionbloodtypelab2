'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ShoppingCart, Check } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/supabase'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="bg-cream border-b border-sage/20 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="#5B7B6C" strokeWidth="2" fill="none"/>
              <path d="M20 8C20 8 12 14 12 22C12 26 15 30 20 32C25 30 28 26 28 22C28 14 20 8 20 8Z" fill="#5B7B6C"/>
            </svg>
            <span className="font-heading font-bold text-xl text-espresso">PrecisionMetabolismLab</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-espresso hover:text-sage font-medium transition-colors">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center gap-1 text-espresso hover:text-sage font-medium transition-colors"
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-sage/20 py-2">
                  {products.map(product => (
                    <Link
                      key={product.id}
                      href={product.slug === 'at-home-metabolism-test-kit' ? '/' : `/product/${product.slug}`}
                      className="block px-4 py-2 text-espresso hover:bg-sage/10 hover:text-sage transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" className="text-espresso hover:text-sage font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-espresso hover:text-sage font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 hover:bg-sage/10 rounded-full transition-colors">
              <ShoppingCart className="h-6 w-6 text-espresso" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-coral text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-sage/10 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-sage/20">
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-espresso hover:text-sage font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-espresso hover:text-sage font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-espresso hover:text-sage font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              {products.map(product => (
                <Link
                  key={product.id}
                  href={product.slug === 'at-home-metabolism-test-kit' ? '/' : `/product/${product.slug}`}
                  className="text-sage hover:text-sage-dark font-medium py-2 pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
