"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { team } from "@/lib/aboutData";
import { fadeUp } from "@/lib/motionHelpers";

export default function AboutTeam() {
  return (
    <section className="py-28 mesh-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">The People Behind the Peaks</p>
          <h2 className="font-display text-5xl md:text-6xl font-black text-charcoal">
            Meet the Team
          </h2>
          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            We're not travel agents sitting in offices. We're climbers, divers, wanderers
            and storytellers who've been to the places we send you.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 card-lift">
                {/* Photo */}
                <div className="img-zoom relative h-72 bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Flag + stat overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <span className="text-2xl">{member.flag}</span>
                    <span className="glass text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                      {member.treks}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display font-black text-lg text-charcoal mb-0.5 group-hover:text-coral transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-coral text-xs font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* We're hiring banner */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-16 p-10 rounded-3xl bg-charcoal text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=40"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="relative z-10">
            <p className="text-coral text-sm font-semibold tracking-widest uppercase mb-3">
              We're Hiring
            </p>
            <h3 className="font-display text-3xl font-black text-white mb-4">
              Love Adventure? Join Our Team.
            </h3>
            <p className="text-white/60 mb-6 max-w-md mx-auto">
              We're always looking for passionate guides, travel writers, and experience
              designers. If the outdoors is your office, talk to us.
            </p>
            <a href="mailto:careers@trippoo.com" className="btn-primary inline-flex">
              View Open Roles <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
