import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactDetails, CheckoutDetails } from "@/components/Cart/ReviewComps";
import Link from "next/link";
const CartReviewPage = () => {
  return (
    <div className="mx-auto w-full py-10 pb-36 md:w-1/2 md:max-w-[85vw] lg:w-10/12">
      <div className="mx-auto min-w-80 max-w-4xl bg-white p-4">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Review
            </h1>
          </div>
        </div>
        <Breadcrumb
          crumbs={[
            { name: "Cart", href: "/cart" },
            { name: "Checkout", href: "/cart/checkout" },
            { name: "Review", href: "/cart/review" },
          ]}
        />
        <div className="mt-10">
          <div>
            <h1 className="text-lg font-semibold">Verify Your Details</h1>
            <Link
              className="text-sm text-gray-500 underline dark:text-gray-400"
              href="/cart/checkout"
            >
              Edit
            </Link>
          </div>
          <ContactDetails />
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-lg font-semibold">Checkout Details</h1>
            <Link
              href="/cart"
              className="text-sm text-gray-500 underline dark:text-gray-400"
            >
              Edit
            </Link>
          </div>
          <CheckoutDetails />
        </div>
      </div>
    </div>
  );
};

export default CartReviewPage;
