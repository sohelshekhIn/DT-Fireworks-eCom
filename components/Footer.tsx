import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t-2">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <Link
            className="flex-none text-xl font-semibold text-primary hover:text-primaryDark dark:text-white"
            href="#"
            aria-label="Dt Fireworks"
          >
            DT Fireworks
          </Link>
          <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
            © 2024 Dhanjibhai & Trikamlal Fireworks.
          </p>
          <Link
            className="text-primary mt-10 text-sm font-bold "
            href="#top-of-page"
          >
            Move to top of page
          </Link>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Shop
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/cart"
              >
                Cart
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/shop"
              >
                Shop all
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Company
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/about-us"
              >
                About us
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/testimonials"
              >
                Testimonials
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/contact"
              >
                Contact
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/sitemap"
              >
                Sitemap
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Resources
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Community
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Help & Support
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                eBook
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                What&apos;s New
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Status
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Developers
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Api
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Status
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                GitHub
              </Link>{" "}
              <span className="inline text-blue-600 dark:text-blue-500">
                — New
              </span>
            </p>
          </div>

          <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Industries
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Financial Services
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="#"
              >
                Education
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-x-3">
            <div className="space-x-4 text-sm ms-4">
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/terms"
              >
                Terms
              </Link>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/privacy"
              >
                Privacy
              </Link>
              <Link
                target="_blank"
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="https://status.dtfireworks.in"
              >
                Status
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-center mt-5">
            <div className="mt-3 sm:hidden">
              <Link
                className="flex-none text-xl font-semibold dark:text-white"
                href="#"
                aria-label="Brand"
              >
                DT Fireworks
              </Link>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
                © 2024 Dhanjibhai & Trikamlal Fireworks.
              </p>
            </div>

            <div className="text-xs text-right">
              <Link
                className="inline-block underline text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
                href="https://sohel.tech?ref=dtfireworks.in"
              >
                Designed & Developed by Sohel Shekh
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
