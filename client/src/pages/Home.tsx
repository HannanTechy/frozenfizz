import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import RefreshmentSection from "@/components/home/RefreshmentSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StoreLocatorSection from "@/components/home/StoreLocatorSection";
import AboutSection from "@/components/home/AboutSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import ContactSection from "@/components/home/ContactSection";
import SocialSection from "@/components/home/SocialSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <RefreshmentSection />
      <TestimonialsSection />
      <StoreLocatorSection />
      <AboutSection />
      <NewsletterSection />
      <ContactSection />
      <SocialSection />
    </main>
  );
};

export default Home;
