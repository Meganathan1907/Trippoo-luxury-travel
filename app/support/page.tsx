"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupportHero        from "@/components/support/SupportHero";
import SupportContact     from "@/components/support/SupportContact";
import SupportFAQ         from "@/components/support/SupportFAQ";
import SupportEmergency   from "@/components/support/SupportEmergency";
import SupportContactForm from "@/components/support/SupportContactForm";

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <SupportHero onSearch={setSearchQuery} />
      <SupportContact />
      <SupportFAQ searchQuery={searchQuery} />
      <SupportEmergency />
      <SupportContactForm />
      <Footer />
    </main>
  );
}
