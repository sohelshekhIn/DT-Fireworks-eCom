"use client";

import { Breadcrumb } from "@/components/Breadcrumb";
import {
  CartProductCard,
  CartSummary,
  CoupanCodeComp,
} from "@/components/Shop/CartComps";

const CartPage = () => {
  return (
    <div className="w-full mx-auto py-10 pb-36">
      <div className="py-16">
        <h1 className="font-bold text-xl md:text-3xl text-center">Your Cart</h1>
        <Breadcrumb crumbs={[{ name: "Cart", href: "/cart" }]} />
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-2/3">
          <CartProductCard />
        </div>
        <div className="w-full lg:w-1/3">
          {/* coupan entering section */}
          <CoupanCodeComp />
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
