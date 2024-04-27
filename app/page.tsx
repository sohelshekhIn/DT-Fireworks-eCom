import BannerSection from "@/components/Home/BannerSection";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import ShopByOccasion from "@/components/Home/ShopByOccasion";
import HeroSlider from "@/components/Home/HeroSlider";
import HeroSection from "@/components/Home/HeroSection";
import EffectsIntroSection from "@/components/Home/EfffectsIntroSection";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* <HeroSlider />
       */}
      <HeroSection />
      <FeaturedProducts />
      <BannerSection />
      <ShopByOccasion />
      <EffectsIntroSection />
    </div>
  );
}
