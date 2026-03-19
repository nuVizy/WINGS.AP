import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function Contact() {
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
              GET IN <br />
              <span className="text-stroke">TOUCH</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <p className="max-w-md text-white/60 text-sm md:text-base leading-relaxed text-left md:border-l border-brand-orange/30 md:pl-6">
                Have a question or want to learn more about our programs? We'd love to hear from you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-brand-ink">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-16">
                <div>
                  <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tighter mb-16">
                    Contact <br />
                    <span className="text-brand-orange">Details</span>
                  </h2>
                  <div className="space-y-10 md:border-l border-white/10 md:pl-8">
                    <div className="flex items-start group">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</p>
                        <a href="mailto:info@wings-ap.com" className="text-lg font-heading hover:text-brand-orange transition-colors">info@wings-ap.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Phone</p>
                        <p className="text-lg font-heading">Available upon request</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-12 bg-brand-black rounded-2xl border border-white/5">
                  <h3 className="text-2xl font-heading mb-6 text-brand-orange">Our Commitment</h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    We aim to respond to all inquiries within 24-48 hours. Your interest in WINGS and the young people we serve is greatly appreciated.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
