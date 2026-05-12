"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Play,
  Star,
} from "lucide-react";
import { heroImages } from "@/lib/heroData";


const searchTabs = ["🗺️ Tour & Guides"];

const locations = [
  "Bali, Indonesia",
  "Dubai, UAE",
  "Paris, France",
  "Tokyo, Japan",
  "Maldives",
];

const travelers = [
  "1 Adult",
  "2 Adults",
  "2 Adults, 1 Child",
  "4 Friends",
  "2 Couples",
];
export default function HomeHero() {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Parallax BG */}
      <motion.div className="absolute inset-0" style={{ y: heroY }}>
              {heroImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  animate={{
                    opacity: index === heroIndex ? 1 : 0,
                    scale: index === heroIndex ? 1 : 1.1,
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </motion.div>
              ))}
      
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
            </motion.div>

      {/* Decorative rings */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-white/10 animate-[spin_30s_linear_infinite]" />
      <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full border border-white/10 animate-[spin_20s_linear_infinite_reverse]" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20"
        style={{ opacity: heroOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="pill bg-white/15 backdrop-blur-sm text-white border border-white/25 text-xs mb-6 inline-flex">
            ✦ Inspiration, Planning & Booking — All in One
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 max-w-5xl"
        >
          Your Journey Starts
          <br />
          <span className="italic text-coral-light">Before You Go</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white/75 text-lg md:text-xl max-w-xl mb-10"
        >
          Inspiration, Planning, And Booking — All In One Travel Experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-4 justify-center mb-14"
        >
          <Link href="/packages" className="btn-primary text-base">
            View Packages <ArrowRight size={18} />
          </Link>
          <button className="flex items-center gap-3 px-7 py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/25 transition-all text-base">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Play
                size={12}
                fill="var(--coral)"
                className="text-coral ml-0.5"
              />
            </span>
            Watch Film
          </button>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-4xl"
        >
          <div className="glass-light rounded-2xl p-2 shadow-2xl">
            <div className="flex gap-1 mb-2 px-1 pt-1">
              {searchTabs.map((t, i) => (
                <button
                  key={t}
                  className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all ${i === 0 ? "bg-coral text-white" : "text-gray-500 hover:text-charcoal"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {/* Location */}
              <div className="flex flex-col px-4 py-3 bg-white rounded-xl border border-gray-100">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Location
                </span>

                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-coral" />

                  <select className="w-full bg-transparent outline-none text-sm text-gray-500">
                    {locations.map((location) => (
                      <option key={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Check In */}
              <div className="flex flex-col px-4 py-3 bg-white rounded-xl border border-gray-100">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Check In
                </span>

                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-coral" />

                  <input
                    type="date"
                    className="w-full bg-transparent outline-none text-sm text-gray-500"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div className="flex flex-col px-4 py-3 bg-white rounded-xl border border-gray-100">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Check Out
                </span>

                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-coral" />

                  <input
                    type="date"
                    className="w-full bg-transparent outline-none text-sm text-gray-500"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div className="flex flex-col px-4 py-3 bg-white rounded-xl border border-gray-100">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Travelers
                </span>

                <div className="flex items-center gap-2">
                  <Users size={14} className="text-coral" />

                  <select className="w-full bg-transparent outline-none text-sm text-gray-500">
                    {travelers.map((person) => (
                      <option key={person}>{person}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-2 pr-1 pb-1">
              <Link
                href="/packages"
                className="btn-primary text-sm"
                style={{ padding: "12px 28px" }}
              >
                <Search size={16} /> Search
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Image switcher dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setHeroIndex(i)}
            className={`transition-all duration-300 rounded-full ${i === heroIndex ? "w-8 h-2 bg-coral" : "w-2 h-2 bg-white/50"}`}
          />
        ))}
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1 }}
        className="absolute left-8 bottom-1/3 float-badge hidden lg:block"
      >
        <div className="glass text-white rounded-2xl px-5 py-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-coral rounded-xl flex items-center justify-center">
              <Star size={18} fill="white" className="text-white" />
            </div>
            <div>
              <p className="font-bold text-lg">4.9/5</p>
              <p className="text-white/70 text-xs">50K+ Reviews</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
        className="absolute right-8 top-1/3 float-badge hidden lg:block"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="glass text-white rounded-2xl px-5 py-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🌍</div>
            <div>
              <p className="font-bold">120+ Destinations</p>
              <p className="text-white/70 text-xs">Worldwide Coverage</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 