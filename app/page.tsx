import HeroSection from "@/components/Home/HeroSection";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import ShopByOccasion from "@/components/Home/ShopByOccasion";

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <FeaturedProducts />
      <ShopByOccasion />
    </div>
  );
}
