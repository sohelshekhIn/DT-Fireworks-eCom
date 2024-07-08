"use client";

import { Order } from "@/types/order";
import appUrl from "@/utils/apiCallHandler";
import Link from "next/link";
import { Breadcrumb } from "../Breadcrumb";
import { useEffect, useState } from "react";
import {
  formatUserFriendlyDate,
  formatUserFriendlyPhone,
} from "@/utils/dataFormatter";
import { DeliveryStatusStepper } from "./MyOrderPageComp";
import { MyOrderLoaderSkeleton } from "../SkeletonLoaders/OrderLoaders";

export const MyOrderPlaceholder = ({ orderId }: { orderId: string }) => {
  const [order, setOrder] = useState<Order>();
  const [loading, setLoading] = useState(true);
  const fetchOrder = async () => {
    const orderData = await fetch(appUrl(`/api/order/one?orderId=${orderId}`), {
      next: {
        revalidate: 60 * 60, // 1 hour
        tags: ["my-orders", "order-details", "order-details-page"],
      },
    });

    if (orderData.status === 404) {
      setLoading(false);
      return <OrderNotFound />;
    }
    const {
      data: order,
    }: {
      data: Order;
    } = await orderData.json();
    setLoading(false);
    setOrder(order);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="flex h-96 flex-col items-center justify-center">
      {loading ? (
        <MyOrderLoaderSkeleton />
      ) : (
        order && <OrderDetails order={order} />
      )}
    </div>
  );
};

const OrderDetails = ({ order }: { order: Order }) => {
  return (
    order && (
      <div className="w-full">
        {/* display all information for orders */}
        <div className="mt-10 flex flex-col gap-10">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p>
              Order <b>{order.id}</b>
            </p>
            <p>{formatUserFriendlyDate(order.createdAt)}</p>
          </div>
          <div className="flex flex-col justify-between border-t py-5 md:flex-row">
            <div className="">
              <p>{order.name}</p>
              <span className="mb-4 flex gap-2 text-sm">
                <p>{formatUserFriendlyPhone(order.phone)}</p> |
                <p>{order.email}</p>
              </span>
              <address>
                <p>
                  {order.addressLine1},<br />
                  {order.addressLine2},<br />
                  {order.city}, {order.state} {order.pincode}
                </p>
              </address>
            </div>
            <div className="mt-5 flex flex-col gap-5 md:mt-0 md:text-right">
              {/* capitalize first character */}
              <span>
                <p>Total</p>
                <b>
                  {/* rupee sign */}
                  <span>&#8377;</span>
                  {order.cartTotal}
                </b>
              </span>
              <span>
                <p>Status</p>
                <b>{order.orderStatus.toLocaleUpperCase()}</b>
              </span>
            </div>
          </div>
          {/* delivery status using steps */}
          <div className="mt-5 flex flex-col gap-5 md:mt-0 md:text-right">
            <h3 className="text-left text-lg font-bold">Delivery Status</h3>
            <DeliveryStatusStepper status={order.delivery.deliveryStatus} />
          </div>
          {/* <div className="flex flex-col items-center w-full mt-10 lg:w-1/2 lg:mt-0">
            <h3 className="text-lg font-bold">Shipping Information</h3>
            <div className="flex flex-col items-center mt-4">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Name: {order.shippingInfo.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Address: {order.shippingInfo.address}
              </p>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                City: {order.shippingInfo.city}
              </p>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                State: {order.shippingInfo.state}
              </p>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Zip: {order.shippingInfo.zip}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    )
  );
};

const OrderNotFound = () => {
  return (
    <div className="flex h-96 flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Order Not Found</h1>
      <p className="text-gray-500">
        We couldn&apos;t find the order you are looking for.
      </p>

      <Link
        href="/account/my-orders"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        Go to My Orders
      </Link>
    </div>
  );
};
