import { Dumbbell, Sparkles, Music, ShieldCheck, Award, Star, Users, Film, Calendar, Trophy, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import MobileActionBar from '@/components/MobileActionBar';

export const metadata = {
  title: 'Ciela Academy Baakline — Gymnastics, Circus & Arts School',
  description: 'Multidisciplinary creative arts, gymnastics, and circus school in Baakline, Chouf. Ages 3–75. Founded 2023. Inclusive programs, scholarships, community events.',
};

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="min-h-[90dvh] flex items-center pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-xs tracking-[0.2em] uppercase mb-6">
                Founded 2023 · Baakline, Chouf
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-ink leading-[1.1] tracking-tight mb-6">
                Ciela <span className="text-primary">Academy</span>
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10">
                Gymnastics, circus, dance, theater, arts and wellness for every age in Baakline, Chouf. Founded by Dr. Hanadi Rajeh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/96171070823" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-4 rounded-md font-bold flex items-center justify-center gap-3 hover:bg-accent transition-all">
                  <MessageCircle size={20} />
                  Message on WhatsApp
                </a>
                <a href="tel:+96171070823" className="border-2 border-secondary text-ink px-8 py-4 rounded-md font-bold flex items-center justify-center gap-3 hover:bg-secondary/20 transition-all">
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-primary text-white p-12 rounded-lg aspect-square flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="grid grid-cols-4 h-full">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border border-white/20"></div>
                    ))}
                  </div>
                </div>
                <Sparkles size={80} className="mb-8 text-secondary" />
                <h2 className="font-heading text-4xl font-bold mb-4">Movement Meets Meaning</h2>
                <p className="text-white/80">Multidisciplinary programs for ages 3 to 75.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Highlight */}
      <section className="py-24 bg-surface" id="programs-highlight">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Programs for Every Interest</h2>
              <p className="text-lg text-muted mb-12">Three core pillars, dozens of ways to move, create and grow.</p>
              
              <div className="space-y-6">
                {[
                  { icon: <Dumbbell />, title: 'Gymnastics', desc: 'Artistic and rhythmic gymnastics with certified coaches. Level exams and progression pathways.' },
                  { icon: <Sparkles />, title: 'Circus Arts', desc: 'Aerials, juggling, balance and flow arts. Beginner to advanced in a safe environment.' },
                  { icon: <Music />, title: 'Dance', desc: 'Ballet, Dabke, Hip Hop. Technique, expression and cultural connection through movement.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-xl bg-background border border-secondary/20 hover:shadow-sm transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/programs" className="inline-flex items-center gap-2 text-primary font-bold mt-10 hover:gap-3 transition-all">
                View All Programs <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-secondary text-ink p-12 rounded-lg flex flex-col justify-center min-h-[400px]">
              <div className="text-6xl md:text-8xl font-heading font-bold text-primary mb-4">49</div>
              <h3 className="text-2xl font-bold mb-4">Scholarships Awarded</h3>
              <p className="text-ink/70 leading-relaxed">
                Empowering Chouf's next generation of artists and athletes regardless of financial background through our community grant initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 bg-dark text-white p-12 rounded-lg">
              <h2 className="font-heading text-3xl font-bold mb-6">Trusted by families across Chouf</h2>
              <p className="text-white/60 mb-8">From toddlers to teens and adults — nurturing poise, discipline, and creative confidence.</p>
              <Link href="/about" className="bg-primary text-white px-6 py-3 rounded-md font-bold inline-block hover:bg-accent transition-all">
                Read Our Story
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheck />, text: 'Certified coaches across all disciplines' },
                  { icon: <Award />, text: 'Structured level exams with progression' },
                  { icon: <Star />, text: 'Google reviews from local families' },
                  { icon: <Users />, text: 'Inclusive programs for disabilities' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-surface rounded-lg border border-secondary/20">
                    <div className="text-primary">{item.icon}</div>
                    <span className="text-sm font-medium text-ink">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Community Events</h2>
            <p className="text-muted">Regular gatherings that bring families together.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Film />, title: 'Movie Nights', desc: 'Family-friendly screenings under the stars or indoors.' },
              { icon: <Calendar />, title: 'Monthly Workshops', desc: 'Hands-on sessions in arts, wellness and creative skills.' },
              { icon: <Trophy />, title: 'Special Events', desc: 'Seasonal celebrations, performances and showcases.' },
              { icon: <Users />, title: 'Family Days', desc: 'Open sessions for parents and children to play together.' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-lg bg-background border border-secondary/20 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Where Movement Meets Meaning</h2>
          <p className="text-white/60 text-lg mb-10">A school built on inclusion, excellence and joy.</p>
          <Link href="/about" className="border-2 border-primary text-primary px-8 py-4 rounded-md font-bold hover:bg-primary hover:text-white transition-all">
            Our Story
          </Link>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Begin?</h2>
            <p className="text-white/80">Join a class, ask a question or visit us in Baakline.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href="https://wa.me/96171070823" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-4 rounded-md font-bold text-center hover:bg-secondary transition-all">
              Message on WhatsApp
            </a>
            <a href="tel:+96171070823" className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-center hover:bg-white/10 transition-all">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <MobileActionBar />
    </div>
  );
}
