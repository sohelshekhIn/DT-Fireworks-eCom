import { SandClock } from "@/public/images";
import Image from "next/image";

export const AuthorizingPayment = () => {
  return (
    <div className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-5 space-x-2 bg-white">
      <Image
        src={SandClock}
        alt="Sand Clock Icon to describe wait till we verufy the transaction"
      />
      <p className="font-lg font-semibold">
        Please wait while we authorize your payment...
      </p>
    </div>
  );
};
