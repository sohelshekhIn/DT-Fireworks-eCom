"use client";

import { Order } from "@/types/order";
import appUrl from "@/utils/apiCallHandler";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  formatUserFriendlyDate,
  formatUserFriendlyPhone,
} from "@/utils/dataFormatter";
import { DeliveryStatusStepper } from "./MyOrderPageComp";
import { MyOrderLoaderSkeleton } from "../SkeletonLoaders/OrderLoaders";
import Image from "next/image";

export const MyOrderPlaceholder = ({ orderId }: { orderId: string }) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await fetch(
          appUrl(`/api/order/one?orderId=${orderId}`),
          {
            next: {
              revalidate: 60 * 60, // 1 hour
              tags: ["my-orders", "order-details", "order-details-page"],
            },
          },
        );

        if (orderData.status === 404) {
          setError("order_not_found");
          setLoading(false);
          return;
        }

        if (!orderData.ok) {
          setError("fetch_error");
          setLoading(false);
          return;
        }

        const {
          data: order,
        }: {
          data: Order;
        } = await orderData.json();

        if (!order) {
          setError("no_order");
          setLoading(false);
          return;
        }

        setOrder(order);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching order:", error);
        setError("fetch_error");
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex h-auto flex-col items-center justify-center">
        <MyOrderLoaderSkeleton />
      </div>
    );
  }

  if (error) {
    return <OrderErrorState error={error} />;
  }

  if (!order) {
    return <OrderErrorState error="no_order" />;
  }

  return (
    <div className="flex h-auto flex-col items-center justify-center">
      <OrderDetails order={order} />
    </div>
  );
};

const OrderDetails = ({ order }: { order: Order }) => {
  return (
    order && (
      <div className="h-full w-full py-10">
        {/* display all information for orders */}
        <div className="flex flex-col gap-10">
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
          {/* showing cart items */}
          <div className="mt-5 bg-white">
            <h3 className="text-lg font-bold">Items</h3>
            <div className="mt-4 flex flex-col gap-4">
              {order.cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      width={40}
                      height={40}
                      src={item.media.images[0]}
                      alt={item.name}
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                    <div>
                      <p>{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.quantity} x {item.price}
                      </p>
                    </div>
                  </div>
                  <p>
                    <span>&#8377;</span>
                    {item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 border-t pt-4">
            {/* financial details, totals, gst, and all */}
            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p>
                <span>&#8377;</span>
                {order.cartTotal}
              </p>
            </div>
            {/* if couponDiscount exists then show */}
            {order.couponDiscount > 0 && (
              <div className="flex items-center justify-between">
                <p>Coupon Discount</p>
                <p>
                  <span>&#8377;</span>
                  {order.couponDiscount}
                </p>
              </div>
            )}
            <div className="flex items-center justify-between">
              <p>Shipping</p>
              <p>
                <span>&#8377;</span>
                {order.shippingCharge}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>GST</p>
              <p>
                <span>&#8377;</span>
                {order.gstAmount}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>Cart Savings</p>
              <p>
                <span>&#8377;</span>
                {order.cartSavings}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>Total</p>
              <strong>
                <span>&#8377;</span>
                {order.orderTotal}
              </strong>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const OrderErrorState = ({ error }: { error: string }) => {
  const errorMessages = {
    order_not_found: {
      title: "Order Not Found",
      message: "We couldn't find the order you are looking for.",
    },
    fetch_error: {
      title: "Something went wrong",
      message:
        "There was an error fetching your order. Please try again later.",
    },
    no_order: {
      title: "No Orders Yet",
      message:
        "You haven't placed any orders yet. Start shopping to place your first order!",
    },
  };

  const currentError =
    errorMessages[error as keyof typeof errorMessages] ||
    errorMessages.fetch_error;

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-white p-8 text-center shadow-sm">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">
        {currentError.title}
      </h1>
      <p className="mb-6 text-gray-600">{currentError.message}</p>
      <div className="flex gap-4">
        <Link
          href="/shop"
          className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-primaryDark"
        >
          Browse Products
        </Link>
        <Link
          href="/account/my-orders"
          className="rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          View All Orders
        </Link>
      </div>
    </div>
  );
};
