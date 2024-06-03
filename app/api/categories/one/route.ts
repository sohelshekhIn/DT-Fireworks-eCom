import { customInitApp } from "@/lib/firebase-admin-config";
import { db } from "@/lib/firebase-config";
import { Category } from "@/types/category";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { getDoc, doc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.nextUrl);
    const categoryId = url.searchParams.get("category");
    var category: Object = {};
    var responseCode = 500;
    if (categoryId) {
      const categoryRef = doc(db, "categories", categoryId);

      await getDoc(categoryRef)
        .then((doc) => {
          if (doc.exists()) {
            category = doc.data() as Category;
            responseCode = 200;
          } else {
            throw new CustomError("Category not found.", 404);
          }
        })
        .catch((error) => {
          throw new CustomError(error.message, error.code);
        });
    } else {
      throw new CustomError("Invalid request: Category ID not found.", 400);
    }
    return NextResponse.json(
      {
        data: category,
      },
      { status: responseCode }
    );
  } catch (error: any) {
    return handleApiError(error);
  }
}

export const revalidate =
  60 * parseInt(process.env.NEXT_PUBLIC_FIRESTORE_REVALIDATE || "60");
// This is the revalidate time in minutes. Fallsback to 60 minutes if not provided in .env
