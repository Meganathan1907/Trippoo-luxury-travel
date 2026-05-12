"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  MapPin, Clock, Star, Users, ChevronRight, ChevronDown, Check, X,
  ArrowRight, Phone, Mail, Calendar, Shield, Award, MessageCircle,
  ChevronLeft, Share2, Heart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { packages } from "@/lib/data";

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = packages.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "includes">("overview");
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [travelers, setTravelers] = useState(2);
  const [wishlist, setWishlist] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });
  const [enquirySent, setEnquirySent] = useState(false);

  if (!pkg) return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl mb-4">🗺️</p>
        <h2 className="font-display text-3xl font-bold text-charcoal mb-2">Package not found</h2>
        <Link href="/packages" className="btn-primary mt-4 inline-flex">Back to Packages</Link>
      </div>
    </main>
  );

  const totalPrice = pkg.price * travelers;
  const related = packages.filter(p => p.id !== pkg.id && p.category.some(c => pkg.category.includes(c))).slice(0, 3);

  const handleEnquirySubmit = () => {
    setEnquirySent(true);
    setTimeout(() => { setEnquiryOpen(false); setEnquirySent(false); }, 2500);
  };

  return (
    <main className="min-h-screen bg-cream">

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-coral">Home</Link>
          <ChevronRight size={14} />
          <Link href="/packages" className="hover:text-coral">Packages</Link>
          <ChevronRight size={14} />
          <span className="text-charcoal font-medium">{pkg.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* ── GALLERY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
          {/* Main image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="img-zoom rounded-3xl overflow-hidden h-[420px] lg:h-[500px] relative"
          >
            <img src={pkg.gallery[activeImage]} alt={pkg.title} className="w-full h-full object-cover" />
            {pkg.tag && (
              <div className="absolute top-5 left-5">
                <span className="pill bg-coral text-white text-sm font-semibold shadow-lg">{pkg.tag}</span>
              </div>
            )}
            <button
              onClick={() => setWishlist(!wishlist)}
              className="absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <Heart size={18} fill={wishlist ? "var(--coral)" : "none"} className={wishlist ? "text-coral" : "text-gray-400"} />
            </button>
          </motion.div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 gap-4">
            {pkg.gallery.slice(1, 5).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`img-zoom rounded-2xl overflow-hidden cursor-pointer h-[120px] lg:h-[234px] border-2 transition-all ${
                  activeImage === i + 1 ? "border-coral" : "border-transparent"
                }`}
                onClick={() => setActiveImage(i + 1)}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── MAIN CONTENT ── */}
          <div className="lg:col-span-2">
            {/* Title block */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-3">
                {pkg.category.filter(c => c !== "All Place").map(c => (
                  <span key={c} className="pill bg-sand text-coral border border-coral/20 text-xs">{c}</span>
                ))}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4 leading-tight">
                {pkg.title}
              </h1>
              <div className="flex flex-wrap items-center gap-5 text-gray-500 mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-coral" />
                  <span className="text-sm">{pkg.location}, {pkg.country}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={15} className="text-coral" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-full">
                  <Star size={14} fill="#F4A261" className="text-gold" />
                  <span className="text-sm font-bold text-charcoal">{pkg.rating}</span>
                  <span className="text-xs text-gray-400">({pkg.reviews.toLocaleString()} reviews)</span>
                </div>
              </div>

              {/* Highlights pills */}
              <div className="flex flex-wrap gap-2">
                {pkg.highlights.map(h => (
                  <span key={h} className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 font-medium">
                    ✦ {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 bg-gray-100 p-1 rounded-2xl mb-8 w-fit">
              {(["overview", "itinerary", "includes"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all ${
                    activeTab === tab ? "bg-white text-charcoal shadow-sm" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-4">About This Trip</h3>
                  <p className="text-gray-500 leading-relaxed mb-6 text-base">{pkg.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "🗓️", label: "Duration", value: pkg.duration },
                      { icon: "👥", label: "Group Type", value: pkg.category.filter(c => c !== "All Place").join(" & ") },
                      { icon: "🌍", label: "Destination", value: `${pkg.location}, ${pkg.country}` },
                      { icon: "💬", label: "Language", value: "English" },
                    ].map(item => (
                      <div key={item.label} className="bg-white rounded-2xl p-5 border border-gray-100">
                        <span className="text-2xl mb-2 block">{item.icon}</span>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{item.label}</p>
                        <p className="font-semibold text-charcoal text-sm">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "itinerary" && (
                <motion.div key="itinerary" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-6">Day-by-Day Itinerary</h3>
                  <div className="space-y-3">
                    {pkg.itinerary.map(day => (
                      <div key={day.day} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        <button
                          onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-coral rounded-xl flex items-center justify-center text-white font-bold text-sm">
                              {day.day}
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 mb-0.5">Day {day.day}</p>
                              <p className="font-semibold text-charcoal">{day.title}</p>
                            </div>
                          </div>
                          <ChevronDown size={18} className={`text-gray-400 transition-transform ${openDay === day.day ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {openDay === day.day && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 border-t border-gray-50">
                                <ul className="mt-4 space-y-2">
                                  {day.activities.map((act, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                                      <div className="w-5 h-5 bg-sand rounded-full flex items-center justify-center mt-0.5 shrink-0">
                                        <Check size={10} className="text-coral" />
                                      </div>
                                      {act}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "includes" && (
                <motion.div key="includes" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-2xl p-6">
                      <h4 className="font-display text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                        <Check size={18} className="text-green-500" /> What's Included
                      </h4>
                      <ul className="space-y-3">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <Check size={14} className="text-green-500 mt-0.5 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-2xl p-6">
                      <h4 className="font-display text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                        <X size={18} className="text-red-400" /> Not Included
                      </h4>
                      <ul className="space-y-3">
                        {pkg.excludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <X size={14} className="text-red-400 mt-0.5 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── BOOKING SIDEBAR ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Price card */}
              <div className="bg-white rounded-3xl border-2 border-gray-100 p-6 shadow-lg">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-gray-400 text-sm line-through">${pkg.originalPrice}</span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    Save ${pkg.originalPrice - pkg.price}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="font-display text-4xl font-bold text-charcoal">${pkg.price}</span>
                  <span className="text-gray-400">/person</span>
                </div>

                {/* Travelers selector */}
                <div className="mb-5">
                  <label className="text-sm font-medium text-gray-500 block mb-2">Number of Travelers</label>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                    <button
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-lg font-bold hover:border-coral transition-colors"
                    >−</button>
                    <span className="flex-1 text-center font-bold text-charcoal">{travelers}</span>
                    <button
                      onClick={() => setTravelers(travelers + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-lg font-bold hover:border-coral transition-colors"
                    >+</button>
                  </div>
                </div>

                {/* Date picker placeholder */}
                <div className="mb-5">
                  <label className="text-sm font-medium text-gray-500 block mb-2">Travel Date</label>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                    <Calendar size={16} className="text-coral" />
                    <input type="date" className="flex-1 bg-transparent text-sm text-charcoal outline-none" />
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between p-4 bg-sand rounded-2xl mb-5">
                  <span className="text-sm font-medium text-gray-500">Total</span>
                  <span className="font-display text-2xl font-bold text-charcoal">${totalPrice.toLocaleString()}</span>
                </div>

                <Link
                  href={`/checkout?pkg=${pkg.id}&travelers=${travelers}`}
                  className="btn-primary w-full justify-center text-base mb-3"
                >
                  Book Now <ArrowRight size={18} />
                </Link>
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="w-full py-3 px-6 rounded-full border-2 border-gray-200 hover:border-coral text-sm font-semibold text-gray-600 hover:text-coral transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} /> Send Enquiry
                </button>
              </div>

              {/* Trust badges */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-3">
                {[
                  { icon: Shield, text: "Secure payment & data protection" },
                  { icon: Award, text: "Best price guarantee" },
                  { icon: Phone, text: "24/7 customer support" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="w-8 h-8 bg-sand rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-coral" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="bg-charcoal rounded-2xl p-5 text-white">
                <p className="font-semibold mb-1">Need help deciding?</p>
                <p className="text-white/60 text-xs mb-4">Talk to our travel experts for personalised advice.</p>
                <div className="space-y-2">
                  <a href="tel:+18801746030416" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                    <Phone size={13} /> +1 (880) 174-6030-416
                  </a>
                  <a href="mailto:hello@trippoo.com" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                    <Mail size={13} /> hello@trippoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RELATED PACKAGES ── */}
        {related.length > 0 && (
          <div className="mt-20">
            <h3 className="font-display text-3xl font-bold text-charcoal mb-8">You Might Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <Link key={p.id} href={`/packages/${p.id}`} className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 card-lift">
                  <div className="img-zoom h-44">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-bold text-charcoal group-hover:text-coral transition-colors mb-1">{p.title}</h4>
                    <p className="text-sm text-gray-400 flex items-center gap-1"><MapPin size={12} />{p.location}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-bold text-charcoal">${p.price}<span className="text-xs text-gray-400">/person</span></span>
                      <ArrowRight size={14} className="text-coral" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── ENQUIRY MODAL ── */}
      <AnimatePresence>
        {enquiryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={e => { if (e.target === e.currentTarget) setEnquiryOpen(false); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl"
            >
              {enquirySent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Enquiry Sent!</h3>
                  <p className="text-gray-500">Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-charcoal">Send Enquiry</h3>
                      <p className="text-sm text-gray-400 mt-1">{pkg.title}</p>
                    </div>
                    <button onClick={() => setEnquiryOpen(false)} className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                      <X size={16} />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Full Name", key: "name", type: "text", placeholder: "John Smith" },
                      { label: "Email Address", key: "email", type: "email", placeholder: "john@example.com" },
                      { label: "Phone Number", key: "phone", type: "tel", placeholder: "+1 234 567 8900" },
                      { label: "Preferred Travel Date", key: "date", type: "date", placeholder: "" },
                    ].map(({ label, key, type, placeholder }) => (
                      <div key={key}>
                        <label className="text-sm font-medium text-gray-600 block mb-1.5">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={enquiryForm[key as keyof typeof enquiryForm]}
                          onChange={e => setEnquiryForm({ ...enquiryForm, [key]: e.target.value })}
                          className="input-field"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="text-sm font-medium text-gray-600 block mb-1.5">Your Message</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your travel plans, special requirements..."
                        value={enquiryForm.message}
                        onChange={e => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                        className="input-field resize-none"
                      />
                    </div>
                    <button onClick={handleEnquirySubmit} className="btn-primary w-full justify-center">
                      Send Enquiry <ArrowRight size={18} />
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </main>
  );
}
