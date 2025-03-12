"use client";

import { auth } from "@/lib/firebase-config";
import { getAuthErrorMessage } from "@/utils/authErrorHandler";
import { signInWithEmailAndPassword, AuthError } from "firebase/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const SignInForm = () => {
  // get url params
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    // check if email and password are empty
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // check if password is at least 8 characters and contains a number
    const passwordRegex: RegExp =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be minimum 8 characters, contain a number, and a special character",
      );
      return;
    }

    const setSignInCookieRequest = (idToken: string) => {
      fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          credentials: "same-origin",
        },
        next: {
          revalidate: 0,
        },
      })
        .then((response) => {
          toast.success("Signed in successfully");
          if (response.status === 200) {
            router.push(redirectUrl);
          }
        })
        .catch((error: AuthError) => {
          toast.error(getAuthErrorMessage(error.code, "email"));
        });
    };

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const idToken = await user.getIdToken();
        setSignInCookieRequest(idToken);
      })
      .catch((error) => {
        toast.error(getAuthErrorMessage(error.code, "email"));
      });
  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="grid gap-y-4">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm dark:text-white">
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              required
              aria-describedby="email-error"
            />
            <div className="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
              <svg
                className="size-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="mb-2 block text-sm dark:text-white"
            >
              Password
            </label>
            <Link
              tabIndex={-1}
              className="text-sm font-medium text-primary/70 decoration-2 hover:underline dark:text-primaryDark"
              href="/forgot-password"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              id="hs-toggle-password"
              type="password"
              className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
              className="absolute end-0 top-0 rounded-e-md p-3.5"
            >
              <svg
                className="size-3.5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  className="hs-password-active:hidden"
                  d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                ></path>
                <line
                  className="hs-password-active:hidden"
                  x1="2"
                  x2="22"
                  y1="2"
                  y2="22"
                ></line>
                <path
                  className="hidden hs-password-active:block"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                ></path>
                <circle
                  className="hidden hs-password-active:block"
                  cx="12"
                  cy="12"
                  r="3"
                ></circle>
              </svg>
            </button>
          </div>
          <p className="mt-2 hidden text-xs text-red-600" id="password-error">
            8+ characters required
          </p>
        </div>

        <button
          type="submit"
          className="mt-5 inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primaryDark disabled:pointer-events-none disabled:opacity-50"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export const SignInFormSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-neutral-700"></div>
      <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-neutral-700"></div>
      <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-neutral-700"></div>
    </div>
  );
};

export default SignInForm;
