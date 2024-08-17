import { credential } from "firebase-admin";
import { initializeApp, getApps } from "firebase-admin/app";

const firebaseAdminConfig = {
  credential: credential.cert({
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY
      ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
      : undefined,
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
  }),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}
