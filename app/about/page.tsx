import { GraduationCap, Heart, Users, Award, CheckCircle } from 'lucide-react';
import MobileActionBar from '@/components/MobileActionBar';

export const metadata = {
  title: 'About Ciela Academy — Founder, Mission & Credentials',
  description: 'Founded 2023 by Dr. Hanadi Rajeh in Baakline, Chouf. 49 scholarships awarded. Inclusive programs for disabilities. Certified coaches.',
};

export default function AboutPage() {
  return (
    <div className="bg-background pt-24">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Founded by Dr. Hanadi Rajeh, 2023</h1>
          <p className="text-xl text-white/80 max-w-2xl">A multidisciplinary academy rooted in Baakline, serving the Chouf region and beyond.</p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-secondary p-16 rounded-lg aspect-[4/5] flex flex-col justify-center items-center text-center">
              <GraduationCap size={80} className="text-primary mb-8" />
              <h2 className="font-heading text-3xl font-bold text-ink mb-2">Dr. Hanadi Rajeh</h2>
              <p className="text-primary font-bold uppercase tracking-widest text-xs">Founder & Director</p>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink mb-6">Our Story</h2>
              <p className="text-muted leading-relaxed mb-6">
                Dr. Hanadi Rajeh founded Ciela Academy in 2023 to create a space where movement, creativity and inclusion intersect. Her background spans competitive gymnastics, circus arts and academic research in physical education.
              </p>
              <p className="text-muted leading-relaxed">
                The academy reflects her vision: a school where every student, regardless of age, ability or background, finds a path to growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted">Four pillars guide every class, event and decision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Users />, title: 'Inclusion', text: 'Every body belongs here. Adaptive programs, scholarships, disability-informed coaching.' },
              { icon: <Award />, title: 'Excellence', text: 'Certified coaches, structured progression, level exams, safety standards.' },
              { icon: <Heart />, title: 'Community', text: 'Movie nights, family days, workshops, partnerships with schools and NGOs.' },
              { icon: <Award />, title: 'Joy', text: 'Play, creativity and celebration woven into rigorous training.' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-lg bg-surface border border-secondary/20 flex gap-6">
                <div className="text-primary shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">Credentials & Impact</h2>
          <div className="space-y-4">
            {[
              'Certified Coaches: All lead coaches hold recognized certifications.',
              'Level Exams: Structured assessment twice yearly with clear progression.',
              '49 Scholarships Awarded: Removing financial barriers to participation.',
              'Disability Programs: Adaptive gymnastics and circus classes.'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-background rounded-lg border border-secondary/20">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MobileActionBar />
    </div>
  );
}
