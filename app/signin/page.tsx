import { SignInWithGoogleButton } from "@/components/Auth/AuthButtons";
import { UserLoginRedirectFlow } from "@/components/Auth/RedirectUrlComp";
import SignInForm from "@/components/Auth/SignInForm";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="mx-auto max-w-[85vw] py-10 pb-36 md:w-1/2 md:pt-28 lg:w-5/12">
      <div className="mx-auto min-w-80 max-w-3xl rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Don&apos;t have an account yet?{" "}
              <UserLoginRedirectFlow linkFor="signin" />
            </p>
          </div>

          <div className="mt-5">
            <SignInWithGoogleButton />

            <div className="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-1 before:border-t before:border-gray-200 after:ms-6 after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Or
            </div>

            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
