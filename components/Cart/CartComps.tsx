"use client";

import { useShopContext } from "@/context/ShopContext";
import { CouponCode } from "@/types/coupon";
import { CartProduct, Product } from "@/types/product";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef } from "react";
import { toast } from "react-toastify";

const AddToCartBtn = ({ product }: { product: Product }) => {
  const { addProductToCart } = useShopContext();
  return (
    <button
      onClick={() => addProductToCart(product)}
      className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primaryDark dark:bg-primaryDark"
    >
      Add to Cart
    </button>
  );
};

const CartQuantitySelector = ({
  id,
  quantity,
}: {
  id: CartProduct["id"];
  quantity: CartProduct["quantity"];
}) => {
  const { updateProductQty } = useShopContext();
  return (
    <div className="flex items-center gap-x-1.5">
      <button
        type="button"
        disabled={quantity === 1}
        className="inline-flex size-10 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
        onClick={() => updateProductQty(id, "decrease")}
      >
        <svg
          className="size-3.5 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
        </svg>
      </button>
      <input
        className="w-6 border-0 bg-transparent p-0 text-center text-gray-800 focus:ring-0 dark:text-white"
        type="text"
        readOnly
        value={quantity}
      />
      <button
        disabled={quantity === 20}
        type="button"
        className="inline-flex size-10 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
        onClick={() => updateProductQty(id, "increase")}
      >
        <svg
          className="size-3.5 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
      </button>
    </div>
  );
};

const CartProductCard = () => {
  const { cartItems, removeProductFromCart } = useShopContext();
  return (
    <div className="gap-5">
      {cartItems.length === 0 ? (
        <div className="flex h-96 items-center justify-center">
          <p className="text-lg text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        cartItems.map((product) => {
          return (
            <div key={product.id} className="border-b p-8">
              <div className="flex flex-col lg:flex-row">
                <div className="mb-5 w-full lg:mb-0 lg:w-1/4">
                  <Image
                    src={product.media.images[0]}
                    alt="product"
                    width={200}
                    height={200}
                    className="aspect-square h-32 w-full rounded-md object-contain"
                  />
                </div>
                <div className="flex w-full flex-col px-4 lg:w-3/4 lg:flex-row">
                  <div className="">
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p className="line-clamp-1 text-sm text-gray-500 lg:line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-5">
                      <CartProductPrice id={product.id} />
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row-reverse justify-between lg:flex-row lg:justify-around">
                    <div>
                      <CartQuantitySelector
                        id={product.id}
                        quantity={product.quantity}
                      />
                    </div>
                    <div className="p-2">
                      <button
                        onClick={() => removeProductFromCart(product.id)}
                        className="underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

const CouponCodeComp = () => {
  const { setCouponCode, cartTotal, couponCode } = useShopContext();
  const couponCodeInput = useRef<HTMLInputElement>(null);

  const checkCouponCode = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const couponCodeValue = couponCodeInput.current?.value;
    if (cartTotal === 0) {
      toast.error("Cart is empty");
      return;
    }
    if (!couponCodeValue || couponCodeValue === "") {
      toast.error("Please enter a coupon code");
      return;
    }

    const res = await fetch(
      appUrl("/api/coupons/one?couponCode=" + couponCodeValue),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["coupons"],
          revalidate: 60 * 60 * 10, // 10 hours
        },
      },
    );

    if (res.status !== 200) {
      toast.error("Invalid coupon code");
      return;
    }
    const { data }: { data: CouponCode } = await res.json();

    if (couponCodeValue === data.code) {
      if (cartTotal < data.minOrderValue) {
        toast.error("Offer is valid for orders above " + 500 + " only");
        return;
      }
      setCouponCode(data);
      toast.success("Coupon code applied successfully");
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const removeCouponCode = () => {
    setCouponCode(null);
  };

  return (
    <div className="mb-5 rounded-md bg-white p-8 shadow-sm dark:bg-neutral-900 dark:shadow-neutral-700/70">
      <h2 className="mb-5 text-xl font-bold">Coupon Code</h2>
      {couponCode ? (
        <>
          <div className="flex justify-between">
            <p className="text-gray-500">Coupon Code</p>
            <p className="text-gray-800 dark:text-neutral-200">
              {couponCode.code}
            </p>
          </div>
          <div className="mt-5 w-full">
            <button
              onClick={removeCouponCode}
              className="w-full rounded-md bg-secondaryDark py-3 text-center text-white"
            >
              Remove Coupon
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={checkCouponCode}>
          <input
            ref={couponCodeInput}
            type="text"
            placeholder="Enter your coupon code"
            className="w-full rounded-md border border-gray-200 p-3 dark:border-neutral-700/70 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500"
          />
          <div className="mt-5 w-full">
            <button
              type="submit"
              className="w-full rounded-md bg-secondaryDark py-3 text-white hover:bg-secondaryDark/80"
            >
              Apply Coupon
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const CartProductPrice = ({ id }: { id: string }) => {
  const { cartItems } = useShopContext();
  const product = cartItems.find((item) => item.id === id);
  return <div className="font-semibold">₹ {product?.total}</div>;
};

const CartSummary = () => {
  const {
    cartTotal,
    couponDiscount,
    cartSavings,
    orderTotal,
    shippingCharge,
    gstAmount,
  } = useShopContext();

  return (
    <div className="rounded-md bg-white p-8 shadow-sm dark:bg-neutral-900 dark:shadow-neutral-700/70">
      <h2 className="mb-5 text-xl font-bold">Order Summary</h2>
      <div className="flex justify-between">
        <p className="text-gray-500">Subtotal</p>
        <p className="text-gray-800 dark:text-neutral-200">₹ {cartTotal}</p>
      </div>
      {couponDiscount > 0 && (
        <div className="flex justify-between">
          <p className="text-gray-500">Coupon Discount</p>
          <p className="text-gray-800 dark:text-neutral-200">
            - ₹ {couponDiscount}
          </p>
        </div>
      )}

      {cartTotal > 0 && (
        <>
          <div className="flex justify-between">
            <p className="text-gray-500">
              GST <span className="text-xs">18%</span>
            </p>
            <p className="text-gray-800 dark:text-neutral-200">₹ {gstAmount}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Shipping</p>
            <p className="text-gray-800 dark:text-neutral-200">
              ₹ {shippingCharge}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">₹ {orderTotal}</p>
          </div>
          <div>
            <p className="mt-3 text-sm text-green-500">
              You are saving{" "}
              <span className="font-semibold">₹ {cartSavings}</span> on this
              order
            </p>
          </div>
          <Link href="/cart/checkout">
            <button className="mt-5 w-full rounded-md bg-primary py-3 text-white hover:bg-primaryDark">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export {
  AddToCartBtn,
  CartQuantitySelector,
  CartProductCard,
  CouponCodeComp,
  CartSummary,
};
