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

      <div className="grid gap-6 sm:grid-cols-12">
        {/* Large Feature Image - Aerial Fireworks */}
        <div className="col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
          <Link
            className="group relative block overflow-hidden rounded-xl"
            href="/shop?category=aerial"
          >
            <div className="aspect-w-16 aspect-h-9 sm:aspect-none overflow-hidden rounded-xl">
              <Image
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src="/images/products/aerial-display.jpg"
                alt="Spectacular aerial fireworks display"
              />
            </div>
            <div className="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
              <div className="rounded-lg bg-white/90 p-4 backdrop-blur-sm dark:bg-neutral-900/90">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white md:text-2xl">
                  Aerial Spectaculars
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Professional-grade aerial shells and cakes
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Stage Effects */}
        <div className="col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
          <Link
            className="group relative block overflow-hidden rounded-xl"
            href="/shop?category=stage"
          >
            <div className="aspect-w-16 aspect-h-9 sm:aspect-none overflow-hidden rounded-xl">
              <Image
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src="/images/products/stage-effects.jpg"
                alt="Professional stage effects and pyrotechnics"
              />
            </div>
            <div className="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
              <div className="rounded-lg bg-white/90 p-4 backdrop-blur-sm dark:bg-neutral-900/90">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white md:text-xl">
                  Stage Effects
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Indoor & outdoor stage pyrotechnics
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Ground Effects */}
        <div className="col-span-12 md:col-span-4">
          <Link
            className="group relative block overflow-hidden rounded-xl"
            href="/shop?category=ground"
          >
            <div className="aspect-w-16 aspect-h-9 sm:aspect-none overflow-hidden rounded-xl">
              <Image
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src="/images/products/ground-effects.jpg"
                alt="Ground-based firework effects"
              />
            </div>
            <div className="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
              <div className="rounded-lg bg-white/90 p-4 backdrop-blur-sm dark:bg-neutral-900/90">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white md:text-xl">
                  Ground Effects
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Fountains & ground-level displays
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Special Effects */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <Link
            className="group relative block overflow-hidden rounded-xl"
            href="/shop?category=special"
          >
            <div className="aspect-w-16 aspect-h-9 sm:aspect-none overflow-hidden rounded-xl">
              <Image
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src="/images/products/special-effects.jpg"
                alt="Special effects and smoke machines"
              />
            </div>
            <div className="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
              <div className="rounded-lg bg-white/90 p-4 backdrop-blur-sm dark:bg-neutral-900/90">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white md:text-xl">
                  Special Effects
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Smoke, fog & atmospheric effects
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Display Packages */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <Link
            className="group relative block overflow-hidden rounded-xl"
            href="/shop?category=packages"
          >
            <div className="aspect-w-16 aspect-h-9 sm:aspect-none overflow-hidden rounded-xl">
              <Image
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src="/images/products/display-packages.jpg"
                alt="Professional firework display packages"
              />
            </div>
            <div className="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
              <div className="rounded-lg bg-white/90 p-4 backdrop-blur-sm dark:bg-neutral-900/90">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white md:text-xl">
                  Display Packages
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Complete show solutions
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EffectsImagesSection;
