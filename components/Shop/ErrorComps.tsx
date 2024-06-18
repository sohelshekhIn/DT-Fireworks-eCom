import { NotFoundSapien } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const OccassionNotFound = () => {
  return (
    <div className="mx-auto w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 min-h-dvh max-w-2xl text-center lg:mb-14">
        <Image
          width={500}
          height={500}
          className="mx-auto"
          src={NotFoundSapien}
          alt="A male standing in nowhere describing the Occassion user was looking is not found & does not exists"
        />
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Occassion Not Found
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          The occassion you are looking for is not available.
        </p>
        <Link
          href="/shop"
          className="mt-10 font-semibold text-primary underline dark:text-primaryDark"
        >
          Go Back to Shop
        </Link>
      </div>
    </div>
  );
};
const CategoryNotFound = () => {
  return (
    <section className="mx-auto w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 min-h-dvh max-w-2xl text-center lg:mb-14">
        <Image
          width={500}
          height={500}
          className="mx-auto"
          src={NotFoundSapien}
          alt="A male standing in nowhere describing the Category user was looking is not found & does not exists"
        />
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Category/Occassion Not Found
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          The category/occassion you are looking for is not available.
        </p>
        <Link
          href="/shop"
          className="mt-10 font-semibold text-primary underline dark:text-primaryDark"
        >
          Go Back to Shop
        </Link>
      </div>
    </section>
  );
};

const OccassionFetchError = () => {
  return (
    <div className="mx-auto w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <Image
          width={500}
          height={500}
          className="mx-auto"
          src={NotFoundSapien}
          alt="Occassion Not Found"
        />
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Occassions Not Found
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          There was an error fetching occassions, refresh the page or try again
          later.
        </p>
      </div>
    </div>
  );
};

const NoProductsFound = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col items-center p-5 lg:flex-row lg:p-20">
        <Image
          width={300}
          height={300}
          className="mx-auto p-5"
          src={NotFoundSapien}
          alt="No Products Found"
        />
        <div className="">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Category is currently empty!
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            No products found in the category you are looking...
          </p>
          <Link
            href="/shop"
            className="mt-10 font-semibold text-primary underline dark:text-primaryDark"
          >
            Go Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export {
  OccassionNotFound,
  OccassionFetchError,
  NoProductsFound,
  CategoryNotFound,
};
