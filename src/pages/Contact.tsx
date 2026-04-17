import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Contact() {
  const emailAddress = 'nick@wings-ap.com';
  const enquiryMailto = `mailto:${emailAddress}?subject=WINGS.AP%20Enquiry`;
  const referralMailto = `mailto:${emailAddress}?subject=WINGS.AP%20Referral%20Enquiry`;

  const enquiryTypes = [
    'Schools looking for alternative provision support',
    'Local authorities exploring referrals or partnerships',
    'Parents and carers seeking more information',
    'Professionals wanting to discuss mentoring or music sessions',
  ];

  const emailChecklist = [
    'Who you are and the organisation or context you represent',
    'The young person, cohort, or service need you want to discuss',
    'Any timeline, safeguarding context, or location details that matter',
    'The best way and time for us to reply to you',
  ];

  return (
    <div className="bg-brand-black">
      <SEO 
        title="Contact | WINGS.AP" 
        description="Get in touch with WINGS. We are here to answer your questions and help you understand how our alternative provision can support young people."
        canonical="/contact"
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/studio4.webp"
            alt="WINGS Contact"
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
            <span className="text-xs font-medium uppercase tracking-[0.5em] text-brand-orange mb-6 block">Get in touch</span>
            <h1 className="text-[15vw] md:text-[12vw] font-display uppercase leading-[0.85] tracking-tighter mb-8">
              EMAIL <br />
              <span className="text-stroke">US</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <p className="max-w-md text-white/60 text-sm md:text-base leading-relaxed text-left md:border-l border-brand-orange/30 md:pl-6">
                Have a question, referral, or partnership enquiry? Email us directly and we will respond with the right next step.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-brand-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-orange/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 xl:gap-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.45em] text-brand-orange/80 mb-5 block">
                  Direct contact
                </span>
                <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter leading-[0.88]">
                  Start With <br />
                  <span className="text-brand-orange">An Email</span>
                </h2>
              </div>

              <div className="max-w-xl md:border-l border-white/10 md:pl-8 space-y-6">
                <p className="text-white/65 text-base md:text-lg leading-relaxed">
                  We have removed the website form so enquiries land directly in our inbox. That keeps contact simple and makes it easier to respond with the right context.
                </p>
                <p className="text-white/45 text-sm md:text-base leading-relaxed">
                  Use email for general questions, referrals, partnership discussions, and availability requests. If a phone conversation is better, we can arrange that from there.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={enquiryMailto}
                  className="inline-flex items-center justify-center rounded-full bg-brand-orange px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-white transition-all hover:bg-white hover:text-brand-black"
                >
                  Email WINGS
                </a>
                <a
                  href={referralMailto}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-white transition-all hover:border-brand-orange hover:text-brand-orange"
                >
                  Start A Referral
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[2rem] border border-white/10 bg-brand-black p-8">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/35 mb-4">Best for</p>
                  <div className="space-y-4">
                    {enquiryTypes.map((item) => (
                      <p key={item} className="text-sm leading-relaxed text-white/70">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-brand-black p-8">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/35 mb-4">What to include</p>
                  <div className="space-y-4">
                    {emailChecklist.map((item) => (
                      <p key={item} className="text-sm leading-relaxed text-white/70">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pt-10"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-brand-black p-10 md:p-14 shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent" />

                <p className="text-[10px] uppercase tracking-[0.45em] text-white/35 mb-6">Primary email</p>
                <a
                  href={enquiryMailto}
                  className="block text-3xl md:text-5xl font-display uppercase tracking-tight text-white break-all transition-colors hover:text-brand-orange"
                >
                  {emailAddress}
                </a>

                <div className="mt-10 space-y-8">
                  <div className="border-t border-white/10 pt-8">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/35 mb-3">Response window</p>
                    <p className="text-white/75 text-base leading-relaxed">
                      We aim to respond to all genuine enquiries within 24 to 48 hours.
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/35 mb-3">Phone</p>
                    <p className="text-white/75 text-base leading-relaxed">
                      Phone conversations are available upon request once we understand the enquiry.
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/35 mb-3">Best first step</p>
                    <p className="text-white/75 text-base leading-relaxed">
                      Send a short outline of the young person, service need, or partnership idea and we will reply with the most relevant next move.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
