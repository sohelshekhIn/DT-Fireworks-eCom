import { customInitApp } from "@/lib/firebase-admin-config";
import { db } from "@/lib/firebase-config";
import { Occassion } from "@/types/category";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { getDoc, doc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

customInitApp();
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.nextUrl);
    const occassionId = url.searchParams.get("occassion");
    var occassion: Object = {};
    var responseCode = 500;
    if (occassionId) {
      const occassionRef = doc(db, "categories", occassionId);

      await getDoc(occassionRef)
        .then((doc) => {
          if (doc.exists()) {
            occassion = doc.data() as Occassion;
            responseCode = 200;
          } else {
            throw new CustomError("Occassion not found.", 404);
          }
        })
        .catch((error) => {
          throw new CustomError(error.message, error.code);
        });
    } else {
      throw new CustomError("Invalid request: OccassionId not found.", 400);
    }
    return NextResponse.json(
      {
        data: occassion,
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
