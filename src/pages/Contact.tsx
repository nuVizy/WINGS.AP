import { useState } from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Wings AP Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganisation: ${formData.organisation}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nick@wings-ap.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-black">
      <SEO
        title="Contact | Wings AP | Alternative Provision Manchester"
        description="Get in touch with Wings AP. Email nick@wings-ap.com for referrals, commissioning enquiries and partnerships."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/studio4.webp"
            alt="Wings AP Contact"
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
              Get in touch
            </span>
            <h1 className="text-[15vw] md:text-[12vw] font-display uppercase leading-[0.85] tracking-tighter mb-8">
              GET IN
              <br />
              <span className="text-stroke">TOUCH</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-brand-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-orange/15 blur-3xl" />
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 xl:gap-24 max-w-6xl mx-auto relative z-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-[0.45em] text-brand-orange/80 mb-5 block">
                Send a message
              </span>
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-[0.88] mb-12">
                Start The
                <br />
                <span className="text-brand-orange">Conversation</span>
              </h2>

              {submitted ? (
                <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/10 p-10 text-center">
                  <p className="text-2xl font-heading text-white mb-4">Message prepared.</p>
                  <p className="text-white/60 text-sm">
                    Your email client should have opened. If not, email us directly at{' '}
                    <a
                      href="mailto:nick@wings-ap.com"
                      className="text-brand-orange hover:underline"
                    >
                      nick@wings-ap.com
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-black border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-orange/60 transition-colors placeholder:text-white/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">
                        Organisation
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="w-full bg-brand-black border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-orange/60 transition-colors placeholder:text-white/20"
                        placeholder="School, LA, etc."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-black border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-orange/60 transition-colors placeholder:text-white/20"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-brand-black border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-orange/60 transition-colors placeholder:text-white/20 resize-none"
                      placeholder="Tell us about the young person, your organisation, and what you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-brand-orange text-white px-10 py-4 rounded-full font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-brand-black transition-all shadow-[0_0_30px_rgba(242,125,38,0.3)] w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pt-32"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-brand-black p-10 shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent" />

                <p className="text-[10px] uppercase tracking-[0.45em] text-white/35 mb-8">
                  Contact Details
                </p>

                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:nick@wings-ap.com"
                      className="text-xl font-heading text-white hover:text-brand-orange transition-colors break-all"
                    >
                      nick@wings-ap.com
                    </a>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">
                      Website
                    </p>
                    <p className="text-white/70 font-mono text-sm">wings-ap.com</p>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">
                      ICO Registration
                    </p>
                    <p className="text-white/70 font-mono text-sm">ZC014532</p>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">
                      Response time
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      We aim to respond within 5 working days.
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
