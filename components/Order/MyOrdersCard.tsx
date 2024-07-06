"use client";
import { OrderOverview } from "@/types/order";
import appUrl from "@/utils/apiCallHandler";
import Link from "next/link";
import { useEffect, useState } from "react";

type MyOrdersOverviewData = {
  orders: OrderOverview[];
};

export const MyOrdersPlaceholder = () => {
  const [data, setData] = useState<MyOrdersOverviewData>({ orders: [] });
  const fetchMyOrders = async () => {
    const data: MyOrdersOverviewData = await fetch(
      appUrl("/api/order/my-orders"),
    ).then((res) => res.json());
    console.log(data);
    setData(data);
    if (data.orders.length === 0) {
      return <NoOrdersFound />;
    }
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);
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
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md dark:bg-neutral-800">
          <p className="text-xl font-semibold text-gray-800 dark:text-neutral-300">
            No orders found
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
            You haven't placed any orders yet.
          </p>
        </div>
      </div>
    </div>
  );
};
