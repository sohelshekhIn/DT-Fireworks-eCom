import { customInitApp } from "@/lib/firebase-admin-config";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase-config";
import { generateCartHash } from "@/utils/sessionHashHandler";
customInitApp();

const getCartSessionRefId = (cartSessionToken: string | null) => {
  if (!cartSessionToken) {
    // create a new cart session token of 16 characters
    cartSessionToken = Math.random().toString(36).substring(2, 15);
  }
  const cartSessionId = generateCartHash(cartSessionToken);
  return [cartSessionId, cartSessionToken];
};

export async function GET() {
  let cartSessionToken: string | null =
    cookies().get("cart-session-token")?.value || null;

  try {
    if (!cartSessionToken) {
      return NextResponse.json(
        {
          data: {},
        },
        {
          status: 202,
        },
      );
    }
    const cartSession = getCartSessionRefId(cartSessionToken);

    const cartRef = doc(db, "cart-sessions", cartSession[0]);

    const cartSnapshot = await getDoc(cartRef);
    if (cartSnapshot.exists()) {
      return NextResponse.json(
        {
          data: cartSnapshot.data(),
        },
        {
          status: 200,
        },
      );
    } else {
      return NextResponse.json(
        {
          data: {},
        },
        {
          status: 404,
        },
      );
    }
  } catch (error: any) {
    return handleApiError(error);
  }
}

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
