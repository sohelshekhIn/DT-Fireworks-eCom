"use client";

import { auth } from "@/lib/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignIn = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // check if email and password are empty
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // check if password is at least 8 characters and contains a number
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?:.*[~!@#$%^&*()_+\-=\[\]{};':"|\\.,<>\/?])[A-Za-z\d\s~!@#$%^&*()_+\-=\[\]{};':"|\\.,<>\/?]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be minimum 8 characters, contain a number, and a special character"
      );
      return;
    }
    setError(null);

    const setSignInCookieRequest = (idToken: string) => {
      fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          credentials: "same-origin",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            router.push("/protected/client");
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const idToken = await user.getIdToken();
        setSignInCookieRequest(idToken);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("User not found");
        } else if (error.code === "auth/wrong-password") {
          setError("Wrong password");
        } else if (error.code === "auth/too-many-requests") {
          setError("Too many requests. Try again later");
        } else {
          setError(error.message);
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
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              required
              aria-describedby="email-error"
            />
            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
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
          <p className="hidden text-xs text-red-600 mt-2" id="email-error">
            Please include a valid email address so we can get back to you
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="password"
              className="block text-sm mb-2 dark:text-white"
            >
              Password
            </label>
            <a
              className="text-sm text-primaryDark decoration-2 hover:underline font-medium"
              href="/forgot-password"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              id="hs-toggle-password"
              type="password"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              data-hs-toggle-password='{
        "target": "#hs-toggle-password"
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
          <p className="hidden text-xs text-red-600 mt-2" id="password-error">
            8+ characters required
          </p>
        </div>

        <div className="flex items-center">
          <div className="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-200 rounded text-primary focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-800"
            />
          </div>
          <div className="ms-3">
            <label htmlFor="remember-me" className="text-sm dark:text-white">
              Remember me
            </label>
          </div>
        </div>
        {error && (
          <p className="text-red-500 dark:text-red-600/80 py-2 underline font-medium">
            {error}
          </p>
        )}

        <button
          type="submit"
          onClick={handleSignIn}
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primaryDark disabled:opacity-50 disabled:pointer-events-none"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
