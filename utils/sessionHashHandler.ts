import { createHash } from "crypto";
import { CustomError } from "./apiErrorHandler";
export const generateCartHash = (cartSessionToken: string) => {
  return createHash("md5")
    .update(cartSessionToken + getCartSessionSecret())
    .digest("hex");
};

const getCartSessionSecret = () => {
  const CART_SESSION_SECRET = process.env.CART_SESSION_SECRET;
  if (!CART_SESSION_SECRET) {
    throw new CustomError("Something went wrong. Please try again later.", 500);
  }
  return CART_SESSION_SECRET;
};
