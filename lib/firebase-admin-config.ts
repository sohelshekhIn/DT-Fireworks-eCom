import { credential } from "firebase-admin";
import { initializeApp, getApps } from "firebase-admin/app";
const serviceAccount = require("@/service-account.json");

const firebaseAdminConfig = {
  credential: credential.cert({
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    
  })
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}
