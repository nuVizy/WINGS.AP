import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Policies() {
  const policies = [
    {
      title: 'Safeguarding Policy: Children and Young People',
      version: 'v2.0, 2025',
      file: '/policies/safeguarding-policy-children-v2.0-2025.pdf',
    },
    {
      title: 'Adult Safeguarding Policy',
      version: 'v2.0, 2025',
      file: '/policies/adult-safeguarding-policy-v2.0-2025.pdf',
    },
    {
      title: 'Behaviour Management Policy',
      version: 'v2.0, 2025',
      file: '/policies/behaviour-management-policy-v2.0-2025.pdf',
    },
    {
      title: 'Data Protection Policy',
      version: 'v2.0, 2025',
      file: '/policies/data-protection-policy-v2.0-2025.pdf',
    },
    {
      title: 'Statement of Purpose',
      version: 'v2.0, 2025',
      file: '/policies/statement-of-purpose-v2.0-2025.pdf',
    },
  ];

  return (
    <div className="bg-brand-black">
      <SEO
        title="Policies | Wings AP | Alternative Provision Manchester"
        description="Wings AP policy documents including safeguarding, behaviour management and data protection policies. Available to download for commissioning schools and local authorities."
        canonical="/policies"
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/studio5.webp"
            alt="Wings AP Policies"
            className="w-full h-full object-cover opacity-25"
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
              Governance
            </span>
            <h1 className="text-[15vw] md:text-[12vw] font-display uppercase leading-[0.85] tracking-tighter mb-8">
              OUR
              <br />
              <span className="text-stroke">POLICIES</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Policies List */}
      <section className="py-32 bg-brand-ink">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 md:border-l border-brand-orange/30 md:pl-6"
            >
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Wings AP maintains a comprehensive set of policies in line with current statutory
                guidance. All policies are available to download below and can be provided to
                commissioning schools and local authorities on request.
              </p>
            </motion.div>

            <div className="space-y-4">
              {policies.map((policy, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 rounded-2xl border border-white/10 bg-brand-black group hover:border-brand-orange/30 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-lg font-heading text-white group-hover:text-brand-orange transition-colors mb-1">
                      {policy.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                      {policy.version}
                    </p>
                  </div>
                  <a
                    href={policy.file}
                    download
                    className="inline-flex items-center gap-3 border border-white/20 text-white hover:border-brand-orange hover:text-brand-orange px-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest transition-all shrink-0"
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
                    Download PDF
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 rounded-2xl border border-white/5 bg-brand-black/50"
            >
              <p className="text-white/50 text-sm leading-relaxed">
                For additional copies, specific policy queries, or to request a complete policy
                pack, please contact Nick directly at{' '}
                <a
                  href="mailto:nick@wings-ap.com"
                  className="text-brand-orange hover:underline"
                >
                  nick@wings-ap.com
                </a>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
