import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto mt-auto w-full max-w-[85rem] border-t-2 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <Link
            className="flex-none text-xl font-semibold text-primary hover:text-primaryDark dark:text-white"
            href="/"
            aria-label="DT Fireworks"
          >
            DT Fireworks
          </Link>
          <p className="mt-3 text-xs text-gray-600 dark:text-neutral-400 sm:text-sm">
            © 2024 Dhanjibhai & Trikamlal Fireworks.
          </p>
          <Link
            className="mt-10 text-sm font-bold text-primary"
            href="#top-of-page"
          >
            Move to top of page
          </Link>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
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
                href="/shop?category=aerial"
              >
                Aerial Fireworks
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/shop?category=ground"
              >
                Ground Effects
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/shop?category=display"
              >
                Display Packages
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/shop"
              >
                Shop All
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
            Company
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/about-us"
              >
                About Us
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
          <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
            Services
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/services/event-planning"
              >
                Event Planning
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/services/professional-displays"
              >
                Professional Displays
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/services/wedding-packages"
              >
                Wedding Packages
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/services/corporate-events"
              >
                Corporate Events
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/services/custom-displays"
              >
                Custom Displays
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
            Resources
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/resources/safety-guidelines"
              >
                Safety Guidelines
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/resources/faq"
              >
                FAQ
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/blog"
              >
                Blog
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/resources/permits"
              >
                Permits & Regulations
              </Link>
            </p>
          </div>

          <h4 className="mt-7 text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
            Events
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/events/weddings"
              >
                Weddings
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/events/festivals"
              >
                Festivals & Celebrations
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-5 dark:border-neutral-700">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-x-3">
            <div className="ms-4 space-x-4 text-sm">
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
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="/shipping-policy"
              >
                Shipping
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

          <div className="mt-5 flex items-center justify-between">
            <div className="mt-3 sm:hidden">
              <Link
                className="flex-none text-xl font-semibold dark:text-white"
                href="/"
                aria-label="DT Fireworks"
              >
                DT Fireworks
              </Link>
              <p className="mt-1 text-xs text-gray-600 dark:text-neutral-400 sm:text-sm">
                © 2024 Dhanjibhai & Trikamlal Fireworks.
              </p>
            </div>

            <div className="text-right text-xs">
              <Link
                target="_blank"
                className="inline-block text-gray-500 underline hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
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
