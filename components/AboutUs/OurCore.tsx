import Image from "next/image";

const OurCore = () => {
  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {" "}
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold dark:text-white md:text-4xl md:leading-tight">
          Our Core Team
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12">
        <div className="text-center">
          <Image
            width={200}
            height={200}
            className="mx-auto rounded-full sm:size-48 lg:size-60"
            src="https://ui-avatars.com/api/?name=Chandrakath+Chhatriwala"
            alt="Chandrakath Chhatriwala"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 dark:text-neutral-200 sm:text-base lg:text-lg">
              Chandrakath Chhatriwala
            </h3>
            <p className="text-xs text-gray-600 dark:text-neutral-400 sm:text-sm lg:text-base">
              Partners
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            width={200}
            height={200}
            className="mx-auto rounded-full sm:size-48 lg:size-60"
            src="https://ui-avatars.com/api/?name=Chirag+Chhatriwala"
            alt="Chirag Chhatriwala"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 dark:text-neutral-200 sm:text-base lg:text-lg">
              Chirag Chhatriwala
            </h3>
            <p className="text-xs text-gray-600 dark:text-neutral-400 sm:text-sm lg:text-base">
              Partners
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            width={200}
            height={200}
            className="mx-auto rounded-full sm:size-48 lg:size-60"
            src="https://ui-avatars.com/api/?name=Nikunj+Chhatriwala"
            alt="Nikunj Chhatriwala"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 dark:text-neutral-200 sm:text-base lg:text-lg">
              Nikunj Chhatriwala
            </h3>
            <p className="text-xs text-gray-600 dark:text-neutral-400 sm:text-sm lg:text-base">
              Partners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCore;
