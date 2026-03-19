import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';

const Player = ReactPlayer as any;

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Small delay to ensure DOM is ready and prevent race conditions on mount/unmount
    const timer = setTimeout(() => setIsPlaying(true), 100);
    return () => {
      clearTimeout(timer);
      setIsPlaying(false);
    };
  }, []);

  const services = [
    {
      title: 'Accredited Music Courses',
      image: '/studio.webp',
      text: 'Arts Award inspires children and young people to embark on an exciting creative journey. Through exploring the vibrant world of the arts, participants uncover their artistic potential, develop leadership skills, and achieve a nationally recognized qualification. Arts Award equips individuals with essential 21st-century skills: creativity, effective communication, problem-solving, reflective thinking, and confidence—empowering them to succeed in their personal and professional lives.'
    },
    {
      title: 'Enrichment music Sessions',
      image: '/studio3.webp',
      text: 'Enrichment-conscious rap sessions empower youth by blending creativity and self-expression with mental health benefits. Studies show that music and lyrical composition improve emotional regulation, boost self-esteem, and reduce anxiety, offering a therapeutic outlet for processing life challenges. This is a proven way to foster resilience and personal growth.'
    },
    {
      title: 'Mentoring',
      image: '/studio4.webp',
      text: 'Reformed individuals, bring unique value as mentors due to their lived experiences. Their firsthand understanding of the challenges and culture surrounding destructive behaviours makes them relatable and credible role models for at-risk youth. Studies show that such mentoring inspires change, builds trust, and helps young people find positive paths by offering authentic guidance and hope.'
    }
  ];

  const testimonials = [
    {
      quote: "I feel your work Provides young people with a different lens to life, providing purpose and possibility, which sometimes they have never had.",
      author: "Anna",
      role: "Advanced Practitioner",
      org: "Complex Safeguarding & Missing From Home Vulnerable Adolescent Service"
    },
    {
      quote: "The word that springs to mind about Wings is ‘Hope’. This service inspires young minds and supports those who truly need it. The impact it holds for children have been phenomenal and far reaching! Thank you Nick, for all your dedication, passion and commitment to give hope to children! Life changing!",
      author: "Emma",
      role: "Manager",
      org: "Complex safeguarding Team Trafford"
    },
    {
      quote: "Your work with young people goes beyond the realms of music; it's a beacon of mentorship and a relational foundation that fosters confidence and self-esteem. Through the powerful medium of music, New Wings creates a sanctuary - a safe space where young people feel comfortable expressing their experiences and emotions. New Wings sessions are a therapeutic outlet, succeeding where other services have struggled to engage.",
      author: "Sussana",
      role: "SHINE Social Worker",
      org: "Complex Safeguarding Team"
    }
  ];

  return (
    <div className="bg-brand-black">
      <SEO 
        title="WINGS.AP | ALTERNATIVE PROVISION" 
        description="Combining music, writing and production with powerful personal experiences of hope and transformation, Wing’s vision is to see young people reach their full potential through the creative arts."
        canonical="/"
      />

      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/studio4.webp"
            alt="WINGS Music Session"
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
            <span className="text-xs font-medium uppercase tracking-[0.5em] text-brand-orange mb-6 block">Alternative Provision</span>
            <h1 className="text-[15vw] md:text-[12vw] font-display uppercase leading-[0.85] tracking-tighter mb-8">
              TRANSFORMED<br />
              <span className="text-stroke">LIVES</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <p className="max-w-md text-white/60 text-sm md:text-base leading-relaxed text-left md:border-l border-brand-orange/30 md:pl-6">
                Combining music, writing and production with powerful personal experiences of hope and transformation.
              </p>
              <Link to="/about" className="bg-brand-orange text-white px-12 py-5 rounded-full font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-brand-black transition-all shadow-[0_0_30px_rgba(242,125,38,0.3)]">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Split Section - Impact */}
      <section className="py-32 bg-brand-ink">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter mb-12 leading-[0.85]">
                Uncover <br />
                <span className="text-brand-orange">Our Story</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-12">
                Music breaks down barriers and helps young people express their feelings and concerns. Through music workshops and one-to-one sessions, Nick teaches pupils lyric writing and performance skills that promote self-development.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-px bg-brand-orange" />
                <Link to="/about" className="text-xs font-medium uppercase tracking-[0.3em] hover:text-brand-orange transition-colors">
                  Learn More
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
                <p className="text-3xl font-heading italic text-white">"Hope is the <br />foundation."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Brutalist Style */}
      <section className="py-32 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter">
              Exclusive<br />
              <span className="text-brand-orange">Services</span>
            </h2>
            <p className="max-w-xs text-white/40 text-xs uppercase tracking-[0.2em] leading-loose">
              Nurturing talent through creative expression and professional guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <span className="text-[10px] font-medium text-brand-orange uppercase tracking-[0.4em] mb-4 block">0{idx + 1}</span>
                  <h3 className="text-2xl font-heading mb-6 group-hover:text-brand-orange transition-colors">{service.title}</h3>
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
          className="w-full h-full object-cover fixed-bg brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: "0.15em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-7xl md:text-[12vw] font-display uppercase text-white tracking-wide select-none text-center px-6"
          >
            CREATIVITY
          </motion.h2>
        </div>
      </section>

      {/* Testimonials - Refined Grid */}
      <section className="py-32 bg-brand-ink border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter">
              Voices of <br />
              <span className="text-brand-orange">Impact</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-white/20" />
              <p className="text-[10px] text-white/40 uppercase tracking-[0.3em]">Trusted by professionals</p>
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
                  <div className="text-4xl font-heading text-brand-orange opacity-20 mb-6 group-hover:opacity-40 transition-opacity">“</div>
                  <p className="text-base font-heading italic leading-relaxed text-white/80 mb-12">
                    {t.quote}
                  </p>
                </div>
                
                <div className="pt-8 border-t border-white/5">
                  <p className="font-mono text-[11px] font-medium text-brand-orange uppercase tracking-widest mb-2">{t.author}</p>
                  <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em] leading-relaxed">
                    {t.role} <br />
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
                url="https://video.squarespace-cdn.com/content/v1/673e35f9381a352a4b6c166f/e572b9e5-c72a-4552-a9e2-8a53202b0bc3/segments/mpegts-h264-2580:1080.m3u8?Expires=1773634846&Signature=NTZmMzg1ZWZlNjc0ZTljZDIwMWNlYTE2NDk2NWY3NjJjYjNkM2UwMjVmMDMwYWU3ODBjMjcwMGFjNmQwMDVlMQ"
                width="100%"
                height="100%"
                controls
                playing={isPlaying}
                muted={true}
                loop={true}
                playsinline={true}
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
