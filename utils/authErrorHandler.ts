type AuthType = "email" | "google";

const AUTH_ERROR_MESSAGES: { [key: string]: string } = {
  // Common errors
  "auth/invalid-email": "The email address is not valid.",
  "auth/wrong-password": "The password is incorrect.",
  "auth/user-not-found": "No user found with the provided credentials.",
  "auth/user-disabled": "The user account has been disabled.",
  "auth/too-many-requests": "Too many attempts, please try again later.",
  "auth/network-request-failed":
    "Network error, please check your internet connection.",
  "auth/internal-error": "An internal error occurred. Please try again.",
  "auth/invalid-api-key": "Invalid API key provided.",

  // Email specific errors
  "auth/email-already-in-use":
    "The email address is already in use by another account.",
  "auth/requires-recent-login": "Please login again to perform this operation.",
  "auth/weak-password":
    "The password is too weak. Please choose a stronger password.",
  "auth/invalid-credential": "The credential is invalid.",
  "auth/invalid-verification-code": "The verification code is invalid.",
  "auth/invalid-verification-id": "The verification ID is invalid.",

  // Google specific errors
  "auth/popup-blocked": "The popup was blocked by the browser.",
  "auth/popup-closed-by-user":
    "The popup was closed by the user before completing the sign-in.",
  "auth/cancelled-popup-request":
    "This operation was cancelled due to another conflicting popup request.",
  "auth/unauthorized-domain":
    "This domain is not authorized for OAuth operations.",
  "auth/operation-not-supported-in-this-environment":
    "This operation is not supported in the current environment.",
  "auth/invalid-oauth-client-id": "The OAuth client ID is invalid.",
  "auth/invalid-oauth-provider": "The OAuth provider is invalid.",
};

export function getAuthErrorMessage(
  errorCode: string,
  authType: AuthType
): string {
  const commonErrors = [
    "auth/invalid-email",
    "auth/wrong-password",
    "auth/user-not-found",
    "auth/user-disabled",
    "auth/too-many-requests",
    "auth/network-request-failed",
    "auth/internal-error",
    "auth/invalid-api-key",
  ];

  const emailErrors = [
    ...commonErrors,
    "auth/email-already-in-use",
    "auth/requires-recent-login",
    "auth/weak-password",
    "auth/invalid-credential",
    "auth/invalid-verification-code",
    "auth/invalid-verification-id",
  ];

  const googleErrors = [
    ...commonErrors,
    "auth/popup-blocked",
    "auth/popup-closed-by-user",
    "auth/cancelled-popup-request",
    "auth/unauthorized-domain",
    "auth/operation-not-supported-in-this-environment",
    "auth/invalid-oauth-client-id",
    "auth/invalid-oauth-provider",
  ];

  if (authType === "email" && emailErrors.includes(errorCode)) {
    return AUTH_ERROR_MESSAGES[errorCode];
  } else if (authType === "google" && googleErrors.includes(errorCode)) {
    return AUTH_ERROR_MESSAGES[errorCode];
  } else if (commonErrors.includes(errorCode)) {
    return AUTH_ERROR_MESSAGES[errorCode];
  } else {
    return "An unknown error occurred.";
  }
}

// Example usage:
// const errorCode = "auth/invalid-credential";
// const authType: AuthType = "email";
// getAuthErrorMessage(errorCode, authType); // Output: "The credential is invalid or has expired."
