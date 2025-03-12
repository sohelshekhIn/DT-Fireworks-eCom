function validatePath(path: string): string {
  if (!path.startsWith("/")) {
    throw new Error("Path must start with /");
  }

  if (path.match(/^(https?:)?\/\//)) {
    throw new Error("Path must not include protocol or domain");
  }

  return path;
}

export default function appUrl(path: string) {
  path = validatePath(path);

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
