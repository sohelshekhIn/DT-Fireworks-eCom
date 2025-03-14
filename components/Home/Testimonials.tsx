const testimonials = [
  {
    author: "Rohan Patel",
    role: "Event Organizer, Ahmedabad",
    text: "DT Fireworks truly brought magic to our Diwali celebrations with their stunning fireworks display. Their professionalism and attention to detail were impressive.",
  },
  {
    author: "Priya Mehta",
    role: "Bride, Nadiad",
    text: "The pyrotechnic effects provided by DT Fireworks for our wedding were breathtaking. Their team was very cooperative and ensured everything went smoothly.",
  },
  {
    author: "Amit Shah",
    role: "Corporate Event Manager, Mumbai",
    text: "DT Fireworks exceeded our expectations with their innovative SFX solutions for our corporate event. The team was highly skilled and efficient.",
  },
  {
    author: "Rahul Jain",
    role: "Festival Organizer, Delhi",
    text: "We were thrilled with the fireworks display by DT Fireworks at our festival. Their creativity and execution were top-notch.",
  },
  {
    author: "Nalini Desai",
    role: "Wedding Planner, Vadodara",
    text: "Dhanjibhai and his team added a mesmerizing touch to the wedding with their pyrotechnic displays. Highly recommended for any special occasion.",
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="mt-5">
        <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
          Testimonials
        </h1>
      </div>
      <div className="px-4 py-10 lg:px-8">
        <div
          data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }'
          className="relative"
        >
          <div className="hs-carousel relative h-[20rem] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-800 md:h-[calc(60vh-106px)]">
            <div className="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap opacity-0 transition-transform duration-700">
              {testimonials.map((testimonial) => (
                <Slide key={testimonial.author} {...testimonial} />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="hs-carousel-prev hs-carousel:disabled:opacity-50 absolute inset-y-0 start-0 inline-flex h-full w-12 items-center justify-center rounded-s-2xl text-black hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="size-3.5 flex-shrink-0 md:size-4"
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
            className="hs-carousel-next hs-carousel:disabled:opacity-50 absolute inset-y-0 end-0 inline-flex h-full w-12 items-center justify-center rounded-e-2xl text-black hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="size-3.5 flex-shrink-0 md:size-4"
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
    </section>
  );
};

const Slide = ({
  text,
  author,
  role,
}: {
  text: string;
  author: string;
  role: string;
}) => {
  return (
    <div className="hs-carousel-slide">
      <div className="flex flex-col justify-center">
        <div className="relative mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <blockquote className="text-center lg:mx-auto lg:w-3/5">
            <div className="mt-6 lg:mt-10">
              <p className="relative text-xl font-medium text-gray-800 sm:text-2xl md:text-3xl md:leading-normal">
                <svg
                  className="absolute start-0 top-0 size-16 -translate-x-8 -translate-y-8 transform text-gray-200 dark:text-neutral-700 sm:h-24 sm:w-24"
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="relative z-10 italic text-gray-800 dark:text-neutral-200">
                  {text}
                </span>
              </p>
            </div>

            <footer className="mt-6">
              <div className="font-semibold text-gray-800 dark:text-neutral-200">
                {author}
              </div>
              <div className="text-sm text-gray-500 dark:text-neutral-500">
                {role}
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
