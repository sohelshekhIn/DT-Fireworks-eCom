import { customInitApp } from "@/lib/firebase-admin-config";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase-config";
customInitApp();

const getCartSessionRefId = (cartSessionToken: string | null) => {
  if (!cartSessionToken) {
    // create a new cart session token of 16 characters
    cartSessionToken = Math.random().toString(36).substring(2, 15);
  }
  const cartSessionId = createHash("md5")
    .update(cartSessionToken + getCartSessionSecret())
    .digest("hex");
  return [cartSessionId, cartSessionToken];
};

const getCartSessionSecret = () => {
  const CART_SESSION_SECRET = process.env.CART_SESSION_SECRET;
  if (!CART_SESSION_SECRET) {
    throw new CustomError("Something went wrong. Please try again later.", 500);
  }
  return CART_SESSION_SECRET;
};

export async function POST(req: NextRequest) {
  let cartSessionToken: string | null =
    cookies().get("cart-session-token")?.value || null;
  try {
    const cartSession = getCartSessionRefId(cartSessionToken);

    const data = await req.json();

    const cartRef = doc(db, "cart-sessions", cartSession[0]);

    setDoc(cartRef, data.data, {
      merge: true,
    });

    //   set the cart session token in the cookie
    let options: any = {
      name: "cart-session-token",
      value: cartSession[1],
      maxAge: 60 * 60 * 24 * 14,
      httpOnly: true,
      secure: true,
    };

    cookies().set(options);
    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error: any) {
    return handleApiError(error);
  }
}
