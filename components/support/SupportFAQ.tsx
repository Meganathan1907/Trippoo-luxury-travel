"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { faqs, supportCategories } from "@/lib/supportData";

interface Props { searchQuery: string; }

export default function SupportFAQ({ searchQuery }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = useMemo(() => {
    return faqs.filter(f => {
      const matchCat = activeCategory === "All" || f.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q) || f.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Find Answers Fast</p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-charcoal">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {supportCategories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={`text-sm px-5 py-2.5 rounded-full font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-coral text-white shadow-lg shadow-coral/25"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-16">
              <span className="text-4xl mb-3 block">🤔</span>
              <p className="text-gray-400">No FAQs match your search. Try different keywords or contact us directly.</p>
            </motion.div>
          ) : (
            <motion.div key={activeCategory + searchQuery} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="space-y-3">
              {filtered.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                    openIndex === i ? "border-coral/40 shadow-lg shadow-coral/10" : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <span className={`mt-0.5 shrink-0 text-xs font-bold px-2 py-1 rounded-lg ${
                        openIndex === i ? "bg-coral text-white" : "bg-gray-100 text-gray-400"
                      }`}>
                        {faq.category.split(" ")[0]}
                      </span>
                      <span className={`font-semibold text-base leading-snug ${openIndex === i ? "text-coral" : "text-charcoal"}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === i ? "bg-coral text-white" : "bg-gray-100 text-gray-400"
                    }`}>
                      {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 ml-16">
                          <div className="h-px bg-gray-100 mb-4" />
                          <p className="text-gray-500 leading-relaxed text-sm">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
