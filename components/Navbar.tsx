import { Category } from "@/types/category";
import appUrl from "@/utils/apiCallHandler";
import Link from "next/link";
import { NavbarAuthStateButton } from "./Auth/AuthButtons";
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
    <header className="sticky top-0 z-50 mb-5 flex w-full flex-wrap bg-white py-7 md:flex-nowrap md:justify-start dark:bg-black">
      <nav
        className="relative mx-auto flex w-full max-w-7xl basis-full flex-wrap items-center px-4 md:grid md:grid-cols-12 md:px-8"
        aria-label="Global"
      >
        <div className="md:col-span-3">
          <Link
            className="inline-block flex-none rounded-xl text-xl font-semibold text-primary hover:underline focus:opacity-80 focus:outline-none"
            href="/"
            aria-label="DT Fireworks"
          >
            DT Fireworks
          </Link>
        </div>

        <div className="ms-auto flex items-center gap-x-2 py-1 md:order-3 md:col-span-3 md:ps-6">
          <Link
            href={"/cart"}
            type="button"
            className="relative inline-flex items-center gap-x-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
          >
            Cart
            <span className="absolute -right-1 -top-1">
              <span className="relative flex h-3 w-3">
                <span className="sr-only">
                  Products in Cart (take action: Checkout)
                </span>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondaryDark opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-secondaryDark"></span>
              </span>
            </span>
          </Link>

          <NavbarAuthStateButton />
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle flex size-[38px] items-center justify-center rounded-xl border border-gray-200 text-sm font-semibold text-black hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700"
              data-hs-collapse="#navbar-collapseWith-animation"
              aria-controls="navbar-collapseWith-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="size-4 flex-shrink-0 hs-collapse-open:hidden"
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
                className="hidden size-4 flex-shrink-0 hs-collapse-open:block"
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
          className="hs-collapse hidden grow basis-full overflow-hidden border-b pb-5 transition-all duration-300 md:order-2 md:col-span-6 md:block md:w-auto md:basis-auto lg:border-none lg:pb-0"
        >
          <div className="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-center md:gap-x-7 md:gap-y-0">
            <div>
              <Link
                className="hover:under-design inline-block text-black dark:text-white"
                href="/"
                aria-current="page"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                className="hover:under-design inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                href="/shop"
              >
                Shop
              </Link>
            </div>
            <div className="hs-dropdown group [--adaptive:none] [--strategy:static] sm:py-4 sm:[--strategy:fixed] sm:[--trigger:hover]">
              <button
                type="button"
                className="group-hover:under-design flex w-full items-center font-normal text-black hover:text-black dark:text-white dark:hover:text-white"
              >
                Categories
                <svg
                  className="ml-1 size-4 flex-shrink-0 text-black transition-transform group-hover:rotate-180 dark:text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div className="hs-dropdown-menu top-full z-10 hidden gap-3 rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:start-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 sm:w-48 sm:border sm:shadow-md sm:duration-[150ms] dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 sm:dark:border">
                {categories && categories.length > 0 ? (
                  categories.map((category) => (
                    <Link
                      key={"navbar-sublink-category-" + category.id}
                      className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-secondaryDark dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      href={`/shop/category/${category.id}`}
                    >
                      {category.name}
                    </Link>
                  ))
                ) : (
                  <FallBackCategories />
                )}
              </div>
            </div>
            <div>
              <Link
                className="hover:under-design inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                href="/about-us"
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                className="hover:under-design inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
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
    <div className="hs-dropdown-menu top-full z-10 hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:start-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 sm:w-48 sm:border sm:shadow-md sm:duration-[150ms] dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 sm:dark:border">
      <Link
        className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-secondaryDark dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
        href="/shop/"
      >
        All Categories
      </Link>
    </div>
  );
};
