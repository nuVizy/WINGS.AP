import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Refer() {
  const steps = [
    'Download and complete the Wings AP Referral Form',
    'Return it to nick@wings-ap.com',
    "Nick will be in touch within 5 working days to discuss the young person's needs",
    'An initial 6-week programme block will be agreed, with review built in',
    'Progress updates shared with the commissioning school or authority throughout',
  ];

  return (
    <div className="bg-brand-black">
      <SEO
        title="Refer a Young Person | Wings AP | Alternative Provision Manchester"
        description="Refer a young person to Wings AP. We accept referrals throughout the year for young people aged 11–18 across Greater Manchester and Trafford. Respond within 5 working days."
        canonical="/refer"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/studio2.webp"
            alt="Wings AP Referral"
            className="w-full h-full object-cover opacity-35"
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
              Make a Referral
            </span>
            <h1 className="text-[10vw] md:text-[8vw] font-display uppercase leading-[0.85] tracking-tighter mb-8">
              REFER A
              <br />
              <span className="text-stroke">YOUNG PERSON</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-brand-ink">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-24 max-w-6xl mx-auto">
            {/* Left: Intro + Steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-16 md:border-l border-brand-orange/30 md:pl-6">
                Wings AP accepts referrals throughout the year, subject to availability. We work with
                young people aged 11–18 across Greater Manchester and Trafford. Download and complete
                our referral form and return it to{' '}
                <a
                  href="mailto:nick@wings-ap.com"
                  className="text-brand-orange hover:underline"
                >
                  nick@wings-ap.com
                </a>
                . We will respond within 5 working days.
              </p>

              <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter mb-12">
                How It <span className="text-brand-orange">Works</span>
              </h2>

              <div>
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-8 py-8 border-b border-white/5 last:border-b-0"
                  >
                    <span className="text-brand-orange font-display text-3xl md:text-4xl leading-none shrink-0 pt-1">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed pt-2">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Download + Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pt-10"
            >
              {/* Download Card */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-brand-black p-10 shadow-2xl mb-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent" />
                <p className="text-[10px] uppercase tracking-[0.45em] text-white/35 mb-6">
                  Step 1
                </p>
                <h3 className="text-2xl font-heading mb-4">Download the Referral Form</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  Complete and return to us by email. We'll confirm receipt and be in touch within 5
                  working days.
                </p>
                <a
                  href="/referral-form.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-brand-black transition-all shadow-[0_0_30px_rgba(242,125,38,0.3)] w-full justify-center"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Referral Form
                </a>
              </div>

              {/* Contact Card */}
              <div className="rounded-[2.5rem] border border-white/10 bg-brand-black p-10 shadow-2xl">
                <p className="text-[10px] uppercase tracking-[0.45em] text-white/35 mb-6">
                  Direct Contact
                </p>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:nick@wings-ap.com"
                      className="text-xl font-heading text-white hover:text-brand-orange transition-colors"
                    >
                      nick@wings-ap.com
                    </a>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:07735983695"
                      className="text-xl font-heading text-white hover:text-brand-orange transition-colors"
                    >
                      07735 983 695
                    </a>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">
                      Response time
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">Within 5 working days</p>
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
