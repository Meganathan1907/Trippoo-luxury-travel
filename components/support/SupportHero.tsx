"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const quickLinks = ["Cancellation policy", "How to book", "Visa requirements", "Payment options", "Travel insurance"];

interface Props { onSearch: (q: string) => void; }

export default function SupportHero({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  const submit = (q: string) => { setQuery(q); onSearch(q); };

  return (
    <section className="relative pt-32 pb-24 bg-charcoal overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=40" className="w-full h-full object-cover opacity-10" alt="" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal" />
      </div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full border border-white/5 animate-[spin_35s_linear_infinite]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-coral/20 border border-coral/30 text-coral-light text-xs font-semibold mb-6">
            🛟 We're Here to Help — 24/7
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
        >
          How Can We<br />
          <span className="italic text-coral-light">Help You?</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="text-white/60 text-lg mb-10">
          Search our help centre or browse FAQs below.
        </motion.p>

        {/* Search */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="relative mb-6">
          <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="e.g. How do I cancel my booking?"
            value={query}
            onChange={e => submit(e.target.value)}
            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white text-charcoal text-base placeholder-gray-400 outline-none focus:ring-4 focus:ring-coral/20 shadow-2xl"
          />
        </motion.div>

        {/* Quick link chips */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
          className="flex flex-wrap gap-2 justify-center">
          {quickLinks.map(q => (
            <button key={q} onClick={() => submit(q)}
              className="text-xs px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/70 hover:bg-white/20 hover:text-white transition-all font-medium">
              {q}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
