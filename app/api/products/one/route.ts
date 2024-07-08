import { customInitApp } from "@/lib/firebase-admin-config";
import { db } from "@/lib/firebase-config";
import { Product } from "@/types/product";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { getDoc, doc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

customInitApp();
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.nextUrl);
    const productId = url.searchParams.get("productId");
    var product: Object = {};
    var responseCode = 500;
    if (productId) {
      const productRef = doc(db, "products", productId);

      await getDoc(productRef)
        .then((doc) => {
          if (doc.exists()) {
            product = doc.data() as Product;
            responseCode = 200;
          } else {
            throw new CustomError("Product not found.", 404);
          }
        })
        .catch((error) => {
          throw new CustomError(error.message, error.code);
        });
    } else {
      throw new CustomError("Invalid request: ProductId missing.", 400);
    }
    return NextResponse.json(
      {
        data: product,
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
