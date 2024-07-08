"use client";

import { useShopContext } from "@/context/ShopContext";
import appUrl from "@/utils/apiCallHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { AuthorizingPayment } from "../Order/AuthorizingPayment";
import { useAuth } from "@/context/AuthContext";
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
  } = useShopContext();
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
  const {
    resetCart,
    cartTotal,
    shippingCharge,
    gstAmount,
    orderTotal,
    name,
    email,
    phone,
  } = useShopContext();
  const { user } = useAuth();
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "success">(
    "pending",
  );
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const createOrderId = async () => {
    const response = await fetch(appUrl("/api/order/create"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        totalOrderAmount: orderTotal,
      }),
    });

    if (!response.ok) {
      console.error("Order creation failed.");
    }
    const data = await response.json();
    return data;
  };

  const processPayment = async () => {
    if (submitting) return;
    setSubmitting(true);
    console.log("Processing payment");
    try {
      const generatedOrder: {
        orderId: string;
        receipt: string;
      } = await createOrderId();
      if (!generatedOrder) {
        toast.error("Order creation failed.");
        return;
      }
      const orderId = generatedOrder.orderId;
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderTotal * 100,
        currency: "INR",
        name: "DT Fireworks",
        description: "Payment for your order",
        image: "/favicon.ico",
        order_id: orderId,
        prefill: {
          name: name,
          email: email,
          phone: phone,
        },
        handler: async (response: any) => {
          setSubmitting(false);
          setPaymentStatus("success");
          const data = {
            uid: user?.uid,
            orderReceiptId: generatedOrder.receipt,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const verifyResponse = await fetch(appUrl("/api/order/verify"), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-cache",
            body: JSON.stringify(data),
          });

          if (verifyResponse.ok) {
            console.log("Payment successful.");
            toast.success("Payment successful.");
            router.push("/order/success?orderId=" + orderId);
            resetCart();
          } else {
            setPaymentStatus("pending");
            console.log("Payment failed.");
            toast.error("Payment failed.");
          }
        },
      };
      console.log("Initializing Razorpay");
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        toast.error(response.error.description);
        setSubmitting(false);
      });
      paymentObject.open();
    } catch (error: any) {
      toast.error("Payment failed." + error.message);
      setSubmitting(false);
    }
  };
  return paymentStatus === "pending" ? (
    <div className="mt-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">Subtotal</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          ₹ {cartTotal}
        </p>
      </div>
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
      <button
        onClick={processPayment}
        disabled={submitting}
        className="mt-5 w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-800 disabled:hover:bg-gray-300 disabled:hover:text-gray-800 md:w-auto"
      >
        {submitting ? "Processing..." : "Continue to Payment"}
      </button>
    </div>
  ) : (
    <AuthorizingPayment />
  );
};
