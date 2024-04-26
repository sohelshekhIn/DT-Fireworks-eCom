import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = () => {
  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Featured Products
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 lg:mb-14">
        <Link
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-9">
            <Image
              width="400"
              height="300"
              className="w-full object-cover rounded-t-xl p-10"
              src="https://th.bing.com/th/id/R.edd31c9777079274f8d29edbc74c09e3?rik=01ykVLnIphhbEw&riu=http%3a%2f%2fwww.boomtownfireworks.com%2fassets%2fitem%2flarge%2fP1004.jpg&ehk=lVJG7IjqBYZfcMQ3yqsGvwrh6ryUJAGP0jXVT%2b%2fYQHQ%3d&risl=&pid=ImgRaw&r=0"
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              Skyshot
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-primaryDark dark:text-neutral-300 dark:group-hover:text-white">
              Celebration Firecracker 1 1/2
            </h3>
          </div>
        </Link>
        <Link
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-9">
            <Image
              width="400"
              height="300"
              className="w-full object-cover rounded-t-xl p-10"
              src="https://th.bing.com/th/id/R.edd31c9777079274f8d29edbc74c09e3?rik=01ykVLnIphhbEw&riu=http%3a%2f%2fwww.boomtownfireworks.com%2fassets%2fitem%2flarge%2fP1004.jpg&ehk=lVJG7IjqBYZfcMQ3yqsGvwrh6ryUJAGP0jXVT%2b%2fYQHQ%3d&risl=&pid=ImgRaw&r=0"
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              Skyshot
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-primaryDark dark:text-neutral-300 dark:group-hover:text-white">
              Celebration Firecracker 1 1/2
            </h3>
          </div>
        </Link>
        <Link
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-9">
            <Image
              width="400"
              height="300"
              className="w-full object-cover rounded-t-xl p-10"
              src="https://th.bing.com/th/id/R.edd31c9777079274f8d29edbc74c09e3?rik=01ykVLnIphhbEw&riu=http%3a%2f%2fwww.boomtownfireworks.com%2fassets%2fitem%2flarge%2fP1004.jpg&ehk=lVJG7IjqBYZfcMQ3yqsGvwrh6ryUJAGP0jXVT%2b%2fYQHQ%3d&risl=&pid=ImgRaw&r=0"
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              Skyshot
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-primaryDark dark:text-neutral-300 dark:group-hover:text-white">
              Celebration Firecracker 1 1/2
            </h3>
          </div>
        </Link>
      </div>

      <div className="text-center">
        <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-neutral-900 dark:border-neutral-800">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600 dark:text-neutral-400">
              Want to see more?
            </p>
            <Link
              className="inline-flex items-center gap-x-1.5 text-primaryDark decoration-2 hover:underline font-medium dark:text-primary"
              href="../docs/index.html"
            >
              Visit our store
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
