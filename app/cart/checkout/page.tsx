import {
  CheckoutContactForm,
  CheckoutDeliveryForm,
} from "@/components/Cart/CheckoutComps";
import { checkUserAuthStatus } from "@/utils/checkUserAuthStatus";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const CheckoutPage = async () => {
  const session = cookies().get("session");
  const isLoggedIn = await checkUserAuthStatus(session);

  if (!isLoggedIn) {
    redirect("/signin?redirect=/cart/checkout");
  }

  return (
    <div className="mx-auto max-w-[85vw] py-10 pb-36 md:w-1/2 lg:w-10/12">
      <div className="mx-auto min-w-80 max-w-4xl bg-white p-4">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Checkout
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-lg font-semibold">Contact Details</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Used for Delivery purpose
            </p>
          </div>
          <CheckoutContactForm />
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-lg font-semibold">Delivery Details</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Addres to deliver the products
            </p>
          </div>
          <CheckoutDeliveryForm />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
