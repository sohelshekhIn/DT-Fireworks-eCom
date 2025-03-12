import { Breadcrumb } from "@/components/Breadcrumb";
import {
  CartProductCard,
  CartSummary,
  CoupanCodeComp,
} from "@/components/Cart/CartComps";

const CartPage = () => {
  return (
    <div className="mx-auto w-full py-0 pb-36 lg:py-10">
      <div className="py-5 lg:py-16">
        <h1 className="text-center text-2xl font-bold md:text-3xl">
          Your Cart
        </h1>
        <Breadcrumb crumbs={[{ name: "Cart", href: "/cart" }]} />
      </div>
      <div className="flex w-full flex-col pt-5 lg:flex-row">
        <div className="w-full lg:w-2/3">
          <CartProductCard />
        </div>
        <div className="w-full lg:w-1/3">
          <CoupanCodeComp />
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
export const dynamic = "force-dynamic";
