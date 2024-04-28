import Image from "next/image";

const IntroParagraph = () => {
  return (
    <div className="text-2xl leading-10 max-w-[65rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
      <p>
        <span className="inline-block text-primary hover:scale-105 hover:under-design before:slow-transition font-semibold">
          DT Fireworks
        </span>{" "}
        (also known as Dhanjibhai & Trimkamlal Fireworks) is a business fueled
        by passion and expertise in fireworks and pyrotechnics. We are dedicated
        to creating unforgettable moments for our clients through the magic of
        fire and light. From dazzling firework displays to awe-inspiring stage
        effects, we offer a comprehensive range of services to elevate any
        event.
      </p>
      <p>
        Over the years, we've grown significantly, expanding our operations to
        include warehouses in Gazipura, Nadiad and Vaso-Bamroli in addition to
        our Nadiad Office. This allows us to serve a wider clientele and ensure
        efficient delivery of fireworks and pyrotechnic materials.
      </p>
      <p>
        Our journey began in 1999 with a simple dream: to share the joy and
        wonder of fireworks with everyone. Over the years, we've grown into a
        trusted provider, renowned for our:
      </p>
      <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
        <div className="col-span-6 sm:col-span-4 group text-center dark:bg-secondaryDark rounded-xl dark:p-5">
          <Image
            className="mx-auto group-hover:scale-110 h-auto w-7 md:w-9 dark:text-neutral-200"
            width={40}
            height={40}
            src="https://img.icons8.com/ios/40/warning-shield.png"
            alt="A warning shield icon to describe safety"
          />

          <div className="mt-2 sm:mt-6">
            <h3 className="text-lg group-hover:text-primaryDark font-semibold text-gray-800 ">
              Commitment to Safety
            </h3>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-4 group text-center dark:bg-secondaryDark rounded-xl dark:p-5">
          <Image
            className="mx-auto h-auto group-hover:scale-110 w-7 md:w-9 text-gray-800 dark:text-neutral-200"
            width={40}
            height={40}
            src="https://img.icons8.com/?size=60&id=67207&format=png"
            alt="A light bulb icon to describe creativity and expertise"
          />
          <div className="mt-2 sm:mt-6">
            <h3 className="text-lg group-hover:text-primaryDark font-semibold text-gray-800 ">
              Creativity and Expertise
            </h3>
          </div>
        </div>

        <div className="col-span-6 col-start-4 sm:col-span-4 group text-center dark:bg-secondaryDark rounded-xl dark:p-5">
          <Image
            className="mx-auto group-hover:scale-110 h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-200"
            width={40}
            height={40}
            src="https://img.icons8.com/ios/40/best-seller.png"
            alt="A best seller icon to describe quality"
          />
          <div className="mt-2 sm:mt-6">
            <h3 className="text-lg group-hover:text-primaryDark font-semibold text-gray-800">
              Dedication to Quality
            </h3>
          </div>
        </div>
      </div>
      <br />
      <p>
        Beyond fireworks, we also specialize in stage pyrotechnics. We can
        transform your stage into a captivating spectacle with custom-designed
        displays that perfectly complement your performance.
      </p>
    </div>
  );
};

export default IntroParagraph;
