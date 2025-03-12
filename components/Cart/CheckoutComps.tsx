"use client";

import { useShopContext } from "@/context/ShopContext";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export const CheckoutContactForm = () => {
  const { cartItems, name, email, phone, setName, setEmail, setPhone } =
    useShopContext();
  const { user } = useAuth();

  useEffect(() => {
    if (cartItems.length === 0) return redirect("/cart");
    // Set the email from authenticated user
    if (user?.email) {
      setEmail(user.email);
    }
  }, [cartItems, user, setEmail]);

  return (
    <div className="mt-5 flex flex-col gap-5 md:m-5">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="w-full md:max-w-lg lg:max-w-lg">
          <label
            htmlFor="name-input"
            className="mb-2 block text-sm font-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="w-full md:max-w-lg lg:max-w-md">
          <label
            htmlFor="email-input"
            className="mb-2 block text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email-input"
            value={email}
            className="block w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500"
            placeholder="Enter your email"
            disabled
            readOnly
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="w-full md:max-w-lg lg:max-w-md">
          <label
            htmlFor="phone-input"
            className="mb-2 block text-sm font-medium"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone-input"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            pattern="[0-9]{5} [0-9]{5}"
            maxLength={10}
            minLength={10}
            className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50"
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>
    </div>
  );
};

export const CheckoutDeliveryForm = () => {
  const {
    addressLine1,
    addressLine2,
    city,
    state,
    setAddressLine1,
    setAddressLine2,
    pincode,
    setPincode,
    setCity,
    setState,
    handleReview,
  } = useShopContext();

  const router = useRouter();

  const handleReviewFormSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const reviewStatus = handleReview();
    if (reviewStatus) {
      router.push("/cart/review");
    }
  };

  return (
    <form
      onSubmit={handleReviewFormSubmit}
      className="mt-5 flex flex-col gap-5 md:m-5"
    >
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
            onChange={(e) => setAddressLine1(e.target.value)}
            value={addressLine1}
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
            onChange={(e) => setAddressLine2(e.target.value)}
            value={addressLine2}
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
            onChange={(e) => setCity(e.target.value)}
            value={city}
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
            Pincode
          </label>
          <input
            type="text"
            onChange={(e) => setPincode(e.target.value)}
            value={pincode}
            id="input-label"
            className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Pincode"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="w-full md:max-w-lg lg:max-w-md">
          <label
            htmlFor="input-label"
            className="mb-2 block text-sm font-medium dark:text-white"
          >
            State
          </label>
          <input
            type="text"
            onChange={(e) => setState(e.target.value)}
            value={state}
            id="input-label"
            className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="State"
          />
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-5 py-3 text-white hover:bg-primaryDark md:w-auto"
        >
          Review Cart
        </button>
      </div>
    </form>
  );
};
