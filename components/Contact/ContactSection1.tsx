'use client';
import { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection1() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [waLink, setWaLink] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      program: formData.get('program'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.whatsapp) setWaLink(result.whatsapp);

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setError(result.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.');
      setStatus('error');
    }
  };

  return (
    <>
      <div className="flex flex-col w-full">
      
      <section className="min-h-[512px] flex flex-col items-center justify-center text-center py-16 px-4 relative overflow-hidden bg-surface" id="hero">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5 select-none">
      <span className="font-heading text-[14rem] font-extrabold text-ink tracking-tighter">CIELA</span>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
      <h1 className="font-heading text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-tight mb-4">
              Get in touch
            </h1>
      <p className="font-body text-lg text-muted max-w-xl">
              We reply within 24 hours.
            </p>
      </div>
      </section>
      
      <section className="w-full bg-surface py-16" id="contact-form">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <div className="lg:col-span-7 bg-surface p-8 sm:p-10 rounded-2xl shadow-sm">
      {status === 'success' ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="font-heading text-3xl font-bold text-ink">Message Sent!</h2>
          <p className="text-muted">Thank you for reaching out. We will get back to you shortly.</p>
          {waLink && (
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-md font-bold hover:opacity-90 transition-all">
              <MessageCircle size={20} />
              Send it on WhatsApp too
            </a>
          )}
          <button onClick={() => setStatus('idle')} className="block w-full text-primary font-bold text-sm uppercase tracking-widest">Send another message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
          <label className="font-body text-sm text-ink font-medium" htmlFor="contact-name">Name</label>
          <input name="name" className="w-full px-4 py-3 rounded-lg bg-surface text-ink placeholder:text-muted font-body text-base transition-all outline-none ring-1 ring-muted focus:ring-2 focus:ring-primary shadow-sm" id="contact-name" placeholder="Full name" required type="text" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
          <label className="font-body text-sm text-ink font-medium" htmlFor="contact-phone">Phone</label>
          <input name="phone" className="w-full px-4 py-3 rounded-lg bg-surface text-ink placeholder:text-muted font-body text-base transition-all outline-none ring-1 ring-muted focus:ring-2 focus:ring-primary shadow-sm" id="contact-phone" placeholder="+961 .." required type="tel" />
          </div>
          <div className="flex flex-col gap-2">
          <label className="font-body text-sm text-ink font-medium" htmlFor="contact-email">Email</label>
          <input name="email" className="w-full px-4 py-3 rounded-lg bg-surface text-ink placeholder:text-muted font-body text-base transition-all outline-none ring-1 ring-muted focus:ring-2 focus:ring-primary shadow-sm" id="contact-email" type="email" />
          </div>
          </div>
          <div className="flex flex-col gap-2">
          <label className="font-body text-sm text-ink font-medium" htmlFor="contact-program">Program Interest</label>
          <div className="relative">
          <select name="program" className="w-full px-4 py-3 rounded-lg bg-surface text-ink font-body text-base transition-all outline-none ring-1 ring-muted focus:ring-2 focus:ring-primary shadow-sm appearance-none cursor-pointer pr-10" id="contact-program">
          <option value="General Inquiry">Select a program</option>
          <option value="Gymnastics">Gymnastics</option>
          <option value="Circus Arts">Circus Arts</option>
          <option value="Dance">Dance</option>
          <option value="Theater">Theater</option>
          <option value="Visual Arts">Visual Arts</option>
          <option value="Music">Music</option>
          <option value="Chess">Chess</option>
          <option value="Yoga">Yoga</option>
          <option value="Mindfulness">Mindfulness</option>
          <option value="Adult Programs">Adult Programs</option>
          <option value="Other">Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted">
          <span className="material-symbols-outlined text-[20px]">expand_more</span>
          </div>
          </div>
          </div>
          <div className="flex flex-col gap-2">
          <label className="font-body text-sm text-ink font-medium" htmlFor="contact-message">Message</label>
          <textarea name="message" className="w-full px-4 py-3 rounded-lg bg-surface text-ink placeholder:text-muted font-body text-base transition-all outline-none ring-1 ring-muted focus:ring-2 focus:ring-primary shadow-sm resize-none" id="contact-message" placeholder="How can we help?" required rows={4}></textarea>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-md border border-red-100">
              <AlertCircle size={20} />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          <button 
            disabled={status === 'sending'}
            className="w-full bg-primary hover:bg-primary/15 text-background font-body text-sm px-6 py-3.5 rounded-lg transition-all duration-200 transform active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm font-medium disabled:opacity-50" 
            type="submit"
          >
          {status === 'sending' ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </>
          )}
          </button>
        </form>
      )}
      </div>
      
      <div className="lg:col-span-5 flex flex-col justify-center">
      <div className="bg-secondary/15 rounded-2xl p-8 sm:p-12 flex flex-col justify-center items-center text-center aspect-square shadow-sm relative overflow-hidden">
      <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-primary mb-6 shadow-sm">
      <span className="material-symbols-outlined text-[32px]">chat</span>
      </div>
      <h3 className="font-heading text-2xl font-medium text-ink mb-3">
                    Prefer WhatsApp?
                  </h3>
      <p className="font-body text-lg text-muted mb-8 max-w-xs">
                    Message us directly for fastest response.
                  </p>
      <a className="inline-flex items-center gap-2 bg-primary hover:bg-primary/15 text-background font-body text-sm px-6 py-3.5 rounded-lg transition-all shadow-sm font-semibold tracking-wide" href="https://wa.me/96171070823" rel="noopener noreferrer" target="_blank">
      <span className="material-symbols-outlined text-[20px]">chat</span>
      <span>WhatsApp Direct</span>
      </a>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="w-full bg-surface py-12" id="info-cards">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="bg-surface rounded-xl p-8 text-center flex flex-col items-center justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm ring-1 ring-muted/40">
      <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-primary mb-5">
      <span className="material-symbols-outlined text-[26px]">call</span>
      </div>
      <h3 className="font-heading text-2xl font-semibold text-ink mb-2">Call Us</h3>
      <a className="font-body text-lg text-ink hover:text-primary transition-colors font-medium mt-auto" href="tel:+96171070823">
                  +961 71 070 823
                </a>
      </div>
      
      <div className="bg-surface rounded-xl p-8 text-center flex flex-col items-center justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm ring-1 ring-muted/40">
      <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-primary mb-5">
      <span className="material-symbols-outlined text-[26px]">chat</span>
      </div>
      <h3 className="font-heading text-2xl font-semibold text-ink mb-2">WhatsApp</h3>
      <a className="font-body text-lg text-ink hover:text-primary transition-colors font-medium mt-auto" href="https://wa.me/96171070823" rel="noopener noreferrer" target="_blank">
                  Chat with us
                </a>
      </div>
      
      <div className="bg-surface rounded-xl p-8 text-center flex flex-col items-center justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm ring-1 ring-muted/40">
      <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-primary mb-5">
      <span className="material-symbols-outlined text-[26px]">location_on</span>
      </div>
      <h3 className="font-heading text-2xl font-semibold text-ink mb-2">Visit Us</h3>
      <span className="font-body text-lg text-ink mt-auto">
                  Baakline, Chouf, Mount Lebanon
                </span>
      </div>
      </div>
      </div>
      </section>
      
      <section className="w-full bg-surface py-16" id="address-map">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start">
      <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
      <div>
      <h2 className="font-heading text-4xl font-semibold text-ink mt-1">Find Us</h2>
      </div>
      <a className="inline-flex items-center gap-2 text-primary hover:text-primary font-body text-sm transition-colors group" href="https://maps.google.com/?q=Baakline,Chouf,Mount+Lebanon" rel="noopener noreferrer" target="_blank">
      <span className="underline underline-offset-4 font-semibold">Open in Google Maps</span>
      <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">north_east</span>
      </a>
      </div>
      <div className="w-full rounded-2xl overflow-hidden shadow-sm bg-surface aspect-[16/9] md:aspect-[21/9] max-h-[440px] relative">
      <iframe className="w-full h-full border-0" height="400" loading="lazy" src="https://www.google.com/maps/embed?pb=Baakline,Chouf,Mount+Lebanon" style={{ border: '0' }} title="Map" width="100%"></iframe>
      </div>
      </div>
      </section>
      
      <section className="w-full bg-surface py-20" id="faq">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="text-center mb-12">
      <h2 className="font-heading text-4xl font-semibold text-ink mt-2">
                Frequently Asked Questions
              </h2>
      </div>
      <div className="flex flex-col gap-4" id="faq-accordion">
      
      <div className="faq-item bg-surface rounded-xl overflow-hidden shadow-sm transition-all">
      <button aria-expanded="false" className="faq-trigger w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-heading text-2xl sm:text-2xl font-semibold text-ink hover:text-primary transition-colors cursor-pointer" type="button">
      <span>What ages do you accept?</span>
      <span className="material-symbols-outlined text-[24px] text-muted transition-transform duration-200 faq-icon">expand_more</span>
      </button>
      <div className="faq-content hidden px-6 pb-6 pt-1 text-muted font-body text-base leading-relaxed">
                  We welcome students from age 3 to 75. Youth programs start at 3, adult programs from 16.
                </div>
      </div>
      
      <div className="faq-item bg-surface rounded-xl overflow-hidden shadow-sm transition-all">
      <button aria-expanded="false" className="faq-trigger w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-heading text-2xl sm:text-2xl font-semibold text-ink hover:text-primary transition-colors cursor-pointer" type="button">
      <span>Can I try a class before enrolling?</span>
      <span className="material-symbols-outlined text-[24px] text-muted transition-transform duration-200 faq-icon">expand_more</span>
      </button>
      <div className="faq-content hidden px-6 pb-6 pt-1 text-muted font-body text-base leading-relaxed">
                  Yes, trial classes are available. Contact us via WhatsApp to arrange a visit.
                </div>
      </div>
      
      <div className="faq-item bg-surface rounded-xl overflow-hidden shadow-sm transition-all">
      <button aria-expanded="false" className="faq-trigger w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-heading text-2xl sm:text-2xl font-semibold text-ink hover:text-primary transition-colors cursor-pointer" type="button">
      <span>Do you offer scholarships?</span>
      <span className="material-symbols-outlined text-[24px] text-muted transition-transform duration-200 faq-icon">expand_more</span>
      </button>
      <div className="faq-content hidden px-6 pb-6 pt-1 text-muted font-body text-base leading-relaxed">
                  Yes, we have awarded 49 scholarships since 2023. Need-based and merit scholarships are available. Inquire for details.
                </div>
      </div>
      
      <div className="faq-item bg-surface rounded-xl overflow-hidden shadow-sm transition-all">
      <button aria-expanded="false" className="faq-trigger w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-heading text-2xl sm:text-2xl font-semibold text-ink hover:text-primary transition-colors cursor-pointer" type="button">
      <span>Are there programs for students with disabilities?</span>
      <span className="material-symbols-outlined text-[24px] text-muted transition-transform duration-200 faq-icon">expand_more</span>
      </button>
      <div className="faq-content hidden px-6 pb-6 pt-1 text-muted font-body text-base leading-relaxed">
                  Yes, we run adaptive gymnastics, circus and movement classes with trained coaches. Inclusion is central to our mission.
                </div>
      </div>
      
      <div className="faq-item bg-surface rounded-xl overflow-hidden shadow-sm transition-all">
      <button aria-expanded="false" className="faq-trigger w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-heading text-2xl sm:text-2xl font-semibold text-ink hover:text-primary transition-colors cursor-pointer" type="button">
      <span>What should I wear to class?</span>
      <span className="material-symbols-outlined text-[24px] text-muted transition-transform duration-200 faq-icon">expand_more</span>
      </button>
      <div className="faq-content hidden px-6 pb-6 pt-1 text-muted font-body text-base leading-relaxed">
                  Comfortable, form-fitting athletic wear. No jewelry. Barefoot for gymnastics and circus; appropriate shoes for dance.
                </div>
      </div>
      </div>
      </div>
      </section>
      
      
      </div>
    </>
  );
}
