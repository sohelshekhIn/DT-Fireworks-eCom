import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import appUrl from "./apiCallHandler";
import { cache } from "react";

export const checkUserAuthStatus = async (
  session: RequestCookie | undefined,
) => {
  console.log(session);

  const res = await fetch(appUrl("/api/login"), {
    cache: "force-cache",
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });
  return res.ok;
};
