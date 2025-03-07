import { customInitApp } from "@/lib/firebase-admin-config";
import { db } from "@/lib/firebase-config";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { getDocs, collection, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

type Category = {
  id: string;
  name: string;
  thumb_image: string;
};

// Init the Firebase SDK every time the server is called
customInitApp();

export async function GET() {
  try {
    let categories: Category[] = [];
    const categoryQuery = query(
      collection(db, "categories"),
      where("isVisible", "==", true),
      where("isOccassion", "==", true),
    );

    await getDocs(categoryQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          categories.push({
            id: doc.id,
            name: doc.data().name,
            thumb_image: doc.data().thumb_image,
          });
        });
      })
      .catch((error) => {
        throw new CustomError(error.toString(), error.code);
      });

    return NextResponse.json({ data: categories }, { status: 200 });
  } catch (error: any) {
    return handleApiError(error);
  }
}

export const revalidate =
  60 * parseInt(process.env.NEXT_PUBLIC_FIRESTORE_REVALIDATE || "60");
// This is the revalidate time in minutes. Fallsback to 60 minutes if not provided in .env
