import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function About() {
  const sections = [
    {
      title: 'BACKGROUND',
      content: 'A long time ago, an experienced artist took a very self-conscious, scared, and inexperienced young man under his wing, providing guidance and support that would ultimately help him transform his raw ideas for music tracks into polished, recorded songs. That young man was Nick, who now proudly heads up WINGS. Over the past 10 years, Nick has dedicated himself to working in prisons and communities across the UK, witnessing firsthand the incredible power music has to transform the lives of countless young people. He’s deeply passionate about the universal language of music, which has the remarkable ability to bring hope and inspiration, and even save lives in the process.',
      image: '/studio2.webp'
    },
    {
      title: 'PURPOSE AND VISION',
      content: 'Headed up by Nick Shahlavi, an award-winning rap and grime musician, who has experienced first-hand the destructive forces of crime, drugs, and gang culture, Wings is all about nurturing young people’s musical and creative talents. The initiative focuses on providing them with the tools they need to express themselves while also helping them build their confidence and self-esteem in a supportive environment.',
      image: '/studio4.webp'
    },
    {
      title: 'HOW IT WORKS',
      content: 'Music breaks down barriers and plays a crucial role in helping young people express their innermost feelings and concerns. Through engaging music workshops and personalized one-to-one sessions, Nick teaches his pupils valuable skills in lyric writing and performance that significantly promote their self-development. He has witnessed young individuals’ self-esteem and confidence dramatically build, allowing them to develop vital life skills, such as effectively expressing their feelings in a healthy and constructive manner.\n\nOver the course of the program, young individuals have the unique opportunity to complete either a recorded track that conveys a powerful message regarding their personal experiences or pressing societal issues, or to create an uplifting and inspiring creative piece of production through the artful craft of lyrical storytelling. All of Nick’s innovative sessions are meticulously designed to complement and enhance a school’s spiritual, moral, social, and cultural (SMSC) development in meaningful ways.',
      image: '/studio.webp'
    }
  ];

  return (
    <div className="bg-brand-black">
      <SEO 
        title="Story | WINGS.AP" 
        description="Learn about the background, purpose, and vision of WINGS. Headed by Nick Shahlavi, we use music to transform lives and nurture creative talent."
        canonical="/about"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/studio5.webp"
            alt="WINGS Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.5em] text-brand-orange mb-6 block">Our Mission</span>
            <h1 className="text-[15vw] md:text-[12vw] font-display uppercase leading-[0.85] tracking-tighter mb-8">
              OUR <br />
              <span className="text-stroke">STORY</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <p className="max-w-md text-white/60 text-sm md:text-base leading-relaxed text-left md:border-l border-brand-orange/30 md:pl-6 italic">
                "Providing guidance and support that ultimately helps transform raw ideas into polished songs."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-32 bg-brand-ink">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-48">
            {sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <span className="text-[10px] font-medium text-brand-orange uppercase tracking-[0.4em] mb-4 block">Section 0{idx + 1}</span>
                  <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter mb-12">
                    {section.title.split(' ').map((word, wIdx) => (
                      <span key={wIdx} className={wIdx % 2 !== 0 ? 'text-brand-orange' : ''}>
                        {word}{' '}
                        {wIdx === 0 && section.title.split(' ').length > 1 && <br />}
                      </span>
                    ))}
                  </h2>
                  <div className="text-white/70 text-lg leading-relaxed space-y-8 md:border-l border-white/10 md:pl-8">
                    {section.content.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className={`relative group ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={section.image} 
                      alt={section.title} 
                      className="w-full h-full object-cover transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -inset-4 border border-brand-orange/20 rounded-2xl -z-10 group-hover:inset-0 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-32 bg-brand-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Image 1: Large, Vertical */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-5 aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl"
            >
              <img 
                src="/studio.webp"
                alt="Music production session"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* Image 2: Smaller, Top Offset */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-12 md:col-span-4 aspect-square rounded-[3rem] overflow-hidden border border-white/10 md:-mt-16 group shadow-2xl"
            >
              <img 
                src="/studio3.webp"
                alt="Creative storytelling"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* Image 3: Medium, Bottom Offset */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-12 md:col-span-3 aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 md:mt-32 group shadow-2xl"
            >
              <img 
                src="/studio6.webp"
                alt="Performance and expression"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
