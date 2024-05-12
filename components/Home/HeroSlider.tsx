import Image from "next/image";

const HeroSlider = () => {
  return (
    <div className="px-4 lg:px-8 py-10">
      <div
        data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-[40rem] md:h-[calc(90vh-106px)]  bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide">
              <div className="h-[40rem] flex flex-col md:h-[calc(100vh-106px)] px-8 lg:px-14">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    <div>
                      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                        Start your journey with{" "}
                        <span className="text-blue-600">Preline</span>
                      </h1>
                      <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                        Hand-picked professionals and expertly crafted
                        components, designed for any kind of entrepreneur.
                      </p>

                      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                        <a
                          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          href="#"
                        >
                          Get started
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
                        </a>
                        <a
                          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                          href="#"
                        >
                          Contact sales team
                        </a>
                      </div>
                    </div>

                    <div className="relative ms-4">
                      <Image
                        width={700}
                        height={800}
                        className="w-full rounded-md"
                        src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
                        alt="Image Description"
                      />
                      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

                      <div className="absolute bottom-0 start-0">
                        <svg
                          className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900"
                          width="630"
                          height="451"
                          viewBox="0 0 630 451"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="531"
                            y="352"
                            width="99"
                            height="99"
                            fill="currentColor"
                          />
                          <rect
                            x="140"
                            y="352"
                            width="106"
                            height="99"
                            fill="currentColor"
                          />
                          <rect
                            x="482"
                            y="402"
                            width="64"
                            height="49"
                            fill="currentColor"
                          />
                          <rect
                            x="433"
                            y="402"
                            width="63"
                            height="49"
                            fill="currentColor"
                          />
                          <rect
                            x="384"
                            y="352"
                            width="49"
                            height="50"
                            fill="currentColor"
                          />
                          <rect
                            x="531"
                            y="328"
                            width="50"
                            height="50"
                            fill="currentColor"
                          />
                          <rect
                            x="99"
                            y="303"
                            width="49"
                            height="58"
                            fill="currentColor"
                          />
                          <rect
                            x="99"
                            y="352"
                            width="49"
                            height="50"
                            fill="currentColor"
                          />
                          <rect
                            x="99"
                            y="392"
                            width="49"
                            height="59"
                            fill="currentColor"
                          />
                          <rect
                            x="44"
                            y="402"
                            width="66"
                            height="49"
                            fill="currentColor"
                          />
                          <rect
                            x="234"
                            y="402"
                            width="62"
                            height="49"
                            fill="currentColor"
                          />
                          <rect
                            x="334"
                            y="303"
                            width="50"
                            height="49"
                            fill="currentColor"
                          />
                          <rect
                            x="581"
                            width="49"
                            height="49"
                            fill="currentColor"
                          />
                          <rect
                            x="581"
                            width="49"
                            height="64"
                            fill="currentColor"
                          />
                          <rect
                            x="482"
                            y="123"
                            width="49"
                            height="49"
                            fill="currentColor"
                          />
                          <rect
                            x="507"
                            y="124"
                            width="49"
                            height="24"
                            fill="currentColor"
                          />
                          <rect
                            x="531"
                            y="49"
                            width="99"
                            height="99"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>

            <div className="hs-carousel-slide">
              <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('/images/hero_slider_1.png')] bg-cover bg-center bg-no-repeat">
                <div className="w-full h-full  bg-gradient-to-t flex flex-col from-black from-10% to-transparent">
                  <div className="mt-auto w-2/4 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                    <span className="block text-white">CoolApps</span>
                    <h1 className="block text-white font-semibold text-2xl md:text-4xl">
                      Light Up Your Celebrations!
                    </h1>
                    <div className="mt-5">
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        Read Case Studies
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hs-carousel-slide">
              <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">Grumpy</span>
                  <span className="block text-white text-xl md:text-3xl">
                    Bringing Art to everything
                  </span>
                  <div className="mt-5">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Read Case Studies
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
