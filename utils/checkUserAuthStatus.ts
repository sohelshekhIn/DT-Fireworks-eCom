import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import appUrl from "./apiCallHandler";

export const checkUserAuthStatus = async (
  session: RequestCookie | undefined,
) => {
  console.log(session);

  const res = await fetch(appUrl("/api/login"), {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });
  return res.ok;
};
