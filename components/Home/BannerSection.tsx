import { FireworksWithoutBg } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
  return (
    <section className="rounded-2xl flex flex-col-reverse lg:flex-row flex-wrap px-8 py-8 lg:px-16 lg:py-16 shadow-xl border-none bg-gradient-to-bl from-black via-70% via-black/90  to-primary text-white w-full dark:border-2 dark:border-white ">
      <div className="w-full space-y-6 lg:w-1/2 my-auto ">
        <h1 className="text-6xl font-semibold text-white">
          Get upto <span className="text-primary">50% Off</span> on all
          fireworks
        </h1>
        <p className="text-gray-300">
          Celebrate your special occasions with our wide range of fireworks.
        </p>
        <Link
          className="inline-block bg-white px-4 py-2 text-text font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-white/80"
          href="/shop"
        >
          Shop Now
        </Link>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src={FireworksWithoutBg}
          alt="Two fireworks bursting in the dark night sky"
        />
      </div>
    </section>
  );
};

export default BannerSection;
