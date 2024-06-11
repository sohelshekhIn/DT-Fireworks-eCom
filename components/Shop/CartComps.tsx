"use client";

import { useShopContext } from "@/context/ShopContext";
import { CartProduct, Product } from "@/types/product";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "react-toastify";

const AddToCartBtn = ({ product }: { product: Product }) => {
  const { addProductToCart } = useShopContext();
  return (
    <button
      onClick={() => addProductToCart(product)}
      className="px-3 py-2 text-sm font-semibold text-white bg-primary hover:bg-primaryDark rounded-md dark:bg-primaryDark"
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
        className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        onClick={() => updateProductQty(id, "decrease")}
      >
        <svg
          className="flex-shrink-0 size-3.5"
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
        className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
        type="text"
        readOnly
        value={quantity}
      />
      <button
        disabled={quantity === 20}
        type="button"
        className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        onClick={() => updateProductQty(id, "increase")}
      >
        <svg
          className="flex-shrink-0 size-3.5"
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
    <div
      className="
    gap-5"
    >
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-lg text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        cartItems.map((product) => {
          return (
            <div className="p-8 border-b">
              <div className="flex">
                <div className="w-1/4">
                  <Image
                    src={product.media.images[0]}
                    alt="product"
                    width={200}
                    height={200}
                    className="h-32 aspect-square object-contain rounded-md"
                  />
                </div>
                <div className="w-3/4 flex px-4 justify-between">
                  <div className="">
                    <h2 className="font-bold text-lg">{product.name}</h2>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-5">
                      <CartProductPrice id={product.id} />
                    </div>
                  </div>
                  <div className="">
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
          );
        })
      )}
    </div>
  );
};

const CoupanCodeComp = () => {
  const { setCoupanCode, cartTotal, coupanCode } = useShopContext();
  const coupanCodeInput = useRef<HTMLInputElement>(null);

  const checkCoupanCode = () => {
    const coupanCodeValue = coupanCodeInput.current?.value;
    if (cartTotal === 0) {
      toast.error("Cart is empty");
      return;
    }
    if (!coupanCodeValue) {
      toast.error("Please enter a coupan code");
    }
    // check if coupan code is valid
    // if valid, apply discount
    const res = {
      code: "SOHEL",
      name: "Sohel",
      discount: 10,
      isPercentage: true,
      minOrderValue: 1000,
      maxDiscount: 100,
    };
    if (coupanCodeValue === res.code) {
      if (cartTotal < res.minOrderValue) {
        toast.error(
          "Offer is valid for orders above " + res.minOrderValue + " only"
        );
        return;
      }
      setCoupanCode(res);
      toast.success("Coupan code applied successfully");
    } else {
      toast.error("Invalid coupan code");
    }
  };

  const removeCoupanCode = () => {
    setCoupanCode(null);
  };
  console.log(coupanCode);

  return (
    <div className="bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-700/70 rounded-md p-8 mb-5">
      <h2 className="font-bold text-xl mb-5">Coupan Code</h2>
      {coupanCode ? (
        <>
          <div className="flex justify-between">
            <p className="text-gray-500">Coupan Code</p>
            <p className="text-gray-800 dark:text-neutral-200">
              {coupanCode.code}
            </p>
          </div>
          <div className="mt-5 w-full">
            <button
              onClick={removeCoupanCode}
              className="w-full bg-secondaryDark text-center text-white py-3 rounded-md"
            >
              Remove Coupan
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            ref={coupanCodeInput}
            type="text"
            placeholder="Enter your coupan code"
            className="w-full border border-gray-200 dark:border-neutral-700/70 rounded-md p-3"
          />
          <div className="mt-5 w-full">
            <button
              onClick={checkCoupanCode}
              className="w-full bg-secondaryDark text-white py-3 rounded-md"
            >
              Apply Coupan
            </button>
          </div>
        </>
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
    coupanDiscount,
    cartSavings,
    orderTotal,
    shippingCharge,
    gstAmount,
  } = useShopContext();
  console.log(orderTotal);

  return (
    <div className="bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-700/70 rounded-md p-8">
      <h2 className="font-bold text-xl mb-5">Order Summary</h2>
      <div className="flex justify-between">
        <p className="text-gray-500">Subtotal</p>
        <p className="text-gray-800 dark:text-neutral-200">₹ {cartTotal}</p>
      </div>
      {coupanDiscount > 0 && (
        <div className="flex justify-between">
          <p className="text-gray-500">Coupan Discount</p>
          <p className="text-gray-800 dark:text-neutral-200">
            - ₹ {coupanDiscount}
          </p>
        </div>
      )}

      {orderTotal > 0 && (
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
            <p className="font-bold text-lg">Total</p>
            <p className="font-bold text-lg">₹ {orderTotal}</p>
          </div>
          <div>
            <p className="text-green-500 text-sm mt-3">
              You are saving{" "}
              <span className="font-semibold">₹ {cartSavings}</span> on this
              order
            </p>
          </div>
          <button className="w-full mt-5 bg-primary text-white py-3 rounded-md">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export {
  AddToCartBtn,
  CartQuantitySelector,
  CartProductCard,
  CoupanCodeComp,
  CartSummary,
};
