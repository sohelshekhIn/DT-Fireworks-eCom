import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
// import appUrl from "./apiCallHandler";
import { auth } from "firebase-admin";

export const checkUserAuthStatus = async (
  session: RequestCookie | undefined,
) => {
  if (!session?.value) {
    return false;
  }
  try {
    //Use Firebase Admin to validate the session cookie
    const decodedClaims = await auth().verifySessionCookie(session.value, true);

    if (!decodedClaims) {
      return false;
    }
    return true;
  } catch (error: any) {
    return false;
  }
  // const res = await fetch(appUrl("/api/login"), {
  //   next: {
  //     tags: ["user-session"],
  //     revalidate: 60 * 30, // 30 minutes
  //   },
  //   headers: {
  //     Cookie: `session=${session?.value}`,
  //   },
  // });
  // return res.ok;
};
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
