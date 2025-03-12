"use client";
import { OrderOverview } from "@/types/order";
import appUrl from "@/utils/apiCallHandler";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MyOrdersCardSkeleton } from "../SkeletonLoaders/OrderLoaders";

type MyOrdersOverviewData = {
  orders: OrderOverview[];
};

export const MyOrdersCardPlaceholder = () => {
  const [data, setData] = useState<MyOrdersOverviewData>({ orders: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMyOrders = async () => {
    try {
      const response = await fetch(appUrl("/api/order/my-orders"), {
        next: {
          revalidate: 60 * 60, // 1 hour
          tags: ["my-orders", "my-orders-page"],
        },
      });

      if (!response.ok) {
        setError("fetch_error");
        setLoading(false);
        return;
      }

      const data: MyOrdersOverviewData = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("fetch_error");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-5">
        <MyOrdersCardSkeleton />
        <MyOrdersCardSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-white p-8 text-center shadow-sm">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          Something went wrong
        </h1>
        <p className="mb-6 text-gray-600">
          There was an error fetching your orders. Please try again later.
        </p>
        <button
          onClick={() => {
            setLoading(true);
            setError(null);
            fetchMyOrders();
          }}
          className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-primaryDark"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (data.orders.length === 0) {
    return <NoOrdersFound />;
  }

  return (
    <div className="flex flex-col gap-5">
      {data.orders.map((order: OrderOverview) => (
        <OrderCard
          key={order.orderId}
          orderId={order.orderId}
          orderDate={order.orderDate}
          orderTotal={order.orderTotal}
        />
      ))}
    </div>
  );
};

const OrderCard = ({ orderId, orderDate, orderTotal }: OrderOverview) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md dark:bg-neutral-800">
      <p className="text-xl font-semibold text-gray-800 dark:text-neutral-300">
        Order #{orderId}
      </p>
      <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
        Order placed on {orderDate}
      </p>
      <div className="mt-4 flex w-full items-center justify-between">
        <div className="flex flex-col items-start">
          <p className="text-sm text-gray-500 dark:text-neutral-400">Total</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-neutral-300">
            ₹ {orderTotal}
          </p>
        </div>
        <Link
          href={`/account/my-orders/${orderId}`}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
        >
          View Order
        </Link>
      </div>
    </div>
  );
};

const NoOrdersFound = () => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-white p-8 text-center shadow-sm">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">No Orders Yet</h1>
      <p className="mb-6 text-gray-600">
        You haven&apos;t placed any orders yet. Start shopping to place your
        first order!
      </p>
      <div className="flex gap-4">
        <Link
          href="/shop"
          className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-primaryDark"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
};
