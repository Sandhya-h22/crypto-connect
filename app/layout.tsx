import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import AllContextsProvider from "./context/main";
import Header from "@/components/Header/Header"; // ✅ Import Header Component

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "crypto-connect",
  description: "Crypto payment gateway and wallet manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AllContextsProvider>{children}</AllContextsProvider>
      </body>
    </html>
  );
}