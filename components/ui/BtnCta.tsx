// "use client";

// import Link from "next/link";
// import { Phone, MessageCircle, Grid } from "lucide-react";

// export default function BtnCta() {
//   return (
//     <>
//       {/* ================= DESKTOP FLOATING CTA ================= */}
//       <div className="hidden md:flex fixed right-6 bottom-10 flex-col gap-3 z-50">
        
//         {/* Call */}
//         <a
//           href="tel:+918667579881"
//           className="flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-lg px-4 py-3 rounded-full hover:scale-105 transition"
//         >
//           <Phone size={18} className="text-green-600" />
//           <span className="text-sm font-medium">Call</span>
//         </a>

//         {/* WhatsApp */}
//         <a
//           href="https://wa.me/918667579881"
//           target="_blank"
//           className="flex items-center gap-2 bg-green-500 text-white shadow-lg px-4 py-3 rounded-full hover:scale-105 transition"
//         >
//           <MessageCircle size={18} />
//           <span className="text-sm font-medium">WhatsApp</span>
//         </a>

//         {/* All Products */}
//         <Link
//           href="/packages"
//           className="flex items-center gap-2 bg-black text-white shadow-lg px-4 py-3 rounded-full hover:scale-105 transition"
//         >
//           <Grid size={18} />
//           <span className="text-sm font-medium">Packages</span>
//         </Link>
//       </div>

//       {/* ================= MOBILE BOTTOM NAV (iPhone STYLE) ================= */}
//       <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
//         <div className="mx-3 mb-3 bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl flex justify-around items-center py-3 border border-white/40">

//           {/* Call */}
//           <a
//             href="tel:+918667579881"
//             className="flex flex-col items-center text-xs text-gray-700"
//           >
//             <Phone size={20} className="text-green-600" />
//             Call
//           </a>

//           {/* WhatsApp */}
//           <a
//             href="https://wa.me/919876543210"
//             target="_blank"
//             className="flex flex-col items-center text-xs text-gray-700"
//           >
//             <MessageCircle size={20} className="text-green-500" />
//             WhatsApp
//           </a>

//           {/* Packages */}
//           <Link
//             href="/packages"
//             className="flex flex-col items-center text-xs text-gray-700"
//           >
//             <Grid size={20} className="text-black" />
//             Packages
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Grid, X, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BtnCta() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ================= MOBILE SPEED DIAL FAB ================= */}
      <div className="md:hidden fixed bottom-6 right-5 z-50">

        <div ref={ref} className="flex flex-col items-end gap-3">

          {/* BACKGROUND OPTIONS */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-end gap-3"
              >
                {/* Call */}
                <a
                  href="tel:+918667579881"
                  className="flex items-center gap-2 bg-white shadow-lg px-4 py-2 rounded-full"
                >
                  <Phone size={18} className="text-green-600" />
                  Call
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918667579881"
                  target="_blank"
                  className="flex items-center gap-2 bg-green-500 text-white shadow-lg px-4 py-2 rounded-full"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

                {/* Packages */}
                <Link
                  href="/packages"
                  className="flex items-center gap-2 bg-black text-white shadow-lg px-4 py-2 rounded-full"
                >
                  <Grid size={18} />
                  Packages
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* MAIN BUTTON (TOGGLE) */}
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
              open ? "bg-red-500 rotate-45" : "bg-orange-500"
            } text-white`}
          >
            {open ? <X size={22} /> : <Plus size={22} />}
          </motion.button>

        </div>
      </div>

      {/* ================= DESKTOP VERSION ================= */}
      {/* ================= DESKTOP FLOATING FAB (PREMIUM) ================= */}
<div className="hidden md:block fixed right-6 bottom-10 z-50">

  <div className="group relative flex flex-col items-end gap-3">

    {/* OPTIONS (hidden until hover) */}
    <div className="flex flex-col items-end gap-3 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

      {/* Call */}
      <a
        href="tel:+918667579881"
        className="flex items-center gap-2 bg-white/95 backdrop-blur-md shadow-lg px-4 py-3 rounded-full hover:scale-105 transition"
      >
        <Phone size={18} className="text-green-600" />
        <span className="text-sm font-medium">Call</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918667579881"
        target="_blank"
        className="flex items-center gap-2 bg-green-500 text-white shadow-lg px-4 py-3 rounded-full hover:scale-105 transition"
      >
        <MessageCircle size={18} />
        <span className="text-sm font-medium">WhatsApp</span>
      </a>

      {/* Packages */}
      <Link
        href="/packages"
        className="flex items-center gap-2 bg-black text-white shadow-lg px-4 py-3 rounded-full hover:scale-105 transition"
      >
        <Grid size={18} />
        <span className="text-sm font-medium">Packages</span>
      </Link>
    </div>

    {/* MAIN BUTTON */}
    <button className="w-14 h-14 rounded-full bg-coral text-white shadow-2xl flex items-center justify-center hover:scale-110 transition relative">
      <Plus size={22} />

      {/* Tooltip */}
      <span className="absolute -left-24 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
        Quick Actions
      </span>
    </button>

  </div>
</div>
    </>
  );
}