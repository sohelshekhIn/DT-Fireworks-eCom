"use client";

import { useAuth } from "@/context/AuthContext";
import { UserIcon } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOutButton } from "./AuthButtons";

export const NavbarAuthProfile = () => {
  const { user } = useAuth();
  const path = usePathname();
  return (
    <div className="hs-dropdown relative m-1 inline-flex [--trigger:hover]">
      <button
        id="hs-dropdown-hover-event"
        type="button"
        className="hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
      >
        <Image src={UserIcon} alt="User Icon" className="w-4" />
        <svg
          className="size-4 hs-dropdown-open:rotate-180"
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
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {user ? (
        <div
          className="hs-dropdown-menu duration mt-2 hidden min-w-60 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] before:absolute before:-top-4 before:start-0 before:h-4 before:w-full after:absolute after:-bottom-4 after:start-0 after:h-4 after:w-full hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800"
          aria-labelledby="hs-dropdown-default"
        >
          <div className="-m-2 rounded-t-lg bg-gray-100 px-5 py-3 dark:bg-neutral-700">
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              Signed in as
            </p>
            <p className="text-sm font-medium text-gray-800 dark:text-neutral-300">
              {user.email}
            </p>
          </div>
          <div className="mt-2 gap-2 py-2 first:pt-0 last:pb-0">
            {/* <Link
              className="flex items-center gap-x-3.5 rounded-lg px-3 py-3 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="/account/"
            >
              My Account
            </Link> */}
            <Link
              className="flex w-full items-center gap-x-3.5 rounded-lg px-3 py-3 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="/account/my-orders"
            >
              My Orders
            </Link>
            <LogOutButton />
          </div>
        </div>
      ) : (
        <div
          className="hs-dropdown-menu duration mt-2 hidden min-w-60 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] before:absolute before:-top-4 before:start-0 before:h-4 before:w-full after:absolute after:-bottom-4 after:start-0 after:h-4 after:w-full hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800"
          aria-labelledby="hs-dropdown-hover-event"
        >
          <Link
            href={"/signin" + (path !== "/signin" ? `?redirect=${path}` : ``)}
            type="button"
            className="flex items-center gap-x-3.5 rounded-lg px-3 py-3 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};
