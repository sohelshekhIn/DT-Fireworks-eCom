import {
  SignInWithGoogleButton,
  SignInWithGoogleButtonSkeleton,
} from "@/components/Auth/AuthButtons";
import { UserLoginRedirectFlow } from "@/components/Auth/RedirectUrlComp";
import SignUpForm, { SignUpFormSkeleton } from "@/components/Auth/SignUpForm";
import { Suspense } from "react";

const SignUpPage = () => {
  return (
    <div className="mx-auto max-w-[85vw] py-10 pb-28 md:w-1/2 lg:w-5/12">
      <div className="mt-7 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>
            <Suspense
              fallback={
                <div className="mt-2 h-5 w-48 animate-pulse rounded bg-gray-200 dark:bg-neutral-800"></div>
              }
            >
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Already have an account?{" "}
                <UserLoginRedirectFlow linkFor="signup" />
              </p>
            </Suspense>
          </div>

          <div className="mt-5">
            <Suspense fallback={<SignInWithGoogleButtonSkeleton />}>
              <SignInWithGoogleButton />
            </Suspense>
            <div className="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-1 before:border-t before:border-gray-200 after:ms-6 after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Or
            </div>
            <Suspense fallback={<SignUpFormSkeleton />}>
              <SignUpForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
