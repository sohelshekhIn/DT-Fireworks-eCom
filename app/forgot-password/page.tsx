import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <div className="max-w-[85vw] mx-auto py-10 md:py-16 lg:py-40">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Remember your password?
              <a
                className="text-primary decoration-2 hover:underline font-medium dark:text-primaryDark"
                href="/signin"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-10">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
