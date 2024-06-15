import { CustomError, handleApiError } from "@/utils/apiErrorHandler";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ data: "pong" });
}
