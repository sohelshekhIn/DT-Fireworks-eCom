import { initializeApp, getApps, cert } from "firebase-admin/app";
const serviceAccount = require("@/service-account.json");

const firebaseAdminConfig = {
  credential: cert(serviceAccount),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}
