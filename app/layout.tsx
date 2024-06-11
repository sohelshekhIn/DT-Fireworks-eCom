import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PrelineScript from "@/components/PrelineScript";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { ShopContextProvider } from "@/context/ShopContext";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <body className={poppins.className + " relative scroll-smooth"}>
          <ShopContextProvider>
            <span id="top-of-page" />
            <Navbar />
            <section className="w-full ">
              <main className="max-w-7xl w-full flex flex-wrap px-2 md:px-8 mx-auto">
                {children}
              </main>
            </section>
            <Footer />
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </ShopContextProvider>
        </body>
        <PrelineScript />
      </AuthProvider>
    </html>
  );
}
