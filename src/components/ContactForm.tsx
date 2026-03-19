import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'error') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-ink p-12 rounded-2xl border border-red-500/30 text-center"
      >
        <h3 className="text-3xl font-heading mb-4 text-red-400">Something went wrong</h3>
        <p className="text-white/60">Please try again or email us directly at info@wings-ap.com.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-white font-medium uppercase tracking-widest text-xs underline underline-offset-8 decoration-red-400"
        >
          Try again
        </button>
      </motion.div>
    );
  }

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-ink p-12 rounded-2xl border border-white/10 text-center"
      >
        <h3 className="text-3xl font-heading mb-4 text-brand-orange">Thank you!</h3>
        <p className="text-white/60">Your message has been sent. We'll get back to you soon.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-white font-medium uppercase tracking-widest text-xs underline underline-offset-8 decoration-brand-orange"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-8 bg-brand-ink p-12 rounded-2xl border border-white/10">
      <input type="hidden" name="form-name" value="contact" />
      <div className="space-y-3">
        <label htmlFor="name" className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-6 py-4 bg-brand-black border border-white/10 rounded-xl focus:outline-none focus:border-brand-orange transition-all text-white"
          placeholder="Your full name"
        />
      </div>

      <div className="space-y-3">
        <label htmlFor="email" className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-6 py-4 bg-brand-black border border-white/10 rounded-xl focus:outline-none focus:border-brand-orange transition-all text-white"
          placeholder="your@email.com"
        />
      </div>

      <div className="space-y-3">
        <label htmlFor="message" className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-6 py-4 bg-brand-black border border-white/10 rounded-xl focus:outline-none focus:border-brand-orange transition-all text-white resize-none"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-brand-orange text-white py-5 rounded-full font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-brand-black transition-all disabled:opacity-50 shadow-lg"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
