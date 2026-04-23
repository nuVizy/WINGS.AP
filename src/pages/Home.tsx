import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ReactPlayer from 'react-player';

const Player = ReactPlayer as any;

export default function Home() {
  const services = [
    {
      title: 'Accredited Music Courses',
      image: '/studio.webp',
      text: 'Trinity Arts Awards qualifications delivered through engaging, personalised music sessions. Young people leave with a nationally recognised achievement, often their first positive educational record.',
    },
    {
      title: 'One-to-One Mentoring',
      image: '/studio3.webp',
      text: 'Structured mentoring using music as the primary engagement tool. Sessions build trust, develop emotional resilience and support young people to re-engage with learning and life.',
    },
    {
      title: 'Music-Based Wellbeing Sessions',
      image: '/studio4.webp',
      text: 'Sessions that draw on the wellbeing benefits of music-making to support self-expression, emotional regulation and confidence, delivered within a trauma-informed, relational approach.',
    },
  ];

  const whoWeWorkWith = [
    'Young people in alternative provision or at risk of exclusion',
    'Young people with SEMH (Social, Emotional and Mental Health) needs',
    'Young people with Education, Health and Care Plans (EHCPs)',
    'Looked after children and care leavers',
    'Young people who have not responded to other interventions',
  ];

  const testimonials = [
    {
      quote:
        'I feel your work provides young people with a different lens to life, providing purpose and possibility, which sometimes they have never had.',
      author: 'Anna',
      role: 'Advanced Practitioner',
      org: 'Complex Safeguarding & Missing From Home Vulnerable Adolescent Service',
    },
    {
      quote:
        "The word that springs to mind about Wings is 'Hope'. This service inspires young minds and supports those who truly need it. The impact it holds for children has been phenomenal and far reaching! Thank you Nick, for all your dedication, passion and commitment to give hope to children! Life changing!",
      author: 'Emma',
      role: 'Manager',
      org: 'Complex Safeguarding Team, Trafford',
    },
    {
      quote:
        "Your work with young people goes beyond the realms of music; it's a beacon of mentorship and a relational foundation that fosters confidence and self-esteem. Through the powerful medium of music, Wings AP creates a sanctuary, a safe space where young people feel comfortable expressing their experiences and emotions. Sessions succeed in reaching young people where other services have struggled to engage.",
      author: 'Sussana',
      role: 'SHINE Social Worker',
      org: 'Complex Safeguarding Team',
    },
  ];

  return (
    <div className="bg-brand-black">
      <SEO
        title="Wings AP | Alternative Provision Manchester | Music Enrichment & Mentoring"
        description="Wings AP delivers Trinity Arts Awards, one-to-one mentoring and music-based wellbeing sessions for young people in AP across Greater Manchester. EHCP and school commissioned."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/studio4.webp"
            alt="Wings AP Music Session"
            className="w-full h-full object-cover opacity-40 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.5em] text-brand-orange mb-6 block">
              Alternative Provision, Greater Manchester
            </span>
            <h1 className="text-[12vw] md:text-[10vw] font-display uppercase leading-[0.85] tracking-tighter mb-4">
              MUSIC THAT
              <br />
              <span className="text-stroke">TRANSFORMS.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-heading text-brand-orange tracking-tight mb-8">
              Provision that works.
            </p>
            <p className="max-w-2xl mx-auto text-white/60 text-sm md:text-base leading-relaxed mb-12">
              Wings AP delivers accredited music courses, one-to-one mentoring and music-based
              wellbeing sessions for young people in alternative provision across Greater Manchester.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/refer"
                className="bg-brand-orange text-white px-12 py-5 rounded-full font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-brand-black transition-all shadow-[0_0_30px_rgba(242,125,38,0.3)] w-full sm:w-auto text-center"
              >
                Refer a Young Person
              </Link>
              <Link
                to="/policies"
                className="border border-white/25 text-white px-12 py-5 rounded-full font-medium uppercase tracking-widest text-xs hover:border-brand-orange hover:text-brand-orange transition-all w-full sm:w-auto text-center"
              >
                Download Policy Pack
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 bg-brand-ink">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter mb-12 leading-[0.85]">
                Real Lives.
                <br />
                <span className="text-brand-orange">Real Change.</span>
              </h2>
              <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed md:border-l border-white/10 md:pl-8">
                <p>
                  Wings AP works with some of the most complex and hard-to-reach young people in
                  Greater Manchester: those in AP settings, on EHCP packages, or who have
                  disengaged from mainstream education. Led by Nick Shahlavi, an award-winning
                  musician with lived experience of the issues many of these young people face,
                  Wings AP uses music as a powerful tool for engagement, achievement and
                  transformation.
                </p>
                <p>
                  We offer Trinity Arts Awards accredited qualifications, structured mentoring
                  programmes and music-based wellbeing sessions, all delivered within a
                  trauma-informed, relational framework. Our provision is commissioned by schools
                  and local authorities across Greater Manchester and Trafford, including
                  EHCP-funded placements.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-12">
                <div className="w-16 h-px bg-brand-orange" />
                <Link
                  to="/about"
                  className="text-xs font-medium uppercase tracking-[0.3em] hover:text-brand-orange transition-colors"
                >
                  About Nick
                </Link>
              </div>
            </motion.div>

            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/studio2.webp"
                  alt="Young person in music session"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-brand-orange p-12 rounded-2xl hidden md:block shadow-2xl">
                <p className="text-3xl font-heading italic text-white">
                  "Music that <br />transforms."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter">
              Our
              <br />
              <span className="text-brand-orange">Services</span>
            </h2>
            <Link
              to="/what-we-offer"
              className="text-xs font-medium uppercase tracking-[0.3em] text-white/50 hover:text-brand-orange transition-colors"
            >
              View full details →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-ink rounded-2xl overflow-hidden border border-white/5 group hover:border-brand-orange/30 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-10">
                  <span className="text-[10px] font-medium text-brand-orange uppercase tracking-[0.4em] mb-4 block">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-heading mb-4 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="h-[60vh] relative overflow-hidden">
        <img
          src="/studio.webp"
          alt="Studio Session"
          className="w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20, letterSpacing: '0.08em' }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: '0.02em' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-[8vw] font-display uppercase text-white tracking-normal select-none text-center px-6"
          >
            TRANSFORMATION
          </motion.h2>
        </div>
      </section>

      {/* Who We Work With + Pull Quote */}
      <section className="py-32 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-12 leading-[0.85]">
                Who We
                <br />
                <span className="text-brand-orange">Work With</span>
              </h2>
              <div>
                {whoWeWorkWith.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-5 py-6 border-b border-white/5 last:border-b-0"
                  >
                    <span className="text-brand-orange shrink-0 mt-1">→</span>
                    <p className="text-white/70 text-base leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pull Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:pt-24"
            >
              <div className="relative rounded-2xl bg-brand-ink border border-white/5 p-10 md:p-14">
                <div className="text-7xl font-heading text-brand-orange opacity-20 leading-none mb-6">
                  "
                </div>
                <blockquote className="text-xl md:text-2xl font-heading italic text-white/90 leading-relaxed mb-10">
                  Music breaks down barriers and helps young people express their innermost feelings
                  and concerns. I've seen young people's confidence dramatically transform, finding
                  their voice, sometimes for the first time.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-brand-orange" />
                  <div>
                    <p className="text-brand-orange font-mono text-xs uppercase tracking-widest">
                      Nick Shahlavi
                    </p>
                    <p className="text-white/30 font-mono text-[10px] uppercase tracking-widest">
                      Founder, Wings AP
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-brand-ink border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter">
              Voices of
              <br />
              <span className="text-brand-orange">Impact</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-white/20" />
              <p className="text-[10px] text-white/40 uppercase tracking-[0.3em]">
                Trusted by professionals
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-black p-10 flex flex-col justify-between group hover:bg-brand-ink transition-colors duration-500"
              >
                <div>
                  <div className="text-4xl font-heading text-brand-orange opacity-20 mb-6 group-hover:opacity-40 transition-opacity">
                    "
                  </div>
                  <p className="text-base font-heading italic leading-relaxed text-white/80 mb-12">
                    {t.quote}
                  </p>
                </div>
                <div className="pt-8 border-t border-white/5">
                  <p className="font-mono text-[11px] font-medium text-brand-orange uppercase tracking-widest mb-2">
                    {t.author}
                  </p>
                  <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em] leading-relaxed">
                    {t.role}
                    <br />
                    <span className="text-white/20">{t.org}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-32 bg-brand-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-brand-ink"
            >
              <Player
                src="/VS%20PRU%20Promo%20ex7.mp4"
                width="100%"
                height="100%"
                controls
                muted={true}
                loop={true}
                playsInline={true}
              />
            </motion.div>
            <div className="mt-12 text-center">
              <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-6">
                Watch Our <span className="text-brand-orange">Impact</span>
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                Experience the transformation through the eyes of those we support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
