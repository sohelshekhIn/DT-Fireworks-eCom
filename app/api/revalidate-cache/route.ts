import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag("categories");
  return NextResponse.json({ data: {} }, { status: 200 });
}
