import { Dumbbell, Sparkles, Music, Brain, Heart, Users, Film, Calendar, Trophy, Palette, Target, Leaf } from 'lucide-react';
import MobileActionBar from '@/components/MobileActionBar';

export const metadata = {
  title: 'Gallery — Life at Ciela Academy Baakline',
  description: 'Moments from gymnastics, circus, dance, theater, arts and community events at Ciela Academy in Baakline, Chouf.',
};

export default function GalleryPage() {
  const activities = [
    { icon: <Dumbbell />, name: 'Gymnastics' },
    { icon: <Sparkles />, name: 'Circus Arts' },
    { icon: <Music />, name: 'Dance' },
    { icon: <Film />, name: 'Theater' },
    { icon: <Palette />, name: 'Visual Arts' },
    { icon: <Music />, name: 'Music' },
    { icon: <Trophy />, name: 'Chess' },
    { icon: <Leaf />, name: 'Yoga' },
    { icon: <Brain />, name: 'Mindfulness' },
    { icon: <Film />, name: 'Movie Nights' },
    { icon: <Calendar />, name: 'Workshops' },
    { icon: <Users />, name: 'Special Events' }
  ];

  return (
    <div className="bg-background pt-24">
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-ink mb-6">Life at Ciela</h1>
          <p className="text-lg text-muted">Movement, creativity and community in every frame.</p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-ink mb-4">Our Activities</h2>
            <p className="text-muted">Twelve disciplines. One community.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activities.map((item, i) => (
              <div key={i} className="aspect-square bg-secondary/30 rounded-lg flex flex-col items-center justify-center p-6 text-center hover:bg-primary hover:text-white transition-all group">
                <div className="text-primary group-hover:text-white mb-4 transition-colors">
                  {item.icon}
                </div>
                <span className="font-heading font-bold text-sm tracking-tight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Family Movie Night', desc: 'Outdoor screening with refreshments. All ages welcome.' },
              { title: 'Monthly Creative Workshop', desc: 'Hands-on session rotating through arts disciplines.' },
              { title: 'End-of-Term Showcase', desc: 'Student performances across gymnastics, circus, dance and theater.' },
              { title: 'Community Family Day', desc: 'Open gym, demo classes, meet the coaches. Free entry.' }
            ].map((event, i) => (
              <div key={i} className="p-8 rounded-lg bg-surface border border-secondary/20 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-3">{event.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MobileActionBar />
    </div>
  );
}
