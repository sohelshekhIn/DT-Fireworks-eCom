"use client";

import {
  SliderFireworks,
  SliderFireworksPremiumProduct,
  SliderFireworksSfx,
} from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const HeroSlider = () => {
  return (
    <div className="px-4 py-10 pt-2 lg:px-8">
      <div
        data-hs-carousel='{
          "loadingClasses": "opacity-0",
          "interval": 5000
        }'
        className="relative"
      >
        <div className="hs-carousel relative min-h-[45rem] w-full overflow-hidden rounded-2xl bg-gray-900 md:h-[calc(90vh-106px)]">
          <div className="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap opacity-0 transition-transform duration-700">
            {/* First Slide - Fireworks */}
            <div className="hs-carousel-slide">
              <div className="flex h-full flex-col bg-gradient-to-r from-black/80 via-black/50 to-transparent px-5 md:px-20">
                <div className="flex h-full w-full flex-col-reverse justify-center gap-4 pb-8 md:flex-row md:items-center md:gap-0 md:pb-0">
                  <div className="mx-auto w-full max-w-[85rem] px-4 py-4 sm:px-6 md:w-1/2 md:py-16 lg:px-8">
                    <div className="max-w-2xl">
                      <p className="mb-2 text-lg font-semibold text-primary md:text-xl">
                        Premium Fireworks
                      </p>
                      <h1 className="mb-4 block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight">
                        Light Up Your{" "}
                        <span className="text-primary">Celebrations</span>
                      </h1>
                      <p className="mt-3 max-w-lg text-lg text-gray-200">
                        Discover our premium collection of fireworks that will
                        make your special moments unforgettable.
                      </p>

                      <div className="mt-7 grid w-full gap-3 sm:inline-flex">
                        <Link
                          className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryDark disabled:pointer-events-none disabled:opacity-50"
                          href="/shop"
                        >
                          Shop Now
                          <svg
                            className="size-4 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex h-[350px] w-full items-center justify-center pt-8 md:h-full md:w-1/2 md:pt-0">
                    <Image
                      src={SliderFireworks}
                      alt="Premium Fireworks"
                      width={600}
                      height={600}
                      className="h-auto w-auto max-w-[90%] object-contain md:max-w-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Slide - SFX */}
            <div className="hs-carousel-slide">
              <div className="flex h-full flex-col bg-gradient-to-r from-black/80 via-black/50 to-transparent px-5 md:px-20">
                <div className="flex h-full w-full flex-col-reverse justify-center gap-4 pb-8 md:flex-row md:items-center md:gap-0">
                  <div className="mx-auto w-full max-w-[85rem] px-4 py-4 sm:px-6 md:w-1/2 md:py-16 lg:px-8">
                    <div className="max-w-2xl">
                      <p className="mb-2 text-lg font-semibold text-secondaryDark md:text-xl">
                        Special Effects
                      </p>
                      <h1 className="mb-4 block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight">
                        Create{" "}
                        <span className="text-secondaryDark">Magical</span>{" "}
                        Moments
                      </h1>
                      <p className="mt-3 max-w-lg text-lg text-gray-200">
                        Professional-grade special effects for events,
                        performances, and productions.
                      </p>

                      <div className="mt-7 grid w-full gap-3 sm:inline-flex">
                        <Link
                          className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-secondaryDark px-6 py-3 text-sm font-semibold text-white transition hover:bg-secondaryDark hover:saturate-150 disabled:pointer-events-none disabled:opacity-50"
                          href="/shop?category=sfx"
                        >
                          Explore SFX
                          <svg
                            className="size-4 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex h-[350px] w-full items-center justify-center pt-8 md:h-full md:w-1/2 md:pt-0">
                    <Image
                      src={SliderFireworksSfx}
                      alt="Special Effects"
                      width={600}
                      height={600}
                      className="h-auto w-auto max-w-[90%] object-contain md:max-w-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Third Slide - Featured Collection */}
            <div className="hs-carousel-slide">
              <div className="flex h-full flex-col bg-gradient-to-r from-black/80 via-black/50 to-transparent px-5 md:px-20">
                <div className="flex h-full w-full flex-col-reverse justify-center gap-4 pb-8 md:flex-row md:items-center md:gap-0 md:pb-0">
                  <div className="mx-auto w-full max-w-[85rem] px-4 py-4 sm:px-6 md:w-1/2 md:py-16 lg:px-8">
                    <div className="max-w-2xl">
                      <p className="mb-2 text-lg font-semibold text-white md:text-xl">
                        Featured Collection
                      </p>
                      <h1 className="mb-4 block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight">
                        Premium <span className="text-primary">Selection</span>
                      </h1>
                      <p className="mt-3 max-w-lg text-lg text-gray-200">
                        Explore our handpicked collection of premium fireworks
                        and special effects.
                      </p>

                      <div className="mt-7 grid w-full gap-3 sm:inline-flex">
                        <Link
                          className="inline-flex items-center justify-center gap-x-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
                          href="/shop?category=featured"
                        >
                          View Collection
                          <svg
                            className="size-4 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex h-[350px] w-full items-center justify-center pt-8 md:h-full md:w-1/2 md:pt-0">
                    <Image
                      src={SliderFireworksPremiumProduct}
                      alt="Premium Selection"
                      width={600}
                      height={600}
                      className="h-auto w-auto max-w-[90%] object-contain md:max-w-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            className="hs-carousel-prev hs-carousel:disabled:opacity-50 absolute inset-y-0 start-0 z-10 inline-flex h-full w-12 items-center justify-center rounded-s-2xl text-white transition hover:bg-black/10 disabled:pointer-events-none"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="size-5 flex-shrink-0 md:size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>

          <button
            type="button"
            className="hs-carousel-next hs-carousel:disabled:opacity-50 absolute inset-y-0 end-0 z-10 inline-flex h-full w-12 items-center justify-center rounded-e-2xl text-white transition hover:bg-black/10 disabled:pointer-events-none"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="size-5 flex-shrink-0 md:size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
