import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PrelineScript from "@/components/PrelineScript";
import Footer from "@/components/Footer";
import CookiesConsentPopup from "@/components/CookiesConsent";
import { AuthProvider } from "@/context/AuthContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "DT Fireworks | Best fireworks wholesaler in Charotar | Fireworks for all occasions | Shop now",
  description:
    "DT Fireworks is the best fireworks wholesaler in Charotar. We provide a wide range of fireworks for all occasions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={poppins.className + " relative"}>
          <Navbar />
          <section className="w-full ">
            <main className="max-w-7xl w-full flex flex-wrap px-2 md:px-8 mx-auto">
              {children}
            </main>
          </section>
          {/* <CookiesConsentPopup /> */}
          <Footer />
        </body>
        <PrelineScript />
      </AuthProvider>
    </html>
  );
}
