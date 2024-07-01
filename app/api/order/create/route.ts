import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { db } from "@/lib/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { LoadedCartData } from "@/types/shop";
import { generateCartHash } from "@/utils/sessionHashHandler";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const generateOrderId = () => {
  //   generate order id with OR-todays_data-4digit_random_number
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const random = Math.floor(Math.random() * 10000);
  return `OR-${year}${month}${date}${random}`;
};

export async function POST(request: NextRequest) {
  try {
    const bodyData = await request.json();
    const totalOrderAmount = await bodyData.totalOrderAmount;

    const cartSession = request.cookies.get("cart-session-token");
    console.log(cartSession?.name);
    console.log(cartSession?.value);
    if (!cartSession?.value) {
      throw new CustomError("Cart session not found.", 404);
    }

    const cartRefId = generateCartHash(cartSession.value); // get actual doc ref id

    const cartRef = doc(db, "cart-sessions", cartRefId);
    const cartDoc = await getDoc(cartRef);

    if (!cartDoc.exists()) {
      throw new CustomError("Cart not found.", 404);
    }

    const cartData = cartDoc.data() as LoadedCartData;

    const orderTotalValue: number = cartData.orderTotal || 0;
    const cartCount: number = cartData.cartCount || 0;

    if (totalOrderAmount !== orderTotalValue) {
      throw new CustomError("Invalid order.", 400);
    }

    if (orderTotalValue <= 0 || cartCount <= 0) {
      throw new CustomError("Cart is empty.", 400);
    }

    const amount = orderTotalValue * 100;

    var options = {
      amount: amount.toString(),
      currency: "INR",
      receipt: generateOrderId(),
    };
    const order = await razorpay.orders.create(options);
    if (order.status !== "created") {
      throw new CustomError("Order creation failed.", 500);
    }
    console.log("Order Details: ", order);

    return NextResponse.json({ orderId: order.id }, { status: 200 });
  } catch (error: any) {
    return handleApiError(error);
  }
}
