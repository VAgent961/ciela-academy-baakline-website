export default function AboutSection1() {
  return (
    <>
      <div className="flex flex-col w-full">
      
      <section className="relative w-full min-h-[614px] flex flex-col justify-center items-center text-center px-6 py-20 bg-dark text-background overflow-hidden" id="hero">
      
      <div className="absolute inset-0 pointer-events-none opacity-5">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
      <pattern height="64" id="arch-grid" patternunits="userSpaceOnUse" width="64">
      <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="1"></path>
      <circle cx="32" cy="32" fill="currentColor" r="2"></circle>
      </pattern>
      </defs>
      <rect fill="url(#arch-grid)" height="100%" width="100%"></rect>
      </svg>
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
      <h1 className="font-heading text-white text-[clamp(48px,6vw,80px)] font-bold leading-[1.1] tracking-[-0.03em] max-w-4xl">
              Founded by Dr. Hanadi Rajeh, 2023
            </h1>
      <p className="font-body text-white/80 text-[18px] max-w-2xl mt-6 leading-relaxed font-normal">
              A multidisciplinary academy rooted in Baakline, serving the Chouf region and beyond.
            </p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
      </section>
      
      <section className="w-full py-20" id="founder-story">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      
      <div className="lg:col-span-5">
      <div className="aspect-[3/4] bg-secondary/15 rounded-[20px] flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-sm group">
      
      <svg className="absolute inset-0 w-full h-full text-muted/30 pointer-events-none" fill="none" viewBox="0 0 400 533" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="266" r="180" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1.5"></circle>
      <circle cx="200" cy="266" r="120" stroke="currentColor" strokeWidth="1"></circle>
      <path d="M40 266 H360" stroke="currentColor" strokeDasharray="2 4" strokeWidth="1"></path>
      <path d="M200 86 V446" stroke="currentColor" strokeDasharray="2 4" strokeWidth="1"></path>
      </svg>
      
      <div className="relative z-10 w-28 h-28 rounded-2xl bg-surface flex items-center justify-center shadow-md transition-transform duration-500 ease-out group-hover:scale-105">
      <span className="material-symbols-outlined text-primary text-[56px] select-none" style={{ fontVariationSettings: '\'FILL\' 1' }}>
                      school
                    </span>
      </div>
      
      <div className="relative z-10 mt-6 text-center">
      <span className="font-heading text-2xl font-bold text-ink tracking-tight block">DHR</span>
      <span className="font-body text-xs uppercase tracking-widest text-ink mt-1 block">Founder &amp; Director</span>
      </div>
      
      <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-muted/30"></div>
      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-muted/30"></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-muted/30"></div>
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-muted/30"></div>
      </div>
      </div>
      
      <div className="lg:col-span-7 flex flex-col">
      <h2 className="font-heading text-[clamp(28px,3.5vw,40px)] font-semibold text-ink leading-[1.3] tracking-[-0.01em] mb-3">
                  Dr. Hanadi Rajeh
                </h2>
      <p className="font-heading text-[18px] font-medium text-primary mb-6">
                  Athlete, educator, community builder.
                </p>
      <p className="font-body text-[18px] text-ink leading-relaxed font-normal">
                  Dr. Hanadi Rajeh founded Ciela Academy in 2023 to create a space where movement, creativity and inclusion intersect. Her background spans competitive gymnastics, circus arts and academic research in physical education. The academy reflects her vision: a school where every student — regardless of age, ability or background — finds a path to growth.
                </p>
      
      <div className="mt-8 pt-6 border-t border-secondary/50 grid grid-cols-2 gap-4">
      <div>
      <span className="font-body text-xs uppercase tracking-wider text-muted block">Disciplines</span>
      <span className="font-heading text-ink font-semibold text-sm mt-0.5 block">Gymnastics • Circus Arts • Physical Pedagogy</span>
      </div>
      <div>
      <span className="font-body text-xs uppercase tracking-wider text-muted block">Location</span>
      <span className="font-heading text-ink font-semibold text-sm mt-0.5 block">Baakline, Chouf District</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="w-full py-10" id="mission">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="bg-secondary/15 rounded-[20px] p-8 md:p-14 text-center relative overflow-hidden shadow-sm">
      
      <h2 className="font-heading text-[clamp(28px,3.5vw,40px)] font-semibold text-ink leading-[1.3] mb-3">
                Our Mission
              </h2>
      <p className="font-body text-[18px] text-ink/80 max-w-xl mx-auto mb-10 leading-normal">
                Four pillars guide every class, event and decision.
              </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto relative z-10">
      
      <div className="flex items-start gap-4 p-5 bg-surface/70 rounded-[12px] border border-surface/80 shadow-sm transition-all duration-300 hover:bg-surface">
      <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-0.5" style={{ fontVariationSettings: '\'FILL\' 1' }}>
                    diversity_3
                  </span>
      <div className="font-body text-[18px] text-ink leading-snug">
                    Inclusion — Every body belongs here. Adaptive programs, scholarships, disability-informed coaching.
                  </div>
      </div>
      
      <div className="flex items-start gap-4 p-5 bg-surface/70 rounded-[12px] border border-surface/80 shadow-sm transition-all duration-300 hover:bg-surface">
      <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-0.5" style={{ fontVariationSettings: '\'FILL\' 1' }}>
                    verified
                  </span>
      <div className="font-body text-[18px] text-ink leading-snug">
                    Excellence — Certified coaches, structured progression, level exams, safety standards.
                  </div>
      </div>
      
      <div className="flex items-start gap-4 p-5 bg-surface/70 rounded-[12px] border border-surface/80 shadow-sm transition-all duration-300 hover:bg-surface">
      <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-0.5" style={{ fontVariationSettings: '\'FILL\' 1' }}>
                    groups
                  </span>
      <div className="font-body text-[18px] text-ink leading-snug">
                    Community — Movie nights, family days, workshops, partnerships with schools and NGOs.
                  </div>
      </div>
      
      <div className="flex items-start gap-4 p-5 bg-surface/70 rounded-[12px] border border-surface/80 shadow-sm transition-all duration-300 hover:bg-surface">
      <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-0.5" style={{ fontVariationSettings: '\'FILL\' 1' }}>
                    sentiment_very_satisfied
                  </span>
      <div className="font-body text-[18px] text-ink leading-snug">
                    Joy — Play, creativity and celebration woven into rigorous training.
                  </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="w-full py-16" id="credentials">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      
      <div className="mb-10">
      <h2 className="font-heading text-4xl font-bold text-ink tracking-tight">Academic &amp; Programmatic Framework</h2>
      </div>
      <div className="flex flex-col gap-5">
      
      <div className="bg-surface rounded-[20px] p-6 md:p-8 border border-secondary/60 flex items-start gap-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
      <span className="material-symbols-outlined text-primary w-6 h-6 shrink-0 mt-1 text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>
                  check_circle
                </span>
      <div className="flex flex-col flex-1 min-w-0">
      <span className="text-[15px] bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full w-fit mb-2 inline-block">
                    Quality
                  </span>
      <h3 className="font-heading text-[clamp(22px,2.5vw,28px)] font-medium text-ink mb-2 leading-snug">
                    Certified Coaches
                  </h3>
      <p className="font-body text-[18px] text-secondary leading-relaxed">
                    All lead coaches hold recognized certifications in their disciplines. Ongoing professional development.
                  </p>
      </div>
      </div>
      
      <div className="bg-surface rounded-[20px] p-6 md:p-8 border border-secondary/60 flex items-start gap-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
      <span className="material-symbols-outlined text-primary w-6 h-6 shrink-0 mt-1 text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>
                  check_circle
                </span>
      <div className="flex flex-col flex-1 min-w-0">
      <span className="text-[15px] bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full w-fit mb-2 inline-block">
                    Quality
                  </span>
      <h3 className="font-heading text-[clamp(22px,2.5vw,28px)] font-medium text-ink mb-2 leading-snug">
                    Level Exams
                  </h3>
      <p className="font-body text-[18px] text-secondary leading-relaxed">
                    Structured assessment twice yearly. Clear progression markers. Recognized by national federations where applicable.
                  </p>
      </div>
      </div>
      
      <div className="bg-surface rounded-[20px] p-6 md:p-8 border border-secondary/60 flex items-start gap-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
      <span className="material-symbols-outlined text-primary w-6 h-6 shrink-0 mt-1 text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>
                  check_circle
                </span>
      <div className="flex flex-col flex-1 min-w-0">
      <span className="text-[15px] bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full w-fit mb-2 inline-block">
                    Impact
                  </span>
      <h3 className="font-heading text-[clamp(22px,2.5vw,28px)] font-medium text-ink mb-2 leading-snug">
                    49 Scholarships Awarded
                  </h3>
      <p className="font-body text-[18px] text-secondary leading-relaxed">
                    Need-based and merit scholarships for local families. Removing financial barriers to participation.
                  </p>
      </div>
      </div>
      
      <div className="bg-surface rounded-[20px] p-6 md:p-8 border border-secondary/60 flex items-start gap-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
      <span className="material-symbols-outlined text-primary w-6 h-6 shrink-0 mt-1 text-[24px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>
                  check_circle
                </span>
      <div className="flex flex-col flex-1 min-w-0">
      <span className="text-[15px] bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full w-fit mb-2 inline-block">
                    Impact
                  </span>
      <h3 className="font-heading text-[clamp(22px,2.5vw,28px)] font-medium text-ink mb-2 leading-snug">
                    Disability Programs
                  </h3>
      <p className="font-body text-[18px] text-secondary leading-relaxed">
                    Adaptive gymnastics, circus and movement classes. Trained coaches. Inclusive environment by design.
                  </p>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="w-full py-16" id="inclusion-band">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="bg-dark py-16 px-8 md:px-16 text-center rounded-[20px] text-background relative overflow-hidden shadow-xl">
      
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
      <div className="w-[500px] h-[500px] rounded-full border border-white"></div>
      <div className="w-[700px] h-[700px] rounded-full border border-white absolute"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
      <span className="material-symbols-outlined text-primary text-[40px] mb-4" style={{ fontVariationSettings: '\'FILL\' 1' }}>
                  all_inclusive
                </span>
      <h2 className="font-heading text-[clamp(28px,3.5vw,40px)] font-semibold text-white mb-4 leading-tight">
                  Every Body Belongs Here
                </h2>
      <p className="font-body text-[18px] text-white/80 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
                  Inclusion is not a program. It is how we operate.
                </p>
      <a className="bg-primary hover:bg-[#D96B4A] text-white font-medium px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg" href="https://wa.me/96171070823" rel="noopener noreferrer" target="_blank">
      <span className="material-symbols-outlined text-[22px]">chat</span>
      <span>Message on WhatsApp</span>
      </a>
      </div>
      </div>
      </div>
      </section>
      </div>
    </>
  );
}
