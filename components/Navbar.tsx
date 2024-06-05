import { Category } from "@/types/category";
import appUrl from "@/utils/apiCallHandler";
import Link from "next/link";

const Navbar = async () => {
  const getCategories = async () => {
    const res = await fetch(appUrl("/api/categories/all"), {
      next: {
        tags: ["categories", "navbar"],
      },
    });

    const status = res.status;
    if (status === 404) {
      return { data: null };
    }
    const data = await res.json();
    return data;
  };

  var categories: Category[] | null = null;
  const data = await getCategories();
  if (data.data || data.data.length !== 0) {
    categories = data.data;
  }

  return (
    <header className="sticky top-0 bg-white dark:bg-black flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 mb-5">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto"
        aria-label="Global"
      >
        <div className="md:col-span-3">
          <Link
            className="flex-none rounded-xl text-primary hover:underline text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="/"
            aria-label="DT Fireworks"
          >
            DT Fireworks
          </Link>
        </div>

        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <Link
            href={"/cart"}
            type="button"
            className="relative py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
          >
            Cart
            <span className="absolute top-0 end-0 inline-flex items-center size-3.5 rounded-full border-2 border-white text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-secondaryDark text-white dark:border-neutral-900">
              <span className="sr-only">
                Products in Cart (take action: Checkout)
              </span>
            </span>
          </Link>
          <Link
            href={"/signin"}
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-primary text-white hover:bg-primaryDark transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:primaryDark"
          >
            Sign In
          </Link>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              data-hs-collapse="#navbar-collapseWith-animation"
              aria-controls="navbar-collapseWith-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapseWith-animation"
          className="hs-collapse hidden overflow-hidden border-b lg:border-none pb-5 lg:pb-0 transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <Link
                className="inline-block text-black hover:under-design dark:text-white"
                href="/"
                aria-current="page"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                className="inline-block text-black hover:text-gray-600 hover:under-design dark:text-white dark:hover:text-neutral-300"
                href="/shop"
              >
                Shop
              </Link>
            </div>
            <div className="hs-dropdown [--strategy:static] group sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
              <button
                type="button"
                className="flex items-center w-full text-black group-hover:under-design hover:text-black font-normal   dark:text-white dark:hover:text-white"
              >
                Categories
              </button>

              {categories && categories.length > 0 ? (
                categories.map((category) => (
                  <div
                    key={"navbar-sublink-category-" + category.id}
                    className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5"
                  >
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-secondaryDark dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      href={`/shop/category/${category.id}`}
                    >
                      {category.name}
                    </Link>
                  </div>
                ))
              ) : (
                <FallBackCategories />
              )}
            </div>
            <div>
              <Link
                className="inline-block text-black hover:under-design hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                href="/about-us"
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                className="inline-block text-black hover:text-gray-600 hover:under-design  dark:text-white dark:hover:text-neutral-300"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

const FallBackCategories = () => {
  return (
    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
      <Link
        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-secondaryDark dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
        href="/shop/"
      >
        All Categories
      </Link>
    </div>
  );
};
