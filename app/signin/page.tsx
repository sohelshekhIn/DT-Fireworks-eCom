import { SignInWithGoogleButton } from "@/components/Auth/AuthButtons";
import SignInForm from "@/components/Auth/SignInForm";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="max-w-[85vw] mx-auto py-5 md:py-10 lg:py-40">
      <div className="min-w-80 max-w-3xl p-4 mx-auto bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Don't have an account yet?{" "}
              <Link
                className="text-primary decoration-2 hover:underline font-medium dark:text-primary"
                href="/signup"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <SignInWithGoogleButton />

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
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
