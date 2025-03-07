import { credential } from "firebase-admin";
import { initializeApp, getApps } from "firebase-admin/app";
import { ServiceAccount } from "firebase-admin";

// Ensure proper formatting of private key
const formatPrivateKey = (key: string | undefined) => {
  if (!key) return undefined;
  // If the key already contains newline characters, return as is
  if (key.includes("\n")) return key;
  // Otherwise, add newline characters
  return key.replace(/\\n/g, "\n");
};

const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  client_id: process.env.FIREBASE_CLIENT_ID,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: formatPrivateKey(process.env.FIREBASE_PRIVATE_KEY),
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-j0l8c%40dt-fireworks.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
} as ServiceAccount;

const firebaseAdminConfig = {
  credential: credential.cert(serviceAccount),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}
