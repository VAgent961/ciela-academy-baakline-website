'use client';
import { useState } from 'react';
import { Phone, MessageCircle, MapPin, HelpCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import MobileActionBar from '@/components/MobileActionBar';

export default function ContactPage() {
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
    <div className="bg-background pt-24">
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-ink mb-6">Get in touch</h1>
          <p className="text-lg text-muted">We reply within 24 hours. WhatsApp, call or visit us in Baakline.</p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-heading text-3xl font-bold text-ink mb-4">Send a Message</h2>
              <p className="text-muted mb-8">Tell us what you are looking for. We will match you with the right program.</p>
              
              {status === 'success' ? (
                <div className="bg-background p-12 rounded-2xl border border-primary/20 text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-ink">Message Sent!</h3>
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-ink uppercase tracking-wider">Full Name</label>
                      <input id="name" name="name" required type="text" className="w-full px-4 py-3 rounded-md bg-background border border-secondary/30 focus:border-primary outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-ink uppercase tracking-wider">Phone Number</label>
                      <input id="phone" name="phone" required type="tel" className="w-full px-4 py-3 rounded-md bg-background border border-secondary/30 focus:border-primary outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-ink uppercase tracking-wider">Email Address</label>
                    <input id="email" name="email" type="email" className="w-full px-4 py-3 rounded-md bg-background border border-secondary/30 focus:border-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="program" className="text-sm font-bold text-ink uppercase tracking-wider">Program Interest</label>
                    <select id="program" name="program" className="w-full px-4 py-3 rounded-md bg-background border border-secondary/30 focus:border-primary outline-none transition-all">
                      <option value="Youth Gymnastics">Youth Gymnastics</option>
                      <option value="Circus Arts">Circus Arts</option>
                      <option value="Dance">Dance</option>
                      <option value="Theater & Arts">Theater & Arts</option>
                      <option value="Music & Chess">Music & Chess</option>
                      <option value="Adult Gymnastics">Adult Gymnastics</option>
                      <option value="Adult Circus">Adult Circus</option>
                      <option value="Yoga & Wellness">Yoga & Wellness</option>
                      <option value="Scholarship Inquiry">Scholarship Inquiry</option>
                      <option value="Disability Programs">Disability Programs</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-ink uppercase tracking-wider">Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-md bg-background border border-secondary/30 focus:border-primary outline-none transition-all"></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-md border border-red-100">
                      <AlertCircle size={20} />
                      <p className="text-sm font-medium">{error}</p>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="bg-primary text-white px-8 py-4 rounded-md font-bold w-full flex items-center justify-center gap-3 hover:bg-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 space-y-8">
              <h2 className="font-heading text-3xl font-bold text-ink mb-4">Other Ways to Reach Us</h2>
              <p className="text-muted mb-8">Choose what works for you.</p>

              <div className="bg-secondary p-10 rounded-lg text-center">
                <MessageCircle size={48} className="text-primary mx-auto mb-6" />
                <h3 className="font-heading font-bold text-2xl mb-4">Prefer WhatsApp?</h3>
                <p className="text-ink/70 mb-8">Message us directly for the fastest response.</p>
                <a href="https://wa.me/96171070823" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-4 rounded-md font-bold inline-block hover:bg-accent transition-all">
                  WhatsApp Direct
                </a>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <a href="tel:+96171070823" className="flex items-center gap-4 p-6 bg-surface border border-secondary/20 rounded-lg hover:shadow-sm transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted uppercase tracking-widest">Call Us</div>
                    <div className="font-bold text-ink">+961 71 070 823</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-6 bg-surface border border-secondary/20 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted uppercase tracking-widest">Visit Us</div>
                    <div className="font-bold text-ink">Baakline, Chouf, Mount Lebanon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted">Quick answers. Contact us for anything else.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'What ages do you accept?', a: 'Programs for ages 3 through 75. Youth tracks (3 to 15), teen tracks (16 to 18), adult tracks (19 to 75).' },
              { q: 'Do you offer trial classes?', a: 'Yes. First trial class available for new students. Contact us to schedule.' },
              { q: 'How do scholarships work?', a: '49 scholarships awarded since 2023. Need-based and merit applications reviewed each term.' },
              { q: 'Are programs accessible for disabilities?', a: 'Yes. Adaptive gymnastics, circus and movement classes with trained coaches. Inclusive by design.' },
              { q: 'What should I wear to class?', a: 'Comfortable athletic wear. Barefoot for gymnastics and circus. Dance shoes per style. No jewelry.' }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-surface rounded-lg border border-secondary/20">
                <h4 className="font-bold text-ink mb-2 flex items-center gap-3">
                  <HelpCircle size={18} className="text-primary" />
                  {faq.q}
                </h4>
                <p className="text-muted text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MobileActionBar />
    </div>
  );
}
