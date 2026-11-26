'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'About', href: '/about' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-secondary/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="Ciela Academy" className="h-10 w-auto object-contain" />
          <span className="font-heading text-xl font-bold text-ink tracking-tight hidden sm:block">Ciela Academy</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ink/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/96171070823"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-accent transition-all flex items-center gap-2"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-surface border-b border-secondary/30 py-6 px-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-ink"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/96171070823"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-md text-center font-medium flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            <span>Message on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
