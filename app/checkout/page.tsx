"use client";
import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Check, ChevronRight, CreditCard, Lock, Shield, ArrowRight,
  MapPin, Clock, Users, Star, ChevronDown, AlertCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { packages } from "@/lib/data";

function CheckoutInner() {
  const params = useSearchParams();
  const pkgId = params.get("pkg") || "amalfi-coast-drive";
  const travelers = parseInt(params.get("travelers") || "2");
  const pkg = packages.find(p => p.id === pkgId) || packages[0];

  const [step, setStep] = useState(1);
  const [payMethod, setPayMethod] = useState<"card" | "paypal" | "upi">("card");
  const [completed, setCompleted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", country: "United States",
    address: "", city: "", travelDate: "", specialReqs: "",
    cardName: "", cardNumber: "", expiry: "", cvv: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const total = pkg.price * travelers;
  const tax = Math.round(total * 0.08);
  const serviceFee = 25;
  const grandTotal = total + tax + serviceFee;

  const steps = ["Traveler Info", "Review", "Payment"];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName) e.firstName = "Required";
    if (!form.lastName) e.lastName = "Required";
    if (!form.email) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.phone) e.phone = "Required";
    if (!form.travelDate) e.travelDate = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validate()) return;
    if (step < 3) setStep(step + 1);
  };

  const handlePay = () => {
    const payErrors: Record<string, string> = {};
    if (payMethod === "card") {
      if (!form.cardName) payErrors.cardName = "Required";
      if (!form.cardNumber) payErrors.cardNumber = "Required";
      if (!form.expiry) payErrors.expiry = "Required";
      if (!form.cvv) payErrors.cvv = "Required";
    }
    if (Object.keys(payErrors).length > 0) { setErrors(payErrors); return; }
    setCompleted(true);
  };

  const Field = ({ label, fieldKey, type = "text", placeholder = "", full = false }: {
    label: string; fieldKey: keyof typeof form; type?: string; placeholder?: string; full?: boolean;
  }) => (
    <div className={full ? "col-span-2" : ""}>
      <label className="text-sm font-medium text-gray-600 block mb-1.5">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[fieldKey]}
        onChange={e => { setForm({ ...form, [fieldKey]: e.target.value }); setErrors({ ...errors, [fieldKey]: "" }); }}
        className={`input-field ${errors[fieldKey] ? "border-red-400 focus:border-red-400" : ""}`}
      />
      {errors[fieldKey] && <p className="text-red-400 text-xs mt-1">{errors[fieldKey]}</p>}
    </div>
  );

  if (completed) return (
    <main className="min-h-screen flex items-center justify-center bg-cream">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="text-center max-w-md mx-auto px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check size={40} className="text-green-500" />
        </motion.div>
        <h1 className="font-display text-4xl font-bold text-charcoal mb-4">Booking Confirmed! 🎉</h1>
        <p className="text-gray-500 mb-2">Your adventure to <strong>{pkg.title}</strong> is booked.</p>
        <p className="text-gray-400 text-sm mb-2">Booking reference: <span className="font-mono font-bold text-charcoal">TRP-{Math.random().toString(36).slice(2,8).toUpperCase()}</span></p>
        <p className="text-gray-400 text-sm mb-8">A confirmation email has been sent to <strong>{form.email}</strong></p>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 mb-8 text-left">
          <div className="flex justify-between text-sm mb-2"><span className="text-gray-500">Package</span><span className="font-semibold">{pkg.title}</span></div>
          <div className="flex justify-between text-sm mb-2"><span className="text-gray-500">Travelers</span><span className="font-semibold">{travelers}</span></div>
          <div className="flex justify-between text-sm mb-2"><span className="text-gray-500">Travel Date</span><span className="font-semibold">{form.travelDate}</span></div>
          <div className="flex justify-between text-sm font-bold border-t pt-2 mt-2"><span>Total Paid</span><span className="text-coral">${grandTotal.toLocaleString()}</span></div>
        </div>
        <Link href="/" className="btn-primary">Back to Home <ArrowRight size={18} /></Link>
      </motion.div>
    </main>
  );

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <div className="pt-28 pb-24 max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-coral">Home</Link>
          <ChevronRight size={14} />
          <Link href="/packages" className="hover:text-coral">Packages</Link>
          <ChevronRight size={14} />
          <Link href={`/packages/${pkg.id}`} className="hover:text-coral">{pkg.title}</Link>
          <ChevronRight size={14} />
          <span className="text-charcoal font-medium">Checkout</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-charcoal mb-10">Complete Your Booking</h1>

        {/* Step indicator */}
        <div className="flex items-center gap-0 mb-12 w-full max-w-lg">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ scale: step === i + 1 ? 1.1 : 1 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    step > i + 1 ? "bg-green-500 text-white" :
                    step === i + 1 ? "bg-coral text-white shadow-lg shadow-coral/30" :
                    "bg-gray-200 text-gray-400"
                  }`}
                >
                  {step > i + 1 ? <Check size={16} /> : i + 1}
                </motion.div>
                <span className={`text-xs mt-1.5 font-medium ${step === i + 1 ? "text-coral" : "text-gray-400"}`}>{s}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 mb-5 transition-colors duration-300 ${step > i + 1 ? "bg-green-500" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main form area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* STEP 1: Traveler Info */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-6">
                    <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Traveler Information</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <Field label="First Name" fieldKey="firstName" placeholder="John" />
                      <Field label="Last Name" fieldKey="lastName" placeholder="Smith" />
                      <Field label="Email Address" fieldKey="email" type="email" placeholder="john@example.com" />
                      <Field label="Phone Number" fieldKey="phone" type="tel" placeholder="+1 234 567 8900" />
                      <div>
                        <label className="text-sm font-medium text-gray-600 block mb-1.5">Country</label>
                        <select className="input-field" value={form.country} onChange={e => setForm({ ...form, country: e.target.value })}>
                          {["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "India", "UAE", "Japan", "Other"].map(c => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <Field label="Travel Date" fieldKey="travelDate" type="date" />
                      <Field label="Home Address" fieldKey="address" placeholder="123 Main St" full />
                      <div>
                        <label className="text-sm font-medium text-gray-600 block mb-1.5">Special Requirements</label>
                        <textarea
                          rows={3}
                          placeholder="Dietary needs, accessibility requirements, special occasions..."
                          value={form.specialReqs}
                          onChange={e => setForm({ ...form, specialReqs: e.target.value })}
                          className="input-field resize-none col-span-2"
                          style={{ gridColumn: "span 2" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Travelers */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-6">
                    <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                      <Users size={18} className="text-coral" /> Traveler Breakdown
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {["Adults", "Children", "Infants"].map((type, i) => (
                        <div key={type} className="bg-gray-50 rounded-2xl p-4 text-center">
                          <p className="text-xs text-gray-400 mb-2">{type}</p>
                          <p className="font-bold text-charcoal text-2xl">{i === 0 ? travelers : 0}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button onClick={handleNext} className="btn-primary w-full justify-center text-base">
                    Continue to Review <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {/* STEP 2: Review */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-6">
                    <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Review Your Booking</h2>

                    {/* Package preview */}
                    <div className="flex gap-5 p-5 bg-sand rounded-2xl mb-6">
                      <div className="img-zoom w-28 h-28 rounded-2xl overflow-hidden shrink-0">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-charcoal mb-1">{pkg.title}</h3>
                        <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                          <MapPin size={13} className="text-coral" /> {pkg.location}, {pkg.country}
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><Clock size={11} />{pkg.duration}</span>
                          <span className="flex items-center gap-1"><Users size={11} />{travelers} Traveler{travelers > 1 ? "s" : ""}</span>
                          <span className="flex items-center gap-1"><Star size={11} fill="#F4A261" className="text-gold" />{pkg.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Traveler summary */}
                    <h4 className="font-semibold text-charcoal mb-3">Traveler Details</h4>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { label: "Name", value: `${form.firstName} ${form.lastName}` },
                        { label: "Email", value: form.email },
                        { label: "Phone", value: form.phone },
                        { label: "Country", value: form.country },
                        { label: "Travel Date", value: form.travelDate },
                        { label: "Travelers", value: travelers },
                      ].map(({ label, value }) => (
                        <div key={label} className="bg-gray-50 rounded-xl p-3">
                          <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                          <p className="font-medium text-sm text-charcoal">{value || "—"}</p>
                        </div>
                      ))}
                    </div>
                    {form.specialReqs && (
                      <div className="bg-amber-50 rounded-xl p-4 mb-6 flex gap-3">
                        <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-amber-700 mb-1">Special Requirements</p>
                          <p className="text-sm text-amber-600">{form.specialReqs}</p>
                        </div>
                      </div>
                    )}

                    {/* What's included summary */}
                    <h4 className="font-semibold text-charcoal mb-3">Included In This Package</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {pkg.includes.slice(0, 4).map(item => (
                        <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                          <Check size={14} className="text-green-500 shrink-0" /> {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 py-3 px-6 rounded-full border-2 border-gray-200 hover:border-coral text-sm font-semibold text-gray-600 hover:text-coral transition-all">
                      ← Edit Details
                    </button>
                    <button onClick={handleNext} className="btn-primary flex-1 justify-center">
                      Proceed to Payment <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Payment */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-6">
                    <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Secure Payment</h2>

                    {/* Payment method selector */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { id: "card", label: "Credit Card", icon: "💳" },
                        { id: "paypal", label: "PayPal", icon: "🅿️" },
                        { id: "upi", label: "UPI / Bank", icon: "🏦" },
                      ].map(({ id, label, icon }) => (
                        <button
                          key={id}
                          onClick={() => setPayMethod(id as any)}
                          className={`p-4 rounded-2xl border-2 text-center transition-all ${
                            payMethod === id ? "border-coral bg-sand" : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <span className="text-2xl block mb-1">{icon}</span>
                          <span className="text-xs font-semibold text-gray-600">{label}</span>
                        </button>
                      ))}
                    </div>

                    {payMethod === "card" && (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <label className="text-sm font-medium text-gray-600 block mb-1.5">Name on Card</label>
                          <input
                            type="text"
                            placeholder="John Smith"
                            value={form.cardName}
                            onChange={e => setForm({ ...form, cardName: e.target.value })}
                            className={`input-field ${errors.cardName ? "border-red-400" : ""}`}
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="text-sm font-medium text-gray-600 block mb-1.5">Card Number</label>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              value={form.cardNumber}
                              onChange={e => {
                                const v = e.target.value.replace(/\D/g, "").replace(/(\d{4})/g, "$1 ").trim().slice(0, 19);
                                setForm({ ...form, cardNumber: v });
                              }}
                              className={`input-field pr-12 ${errors.cardNumber ? "border-red-400" : ""}`}
                            />
                            <CreditCard size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600 block mb-1.5">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            maxLength={5}
                            value={form.expiry}
                            onChange={e => {
                              let v = e.target.value.replace(/\D/g, "");
                              if (v.length >= 2) v = v.slice(0, 2) + "/" + v.slice(2, 4);
                              setForm({ ...form, expiry: v });
                            }}
                            className={`input-field ${errors.expiry ? "border-red-400" : ""}`}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600 block mb-1.5">CVV</label>
                          <input
                            type="password"
                            placeholder="•••"
                            maxLength={3}
                            value={form.cvv}
                            onChange={e => setForm({ ...form, cvv: e.target.value.replace(/\D/g, "") })}
                            className={`input-field ${errors.cvv ? "border-red-400" : ""}`}
                          />
                        </div>
                      </div>
                    )}

                    {payMethod === "paypal" && (
                      <div className="py-10 text-center bg-blue-50 rounded-2xl">
                        <p className="text-lg mb-2">🅿️</p>
                        <p className="font-semibold text-charcoal">You'll be redirected to PayPal</p>
                        <p className="text-sm text-gray-400 mt-1">to complete your payment securely</p>
                      </div>
                    )}

                    {payMethod === "upi" && (
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-600 block mb-1.5">UPI ID / VPA</label>
                          <input type="text" placeholder="yourname@upi" className="input-field" />
                        </div>
                      </div>
                    )}

                    {/* Security note */}
                    <div className="mt-6 flex items-center gap-3 p-4 bg-green-50 rounded-2xl">
                      <Lock size={18} className="text-green-500 shrink-0" />
                      <p className="text-sm text-green-700">Your payment is secured with 256-bit SSL encryption. We never store card details.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => setStep(2)} className="py-3 px-6 rounded-full border-2 border-gray-200 hover:border-coral text-sm font-semibold text-gray-600 hover:text-coral transition-all">
                      ← Back
                    </button>
                    <button onClick={handlePay} className="btn-primary flex-1 justify-center text-base">
                      <Lock size={16} /> Pay ${grandTotal.toLocaleString()} Securely
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ORDER SUMMARY SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-3xl border-2 border-gray-100 p-6 shadow-lg">
              <h3 className="font-display text-xl font-bold text-charcoal mb-5">Order Summary</h3>

              {/* Package mini card */}
              <div className="img-zoom rounded-2xl overflow-hidden h-36 mb-5">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-display font-bold text-charcoal mb-1">{pkg.title}</h4>
              <p className="text-sm text-gray-400 flex items-center gap-1 mb-1">
                <MapPin size={12} />{pkg.location}, {pkg.country}
              </p>
              <p className="text-sm text-gray-400 flex items-center gap-1 mb-4">
                <Clock size={12} />{pkg.duration}
              </p>

              <div className="border-t border-gray-100 pt-4 space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">${pkg.price} × {travelers} traveler{travelers > 1 ? "s" : ""}</span>
                  <span className="font-medium">${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Taxes (8%)</span>
                  <span className="font-medium">${tax}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Service fee</span>
                  <span className="font-medium">${serviceFee}</span>
                </div>
              </div>

              <div className="border-t-2 border-gray-100 pt-4 flex justify-between items-baseline mb-5">
                <span className="font-bold text-charcoal">Total</span>
                <span className="font-display text-2xl font-bold text-coral">${grandTotal.toLocaleString()}</span>
              </div>

              <div className="space-y-2">
                {[
                  { icon: Shield, text: "Free cancellation up to 48hrs" },
                  { icon: Check, text: "Instant confirmation" },
                  { icon: Lock, text: "Secure checkout" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-xs text-gray-500">
                    <Icon size={13} className="text-green-500" /> {text}
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 bg-sand rounded-2xl">
                <p className="text-xs font-semibold text-charcoal mb-1">🎁 Member Discount Applied</p>
                <p className="text-xs text-gray-500">You saved <strong className="text-coral">${pkg.originalPrice - pkg.price}</strong> per person on this package!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-400">Loading...</div></div>}>
      <CheckoutInner />
    </Suspense>
  );
}
