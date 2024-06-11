import { customInitApp } from "@/lib/firebase-admin-config";
import { db } from "@/lib/firebase-config";
import { CoupanCode } from "@/types/coupan";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { getDoc, doc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

customInitApp();

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.nextUrl);
    const code = url.searchParams.get("coupanCode");
    var coupanCode: CoupanCode | null = null;
    var responseCode = 500;
    if (code) {
      const coupansRef = doc(db, "coupans", code);

      await getDoc(coupansRef)
        .then((doc) => {
          if (doc.exists()) {
            coupanCode = doc.data() as CoupanCode;
            coupanCode.code = doc.id;
            responseCode = 200;
          } else {
            throw new CustomError("Coupan not found.", 404);
          }
        })
        .catch((error) => {
          throw new CustomError(error.message, error.code);
        });
    } else {
      throw new CustomError("Invalid request: coupan code missing.", 400);
    }
    return NextResponse.json(
      {
        data: coupanCode,
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
