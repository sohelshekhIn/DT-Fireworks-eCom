import { customInitApp } from "@/lib/firebase-admin-config";
import { db } from "@/lib/firebase-config";
import { CouponCode } from "@/types/coupon";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { getDoc, doc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

customInitApp();
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.nextUrl);
    const code = url.searchParams.get("couponCode");
    var couponCode: CouponCode | null = null;
    var responseCode = 500;
    if (code) {
      const couponsRef = doc(db, "coupons", code);
      await getDoc(couponsRef)
        .then((doc) => {
          if (doc.exists()) {
            couponCode = doc.data() as CouponCode;
            couponCode.code = doc.id;
            responseCode = 200;
          } else {
            throw new CustomError("Coupon not found.", 404);
          }
        })
        .catch((error) => {
          throw new CustomError(error.message, error.statusCode);
        });
    } else {
      throw new CustomError("Invalid request: coupon code missing.", 400);
    }
    return NextResponse.json(
      {
        data: couponCode,
      },
      { status: responseCode },
    );
  } catch (error: any) {
    return handleApiError(error);
  }
}

export const revalidate =
  60 * parseInt(process.env.NEXT_PUBLIC_FIRESTORE_REVALIDATE || "60");
// This is the revalidate time in minutes. Fallsback to 60 minutes if not provided in .env
