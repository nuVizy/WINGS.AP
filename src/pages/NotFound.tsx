import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="bg-brand-black">
      <SEO
        title="Page Not Found | WINGS.AP"
        description="The page you're looking for doesn't exist."
      />
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[20vw] md:text-[15vw] font-display uppercase leading-[0.85] tracking-tighter mb-4">
              4<span className="text-brand-orange">0</span>4
            </h1>
            <p className="text-white/60 text-lg mb-12">
              This page doesn't exist.
            </p>
            <Link
              to="/"
              className="bg-brand-orange text-white px-12 py-5 rounded-full font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-brand-black transition-all shadow-[0_0_30px_rgba(242,125,38,0.3)]"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
