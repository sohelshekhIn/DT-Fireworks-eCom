"use client";

export const CheckoutContactForm = () => {
  return (
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
  );
};
