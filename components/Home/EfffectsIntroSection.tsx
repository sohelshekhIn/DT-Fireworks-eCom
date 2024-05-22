import Link from "next/link";

const EffectsIntroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-secondary to-secondary/40 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-secondaryDark/10 dark:to-secondaryDark/10"></div>
        <div className="bg-gradient-to-tl from-secondary via-secondary/50 to-secondary/20 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-secondaryDark/70 dark:via-secondaryDark/10 dark:to-seconaryDark"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <div className="mt-5 max-w-2xl">
              <h1 className="relative block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                Elevate Your Stage with{" "}
                <span
                  data-content="✨"
                  className="inline-block text-primary dark:text-primaryDark
                    after:content-[attr(data-content)] after:text-xl after:absolute after:top-8 lg:after:top-14 lg:after:text-3xl after:animate-pulse"
                >
                  Pyro Magic
                </span>
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-neutral-400">
                Want to create a truly unforgettable stage experience? Our team
                of pyrotechnic experts will help you transform your stage into a
                breathtaking spectacle.
              </p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              <Link
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-transparent bg-secondary border border-secondaryDark text-accent hover:text-text hover:bg-secondaryDark dark:bg-secondary/80 disabled:opacity-50 disabled:pointer-events-none"
                href="/contact"
              >
                Let&apos;s design your stage effect
                <svg
                  className="flex-shrink-0 size-4"
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
      </div>
    </section>
  );
};

export default EffectsIntroSection;
