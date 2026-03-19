import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-3xl font-heading mb-8">WINGS<span className="text-brand-orange">.AP</span></h3>
            <p className="text-white/50 max-w-xs leading-relaxed text-sm">
              Combining music, writing and production with powerful personal experiences of hope and transformation.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-brand-orange mb-8">Navigation</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white/60 hover:text-brand-orange transition-colors">Home</Link>
              <Link to="/about" className="text-white/60 hover:text-brand-orange transition-colors">About</Link>
              <Link to="/contact" className="text-white/60 hover:text-brand-orange transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-brand-orange mb-8">Connect</h4>
            <Link to="/contact" className="inline-block bg-brand-orange text-white px-10 py-4 rounded-full font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-brand-black transition-all shadow-lg">
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/30">
          <p>© {new Date().getFullYear()} WINGS.AP | ALTERNATIVE PROVISION.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
