import { customInitApp } from "@/lib/firebase-admin-config";
import { db } from "@/lib/firebase-config";
import { Order } from "@/types/order";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { doc, getDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

customInitApp();

export const GET = async (req: NextRequest) => {
  // get orderid from body
  try {
    const url = new URL(req.nextUrl);
    const orderId = url.searchParams.get("orderId");

    if (!orderId) {
      throw new CustomError("Order id is required", 400);
    }

    // get order by id
    const orderRef = doc(db, "online-orders", orderId);
    var orderData: Partial<Order> | null = null;
    await getDoc(orderRef)
      .then((doc) => {
        if (doc.exists()) {
          orderData = {
            id: doc.id,
            ...doc.data(),
          };
        } else {
          throw new CustomError("Order not found", 404);
        }
      })
      .catch((error) => {
        return handleApiError(error);
      });

    if (!orderData) {
      throw new CustomError("Order not found", 404);
    }
    return NextResponse.json(
      {
        data: orderData,
      },
      { status: 200 },
    );
  } catch (error: any) {
    return handleApiError(error);
  }
};
