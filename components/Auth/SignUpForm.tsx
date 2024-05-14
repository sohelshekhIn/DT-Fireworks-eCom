"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, AuthError } from "firebase/auth";
import { auth } from "@/lib/firebase-config";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // check if email and password are empty
    if (!email || !password || !confirmPassword) {
      setError("Email and password are required");
      return;
    }

    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // check if password is at least 8 characters and contains a number and a special character
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?:.*[~!@#$%^&*()_+\-=\[\]{};':"|\\.,<>\/?])[A-Za-z\d\s~!@#$%^&*()_+\-=\[\]{};':"|\\.,<>\/?]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be minimum 8 characters, contain a number, and a special character"
      );
      return;
    }

    // check if password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError(null);

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
          router.push("/protected/client");
        })
        .catch((error: AuthError) => {
          console.error("Error:", error);
          setError("An error occurred. Please try again.");
        });
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const idToken = await user.getIdToken();
        setSignUpCookieRequest(idToken);
      })
      .catch((error: AuthError) => {
        // Handle Firebase Auth errors
        console.error("Error:", error);
        if (error.code === "auth/email-already-in-use") {
          setError("Email already in use. Please sign in.");
        } else if (error.code === "auth/weak-password") {
          setError("Password is too weak. Please try again.");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email. Please try again.");
        } else if (error.code === "auth/too-many-requests") {
          setError("Too many requests. Please try again later.");
        } else if (error.code === "auth/network-request-failed") {
          setError("Network request failed. Please try again.");
        } else {
          setError("An error occurred. Please try again.");
        }
      });
  };

  return (
    <form>
      <div className="grid gap-y-4">
        <div>
          <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primaryDark focus:ring-primaryDark disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
              className="block text-sm mb-2 dark:text-white"
            >
              Enter password
            </label>
            <div className="relative">
              <input
                id="hs-toggle-password-multi-toggle-np"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primaryDark focus:ring-primaryDark disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter password"
              />
              <button
                type="button"
                data-hs-toggle-password='{
          "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
        }'
                className="absolute top-0 end-0 p-3.5 rounded-e-md"
              >
                <svg
                  className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
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

          <div className="max-w-md mb-5">
            <label
              htmlFor="hs-toggle-password-multi-toggle"
              className="block text-sm mb-2 dark:text-white"
            >
              Confirm password
            </label>
            <div className="relative">
              <input
                id="hs-toggle-password-multi-toggle"
                type="password"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primaryDark focus:ring-primaryDark disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                data-hs-toggle-password='{
          "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
        }'
                className="absolute top-0 end-0 p-3.5 rounded-e-md"
              >
                <svg
                  className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
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
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        <div className="mt-5">
          <button
            onClick={handleSignUp}
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
