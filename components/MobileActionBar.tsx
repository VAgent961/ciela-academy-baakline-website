import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-surface border-t border-secondary/30 px-4 py-3 flex justify-around items-center gap-4 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <a href="tel:+96171070823" className="flex flex-col items-center gap-1 text-ink/70 hover:text-primary transition-colors">
        <Phone size={20} />
        <span className="text-[12px] font-bold uppercase tracking-wider">Call</span>
      </a>
      <a href="https://wa.me/96171070823" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-ink/70 hover:text-primary transition-colors">
        <MessageCircle size={20} />
        <span className="text-[12px] font-bold uppercase tracking-wider">WhatsApp</span>
      </a>
      <a href="/contact" className="flex flex-col items-center gap-1 text-ink/70 hover:text-primary transition-colors">
        <MapPin size={20} />
        <span className="text-[12px] font-bold uppercase tracking-wider">Visit</span>
      </a>
    </div>
  );
}
