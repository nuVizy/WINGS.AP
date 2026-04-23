import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function WhatWeOffer() {
  const services = [
    {
      id: '01',
      title: 'Trinity Arts Awards',
      description:
        'Wings AP delivers Trinity Arts Awards qualifications through personalised music sessions covering lyric writing, rap, music production, beat-making and performance. Trinity Arts Awards are nationally recognised qualifications that give young people a tangible, celebrated achievement, often the first positive educational record some of our young people have ever had.',
      suitableFor:
        'Young people in AP settings, those on reduced timetables, or those working toward reintegration, including those with EHCP plans.',
      delivery:
        'Group or one-to-one. AP schools, community settings, The Message Trust studios Manchester.',
      image: '/studio.webp',
    },
    {
      id: '02',
      title: 'One-to-One Mentoring',
      description:
        "Structured one-to-one mentoring using music as the primary engagement tool. Sessions build rapport and trust, address barriers to learning, develop emotional regulation and social skills, and support the young person's journey toward positive outcomes. Music is the vehicle; personal development is the destination. Nick's lived experience means he connects with young people authentically and without judgement.",
      suitableFor:
        "Young people with SEMH needs, those with EHCP plans, or those who haven't engaged with other provision and need intensive one-to-one support.",
      delivery:
        'One-to-one. AP schools, community settings, The Message Trust studios Manchester.',
      image: '/studio4.webp',
    },
    {
      id: '03',
      title: 'Music-Based Wellbeing Sessions',
      description:
        "Sessions that use the wellbeing benefits of music-making to support young people's self-expression, emotional regulation and confidence. Delivered within a trauma-informed, relational framework, these sessions provide a safe, non-pressured space for young people who are struggling emotionally or who are not yet ready to engage with formal learning. These sessions are not clinical music therapy. They are delivered by an experienced youth practitioner who uses music intentionally to support young people's wellbeing and re-engagement.",
      suitableFor:
        'Young people with significant SEMH needs, those with EHCP plans, or those carrying trauma or adverse childhood experiences.',
      delivery: 'One-to-one. All Wings AP settings.',
      image: '/studio5.webp',
    },
  ];

  const locations = [
    "In AP schools and settings, within the host setting's safeguarding framework",
    'In community venues across Greater Manchester',
    'At The Message Trust studios, Sharston, Manchester M22 4RG',
    'On-site at school where preferred by the commissioner',
  ];

  return (
    <div className="bg-brand-black">
      <SEO
        title="What We Offer | Wings AP | Alternative Provision Manchester"
        description="Wings AP offers Trinity Arts Awards qualifications, one-to-one mentoring and music-based wellbeing sessions for young people in AP across Greater Manchester."
        canonical="/what-we-offer"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/studio3.webp"
            alt="Wings AP Music Session"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.5em] text-brand-orange mb-6 block">
              Our Provision
            </span>
            <h1 className="text-[15vw] md:text-[12vw] font-display uppercase leading-[0.85] tracking-tighter mb-8">
              WHAT WE
              <br />
              <span className="text-stroke">OFFER</span>
            </h1>
            <p className="max-w-xl mx-auto text-white/60 text-base md:text-lg leading-relaxed">
              Three distinct services, all using music as a tool for engagement, achievement and
              transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-brand-ink">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-40">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <span className="text-[10px] font-medium text-brand-orange uppercase tracking-[0.4em] mb-4 block">
                    {service.id}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-display uppercase tracking-tighter mb-8">
                    {service.title}
                  </h2>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 md:border-l border-white/10 md:pl-8">
                    {service.description}
                  </p>
                  <div className="space-y-4 bg-brand-black/50 rounded-2xl p-6 border border-white/5">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                      <span className="text-[10px] font-medium text-brand-orange uppercase tracking-[0.3em] min-w-[6rem] pt-0.5 shrink-0">
                        Suitable for
                      </span>
                      <p className="text-white/60 text-sm leading-relaxed">{service.suitableFor}</p>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                      <span className="text-[10px] font-medium text-brand-orange uppercase tracking-[0.3em] min-w-[6rem] pt-0.5 shrink-0">
                        Delivery
                      </span>
                      <p className="text-white/60 text-sm leading-relaxed">{service.delivery}</p>
                    </div>
                  </div>
                </div>

                <div className={`relative group ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -inset-4 border border-brand-orange/20 rounded-2xl -z-10 group-hover:inset-0 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Locations */}
      <section className="py-32 bg-brand-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-16">
              Delivery
              <br />
              <span className="text-brand-orange">Locations</span>
            </h2>
            <div>
              {locations.map((loc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-6 py-8 border-b border-white/5 last:border-b-0"
                >
                  <span className="text-brand-orange font-heading font-semibold shrink-0 mt-0.5">
                    →
                  </span>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">{loc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
