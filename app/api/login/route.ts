import { auth } from "firebase-admin";
import { customInitApp } from "@/lib/firebase-admin-config";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { CustomError, handleApiError } from "@/utils/apiErrorHandler";

// Init the Firebase SDK every time the server is called
customInitApp();

export async function POST() {
  try {
    const authorization = headers().get("Authorization");
    if (!authorization) {
      return new CustomError("Unauthorized", 401);
    }
    if (authorization?.startsWith("Bearer ")) {
      const idToken = authorization.split("Bearer ")[1];
      const decodedToken = await auth().verifyIdToken(idToken);

      if (decodedToken) {
        //Generate session cookie
        const expiresIn = 60 * 60 * 24 * 14 * 1000; //  14 days in milliseconds

        const sessionCookie = await auth().createSessionCookie(idToken, {
          expiresIn,
        });
        const options = {
          name: "session",
          value: sessionCookie,
          maxAge: expiresIn,
          httpOnly: true,
          secure: true,
        };

        //Add the cookie to the browser
        cookies().set(options);
      }
    } else {
      return new CustomError("Unauthorized", 401);
    }

    return NextResponse.json(
      {
        data: {
          message: "Logged In successfull",
          isLogged: true,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return handleApiError(error);
  }
}

export async function GET() {
  const session = cookies().get("session")?.value;

  //Validate if the cookie exist in the request
  if (!session) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  try {
    //Use Firebase Admin to validate the session cookie
    const decodedClaims = await auth().verifySessionCookie(session, true);

    if (!decodedClaims) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  return NextResponse.json(
    {
      data: {
        isLogged: true,
      },
    },
    { status: 200 }
  );
}
