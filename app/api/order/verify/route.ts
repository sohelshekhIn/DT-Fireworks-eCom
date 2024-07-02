import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { generateCartHash } from "@/utils/sessionHashHandler";
import { doc, runTransaction } from "firebase/firestore";
import { db } from "@/lib/firebase-config";
import { cookies } from "next/headers";

const handleOrderCreation = async (
  orderReceiptId: string,
  razorpayPaymentId: string,
  razorpayOrderId: string,
  cartSessionToken: string,
) => {
  const cartSessionRefId = generateCartHash(cartSessionToken);
  const cartSessionRef = doc(db, "cart-sessions", cartSessionRefId);
  const orderDocRef = doc(db, "online-orders", orderReceiptId);

  await runTransaction(db, async (transaction) => {
    const cartSessionDoc = await transaction.get(cartSessionRef);
    if (!cartSessionDoc.exists()) {
      throw new CustomError("Cart session not found.", 404);
    }

    const cartSessionData = cartSessionDoc.data();

    transaction.set(orderDocRef, {
      ...cartSessionData,
      razorpayPaymentId,
      razorpayOrderId,
      // createdAt date in IST timezone
      createdAt: new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      }),
      orderStatus: "pending",
      delivery: {
        isDelivered: false,
        deliveryDate: null,
        deliveryStatus: "pending",
      },
    });

    transaction.delete(cartSessionRef);
  });

  await sendOrderConfirmationEmail(orderReceiptId);
};

const sendOrderConfirmationEmail = async (orderReceiptId: string) => {
  console.log("Email Sent to user for order confirmation");
};

const generatedSignature = (
  razorpayOrderId: string,
  razorpayPaymentId: string,
) => {
  const keySecret = process.env.RAZORPAY_KEY_SECRET!;
  if (!keySecret) {
    throw new Error(
      "Razorpay key secret is not defined in environment variables.",
    );
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

export async function POST(request: NextRequest) {
  try {
    const {
      orderReceiptId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = await request.json();

    const signature = generatedSignature(razorpayOrderId, razorpayPaymentId);
    if (signature !== razorpaySignature) {
      throw new CustomError("Payment Verification Failed", 400);
    }

    const cartSessionToken =
      request.cookies.get("cart-session-token")?.value || "";
    await handleOrderCreation(
      orderReceiptId,
      razorpayPaymentId,
      razorpayOrderId,
      cartSessionToken,
    );
    const options = {
      name: "cart-session-token",
      value: "",
      httpOnly: true,
      maxAge: 0,
      secure: true,
    };
    cookies().set(options);
    return NextResponse.json(
      { message: "Payment Verified Successfully", isOk: true },
      { status: 200 },
    );
  } catch (error: any) {
    return handleApiError(error);
  }
}
