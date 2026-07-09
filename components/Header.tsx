'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/testimonials', label: 'Testimonials' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-xl text-gray-900">
          <span className="text-brand-600">🏢</span>
          My Company
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white">
          <div className="container-page py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-brand-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}