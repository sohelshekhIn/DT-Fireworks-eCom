import { customInitApp } from "@/lib/firebase-admin-config";
import { db } from "@/lib/firebase-config";
import { Product } from "@/types/product";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { getDocs, query, collection, where, getDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

customInitApp();

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.nextUrl);
    const categoryId = url.searchParams.get("category");

    let products: Product[] = [];
    if (categoryId) {
      const productQuery = query(
        collection(db, "products"),
        where("isVisible", "==", true),
        where("categories", "array-contains-any", [categoryId])
      );
      await getDocs(productQuery)
        .then((querySnapshot) => {
          console.log("Query Snapshot: ", querySnapshot.empty);
          console.log("Query Snapshot: ", querySnapshot.size);

          querySnapshot.forEach(async (doc) => {
            products.push({
              id: doc.id,
              description: doc.data().description,
              product_id: doc.data().product_id,
              name: doc.data().name,
              price: doc.data().price,
              images: doc.data().images,
              categories: doc.data().categories,
              discount: doc.data().discount,
            });
            console.log(products);
          });
        })
        .catch((error) => {
          throw new CustomError(error.toString(), error.code);
        });
    } else {
      throw new CustomError("Invalid request: Category ID not found.", 400);
    }
    return NextResponse.json(
      {
        data: products,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return handleApiError(error);
  }
}

export const revalidate =
  60 * parseInt(process.env.NEXT_PUBLIC_FIRESTORE_REVALIDATE || "60");
// This is the revalidate time in minutes. Fallsback to 60 minutes if not provided in .env
