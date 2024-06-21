import { checkUserAuthStatus } from "@/utils/checkUserAuthStatus";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const CheckoutPage = async () => {
  const session = cookies().get("session");
  const isLoggedIn = await checkUserAuthStatus(session);

  if (!isLoggedIn) {
    redirect("/signin?redirect=/cart/checkout");
  }

  return (
    <div className="mx-auto max-w-[85vw] py-10 pb-36 md:w-1/2 lg:w-10/12">
      <div className="mx-auto min-w-80 max-w-4xl bg-white p-4">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Checkout
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-lg font-semibold">Contact Details</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Used for Delivery purpose
            </p>
          </div>
          <div className="m-5 flex flex-col gap-5">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full md:max-w-lg lg:max-w-lg">
                <label
                  htmlFor="input-label"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="input-label"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-full md:max-w-lg lg:max-w-md">
                <label
                  htmlFor="input-label"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="input-label"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full md:max-w-lg lg:max-w-md">
                <label
                  htmlFor="input-label"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{5}-[0-9]{5}" //
                  id="input-label"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-lg font-semibold">Delivery Details</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Addres to deliver the products
            </p>
          </div>
          <div className="m-5 flex flex-col gap-5">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full md:max-w-lg lg:max-w-lg">
                <label
                  htmlFor="input-label"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="input-label"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Address Line 1"
                />
              </div>
              <div className="w-full md:max-w-lg lg:max-w-md">
                <label
                  htmlFor="input-label"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  Address Line 2
                </label>
                <input
                  type="text"
                  id="input-label"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Address Line 2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full md:max-w-lg lg:max-w-lg">
                <label
                  htmlFor="input-label"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  City
                </label>
                <input
                  type="text"
                  id="input-label"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="City"
                />
              </div>
              <div className="w-full md:max-w-lg lg:max-w-md">
                <label
                  htmlFor="input-label"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  State
                </label>
                <input
                  type="text"
                  id="input-label"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="State"
                />
              </div>
            </div>
            <div className="my-8 flex justify-center">
              <button className="rounded-lg bg-primary px-5 py-3 text-white hover:bg-primaryDark">
                Review Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
