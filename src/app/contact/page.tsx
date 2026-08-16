'use client'

import React, { useState } from 'react'
import { BUSINESS } from '@/lib/config'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-warm min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-graphite mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-graphite mb-4">Get in Touch</h2>
            <div className="space-y-3 text-sm text-graphite/80">
              <p><span className="font-semibold">Email:</span> {BUSINESS.email}</p>
              <p><span className="font-semibold">Address:</span> {BUSINESS.address}</p>
              <p><span className="font-semibold">Phone:</span> {BUSINESS.phone}</p>
            </div>
            <p className="mt-6 text-sm text-graphite/60">
              We typically respond within 1-2 business days.
            </p>
          </div>
          <div className="bg-white border border-graphite/10 p-6">
            {submitted ? (
              <p className="text-copper font-semibold">Thank you! Your message has been sent.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-graphite mb-1">Name</label>
                  <input type="text" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite mb-1">Email</label>
                  <input type="email" required className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite mb-1">Message</label>
                  <textarea required rows={5} className="w-full border border-graphite/20 px-4 py-2 focus:border-copper focus:outline-none" />
                </div>
                <button type="submit" className="w-full bg-copper text-white px-6 py-3 font-heading font-semibold hover:bg-copper-dark transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
