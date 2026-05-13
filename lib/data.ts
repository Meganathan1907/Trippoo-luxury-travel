import tajmahal from "@/assets/Taj-Mahal/image1.png";
import tajmahal1 from "@/assets/Taj-Mahal/image2.png";
import tajmahal2 from "@/assets/Taj-Mahal/image3.jpg";
import tajmahal3 from "@/assets/Taj-Mahal/image4.jpg";
import tajmahal4 from "@/assets/Taj-Mahal/image5.jpg";
import ambar1 from "@/assets/Ambar-Palace/image1.jpg";
import ambar2 from "@/assets/Ambar-Palace/image2.jpg";
import ambar3 from "@/assets/Ambar-Palace/image3.jpg";
import ambar4 from "@/assets/Ambar-Palace/image4.jpg";
import ambar5 from "@/assets/Ambar-Palace/image5.jpg";
import swaminarayan1 from "@/assets/Swaminarayan/image1.jpg";
import swaminarayan2 from "@/assets/Swaminarayan/image2.jpg";
import swaminarayan3 from "@/assets/Swaminarayan/image3.jpg";
import swaminarayan4 from "@/assets/Swaminarayan/image4.jpg";
import swaminarayan5 from "@/assets/Swaminarayan/image5.jpg";
import qutub1 from "@/assets/Qutub/image1.jpg";
import qutub2 from "@/assets/Qutub/image2.jpg";
import qutub3 from "@/assets/Qutub/image3.jpg";
import qutub4 from "@/assets/Qutub/image4.jpg";
import qutub5 from "@/assets/Qutub/image5.jpg";
import Humayun1 from "@/assets/Humayun/image1.jpg";
import Humayun2 from "@/assets/Humayun/image2.jpg";
import Humayun3 from "@/assets/Humayun/image3.jpg";
import Humayun4 from "@/assets/Humayun/image4.jpg";
import Humayun5 from "@/assets/Humayun/image5.jpg";
import ramoji1 from "@/assets/ramoji/image1.jpg";
import ramoji2 from "@/assets/ramoji/image2.jpg";
import ramoji3 from "@/assets/ramoji/image3.jpg";
import ramoji4 from "@/assets/ramoji/image4.jpg";
import ramoji5 from "@/assets/ramoji/image5.jpg";
import iskon1 from  "@/assets/iskon/image1.jpg";
import iskon2 from  "@/assets//iskon/image2.jpg";
import iskon3 from  "@/assets/iskon/image3.jpg";
import iskon4 from  "@/assets/iskon/image4.jpg";
import iskon5 from  "@/assets/iskon/image5.jpg";
import gateway1 from  "@/assets/gateway/image1.jpg";
import gateway2 from  "@/assets/gateway/image2.jpg";
import gateway3 from  "@/assets/gateway/image3.jpg";
import gateway4 from  "@/assets/gateway/image4.jpg";
import gateway5 from  "@/assets/gateway/image5.jpg";
import person1 from "@/assets/testimonials/person1.jpg";
import person2 from "@/assets/testimonials/person4.jpg";
import person3 from "@/assets/testimonials/person3.jpg";
import person4 from "@/assets/testimonials/person2.jpg";




export interface Package {
  id: string;
  title: string;
  location: string;
  country: string;
  category: string[];
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; activities: string[] }[];
  includes: string[];
  excludes: string[];
  tag?: string;
  featured?: boolean;
}

