import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero       from "@/components/blog/BlogHero";
import BlogFeatured   from "@/components/blog/BlogFeatured";
import BlogGrid       from "@/components/blog/BlogGrid";
import BlogNewsletter from "@/components/blog/BlogNewsletter";

export const metadata = {
  title: "The Trippoo Journal — Travel Stories & Guides",
  description: "Real destination guides, packing tips, and adventure inspiration from the people who've actually been there.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
    </main>
  );
}
