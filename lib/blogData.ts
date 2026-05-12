export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: { name: string; role: string; avatar: string };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ultimate-patagonia-packing-guide",
    title: "The Ultimate Patagonia Packing Guide: What Actually Works at the End of the World",
    excerpt: "After 200+ guided treks through Torres del Paine, our lead guide Kai Tanaka reveals the 23 items that actually matter — and the 12 things everyone packs but never uses.",
    content: "",
    category: "Adventure Tips",
    tags: ["Patagonia", "Packing", "Trekking", "South America"],
    author: { name: "Kai Tanaka", role: "Lead Adventure Guide", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
    date: "May 2, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80",
    featured: true,
  },
  {
    slug: "bali-hidden-temples",
    title: "7 Sacred Temples in Bali That Most Tourists Never Find",
    excerpt: "Beyond Tanah Lot and Uluwatu lies a spiritual Bali that rewards the curious traveller. Our destination expert spent three months mapping the island's most profound sanctuaries.",
    content: "",
    category: "Destinations",
    tags: ["Bali", "Temples", "Culture", "Indonesia"],
    author: { name: "Sofia Reyes", role: "Head of Destination Experience", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    date: "April 24, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=80",
    featured: true,
  },
  {
    slug: "travel-solo-safely",
    title: "How to Travel Solo Safely in 2025: A Practical Guide for First-Timers",
    excerpt: "Solo travel is the fastest-growing travel trend globally. Here's everything you need to know — from pre-trip safety checks to what to do if things go sideways.",
    content: "",
    category: "Travel Tips",
    tags: ["Solo Travel", "Safety", "Beginners", "Tips"],
    author: { name: "Amara Osei", role: "Community & Traveller Relations", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
    date: "April 18, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=900&q=80",
    featured: true,
  },
  {
    slug: "amalfi-coast-road-trip",
    title: "Driving the Amalfi Coast: The Route That Changed Our Founder's Life",
    excerpt: "The SS163 is 50 km of hairpin bends, lemon groves, and views that stop time. Here's a day-by-day breakdown of the perfect Amalfi road trip.",
    content: "",
    category: "Destinations",
    tags: ["Italy", "Amalfi", "Road Trip", "Europe"],
    author: { name: "Arjun Mehta", role: "Founder & CEO", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    date: "April 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=900&q=80",
  },
  {
    slug: "japan-cherry-blossom-guide",
    title: "Japan Cherry Blossom 2025: When to Go, Where to Stand, What to Know",
    excerpt: "Sakura season is Japan's most competitive travel window. Here's our insider timeline, the overlooked spots, and why Kyoto is both the best and worst choice.",
    content: "",
    category: "Seasonal Guides",
    tags: ["Japan", "Cherry Blossom", "Kyoto", "Spring"],
    author: { name: "Sofia Reyes", role: "Head of Destination Experience", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    date: "March 29, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=80",
  },
  {
    slug: "maldives-budget-guide",
    title: "The Maldives on a Budget: How We Got There for Under $800 All-In",
    excerpt: "Everyone thinks the Maldives is only for honeymooners with unlimited budgets. It isn't. Here's the exact playbook we used to make it work.",
    content: "",
    category: "Budget Travel",
    tags: ["Maldives", "Budget", "Hacks", "Island"],
    author: { name: "Amara Osei", role: "Community & Traveller Relations", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
    date: "March 15, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&q=80",
  },
  {
    slug: "sustainable-adventure-travel",
    title: "Sustainable Adventure Travel: How to Explore Without Destroying",
    excerpt: "The adventure travel industry has a carbon problem. Here's how Trippoo is tackling it — and what you can do on your next trip to leave things better than you found them.",
    content: "",
    category: "Sustainability",
    tags: ["Sustainability", "Eco Travel", "Carbon", "Responsibility"],
    author: { name: "Arjun Mehta", role: "Founder & CEO", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    date: "March 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
  },
  {
    slug: "santorini-photography-guide",
    title: "Santorini Photography Guide: 12 Spots, Best Light, and Honest Expectations",
    excerpt: "Those Instagram-perfect Oia shots are real — but they take planning, patience, and arriving at 5:30am. Here's the full honest guide.",
    content: "",
    category: "Photography",
    tags: ["Santorini", "Photography", "Greece", "Instagram"],
    author: { name: "Sofia Reyes", role: "Head of Destination Experience", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    date: "February 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=80",
  },
  {
    slug: "family-adventure-travel-tips",
    title: "Adventure Travel With Kids: What Nobody Tells You (And What Actually Works)",
    excerpt: "We surveyed 500 families who travelled with Trippoo. Here's what separates the memorable family trips from the exhausting ones.",
    content: "",
    category: "Family Travel",
    tags: ["Family", "Kids", "Adventure", "Tips"],
    author: { name: "Kai Tanaka", role: "Lead Adventure Guide", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
    date: "February 8, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80",
  },
];

export const blogCategories = [
  "All",
  "Destinations",
  "Adventure Tips",
  "Travel Tips",
  "Seasonal Guides",
  "Budget Travel",
  "Sustainability",
  "Photography",
  "Family Travel",
];
