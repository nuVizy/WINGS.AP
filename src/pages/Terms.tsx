import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="bg-brand-black">
      <SEO
        title="Terms of Use | WINGS.AP"
        description="Terms of use for WINGS Alternative Provision."
        canonical="/terms"
      />
      <section className="min-h-screen pt-40 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-xs font-medium uppercase tracking-[0.5em] text-brand-orange mb-6 block">Legal</span>
            <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-16">Terms of Use</h1>

            <div className="space-y-10 text-white/70 leading-relaxed md:border-l border-white/10 md:pl-8">
              <div>
                <h2 className="text-xl font-heading text-white mb-4">Use of This Website</h2>
                <p>This website is provided by WINGS Alternative Provision for informational purposes. By accessing and using this site, you agree to these terms. The content on this site is for general information only and may be updated without notice.</p>
              </div>

              <div>
                <h2 className="text-xl font-heading text-white mb-4">Intellectual Property</h2>
                <p>All content on this website, including text, images, logos, and design, is the property of WINGS Alternative Provision unless otherwise stated. You may not reproduce, distribute, or use any content without prior written permission.</p>
              </div>

              <div>
                <h2 className="text-xl font-heading text-white mb-4">External Links</h2>
                <p>This site may contain links to external websites. We are not responsible for the content or privacy practices of those sites.</p>
              </div>

              <div>
                <h2 className="text-xl font-heading text-white mb-4">Limitation of Liability</h2>
                <p>WINGS Alternative Provision is not liable for any loss or damage arising from the use of this website. All information is provided "as is" without warranty of any kind.</p>
              </div>

              <div>
                <h2 className="text-xl font-heading text-white mb-4">Contact</h2>
                <p>If you have questions about these terms, please contact us at <a href="mailto:info@wings-ap.com" className="text-brand-orange hover:underline">info@wings-ap.com</a>.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
