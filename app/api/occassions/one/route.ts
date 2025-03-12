import { customInitApp } from "@/lib/firebase-admin-config";
import { db } from "@/lib/firebase-config";
import { Occasion } from "@/types/category";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { getDoc, doc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

customInitApp();
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.nextUrl);
    const occasionId = url.searchParams.get("occasion");
    var occasion: Object = {};
    var responseCode = 500;
    if (occasionId) {
      const occasionRef = doc(db, "categories", occasionId);

      await getDoc(occasionRef)
        .then((doc) => {
          if (doc.exists()) {
            occasion = doc.data() as Occasion;
            responseCode = 200;
          } else {
            throw new CustomError("Occasion not found.", 404);
          }
        })
        .catch((error) => {
          throw new CustomError(error.message, error.code);
        });
    } else {
      throw new CustomError("Invalid request: OccasionId not found.", 400);
    }
    return NextResponse.json(
      {
        data: occasion,
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
