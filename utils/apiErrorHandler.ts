import { NextResponse } from "next/server";

interface ApiError {
  message: string;
  statusCode: number;
}

class CustomError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export const handleApiError = (error: ApiError) => {
  // Return { error } object with status code
  if (error instanceof CustomError) {
    return NextResponse.json(
      { error: error.message, isOk: false },
      { status: error.statusCode },
    );
  }

  // Log the error for server-side debugging
  console.error("API Error:", error);
  return NextResponse.json(
    { error: "Internal Server Error", isOk: false },
    { status: 500 },
  );
};

export { CustomError };
