import Link from 'next/link';
import { Instagram, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <img src="/images/logo.jpg" alt="Ciela Academy" className="h-12 w-auto object-contain self-start brightness-0 invert" />
            <p className="text-white/70 text-sm leading-relaxed">
              Multidisciplinary creative arts, gymnastics and circus school in Baakline, Chouf. Founded 2023 by Dr. Hanadi Rajeh.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/ciela_academy_baakline" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 text-white uppercase tracking-widest text-xs">Programs</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li><Link href="/programs" className="hover:text-primary transition-colors">Gymnastics & Circus</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">Dance & Theater</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">Wellness & Arts</Link></li>
              <li><Link href="/schedule" className="hover:text-primary transition-colors">Weekly Schedule</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 text-white uppercase tracking-widest text-xs">Academy</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Mission & Values</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 text-white uppercase tracking-widest text-xs">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Baakline, Chouf, Mount Lebanon</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+96171070823" className="hover:text-primary transition-colors">+961 71 070 823</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-primary shrink-0" />
                <a href="https://wa.me/96171070823" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Direct</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2025 Ciela Academy. All rights reserved.</p>
          <p>Baakline, Chouf District</p>
        </div>
      </div>
    </footer>
  );
}
