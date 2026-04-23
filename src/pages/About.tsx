import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function About() {
  const credentials = [
    'Award-winning musician and music producer: rap, grime, lyric writing, music production',
    'Qualified to deliver Trinity Arts Awards',
    'Enhanced DBS check (adults and children barred lists)',
    'Current safeguarding training',
    'ICO registered data controller: ZC014532',
    'Public liability and professional indemnity insurance held',
    'Provision commissioned by schools and local authorities across Greater Manchester and Trafford including EHCP-funded placements',
  ];

  return (
    <div className="bg-brand-black">
      <SEO
        title="About Nick Shahlavi | Wings AP | Alternative Provision Manchester"
        description="Nick Shahlavi is an award-winning musician who uses music to work with young people in alternative provision across Greater Manchester. Lived experience, real connection."
        canonical="/about"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/studio5.webp"
            alt="Nick Shahlavi"
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
            <span className="text-xs font-medium uppercase tracking-[0.5em] text-brand-orange mb-6 block">
              The Person Behind the Provision
            </span>
            <h1 className="text-[15vw] md:text-[12vw] font-display uppercase leading-[0.85] tracking-tighter mb-8">
              ABOUT
              <br />
              <span className="text-stroke">NICK</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <p className="max-w-md text-white/60 text-sm md:text-base leading-relaxed text-left md:border-l border-brand-orange/30 md:pl-6 italic">
                "Authenticity is everything. Young people know when you're real with them."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Bio */}
      <section className="py-32 bg-brand-ink">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-medium text-brand-orange uppercase tracking-[0.4em] mb-4 block">
                01
              </span>
              <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter mb-12 leading-[0.85]">
                LIVED
                <br />
                <span className="text-brand-orange">EXPERIENCE</span>
              </h2>
              <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed md:border-l border-white/10 md:pl-8">
                <p>
                  Nick Shahlavi is an award-winning rap and grime musician who has experienced
                  first-hand the destructive forces of crime, drugs and gang culture. That lived
                  experience is at the heart of what makes Wings AP distinctive.
                </p>
                <p>
                  Nick doesn't work with young people from a position of distance or theory. He
                  meets them where they are, with authenticity, without judgement, and with genuine
                  hope that transformation is possible for every person, no matter what they've been
                  through.
                </p>
                <p>
                  He has spent years working with young people in schools, alternative provision
                  settings and community contexts across Greater Manchester, building trust through
                  music and helping them find their voice. He has witnessed young people's confidence
                  dramatically build through music, allowing them to develop vital life skills and
                  find healthy, constructive ways to express their feelings.
                </p>
              </div>
            </motion.div>

            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/studio2.webp"
                  alt="Nick Shahlavi in a session"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-4 border border-brand-orange/20 rounded-2xl -z-10 group-hover:inset-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-32 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="relative group lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/studio4.webp"
                  alt="Nick making music"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-4 border border-brand-orange/20 rounded-2xl -z-10 group-hover:inset-0 transition-all duration-500" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <span className="text-[10px] font-medium text-brand-orange uppercase tracking-[0.4em] mb-4 block">
                02
              </span>
              <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter mb-12 leading-[0.85]">
                THE
                <br />
                <span className="text-brand-orange">MUSIC</span>
              </h2>
              <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed md:border-l border-white/10 md:pl-8">
                <p>
                  Nick's music is conscious pain-style rap, honest about struggle, darkness and
                  lived experience, but always pointing toward hope and transformation. His artistry
                  and his youth work are inseparable: the same voice that speaks through his music
                  speaks to the young people he works with.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faith Statement */}
      <section className="py-32 bg-brand-ink">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-medium text-brand-orange uppercase tracking-[0.4em] mb-4 block">
                03
              </span>
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-12 leading-[0.85]">
                FAITH &amp;
                <br />
                <span className="text-brand-orange">INCLUSION</span>
              </h2>
              <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed md:border-l border-white/10 md:pl-8">
                <p>
                  Nick's Christian faith is the foundation of his conviction that every young person
                  has inherent worth and potential. No one is beyond hope or transformation.
                  Wings AP warmly welcomes young people of all backgrounds, faiths and none. Our
                  work is inclusive and non-proselytising.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-32 bg-brand-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-16">
                Credentials &amp;
                <br />
                <span className="text-brand-orange">Compliance</span>
              </h2>
              <div>
                {credentials.map((cred, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-5 py-6 border-b border-white/5 last:border-b-0"
                  >
                    <span className="text-brand-orange shrink-0 mt-1 font-heading font-semibold">
                      ✓
                    </span>
                    <p className="text-white/70 text-base leading-relaxed">{cred}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-32 bg-brand-ink overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
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

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-12 md:col-span-4 aspect-square rounded-[3rem] overflow-hidden border border-white/10 md:-mt-16 group shadow-2xl"
            >
              <img
                src="/studio3.webp"
                alt="Creative session"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </motion.div>

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
