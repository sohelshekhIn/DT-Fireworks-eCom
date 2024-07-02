import { RedirectToHomePage } from "@/components/Order/SuccessPageComp";
import Link from "next/link";

const OrderSuccessPage = () => {
  return (
    <div className="h-[70dvh] w-full">
      <div className="flex h-full flex-col items-center justify-center gap-3">
        <div className="flex flex-col">
          <h1 className="text-center text-4xl font-semibold text-green-500 dark:text-green-400">
            Order Placed Successfully
          </h1>
          <p className="text-base text-gray-700 dark:text-gray-400">
            Your order has been placed successfully. You will receive an email
            confirmation shortly.
          </p>
        </div>
        <div className="">
          <p>
            You can view your order status in{" "}
            <Link href="/account/my-orders" className="text-primary underline">
              My Orders
            </Link>
          </p>
          <div className="mt-16 text-gray-400">
            <RedirectToHomePage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
