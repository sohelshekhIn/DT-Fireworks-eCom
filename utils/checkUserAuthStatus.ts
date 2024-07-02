import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import appUrl from "./apiCallHandler";

export const checkUserAuthStatus = async (
  session: RequestCookie | undefined,
) => {
  const res = await fetch(appUrl("/api/login"), {
    next: {
      tags: ["user-session"],
      revalidate: 60 * 30, // 30 minutes
    },
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });
  return res.ok;
};
