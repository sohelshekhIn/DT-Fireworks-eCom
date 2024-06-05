import HeroSection from "@/components/AboutUs/HeroSection";
import IntroParagraph from "@/components/AboutUs/IntroParagraph";
import OurCore from "@/components/AboutUs/OurCore";
import { Breadcrumb } from "@/components/Breadcrumb";
import BannerSection from "@/components/Home/BannerSection";
import Testimonials from "@/components/Home/Testimonials";

const AboutUsPage = () => {
  return (
    <div className="w-full py-10 pb-32">
      <HeroSection />
      <Breadcrumb
        crumbs={[
          {
            name: "About Us",
            href: "/about-us/",
          },
        ]}
      />
      <IntroParagraph />
      <OurCore />
      <Testimonials />
      <BannerSection />
    </div>
  );
};

export default AboutUsPage;
