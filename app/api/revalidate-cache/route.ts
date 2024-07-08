import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  const url = new URL(req.nextUrl);
  const tag = url.searchParams.get("tag");
  if (tag) {
    revalidateTag(tag);
    return NextResponse.json(
      {
        data: {
          message: "Cache revalidation request sent",
        },
      },
      { status: 200 },
    );
  } else {
    return NextResponse.json({ error: "Tag not found" }, { status: 400 });
  }
}
