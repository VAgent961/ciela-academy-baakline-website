import { Dumbbell, Sparkles, Music, Heart, Brain, Palette, ArrowRight, Star, Users, Target } from 'lucide-react';
import Link from 'next/link';
import MobileActionBar from '@/components/MobileActionBar';

export const metadata = {
  title: 'Programs — Ciela Academy Baakline',
  description: 'Gymnastics, circus arts, dance, theater, visual arts, music, chess, yoga and mindfulness. Youth and adult programs. Ages 3–75. Inclusive and adaptive.',
};

export default function ProgramsPage() {
  const categories = [
    { icon: <Dumbbell />, title: 'Gymnastics & Circus', desc: 'Artistic gymnastics, rhythmic, aerials, juggling, balance. Level exams and performance opportunities. Ages 3–75.', color: 'bg-primary/10' },
    { icon: <Music />, title: 'Dance & Theater', desc: 'Ballet, Dabke, Hip Hop, acting, stagecraft. Technique meets expression. Ages 3–adult.', color: 'bg-secondary' },
    { icon: <Palette />, title: 'Wellness & Arts', desc: 'Yoga, mindfulness, visual arts, music, chess. Creative and cognitive development for all ages.', color: 'bg-accent/10' }
  ];

  const details = [
    { title: 'Youth Gymnastics', desc: 'Progressive levels from fundamentals to competitive. Certified coaches. Safe equipment. Term-based with level exams twice yearly.' },
    { title: 'Circus Arts', desc: 'Aerial silks, lyra, trapeze, juggling, handstands. Small groups. Emphasis on safety and creative exploration. All levels welcome.' },
    { title: 'Dance Programs', desc: 'Ballet (RAD-aligned), Dabke (traditional), Hip Hop (contemporary). Technique, choreography, annual showcase.' },
    { title: 'Theater & Visual Arts', desc: 'Acting, improvisation, stagecraft. Drawing, painting, mixed media. Portfolio development for older students.' },
    { title: 'Music & Chess', desc: 'Individual and group music lessons. Chess for strategy and focus. Beginner to advanced.' },
    { title: 'Adult Gymnastics & Mobility', desc: 'Beginner-friendly. Strength, flexibility, basic skills. No experience needed. Ages 16–75.' },
    { title: 'Adult Circus & Aerial', desc: 'Silks, lyra, conditioning. Progressive curriculum. Supportive community. All fitness levels.' },
    { title: 'Yoga & Wellness', desc: 'Hatha, vinyasa, restorative yoga. Mindfulness meditation. Stress reduction and mobility. Ages 16–75.' }
  ];

  return (
    <div className="bg-background pt-24">
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-ink mb-6">Programs for Every Age</h1>
          <p className="text-lg text-muted">From first steps to lifelong practice. Youth and adult tracks across movement, arts and wellness.</p>
          <div className="mt-10">
            <a href="https://wa.me/96171070823" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-4 rounded-md font-bold inline-flex items-center gap-3 hover:bg-accent transition-all">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-ink mb-4">Explore by Category</h2>
            <p className="text-muted">Three pathways. Choose yours or mix them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className={`p-10 rounded-lg ${cat.color} flex flex-col h-full border border-secondary/20`}>
                <div className="text-primary mb-6">{cat.icon}</div>
                <h3 className="font-heading font-bold text-2xl mb-4">{cat.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed mb-8">{cat.desc}</p>
                <Link href="/contact" className="mt-auto font-bold text-primary flex items-center gap-2 hover:gap-3 transition-all">
                  Inquire <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-ink mb-4">Program Details</h2>
            <p className="text-muted">What each track includes, who it serves and how to start.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {details.map((detail, i) => (
              <div key={i} className="border-l border-primary pl-8 group">
                <h3 className="font-heading font-bold text-xl mb-4 group-hover:text-primary transition-colors">{detail.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{detail.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link href="/contact" className="bg-secondary text-ink px-8 py-4 rounded-md font-bold hover:bg-primary hover:text-white transition-all inline-block">
              Inquire About a Program
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Choose Your Path</h2>
          <p className="text-white/60 mb-10">Not sure where to start? We help you find the right fit.</p>
          <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-md font-bold hover:bg-accent transition-all inline-block">
            Contact Us
          </Link>
        </div>
      </section>

      <MobileActionBar />
    </div>
  );
}
