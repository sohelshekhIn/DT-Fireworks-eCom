// import { headers } from "next/headers";

export default function appUrl(path: string) {
  // If we're in a browser environment, use relative paths
  if (typeof window !== "undefined") {
    return path;
  }

  // For server-side (including build time)
  if (process.env.VERCEL_URL) {
    // We're in Vercel production/preview
    return `https://${process.env.VERCEL_URL}${path}`;
  }

  if (process.env.NEXT_PUBLIC_APP_URL) {
    // We have a custom domain/URL
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
  }

  // Fallback for development
  return path;
}
