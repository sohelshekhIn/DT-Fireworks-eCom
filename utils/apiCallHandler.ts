// import { headers } from "next/headers";

export default function appUrl(path: string) {
  // If we're in a browser environment, use relative paths
  if (typeof window !== "undefined") {
    return path;
  }

  // For server-side (including build time)
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  return `${baseUrl}${path}`;
}
