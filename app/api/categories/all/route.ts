import { customInitApp } from "@/lib/firebase-admin-config";
import { db } from "@/lib/firebase-config";
import { Category } from "@/types/category";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { getDocs, collection, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

// Init the Firebase SDK every time the server is called
customInitApp();

export async function GET() {
  try {
    let categories: Category[] = [];
    const categoryQuery = query(
      collection(db, "categories"),
      where("isVisible", "==", true)
    );
    await getDocs(categoryQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          categories.push({
            id: doc.id,
            name: doc.data().name,
            thumb_image: doc.data().thumb_image,
            isOccassion: doc.data().isOccassion,
          });
        });
      })
      .catch((error) => {
        throw new CustomError(error.message, error.code);
      });

    return NextResponse.json({ data: categories }, { status: 200 });
  } catch (error: any) {
    return handleApiError(error);
  }
}

export const revalidate =
  60 * parseInt(process.env.NEXT_PUBLIC_FIRESTORE_REVALIDATE || "60");
// This is the revalidate time in minutes. Fallsback to 60 minutes if not provided in .env
