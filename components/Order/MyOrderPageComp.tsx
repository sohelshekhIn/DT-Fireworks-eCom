import { Order } from "@/types/order";

export const DeliveryStatusStepper = ({
  status,
}: {
  status: Order["delivery"]["deliveryStatus"];
}) => {
  const steps = [
    { title: "Pending", description: "Your order is pending" },
    { title: "Prepared", description: "Your order is prepared" },
    { title: "Shipped", description: "Your order is shipped" },
    { title: "Delivered", description: "Your order is delivered" },
  ];

  return (
    <ul className="relative flex w-full flex-col justify-evenly gap-2 md:flex-row">
      {steps.map((step, index) => {
        return (
          <li
            key={step.title}
            className="group flex flex-1 shrink basis-0 flex-col gap-x-2 md:flex-row md:items-center"
          >
            <div
              className={`inline-flex min-h-7 min-w-7 grow items-center align-middle text-xs md:grow-0`}
            >
              <span
                className={`flex size-7 flex-shrink-0 items-center justify-center rounded-full ${index <= steps.findIndex((s) => s.title.toLowerCase() === status) ? "bg-primary text-white" : "bg-gray-200 text-gray-500"} font-medium dark:bg-neutral-700 dark:text-white`}
              >
                {index + 1}
              </span>
              <span className="ms-2 block grow text-sm font-medium text-gray-800 md:grow-0 dark:text-white">
                {step.title}
              </span>
            </div>
            <div className="ms-3.5 mt-2 h-4 w-px bg-gray-200 group-last:hidden md:ms-0 md:mt-0 md:h-px md:w-full md:flex-1 dark:bg-neutral-700"></div>
          </li>
        );
      })}
    </ul>
  );
};
