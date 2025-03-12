"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  AuthError,
  getAuth,
} from "firebase/auth";
import { auth } from "@/lib/firebase-config";
import { getAuthErrorMessage } from "@/utils/authErrorHandler";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignUp = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    // check if email and password are empty
    if (!email || !password || !confirmPassword) {
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
    const passwordRegex = /^(?=.*\d)(?=.*[A-Za-z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      console.log(password);
      toast.error(
        "Password must be minimum 8 characters and contains a number",
      );
      return;
    }

    // check if password and confirm password match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const setSignUpCookieRequest = async (idToken: string) => {
      // Send token to server to set cookie
      fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          credentials: "same-origin",
        },
      })
        .then(() => {
          toast.success("Signed up successfully");
          router.push(redirectUrl);
        })
        .catch((error: AuthError) => {
          toast.error(getAuthErrorMessage(error.code, "email"));
        });
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const idToken = await user.getIdToken();
        setSignUpCookieRequest(idToken);
      })
      .catch((error: AuthError) => {
        toast.error(getAuthErrorMessage(error.code, "email"));
      });
  };

  return (
    <form onSubmit={handleSignUp}>
      <div className="grid gap-y-4">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm dark:text-white">
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-primaryDark focus:ring-primaryDark disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              required
              placeholder="Email address"
              aria-describedby="email-error"
            />
          </div>
        </div>

        <div className="space-y-5" data-hs-toggle-password-group="">
          <div className="max-w-md">
            <label
              htmlFor="hs-toggle-password-multi-toggle-np"
              className="mb-2 block text-sm dark:text-white"
            >
              Enter password
            </label>
            <div className="relative">
              <input
                id="hs-toggle-password-multi-toggle-np"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-primaryDark focus:ring-primaryDark disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter password"
              />
              <button
                type="button"
                data-hs-toggle-password='{
          "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
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
          </div>

          <div className="mb-5 max-w-md">
            <label
              htmlFor="hs-toggle-password-multi-toggle"
              className="mb-2 block text-sm dark:text-white"
            >
              Confirm password
            </label>
            <div className="relative">
              <input
                id="hs-toggle-password-multi-toggle"
                type="password"
                className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-primaryDark focus:ring-primaryDark disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                data-hs-toggle-password='{
          "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
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
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
