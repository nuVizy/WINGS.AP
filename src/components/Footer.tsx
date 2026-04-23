import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-3xl font-heading mb-6">
              WINGS<span className="text-brand-orange">.AP</span>
            </h3>
            <p className="text-white/50 max-w-xs leading-relaxed text-sm mb-6">
              Wings Alternative Provision | Nick Shahlavi
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:nick@wings-ap.com"
                className="block text-white/50 hover:text-brand-orange transition-colors"
              >
                nick@wings-ap.com
              </a>
              <a
                href="tel:07735983695"
                className="block text-white/50 hover:text-brand-orange transition-colors"
              >
                07735 983 695
              </a>
              <p className="text-white/30 text-xs pt-1">ICO: ZC014532</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-brand-orange mb-8">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white/60 hover:text-brand-orange transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/what-we-offer"
                className="text-white/60 hover:text-brand-orange transition-colors text-sm"
              >
                What We Offer
              </Link>
              <Link
                to="/about"
                className="text-white/60 hover:text-brand-orange transition-colors text-sm"
              >
                About Nick
              </Link>
              <Link
                to="/refer"
                className="text-white/60 hover:text-brand-orange transition-colors text-sm"
              >
                Refer a Young Person
              </Link>
              <Link
                to="/policies"
                className="text-white/60 hover:text-brand-orange transition-colors text-sm"
              >
                Policies
              </Link>
              <Link
                to="/contact"
                className="text-white/60 hover:text-brand-orange transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-brand-orange mb-8">
              Make a Referral
            </h4>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              We accept referrals throughout the year for young people aged 11–18 across Greater
              Manchester and Trafford.
            </p>
            <Link
              to="/refer"
              className="inline-block bg-brand-orange text-white px-10 py-4 rounded-full font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-brand-black transition-all shadow-lg"
            >
              Refer a Young Person
            </Link>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/30">
          <p>© {new Date().getFullYear()} Wings Alternative Provision. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="/policies" className="hover:text-white transition-colors">
              Policies
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Notice
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
