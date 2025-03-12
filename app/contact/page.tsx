import { Breadcrumb } from "@/components/Breadcrumb";

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-24">
      <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-10">
        <h2 className="text-2xl font-medium text-black dark:text-white sm:text-4xl">
          Contacts
        </h2>
      </div>
      <Breadcrumb
        crumbs={[
          {
            name: "Contact",
            href: "/contact/",
          },
        ]}
      />
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="aspect-w-16 aspect-h-6 lg:aspect-h-16 overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-800">
          <iframe
            className="h-[50vh] w-full border-0 lg:h-[70vh]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.852317207524!2d72.85816871170235!3d22.696540979317678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5b0e7ca91cb7%3A0x4ca530eec709c930!2sDHANJIBHAI%20%26%20TRIKAMLAL!5e0!3m2!1sen!2sca!4v1714089000087!5m2!1sen!2sca"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="space-y-8 lg:space-y-16">
          <div>
            <h3 className="mb-5 font-semibold text-black dark:text-white">
              Our address
            </h3>
            <div className="flex flex-wrap space-y-8">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex gap-4">
                  <svg
                    className="size-5 flex-shrink-0 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>

                  <div className="grow">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Nadiad Office
                    </p>
                    <address className="mt-1 not-italic text-black dark:text-white">
                      Opp. Nadiad People&apos;s Bank, <br /> Near Rukmani Tower,
                      Daban Bhagol,
                      <br />
                      Nadiad, Gujarat 387001
                    </address>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex gap-4">
                  <svg
                    className="size-5 flex-shrink-0 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>

                  <div className="grow">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Nadiad Warehouse
                    </p>
                    <address className="mt-1 not-italic text-black dark:text-white">
                      Opp. Poornima Decorations,
                      <br />
                      Near Puskar Apartment, Chhatriwala Society
                      <br />
                      Vachhewad, Nadiad, Gujarat 387001
                    </address>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex gap-4">
                  <svg
                    className="size-5 flex-shrink-0 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>

                  <div className="grow">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Bamroli Warehouse
                    </p>
                    <address className="mt-1 not-italic text-black dark:text-white">
                      765/1 SHREE PURA, <br /> Bamroli - Vaso Nadiad Rd,
                      <br />
                      Bamroli, Gujarat 387230
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-5 font-semibold text-black dark:text-white">
              Our contacts
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex gap-4">
                <svg
                  className="size-5 flex-shrink-0 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                </svg>

                <div className="grow">
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Email us
                  </p>
                  <p>
                    <a
                      className="under-design inline-block font-medium text-black hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                      href="mailto:contact@dtfireworks.in"
                    >
                      contact@dtfireworks.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg
                  className="size-5 flex-shrink-0 text-gray-500 dark:text-neutral-500"
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>

                <div className="grow">
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Call us
                  </p>
                  <p>
                    <a
                      className="under-design inline-block font-medium text-black hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                      href="tel:+919898558536"
                    >
                      +91 98985 58536
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
