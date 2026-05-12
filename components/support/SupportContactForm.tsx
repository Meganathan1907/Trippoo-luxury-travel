"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const topics = [
  "Booking enquiry", "Change / reschedule a trip", "Cancellation & refund",
  "Payment issue", "Visa & documents", "Trip in progress", "Feedback", "Other",
];

export default function SupportContactForm() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label mb-3">Still Need Help?</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-charcoal mb-6 leading-tight">
              Send Us a<br />
              <span className="text-coral">Message</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Can't find your answer in the FAQs? Our support team reads every message personally
              and replies within 4 hours during business hours.
            </p>
            <div className="space-y-4">
              {[
                { icon: "⚡", title: "Fast replies", desc: "Under 4 hours, Mon–Fri" },
                { icon: "👤", title: "Real humans only", desc: "No bots, ever" },
                { icon: "🔒", title: "Your data is safe", desc: "256-bit encryption" },
              ].map(item => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sand rounded-2xl flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{item.title}</p>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-sand rounded-3xl p-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Check size={28} className="text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-charcoal mb-3">Message Sent!</h3>
                  <p className="text-gray-500">We'll get back to you at <strong>{form.email}</strong> within 4 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-primary mt-6">Send Another</button>
                </motion.div>
              ) : (
                <motion.div key="form" className="bg-sand rounded-3xl p-8 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-600 block mb-1.5">Full Name *</label>
                      <input type="text" placeholder="John Smith" value={form.name}
                        onChange={e => update("name", e.target.value)}
                        className="input-field bg-white" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-600 block mb-1.5">Email *</label>
                      <input type="email" placeholder="john@email.com" value={form.email}
                        onChange={e => update("email", e.target.value)}
                        className="input-field bg-white" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-1.5">Topic</label>
                    <select value={form.topic} onChange={e => update("topic", e.target.value)}
                      className="input-field bg-white">
                      <option value="">Select a topic...</option>
                      {topics.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-600 block mb-1.5">Message *</label>
                    <textarea rows={5} placeholder="Describe your issue or question in detail..."
                      value={form.message} onChange={e => update("message", e.target.value)}
                      className="input-field bg-white resize-none" />
                  </div>

                  <button onClick={submit} className="btn-primary w-full justify-center">
                    Send Message <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
