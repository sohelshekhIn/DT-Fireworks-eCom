import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
// import appUrl from "./apiCallHandler";
import { auth } from "firebase-admin";
import { DecodedIdToken } from "firebase-admin/auth";

export async function checkUserAuthStatus(session: {
  value: string | undefined;
}): Promise<{
  isAuthenticated: boolean;
  user?: DecodedIdToken;
}> {
  if (!session?.value) {
    return { isAuthenticated: false };
  }

  try {
    const decodedClaims = await auth().verifySessionCookie(session.value, true);
    return {
      isAuthenticated: !!decodedClaims,
      user: decodedClaims,
    };
  } catch (error) {
    console.error("Session verification failed:", error);
    return { isAuthenticated: false };
  }
}
// export const checkUserAuthStatus = async (
//   session: RequestCookie | undefined,
// ) => {
//   const res = await fetch(appUrl("/api/login"), {
//     next: {
//       tags: ["user-session"],
//       revalidate: 60 * 30, // 30 minutes
//     },
//     headers: {
//       Cookie: `session=${session?.value}`,
//     },
//   });
//   return res.ok;
// };
