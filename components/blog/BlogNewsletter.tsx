"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setEmail("");
  };

  return (
    <section className="py-20 bg-sand">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-charcoal rounded-3xl p-12 text-center overflow-hidden"
        >
          {/* bg decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-coral/50 to-transparent" />
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "repeating-linear-gradient(45deg,#FF4D6D 0,#FF4D6D 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />

          <div className="relative z-10">
            <span className="text-4xl mb-5 block">✉️</span>
            <h3 className="font-display text-3xl md:text-4xl font-black text-white mb-3">
              Get Stories in Your Inbox
            </h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              New destination guides, packing secrets, and adventure inspiration every two weeks. No spam, ever.
            </p>

            {sent ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-3 text-green-400 font-semibold"
              >
                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                  <Check size={16} />
                </div>
                You're subscribed! Welcome aboard.
              </motion.div>
            ) : (
              <div className="flex gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm outline-none focus:border-coral transition-colors"
                />
                <button onClick={handleSubmit} className="btn-primary shrink-0" style={{ padding: "12px 20px" }}>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
            <p className="text-white/30 text-xs mt-4">Join 12,000+ subscribers. Unsubscribe any time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
