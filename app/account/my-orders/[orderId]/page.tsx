export const dynamic = "force-dynamic";

import { Breadcrumb } from "@/components/Breadcrumb";
import { MyOrderPlaceholder } from "@/components/Order/MyOrderOnePageComp";

const OrderPage = async ({
  params,
}: {
  params: {
    orderId: string;
  };
}) => {
  return (
    <section className="mx-auto w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Order Details
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Order details and status.
        </p>
      </div>
      <Breadcrumb
        crumbs={[
          { name: "My Orders", href: "/account/my-orders" },
          {
            name: `Order #${params.orderId}`,
            href: `/account/my-orders/${params.orderId}`,
          },
        ]}
      />
      <MyOrderPlaceholder orderId={params.orderId} />
    </section>
  );
};

export default OrderPage;
