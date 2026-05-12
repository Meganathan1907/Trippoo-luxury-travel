import Link from "next/link";
import { Globe, Share2, Rss, Video, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-5">
              <span className="font-display text-2xl font-bold">Tripp</span>
              <span className="font-display text-2xl font-bold text-coral">oo</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              We are committed to providing the most affordable and convenient flight options, making travel planning simple and stress-free.
            </p>
            <div className="flex gap-3">
            {[Globe, Share2, Rss, Video].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-coral transition-colors flex items-center justify-center">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5 text-white">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Why Choose Us", "How It Works", "Careers", "Press"].map(l => (
                <li key={l}><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* See More */}
          <div>
            <h4 className="font-semibold mb-5 text-white">See More</h4>
            <ul className="space-y-3">
              {["Sitemap", "Disclaimer", "Privacy Policy", "Terms of Use", "Cookie Policy"].map(l => (
                <li key={l}><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={14} className="text-coral shrink-0" />
                hello@trippoo.com
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={14} className="text-coral shrink-0" />
                +1 (880) 174-6030-416
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={14} className="text-coral shrink-0 mt-0.5" />
                123 Travel Street, Adventure City, World 10001
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white text-sm font-medium mb-3">Get travel inspiration</p>
              <div className="flex gap-2">
                <input
                suppressHydrationWarning
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder-white/40 outline-none focus:border-coral transition-colors"
                />
                <button className="px-4 py-2.5 bg-coral rounded-xl text-sm font-medium hover:bg-coral-dark transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2025 Trippoo. All rights reserved.</p>
          <p className="text-white/40 text-sm">Crafted with ❤️ for wanderers worldwide</p>
        </div>
      </div>
    </footer>
  );
}
