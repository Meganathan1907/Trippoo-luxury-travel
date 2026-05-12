import { Zap, Heart, Globe, Feather, Compass, Target, Shield, Mountain, Users, MapPin, TrendingUp, Clock } from "lucide-react";

export const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & Chief Adventure Officer",
    bio: "Former mountaineer who summited 6 peaks before 30. Founded Trippoo after realising the travel industry was missing raw, curated adventure at scale.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    treks: "42 expeditions",
    flag: "🇮🇳",
  },
  {
    name: "Sofia Reyes",
    role: "Head of Destination Experience",
    bio: "Ex-National Geographic field researcher. Has lived in 11 countries and personally vetted every single Trippoo itinerary on the ground.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    treks: "67 countries",
    flag: "🇲🇽",
  },
  {
    name: "Kai Tanaka",
    role: "Lead Adventure Guide & Safety Director",
    bio: "Certified wilderness medic, scuba instructor and paragliding pilot. Kai ensures every adventure is thrilling — and completely safe.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    treks: "200+ guided trips",
    flag: "🇯🇵",
  },
  {
    name: "Amara Osei",
    role: "Community & Traveller Relations",
    bio: "Built Trippoo's community from 0 to 50,000 adventurers. Every review, every story, every repeat booking — Amara makes sure travellers feel heard.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    treks: "35 countries",
    flag: "🇬🇭",
  },
];

export const awards = [
  { year: "2024", title: "Best Adventure Travel Platform", body: "World Travel Awards", icon: "🏆" },
  { year: "2023", title: "Top 10 Travel Startups to Watch", body: "Forbes Travel Guide", icon: "🥇" },
  { year: "2023", title: "Excellence in Customer Experience", body: "Travel Weekly Asia", icon: "⭐" },
  { year: "2022", title: "Sustainable Adventure Operator", body: "Green Globe Certification", icon: "🌿" },
  { year: "2022", title: "Best New Travel Company", body: "Condé Nast Traveller India", icon: "✈️" },
  { year: "2021", title: "People's Choice — Adventure Trips", body: "TripAdvisor Travellers' Choice", icon: "❤️" },
];

export const partners = [
  { name: "National Geographic Expeditions", logo: "🌍", type: "Media Partner" },
  { name: "IATA Certified", logo: "✈️", type: "Certification" },
  { name: "Booking.com Partner", logo: "🏨", type: "Accommodation" },
  { name: "Green Globe Certified", logo: "🌿", type: "Sustainability" },
  { name: "Lonely Planet", logo: "📖", type: "Content Partner" },
  { name: "World Wildlife Fund", logo: "🐾", type: "Conservation" },
  { name: "G Adventures Alliance", logo: "🧭", type: "Tour Operator" },
  { name: "TripAdvisor Elite", logo: "⭐", type: "Review Platform" },
];

export const process = [
  {
    step: "01",
    icon: Compass,
    title: "Discover Your Adventure",
    desc: "Browse 120+ curated destinations filtered by thrill level, duration, and budget. Every package is handpicked by our adventure specialists — not an algorithm.",
    color: "#FF4D6D",
  },
  {
    step: "02",
    icon: Target,
    title: "Personalise Your Journey",
    desc: "Tell us your group size, fitness level, and travel dates. We'll fine-tune your itinerary — adding or swapping activities until it feels perfectly yours.",
    color: "#F4A261",
  },
  {
    step: "03",
    icon: Shield,
    title: "Book with Confidence",
    desc: "Secure checkout, flexible cancellation, and full transparency on what's included. No hidden fees. Every booking is backed by our Best Price Guarantee.",
    color: "#06D6A0",
  },
  {
    step: "04",
    icon: Mountain,
    title: "Live the Adventure",
    desc: "Your expert guide meets you on the ground. 24/7 support throughout your trip. All you need to do is show up — we handle every detail from there.",
    color: "#4CC9F0",
  },
];

export const values = [
  { icon: Zap,     title: "Thrill-First Design",       desc: "Every itinerary is engineered around peak adrenaline moments, not filler days." },
  { icon: Heart,   title: "Safety Without Compromise", desc: "Certified guides, emergency protocols, and wilderness medics on every expedition." },
  { icon: Globe,   title: "Local-Led Always",           desc: "We work exclusively with local guides — their knowledge cannot be replicated." },
  { icon: Feather, title: "Leave No Trace",             desc: "Trippoo offsets 110% of carbon for every trip booked. Adventure shouldn't cost the planet." },
];

export const aboutStats = [
  { value: "50K+", label: "Adventurers Sent",   icon: Users },
  { value: "120+", label: "Destinations",        icon: MapPin },
  { value: "98%",  label: "Would Rebook",        icon: TrendingUp },
  { value: "12+",  label: "Years on the Trail",  icon: Clock },
];

export const sustainabilityStats = [
  { value: "10K+", label: "Trees Planted" },
  { value: "110%", label: "Carbon Offset" },
  { value: "3",    label: "Conservation Projects" },
  { value: "Zero", label: "Single-use Plastic" },
];
