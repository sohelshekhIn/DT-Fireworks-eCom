import { Breadcrumb } from "@/components/Breadcrumb";
import { MyOrdersCardPlaceholder } from "@/components/Order/MyOrdersCard";
export const dynamic = "force-dynamic";
const MyOrdersPage = async () => {
  return (
    <section className="mx-auto w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          My Orders
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          All your orders in one place.
        </p>
      </div>
      <Breadcrumb
        crumbs={[{ name: "My Orders", href: "/account/my-orders" }]}
      />
      <MyOrdersCardPlaceholder />
    </section>
  );
};

const NoOrdersFound = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md dark:bg-neutral-800">
          <p className="text-xl font-semibold text-gray-800 dark:text-neutral-300">
            No orders found
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
            You haven&apos;t placed any orders yet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