export const packages: Package[] = [
  {
    id: "Taj-Mahal",
    title: "Taj Mahal",
    location: "Agara",
    country: "India",
    category: ["Couples", "All Place"],
    duration: "5 Days 6 Nights",
    price: 349,
    originalPrice: 499,
    rating: 4.9,
    reviews: 3500,
    image: tajmahal.src,
    gallery: [tajmahal1.src, tajmahal2.src, tajmahal3.src, tajmahal4.src],
    description:
      "Wind through the dramatic cliffside roads of the Amalfi Coast, where lemon groves cascade down to the turquoise Tyrrhenian Sea. This iconic Italian route blends luxury, romance, and la dolce vita.",
    highlights: [
      "Private villa stays",
      "Sunset boat cruise",
      "Limoncello masterclass",
      "Pompeii guided tour",
      "Capri island day trip",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Naples",
        activities: [
          "Airport transfer to boutique hotel",
          "Evening walk along Spaccanapoli",
          "Welcome dinner at rooftop restaurant",
        ],
      },
      {
        day: 2,
        title: "Positano & Beyond",
        activities: [
          "Drive the coastal road",
          "Beach time in Positano",
          "Lunch at cliffside terrace",
          "Sunset cocktails",
        ],
      },
      {
        day: 3,
        title: "Capri Island",
        activities: [
          "Ferry to Capri",
          "Visit Blue Grotto",
          "Shopping in Capri town",
          "Sunset return",
        ],
      },
      {
        day: 4,
        title: "Pompeii & Ravello",
        activities: [
          "Pompeii guided excavation tour",
          "Drive to Ravello",
          "Villa Rufolo gardens",
          "Classical concert",
        ],
      },
      {
        day: 5,
        title: "Leisure & Departure",
        activities: [
          "Morning at leisure",
          "Limoncello tasting",
          "Transfer to Naples airport",
        ],
      },
    ],
    includes: [
      "5-star hotel accommodation",
      "Daily breakfast & 3 dinners",
      "Private driver",
      "All entrance fees",
      "English-speaking guide",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Lunches",
    ],
    tag: "Best Seller",
    featured: true,
  },
  {
    id: "Amber-Palace",
    title: "Amber Palace",
    location: "Jaipur",
    country: "India",
    category: ["Family", "Couples", "All Place"],
    duration: "3 Days 4 Nights",
    price: 245,
    originalPrice: 320,
    rating: 4.9,
    reviews: 3500,
    image: ambar1.src,
    gallery: [ambar2.src, ambar3.src, ambar4.src, ambar5.src],
    description:
      "Immerse yourself in the mystical island of the gods. From sacred temples perched on volcanic lakes to the vibrant nightlife of Seminyak, Bali offers an unparalleled sensory journey.",
    highlights: [
      "Rice terrace sunrise trek",
      "Temple blessing ceremony",
      "Cooking class with local family",
      "Ubud Monkey Forest",
      "Sunset at Tanah Lot",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Paradise",
        activities: [
          "Airport transfer",
          "Seminyak hotel check-in",
          "Beach sunset walk",
          "Welcome dinner",
        ],
      },
      {
        day: 2,
        title: "Spiritual Ubud",
        activities: [
          "Tegallalang rice terraces",
          "Tirta Empul temple blessing",
          "Art market exploration",
          "Traditional Kecak dance",
        ],
      },
      {
        day: 3,
        title: "Adventure Day",
        activities: [
          "White water rafting",
          "Cooking class",
          "Spa treatment",
          "Farewell dinner",
        ],
      },
      {
        day: 4,
        title: "Departure",
        activities: [
          "Sunrise at Tanah Lot",
          "Last minute shopping",
          "Airport transfer",
        ],
      },
    ],
    includes: [
      "Resort accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Temple entrance fees",
      "Guided tours",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Tips & gratuities",
      "Personal shopping",
    ],
    tag: "Top Pick",
    featured: true,
  },
  {
    id: "Swaminarayan-Akshardham",
    title: "Swaminarayan Akshardham",
    location: "Delhi",
    country: "India",
    category: ["Couples", "Solo", "All Place"],
    duration: "2 Days 3 Nights",
    price: 230,
    originalPrice: 299,
    rating: 4.9,
    reviews: 3500,
    image: swaminarayan1.src,
    gallery: [
      swaminarayan2.src,
      swaminarayan3.src,
      swaminarayan4.src,
      swaminarayan5.src,
    ],
    description:
      "Walk the ancient limestone walls of the 'Pearl of the Adriatic.' Dubrovnik's terracotta rooftops, crystalline waters, and medieval architecture create an unforgettable backdrop for your Adriatic escape.",
    highlights: [
      "City walls walk",
      "Game of Thrones filming locations",
      "Elaphiti Islands boat tour",
      "Cable car panoramic views",
      "Traditional konoba dining",
    ],
    itinerary: [
      {
        day: 1,
        title: "Pearl of the Adriatic",
        activities: [
          "Old Town orientation walk",
          "City walls circumnavigation",
          "Stradun promenade lunch",
          "Cable car sunset",
        ],
      },
      {
        day: 2,
        title: "Islands & Sea",
        activities: [
          "Elaphiti Islands boat tour",
          "Snorkeling in crystal waters",
          "Fresh seafood lunch",
          "Evening wine tasting",
        ],
      },
      {
        day: 3,
        title: "Culture & Departure",
        activities: [
          "Rector's Palace visit",
          "Game of Thrones tour",
          "Final beach swim",
          "Airport transfer",
        ],
      },
    ],
    includes: [
      "Boutique hotel stay",
      "Daily breakfast",
      "City walls tickets",
      "Boat tour",
      "Airport transfers",
    ],
    excludes: ["Flights", "Dinners", "Optional activities", "Travel insurance"],
    tag: "New",
    featured: true,
  },
  {
    id: "Qutub-Minar",
    title: "Qutub Minar",
    location: "New Delhi",
    country: "India",
    category: ["Couples", "All Place"],
    duration: "4 Days 5 Nights",
    price: 520,
    originalPrice: 699,
    rating: 4.8,
    reviews: 2800,
    image:
      qutub1.src,
    gallery: [
          qutub2.src,
          qutub3.src,
          qutub4.src,
          qutub5.src,
    ],
    description:
      "Perched on volcanic cliffs, Santorini's iconic white-washed architecture and cobalt blue domes set the stage for one of the world's most romantic sunsets. A Greek island escape like no other.",
    highlights: [
      "Oia sunset viewing",
      "Volcano boat tour",
      "Wine tasting at volcanic vineyards",
      "Private infinity pool villa",
      "Akrotiri archaeological site",
    ],
    itinerary: [
      {
        day: 1,
        title: "Santorini Arrival",
        activities: [
          "Ferry or flight arrival",
          "Cave villa check-in",
          "Fira exploration",
          "Sunset cocktails",
        ],
      },
      {
        day: 2,
        title: "Caldera Cruise",
        activities: [
          "Volcano boat excursion",
          "Hot springs swim",
          "Thirassia island stop",
          "Sunset sailing",
        ],
      },
      {
        day: 3,
        title: "Wine & Culture",
        activities: [
          "Morning yoga at infinity pool",
          "Akrotiri ruins visit",
          "Volcanic vineyard tour",
          "Wine tasting dinner",
        ],
      },
      {
        day: 4,
        title: "Oia & Leisure",
        activities: [
          "Photography walk through Oia",
          "Beach day at Red Beach",
          "Spa treatment",
          "Farewell dinner",
        ],
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Slow morning",
          "Final caldera views",
          "Airport/port transfer",
        ],
      },
    ],
    includes: [
      "Cave villa or boutique hotel",
      "Daily breakfast",
      "Caldera cruise",
      "Wine tour",
      "All transfers",
    ],
    excludes: [
      "International flights",
      "Ferry tickets to Santorini",
      "Spa treatments",
      "Souvenirs",
    ],
    tag: "Luxury",
    featured: false,
  },
  {
    id: "Humayun's-Tomb",
    title: "Humayun's Tomb",
    location: "New Delhi",
    country: "India",
    category: ["Couples", "All Place"],
    duration: "6 Days 7 Nights",
    price: 299,
    originalPrice: 699,
    rating: 5.0,
    reviews: 200,
    image:
      Humayun1.src,
    gallery: [
       Humayun2.src,
       Humayun3.src,
       Humayun4.src,
       Humayun5.src,
    ],
    description:
      "Step out of your overwater bungalow directly into the Indian Ocean's warm, glass-clear waters. The Maldives remains the world's ultimate luxury escape — a place where your villa floats above a kaleidoscope of coral reefs.",
    highlights: [
      "Overwater bungalow",
      "Dolphin watching cruise",
      "Coral reef snorkeling",
      "Underwater restaurant dinner",
      "Private sandbank picnic",
    ],
    itinerary: [
      {
        day: 1,
        title: "Island Paradise Arrival",
        activities: [
          "Speedboat transfer from Malé",
          "Overwater villa check-in",
          "Welcome coconut & refreshments",
          "Sunset cruise",
        ],
      },
      {
        day: 2,
        title: "Ocean Adventures",
        activities: [
          "Morning snorkeling on reef",
          "Glass-bottom kayaking",
          "Submarine excursion",
          "Sunset fishing",
        ],
      },
      {
        day: 3,
        title: "Pure Relaxation",
        activities: [
          "Overwater spa treatment",
          "Beach yoga",
          "Dolphin watching cruise",
          "Underwater restaurant dinner",
        ],
      },
      {
        day: 4,
        title: "Island Hopping",
        activities: [
          "Local island visit",
          "Sandbank picnic",
          "Water sports",
          "Bonfire on beach",
        ],
      },
      {
        day: 5,
        title: "Deep Sea Day",
        activities: [
          "Scuba diving (beginner friendly)",
          "Reef conservation tour",
          "Photography session",
          "Private dining",
        ],
      },
      {
        day: 6,
        title: "Final Paradise Day",
        activities: [
          "Morning swim",
          "Spa farewell treatment",
          "Packing & checkout",
          "Speedboat to Malé",
        ],
      },
      {
        day: 7,
        title: "Departure",
        activities: ["Flight connections from Malé"],
      },
    ],
    includes: [
      "Overwater bungalow (all-inclusive)",
      "All meals & drinks",
      "Speedboat transfers",
      "Snorkeling & water sports",
      "Daily excursions",
    ],
    excludes: [
      "International flights to Malé",
      "Scuba diving certification",
      "Spa upgrades",
      "Souvenirs",
    ],
    tag: "Premium",
    featured: false,
  },
  {
    id: "Ramoji-Film-City",
    title: "Ramoji Film City",
    location: "Hyderabad",
    country: "India",
    category: ["Solo", "Family", "All Place"],
    duration: "5 Days 6 Nights",
    price: 480,
    originalPrice: 620,
    rating: 4.9,
    reviews: 200,
    image:
      ramoji1.src,
    gallery: [
      ramoji2.src,
      ramoji3.src,
      ramoji4.src,
      ramoji5.src,
    ],
    description:
      "Walk the bamboo groves of Arashiyama at dawn, participate in a traditional tea ceremony, and find stillness in ancient Zen temple gardens. Kyoto is Japan's soul — preserved, profound, and perfectly beautiful.",
    highlights: [
      "Fushimi Inari dawn walk",
      "Traditional tea ceremony",
      "Bamboo grove Arashiyama",
      "Nara deer park",
      "Ryokan with onsen (hot spring)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ancient Capital Arrival",
        activities: [
          "Kyoto station arrival",
          "Ryokan check-in",
          "Gion district evening walk",
          "Traditional kaiseki dinner",
        ],
      },
      {
        day: 2,
        title: "Temple Trail",
        activities: [
          "Fushimi Inari sunrise hike",
          "Nishiki market food tour",
          "Kinkaku-ji (Golden Pavilion)",
          "Tea ceremony experience",
        ],
      },
      {
        day: 3,
        title: "Arashiyama",
        activities: [
          "Bamboo grove walk",
          "Tenryu-ji Zen garden",
          "Monkey Park",
          "Traditional craft workshop",
        ],
      },
      {
        day: 4,
        title: "Nara Day Trip",
        activities: [
          "Todai-ji giant Buddha",
          "Deer park feeding",
          "Kasuga Shrine",
          "Return to Kyoto",
        ],
      },
      {
        day: 5,
        title: "Philosopher's Path",
        activities: [
          "Morning meditation session",
          "Philosopher's Walk canal path",
          "Final shopping at Teramachi",
          "Airport transfer",
        ],
      },
    ],
    includes: [
      "Ryokan & boutique hotel mix",
      "Daily breakfast & 2 dinners",
      "Bullet train pass (regional)",
      "Temple entrance fees",
      "Tea ceremony",
      "English guide",
    ],
    excludes: [
      "International flights",
      "Sake & alcohol",
      "Personal shopping",
      "Optional cooking class",
    ],
    tag: "Cultural",
    featured: false,
  },
  {
    id: "ISKCON-Temple-Bangalore",
    title: "ISKCON Temple Bangalore",
    location: "Bangaluru",
    country: "India",
    category: ["Adventure", "Solo", "All Place"],
    duration: "8 Days 9 Nights",
    price: 890,
    originalPrice: 50,
    rating: 4.8,
    reviews: 980,
       image: iskon1.src,
    gallery: [
      iskon2.src,
      iskon3.src,
      iskon4.src,
      iskon5.src,
    ],
    description:
      "At the bottom of the world, granite towers pierce the sky above glacial lakes of impossible blue. The W Trek through Torres del Paine is one of Earth's great adventures — raw, wild, and utterly unforgettable.",
    highlights: [
      "W Trek multi-day hike",
      "Grey Glacier kayaking",
      "Condor spotting",
      "Gaucho ranch experience",
      "Perito Moreno glacier",
    ],
    itinerary: [
      {
        day: 1,
        title: "Punta Arenas Arrival",
        activities: [
          "City orientation",
          "Gear check & briefing",
          "Welcome asado (BBQ)",
        ],
      },
      {
        day: 2,
        title: "Enter the Park",
        activities: [
          "Transfer to park",
          "Lago Grey camp",
          "First glacier views",
        ],
      },
      {
        day: 3,
        title: "Grey Glacier",
        activities: [
          "Kayaking on glacial lake",
          "Ice trekking",
          "Refugio dinner",
        ],
      },
      {
        day: 4,
        title: "Paine Massif",
        activities: [
          "Valley del Francés hike",
          "Panoramic viewpoints",
          "Riverside camp",
        ],
      },
      {
        day: 5,
        title: "Torres del Paine",
        activities: [
          "Pre-dawn hike to towers",
          "Sunrise at Mirador",
          "Base camp lunch",
        ],
      },
      {
        day: 6,
        title: "Lago Pehoé",
        activities: [
          "Catamaran crossing",
          "Wildlife spotting",
          "Eco-lodge check-in",
        ],
      },
      {
        day: 7,
        title: "Gaucho Ranch",
        activities: ["Horseback riding", "Ranch lunch", "Sunset on pampas"],
      },
      {
        day: 8,
        title: "Return Journey",
        activities: [
          "Final landscape walk",
          "Transfer to Punta Arenas",
          "Farewell dinner",
        ],
      },
      { day: 9, title: "Departure", activities: ["Airport transfer"] },
    ],
    includes: [
      "Trekking permits",
      "All accommodation (refugios & eco-lodges)",
      "All meals during trek",
      "Expert mountain guide",
      "Kayaking excursion",
      "Transfers",
    ],
    excludes: [
      "International flights to Punta Arenas",
      "Personal gear",
      "Travel insurance (mandatory)",
      "Tips",
    ],
    tag: "Adventure",
    featured: false,
  },
  {
    id: "Gateway-Of-India",
    title: "Gateway Of India",
    location: "Jodhpur",
    country: "India",
    category: ["Couples", "Family", "All Place"],
    duration: "4 Days 5 Nights",
    price: 650,
    originalPrice: 850,
    rating: 4.7,
    reviews: 800,
    image:
         gateway3.src,
    gallery: [
    gateway2.src,
    gateway1.src,
    gateway4.src,
    gateway5.src,
    ],
    description:
      "From the world's tallest tower to gold souk bazaars, Dubai is a city of superlatives. A seamless blend of Arabian tradition and futuristic ambition awaits in this desert metropolis that refuses limits.",
    highlights: [
      "Burj Khalifa observation deck",
      "Desert safari & dune bashing",
      "Dubai Mall & fountain show",
      "Dhow cruise dinner",
      "Gold & Spice Souk",
    ],
    itinerary: [
      {
        day: 1,
        title: "City of Gold Arrival",
        activities: [
          "5-star hotel check-in",
          "Dubai Mall & fountain show",
          "Burj Khalifa at sunset",
        ],
      },
      {
        day: 2,
        title: "Old & New Dubai",
        activities: [
          "Gold Souk morning",
          "Abra boat ride to Deira",
          "Spice Souk lunch",
          "Dhow Creek dinner cruise",
        ],
      },
      {
        day: 3,
        title: "Desert Adventure",
        activities: [
          "Desert safari with dune bashing",
          "Camel riding",
          "Bedouin camp dinner",
          "Stargazing",
        ],
      },
      {
        day: 4,
        title: "Beach & Leisure",
        activities: [
          "JBR beach morning",
          "Aquaventure Waterpark",
          "Palm Jumeirah drive",
          "Fine dining farewell",
        ],
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Hotel checkout",
          "Last-minute shopping",
          "Airport transfer",
        ],
      },
    ],
    includes: [
      "5-star hotel (4 nights)",
      "Daily breakfast",
      "Desert safari with dinner",
      "Dhow cruise",
      "Burj Khalifa tickets",
      "Airport transfers",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Lunches & extra dinners",
      "Waterpark entry",
    ],
    tag: "Luxury",
    featured: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Emma Jain",
    country: "UK",
    avatar:person1.src,
    rating: 5,
    text: "Great value for money with high-quality service. The team was responsive and helpful whenever I had questions. Bali was absolutely magical!",
    package: "Bali Paradise",
  },
  {
    id: 2,
    name: "Marco Rossi",
    country: "Italy",
   avatar:person2.src,
    rating: 5,
    text: "The Amalfi Coast package exceeded every expectation. Private villa, stunning views, and an itinerary that felt truly personalised. Will book again!",
    package: "Amalfi Coast Drive",
  },
  {
    id: 3,
    name: "Kim jong",
    country: "South Korea",
   avatar:person3.src,
    rating: 5,
    text: "Santorini was a dream come true. The cave villa had the most breathtaking caldera view I've ever seen. Trippoo made it completely seamless.",
    package: "Santorini Sunset Dream",
  },
  {
    id: 4,
    name: "James Okafor",
    country: "Nigeria",
   avatar:person4.src,
    rating: 5,
    text: "Patagonia was everything I dreamed of and more. Our guide knew every trail, every condor nesting spot. Genuinely life-changing experience.",
    package: "Patagonia Wild Trek",
  },
];

export const stats = [
  { value: "50K+", label: "Happy Travellers" },
  { value: "20+", label: "Destinations" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "2+", label: "Years Experience" },
];
