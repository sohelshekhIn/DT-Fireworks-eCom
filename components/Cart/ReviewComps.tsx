"use client";

import { useShopContext } from "@/context/ShopContext";
import { redirect } from "next/navigation";
export const ContactDetails = () => {
  const {
    name,
    email,
    phone,
    addressLine1,
    addressLine2,
    city,
    pincode,
    state,
    cartItems,
  } = useShopContext();

  if (cartItems.length === 0) return redirect("/cart");
  return (
    <div className="mt-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{name}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{email}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">+91 {phone}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
        <p className="text-right text-sm text-gray-700 dark:text-gray-300">
          {addressLine1}, <br />
          {addressLine2}, <br />
          {city}, {pincode}, <br />
          {state}
        </p>
      </div>
    </div>
  );
};

export const CheckoutDetails = () => {
  const { shippingCharge, gstAmount, orderTotal } = useShopContext();
  return (
    <div className="mt-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">Delivery</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          ₹ {shippingCharge}
        </p>
      </div>
      {/* gst */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">GST</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          ₹ {gstAmount}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">Grand Total</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          ₹ {orderTotal}
        </p>
      </div>
      <button className="mt-5 w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white md:w-auto">
        Continue to Payment
      </button>
    </div>
  );
};
