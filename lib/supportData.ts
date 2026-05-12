export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FaqItem[] = [
  { category: "Booking", question: "How do I book a package on Trippoo?", answer: "Browse our packages, select the one you love, choose your travel dates and number of travellers, then proceed to checkout. You'll receive a confirmation email within minutes. Our team will follow up within 24 hours with your full trip details." },
  { category: "Booking", question: "Can I customise an existing package?", answer: "Absolutely. Every package can be personalised — swap activities, upgrade accommodation, add extra days or adjust the group size. Just send us an enquiry from the package page and our adventure specialists will build your perfect itinerary." },
  { category: "Booking", question: "Is there a minimum group size?", answer: "Most packages are available for individuals, couples and groups. Some adventure expeditions (like high-altitude treks) require a minimum of 2 participants for safety reasons. Check the individual package details for specifics." },
  { category: "Payments", question: "What payment methods do you accept?", answer: "We accept all major credit and debit cards (Visa, Mastercard, Amex), PayPal, UPI and bank transfers. All transactions are secured with 256-bit SSL encryption. We never store your card details." },
  { category: "Payments", question: "Do I have to pay the full amount upfront?", answer: "No — for most packages you can secure your booking with a 30% deposit, with the remaining balance due 30 days before departure. This is shown clearly at checkout. For last-minute bookings (within 30 days), full payment is required." },
  { category: "Payments", question: "Are there any hidden fees?", answer: "Never. What you see at checkout is what you pay. We're transparent about exactly what's included and excluded on every package page. Service fees and applicable taxes are shown before you confirm." },
  { category: "Cancellation", question: "What is your cancellation policy?", answer: "Cancellations made 60+ days before departure receive a full refund minus a 5% processing fee. 30–59 days: 50% refund. 15–29 days: 25% refund. Under 15 days: no refund. We strongly recommend purchasing travel insurance." },
  { category: "Cancellation", question: "What if Trippoo cancels my trip?", answer: "In the rare event we cancel a trip (due to safety concerns, natural disasters, or insufficient bookings), you'll receive a full refund within 5 business days or the option to rebook any package at the same value." },
  { category: "Cancellation", question: "Can I reschedule instead of cancelling?", answer: "Yes — rescheduling is free if done 45+ days before departure. Closer than 45 days, a rescheduling fee of $50 per person applies. You can reschedule up to 12 months from your original travel date." },
  { category: "During Your Trip", question: "Is there 24/7 support during my trip?", answer: "Yes. Every traveller gets a dedicated WhatsApp support number before departure. Our on-ground team and global support desk are available 24/7 throughout your trip for any emergency or question." },
  { category: "During Your Trip", question: "What happens if there's a medical emergency?", answer: "All our guides are certified in wilderness first aid. We have emergency evacuation protocols in place for every destination. We strongly recommend comprehensive travel insurance that includes medical evacuation cover." },
  { category: "During Your Trip", question: "Are your guides certified and vetted?", answer: "Every Trippoo guide is locally certified, background-checked, and has completed our internal training programme. Lead guides on adventure expeditions hold internationally recognised certifications (UIAGM, PADI, etc.)." },
  { category: "Visas & Documents", question: "Do you help with visa requirements?", answer: "We provide a full visa requirements guide for every destination in your booking confirmation. For some destinations we can assist with visa applications directly. Contact our team after booking for personalised visa guidance." },
  { category: "Visas & Documents", question: "What travel documents do I need?", answer: "At minimum: a valid passport with 6 months validity beyond your travel dates, any required visas, your booking confirmation, and travel insurance documents. Some destinations may require proof of vaccinations." },
];

export const supportCategories = ["All", "Booking", "Payments", "Cancellation", "During Your Trip", "Visas & Documents"];

export const contactOptions = [
  { icon: "💬", title: "Live Chat", desc: "Chat with our team right now", sub: "Average response: 2 minutes", action: "Start Chat", available: true },
  { icon: "📧", title: "Email Us", desc: "hello@trippoo.com", sub: "Reply within 4 hours", action: "Send Email", available: true },
  { icon: "📞", title: "Call Us", desc: "+1 (880) 174-6030-416", sub: "Mon–Fri, 9am–9pm IST", action: "Call Now", available: true },
  { icon: "🗓️", title: "Book a Call", desc: "Schedule a 30-min session", sub: "With an adventure specialist", action: "Book Slot", available: true },
];

export const emergencyContacts = [
  { region: "Asia Pacific", number: "+91 98765 43210", hours: "24/7" },
  { region: "Europe & UK", number: "+44 20 7946 0958", hours: "24/7" },
  { region: "Americas", number: "+1 800 874 2468", hours: "24/7" },
  { region: "Middle East & Africa", number: "+971 4 567 8901", hours: "24/7" },
];
