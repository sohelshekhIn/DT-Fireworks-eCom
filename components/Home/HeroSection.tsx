import { HeroImage } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="max-w-[85rem] h-[70vh] lg:h-[60vh] pt-16 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center">
        <div className="mt-10 lg:mt-0">
          <h1 className=" font-bold flex flex-col text-base sm:text-lg md:text-xl lg:text-3xl text-gray-800 dark:text-white">
            Experience the
            <span className=" text-3xl sm:text-4xl md:text-5xl lg:text-7xl hover:text-primary ">
              Magic of Fireworks
            </span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
            Shop our wide selection of fireworks for every occasion.
          </p>
          <div className="pt-5 lg:pt-8">
            <Link
              className="inline-block bg-primary px-4 py-2 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-primaryDark"
              href="/shop"
            >
              Browse Products
            </Link>
          </div>
        </div>

        <div className="max-w-2xl">
          <Image
            className="w-full rounded-xl"
            src={HeroImage}
            alt="Image Description"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
