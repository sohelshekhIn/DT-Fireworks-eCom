import Image from "next/image";

const ProductMediaCarousel = ({
  productMediaList,
}: {
  productMediaList: string[];
}) => {
  return (
    <div
      data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
      className="relative"
    >
      <div className="hs-carousel relative overflow-hidden min-h-[60vh] w-full bg-white rounded-lg">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          {productMediaList.map((media, index) =>
            productMediaList.length - 1 === index ? (
              <div key="yt-video-iframe" className="hs-carousel-slide">
                <iframe
                  className="w-full h-full"
                  src={media}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div key={index} className="hs-carousel-slide">
                <Image
                  width={700}
                  height={500}
                  className="shadow-xl h-full w-full object-cover shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                  src={media}
                  alt="Image Description"
                />
              </div>
            )
          )}
        </div>
      </div>

      <button
        type="button"
        className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="flex-shrink-0 size-5"
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
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10"
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="flex-shrink-0 size-5"
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
        {productMediaList.map((_, index) => (
          <span
            key={index}
            className="hs-carousel-active:bg-primaryDark/50 hs-carousel-active:border-primaryDark size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"
          ></span>
        ))}
      </div>
    </div>
  );
};

const SingleProductImage = ({ image }: { image: string }) => {
  return (
    <Image
      width={700}
      height={500}
      className="shadow-xl object-cover min-h-[60vh] w-auto shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
      src={image}
      alt="Image Description"
    />
  );
};

const CategoryBagde = ({ categories }: { categories: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <span
          key={category}
          className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-secondary/50 text-gray-800 dark:bg-secondary/50 dark:text-white"
        >
          {category}
        </span>
      ))}
    </div>
  );
};

const ThreeLineStrikesDesignElement = () => {
  return (
    <div className="hidden absolute -top-20 end-0 translate-x-20 md:block lg:translate-x-20">
      <svg
        className="w-16 h-auto text-orange-500"
        width="121"
        height="135"
        viewBox="0 0 121 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
export {
  ProductMediaCarousel,
  SingleProductImage,
  CategoryBagde,
  ThreeLineStrikesDesignElement,
};
