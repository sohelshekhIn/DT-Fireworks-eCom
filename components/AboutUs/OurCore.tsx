import Image from "next/image";

const OurCore = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {" "}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Our Core Team
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div className="text-center">
          <Image
            width={200}
            height={200}
            className="rounded-full sm:size-48 lg:size-60 mx-auto"
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              Maria Powers
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Director of sales
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            width={200}
            height={200}
            className="rounded-full sm:size-48 lg:size-60 mx-auto"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              Delia Pawelke
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Front-end Developer
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            width={200}
            height={200}
            className="rounded-full sm:size-48 lg:size-60 mx-auto"
            src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              Tom Lowry
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              UI/UX Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCore;
