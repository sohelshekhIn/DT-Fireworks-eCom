"use client";

import { Breadcrumb } from "@/components/Breadcrumb";
import {
  CheckoutContactForm,
  CheckoutDeliveryForm,
} from "@/components/Cart/CheckoutComps";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const CheckoutPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !user) {
      router.push("/signin?redirect=/cart/checkout");
    }
  }, [isClient, user, router]);

  if (!isClient) {
    return <CheckoutSkeleton />;
  }

  if (!user) {
    return <CheckoutSkeleton />; // Show loading state while redirecting
  }

  return (
    <div className="mx-auto w-full py-10 pb-36 md:w-1/2 md:max-w-[85vw] lg:w-10/12">
      <div className="mx-auto min-w-80 max-w-4xl bg-white p-4">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Checkout</h1>
          </div>
        </div>
        <Breadcrumb
          crumbs={[
            { name: "Cart", href: "/cart" },
            { name: "Checkout", href: "/cart/checkout" },
          ]}
        />
        <div className="mt-10">
          <div>
            <h2 className="text-lg font-semibold">Contact Details</h2>
            <p className="text-xs text-gray-500">Used for Delivery purpose</p>
          </div>
          <CheckoutContactForm />
        </div>
        <div className="mt-10">
          <div>
            <h2 className="text-lg font-semibold">Delivery Details</h2>
            <p className="text-xs text-gray-500">
              Address to deliver the products
            </p>
          </div>
          <CheckoutDeliveryForm />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

const CheckoutSkeleton = () => {
  return (
    <div className="mx-auto w-full py-10 pb-36 md:w-1/2 md:max-w-[85vw] lg:w-10/12">
      <div className="mx-auto min-w-80 max-w-4xl bg-white p-4">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <div className="mx-auto h-8 w-32 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
        </div>
        <div className="h-6 w-48 animate-pulse rounded-lg bg-gray-200"></div>
        <div className="mt-10 space-y-6">
          <div>
            <div className="h-6 w-32 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="mt-2 h-4 w-48 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
          </div>
        </div>
        <div className="mt-10 space-y-6">
          <div>
            <div className="h-6 w-32 animate-pulse rounded-lg bg-gray-200"></div>
            <div className="mt-2 h-4 w-48 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
            <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
