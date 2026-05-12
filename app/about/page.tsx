import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero     from "@/components/about/AboutHero";
import AboutStats    from "@/components/about/AboutStats";
import AboutStory    from "@/components/about/AboutStory";
import AboutMission  from "@/components/about/AboutMission";
import AboutProcess  from "@/components/about/AboutProcess";
import AboutTeam     from "@/components/about/AboutTeam";
import AboutAwards   from "@/components/about/AboutAwards";
import AboutPartners from "@/components/about/AboutPartners";
import AboutCTA      from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Trippoo — Born at 5,400 Metres",
  description:
    "We don't sell trips. We build legends. Learn about the adventure-obsessed team behind Trippoo.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutMission />
      <AboutProcess />
      <AboutTeam />
      <AboutAwards />
      <AboutPartners />
      <AboutCTA />
    </main>
  );
}
