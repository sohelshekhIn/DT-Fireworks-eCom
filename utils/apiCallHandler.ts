// import { headers } from "next/headers";

export default function (path: string) {
  // const headersData = headers();
  // const host = headersData.get("host");
  // const protocol =
  //   headersData.get("x-forwarded-proto") ?? host?.startsWith("localhost")
  //     ? "http"
  //     : "https";
  // const apiBase = `${protocol}://${host}`;
  // return `${apiBase}${path}`;
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
