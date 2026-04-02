import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="bg-brand-black">
      <SEO
        title="Privacy Policy | WINGS.AP"
        description="Privacy policy for WINGS Alternative Provision."
        canonical="/privacy"
      />
      <section className="min-h-screen pt-40 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-xs font-medium uppercase tracking-[0.5em] text-brand-orange mb-6 block">Legal</span>
            <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-16">Privacy Policy</h1>

            <div className="space-y-10 text-white/70 leading-relaxed md:border-l border-white/10 md:pl-8">
              <div>
                <h2 className="text-xl font-heading text-white mb-4">Information We Collect</h2>
                <p>If you contact us by email, we may receive your name, email address, and any information you choose to include in your message. We do not collect any additional personal information through a website contact form.</p>
              </div>

              <div>
                <h2 className="text-xl font-heading text-white mb-4">How We Use Your Information</h2>
                <p>Your contact details are used only to respond to your enquiry. We do not share, sell, or distribute your personal information to third parties.</p>
              </div>

              <div>
                <h2 className="text-xl font-heading text-white mb-4">Data Storage</h2>
                <p>Email enquiries are handled through our email provider and retained only as long as necessary to respond to your enquiry or manage any follow-up communication.</p>
              </div>

              <div>
                <h2 className="text-xl font-heading text-white mb-4">Your Rights</h2>
                <p>You have the right to request access to, correction of, or deletion of your personal data. To make a request, please email us at <a href="mailto:info@wings-ap.com" className="text-brand-orange hover:underline">info@wings-ap.com</a>.</p>
              </div>

              <div>
                <h2 className="text-xl font-heading text-white mb-4">Contact</h2>
                <p>If you have questions about this privacy policy, please contact us at <a href="mailto:info@wings-ap.com" className="text-brand-orange hover:underline">info@wings-ap.com</a>.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
