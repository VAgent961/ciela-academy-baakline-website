export default function AboutSection2() {
  return (
    <>
      <aside className="fixed bottom-0 left-0 w-full z-40 bg-surface/95 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.06)] lg:hidden"><div className="grid grid-cols-3 h-14"><a className="flex flex-col items-center justify-center gap-1 text-muted hover:text-primary transition-colors" href="tel:+96171070823"><span className="material-symbols-outlined text-[20px]">call</span><span className="font-body text-xs font-semibold">Call</span></a><a className="flex flex-col items-center justify-center gap-1 text-muted hover:text-primary transition-colors" href="https://wa.me/96171070823" rel="noopener noreferrer" target="_blank"><span className="material-symbols-outlined text-[20px]">chat</span><span className="font-body text-xs font-semibold">WhatsApp</span></a><a className="flex flex-col items-center justify-center gap-1 text-muted hover:text-primary transition-colors" href="/contact"><span className="material-symbols-outlined text-[20px]">location_on</span><span className="font-body text-xs font-semibold">Directions</span></a></div></aside>
    </>
  );
}
