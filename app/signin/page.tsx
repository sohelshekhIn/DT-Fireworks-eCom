import {
  SignInWithGoogleButton,
  SignInWithGoogleButtonSkeleton,
} from "@/components/Auth/AuthButtons";
import { UserLoginRedirectFlow } from "@/components/Auth/RedirectUrlComp";
import SignInForm, { SignInFormSkeleton } from "@/components/Auth/SignInForm";
import { Suspense } from "react";
export const dynamic = "force-dynamic";
const SignInPage = () => {
  return (
    <div className="mx-auto max-w-[85vw] py-10 pb-36 md:w-1/2 md:pt-28 lg:w-5/12">
      <div className="mx-auto min-w-80 max-w-3xl rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <Suspense
              fallback={
                <div className="mt-2 h-5 w-48 animate-pulse rounded bg-gray-200 dark:bg-neutral-800"></div>
              }
            >
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Don&apos;t have an account yet?{" "}
                <UserLoginRedirectFlow linkFor="signin" />
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
            <Suspense fallback={<SignInFormSkeleton />}>
              <SignInForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
