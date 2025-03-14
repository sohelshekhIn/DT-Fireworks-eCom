import {
  ColorShots,
  GroundWedding,
  SkyColorShots,
  WeddingEntry,
  WeddingStage,
} from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const EffectsImagesSection = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Discover Our Effects Collection
        </h2>
        <p className="text-lg text-gray-600">
          From stunning aerial displays to ground-level spectacles
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Large Feature - Stage Effects */}
        <div className="col-span-12 lg:col-span-8">
          <Link
            className="group relative block h-full overflow-hidden rounded-xl"
            href="/shop?category=stage"
          >
            <div className="aspect-w-16 aspect-h-9 h-full overflow-hidden rounded-xl">
              <Image
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={WeddingStage}
                alt="Professional stage effects and pyrotechnics"
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 end-0 start-0 p-4 sm:p-6">
                <div className="rounded-lg bg-white/90 p-4 backdrop-blur-sm dark:bg-neutral-900/90">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white md:text-2xl">
                    Stage Effects
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Indoor & outdoor stage pyrotechnics
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Aerial Spectaculars */}
        <div className="col-span-12 lg:col-span-4">
          <Link
            className="group relative block h-full overflow-hidden rounded-xl"
            href="/shop?category=aerial"
          >
            <div className="aspect-w-4 aspect-h-3 h-full overflow-hidden rounded-xl">
              <Image
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={SkyColorShots}
                alt="Spectacular aerial fireworks display"
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 end-0 start-0 p-4">
                <div className="rounded-lg bg-white/90 p-4 backdrop-blur-sm dark:bg-neutral-900/90">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    Aerial Spectaculars
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Professional-grade aerial shells and cakes
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Ground Effects */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <Link
            className="group relative block h-full overflow-hidden rounded-xl"
            href="/shop?category=ground"
          >
            <div className="aspect-w-4 aspect-h-3 h-full overflow-hidden rounded-xl">
              <Image
                width={600}
                height={400}
                className="h-full w-full object-cover pb-16 transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={GroundWedding}
                alt="Ground-based firework effects"
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black to-transparent" />
              <div className="absolute bottom-0 end-0 start-0 p-4">
                <div className="rounded-lg bg-white/90 p-4 backdrop-blur-sm dark:bg-neutral-900/90">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    Ground Effects
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Fountains & ground-level displays
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Display Packages */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <Link
            className="group relative block h-full overflow-hidden rounded-xl"
            href="/shop?category=display"
          >
            <div className="aspect-w-4 aspect-h-3 h-full overflow-hidden rounded-xl">
              <Image
                width={600}
                height={400}
                className="h-full w-full object-cover pb-16 transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={ColorShots}
                alt="Professional firework display packages"
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black to-transparent" />
              <div className="absolute bottom-0 end-0 start-0 p-4">
                <div className="rounded-lg bg-white/90 p-4 backdrop-blur-sm dark:bg-neutral-900/90">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    Display Packages
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Complete show solutions
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Special Effects */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <Link
            className="group relative block h-full overflow-hidden rounded-xl"
            href="/shop?category=special"
          >
            <div className="aspect-w-4 aspect-h-3 h-full overflow-hidden rounded-xl">
              <Image
                width={600}
                height={400}
                className="h-full w-full object-cover pb-16 transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={WeddingEntry}
                alt="Special effects and atmospheric effects"
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black to-transparent" />
              <div className="absolute bottom-0 end-0 start-0 p-4">
                <div className="rounded-lg bg-white/90 p-4 backdrop-blur-sm dark:bg-neutral-900/90">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    Special Effects
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Smoke, fog & atmospheric effects
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EffectsImagesSection;
