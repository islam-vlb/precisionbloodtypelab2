'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ShoppingCart, Search, Minus } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/supabase'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { itemCount } = useCart()
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const searchResults = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return (
    <>
      <header className="bg-warm border-b border-graphite/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#c67b4e" strokeWidth="2" fill="none"/>
                <path d="M20 8C20 8 12 14 12 22C12 26 15 30 20 32C25 30 28 26 28 22C28 14 20 8 20 8Z" fill="#c67b4e"/>
              </svg>
              <span className="font-heading font-bold text-xl text-graphite tracking-tight">
                PrecisionMetabolismLab
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-graphite hover:text-copper transition-colors">
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-graphite hover:text-copper transition-colors"
                >
                  Products
                  <ChevronDown className="h-4 w-4" />
                </button>
                {productsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl border border-graphite/10 rounded-sm py-2">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        href={product.slug === 'at-home-metabolism-test-kit' ? '/' : `/product/${product.slug}`}
                        className="block px-4 py-3 text-sm text-graphite hover:bg-warm hover:text-copper transition-colors"
                        onClick={() => setProductsOpen(false)}
                      >
                        <span className="font-medium">{product.name}</span>
                        <span className="block text-xs text-graphite/60 mt-0.5 line-clamp-2">
                          {product.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/about" className="text-sm font-medium text-graphite hover:text-copper transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-graphite hover:text-copper transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-graphite/70 border border-graphite/20 rounded-sm hover:border-copper hover:text-copper transition-colors"
              >
                <Search className="h-4 w-4" />
                <span>Search</span>
                <kbd className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs text-graphite/50 border border-graphite/20 rounded-sm">
                  <Minus className="h-3 w-3" />
                  K
                </kbd>
              </button>
              <Link href="/cart" className="relative p-2 text-graphite hover:text-copper transition-colors">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-copper text-xs font-bold text-white">
                    {itemCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-graphite"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="md:hidden border-t border-graphite/10 py-4">
              <nav className="flex flex-col gap-1">
                <Link href="/" className="text-sm font-medium text-graphite py-2" onClick={() => setMobileOpen(false)}>Home</Link>
                <div>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-graphite py-2"
                  >
                    Products <ChevronDown className="h-4 w-4" />
                  </button>
                  {productsOpen && (
                    <div className="ml-4 flex flex-col gap-1">
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          href={product.slug === 'at-home-metabolism-test-kit' ? '/' : `/product/${product.slug}`}
                          className="text-sm text-graphite/80 py-1"
                          onClick={() => { setProductsOpen(false); setMobileOpen(false) }}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link href="/about" className="text-sm font-medium text-graphite py-2" onClick={() => setMobileOpen(false)}>About</Link>
                <Link href="/contact" className="text-sm font-medium text-graphite py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-graphite/80 backdrop-blur-sm">
          <div className="bg-white border-b border-graphite/10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-graphite/40" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products, categories..."
                    className="w-full pl-12 pr-4 py-3 bg-warm border border-graphite/10 rounded-sm text-graphite placeholder:text-graphite/40 focus:outline-none focus:border-copper"
                  />
                </div>
                <button
                  onClick={() => { setSearchOpen(false); setSearchQuery('') }}
                  className="p-2 text-graphite/60 hover:text-graphite transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              {searchQuery.trim() && (
                <div className="mt-4 max-h-96 overflow-y-auto">
                  {searchResults.length === 0 ? (
                    <p className="text-sm text-graphite/60 py-4">No results found.</p>
                  ) : (
                    <div className="space-y-2">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={product.slug === 'at-home-metabolism-test-kit' ? '/' : `/product/${product.slug}`}
                          className="block p-4 bg-warm border border-graphite/10 rounded-sm hover:border-copper transition-colors"
                          onClick={() => { setSearchOpen(false); setSearchQuery('') }}
                        >
                          <span className="font-medium text-graphite">{product.name}</span>
                          <span className="block text-sm text-graphite/60 mt-1 line-clamp-2">{product.description}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
