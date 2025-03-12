"use client";

import { useAuth } from "@/context/AuthContext";
import { auth, provider } from "@/lib/firebase-config";
import { getAuthErrorMessage } from "@/utils/authErrorHandler";
import { signInWithPopup, AuthError } from "firebase/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { toast } from "react-toastify";

export const LogOutButton = ({
  redirectUrl = "/signin",
}: {
  redirectUrl?: string;
}) => {
  const router = useRouter();
  const handleLogout = () => {
    auth.signOut().then(() => {
      fetch("/api/logout", {
        method: "POST",
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Logged out successfully");
            router.push(redirectUrl);
          }
        })
        .catch((error: any) => {
          toast.error("Failed to logout");
        });
    });
  };
  return (
    <button
      className="flex items-center gap-x-3.5 rounded-lg px-3 py-3 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export const NavbarAuthStateButton = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center space-x-2">
      {user ? (
        <LogOutButton />
      ) : (
        <Link
          href={"/signin"}
          type="button"
          className="focus:primaryDark inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-primary px-3 py-2 text-sm font-medium text-white transition hover:bg-primaryDark focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export const SignInWithGoogleButton = () => {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";
  const router = useRouter();
  const handleGoogleLoginWithPopup = () => {
    // google popup login
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const idToken = await result.user.getIdToken();

        fetch("/api/login", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }).then((response) => {
          if (response.status === 200) {
            toast.success("Logged in successfully");
            router.push(redirectUrl);
          }
        });
      })
      .catch((error: AuthError) => {
        toast.error(getAuthErrorMessage(error.code, "google"));
      });
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="">
        <button
          onClick={handleGoogleLoginWithPopup}
          type="button"
          className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
        >
          <svg
            className="h-auto w-4"
            width="46"
            height="47"
            viewBox="0 0 46 47"
            fill="none"
          >
            <path
              d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
              fill="#4285F4"
            />
            <path
              d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
              fill="#34A853"
            />
            <path
              d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
              fill="#FBBC05"
            />
            <path
              d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
              fill="#EB4335"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </Suspense>
  );
};

export const SignInWithGoogleButtonSkeleton = () => {
  return (
    <div className="flex w-full animate-pulse justify-center rounded-lg border border-gray-300 bg-gray-100 p-3">
      <div className="mr-3 h-5 w-5 rounded-full bg-gray-300"></div>
      <div className="h-5 w-32 rounded bg-gray-300"></div>
    </div>
  );
};
