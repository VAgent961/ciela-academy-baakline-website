import { Calendar, Clock, Target, MessageCircle } from 'lucide-react';
import MobileActionBar from '@/components/MobileActionBar';

export const metadata = {
  title: 'Weekly Schedule — Ciela Academy Baakline',
  description: 'Weekly class timetable for gymnastics, circus, dance, theater, arts and wellness. Baakline, Chouf.',
};

export default function SchedulePage() {
  const schedule = [
    { day: 'Monday', classes: 'Gymnastics fundamentals, Youth circus, Ballet basics', time: '3:30–6:30 PM' },
    { day: 'Wednesday', classes: 'Rhythmic gymnastics, Aerial silks, Dabke', time: '4:00–7:00 PM' },
    { day: 'Thursday', classes: 'Artistic gymnastics, Hip Hop, Theater, Visual arts', time: '3:00–8:00 PM' },
    { day: 'Friday', classes: 'Circus arts, Music, Chess, Yoga', time: '3:00–8:00 PM' },
    { day: 'Saturday', classes: 'All youth programs, Adult gymnastics, Family sessions', time: '10:00 AM–3:00 PM' }
  ];

  return (
    <div className="bg-background pt-24">
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-ink mb-6">Weekly Schedule</h1>
          <p className="text-lg text-muted mb-8">Term dates and enrollment: inquire via WhatsApp.</p>
          <a href="https://wa.me/96171070823" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-4 rounded-md font-bold inline-flex items-center gap-3 hover:bg-accent transition-all">
            <MessageCircle size={20} />
            Inquire via WhatsApp
          </a>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-ink mb-4">Weekly Timetable</h2>
            <p className="text-muted">Color-coded by program type. Subject to term changes.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-4 px-6 font-heading font-bold text-ink uppercase tracking-wider text-sm">Day</th>
                  <th className="py-4 px-6 font-heading font-bold text-ink uppercase tracking-wider text-sm">Time</th>
                  <th className="py-4 px-6 font-heading font-bold text-ink uppercase tracking-wider text-sm">Classes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary/20">
                {schedule.map((row, i) => (
                  <tr key={i} className="hover:bg-background transition-colors">
                    <td className="py-6 px-6 font-bold text-ink">{row.day}</td>
                    <td className="py-6 px-6 text-primary font-medium tabular-nums">{row.time}</td>
                    <td className="py-6 px-6 text-muted">{row.classes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-sm text-muted italic">Tuesday and Sunday closed. Monthly classes and special events run on a separate calendar.</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold mb-4">Level Exams</h2>
            <p className="text-muted">Structured progression with recognized assessment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Beginner', desc: 'Fundamental skills assessment. Safety awareness. Basic terminology.' },
              { title: 'Intermediate', desc: 'Compound sequences. Apparatus proficiency. Routine construction.' },
              { title: 'Advanced', desc: 'Competitive-level difficulty. Artistry scores. Coach recommendation required.' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-lg bg-surface border border-secondary/20 text-center">
                <Target className="text-primary mx-auto mb-6" size={40} />
                <h3 className="font-heading font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Reserve Your Spot</h2>
          <p className="text-white/60 mb-10">Classes fill quickly. Secure your place for the upcoming term.</p>
          <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-md font-bold hover:bg-accent transition-all inline-block">
            Book via Contact Form
          </Link>
        </div>
      </section>

      <MobileActionBar />
    </div>
  );
}
