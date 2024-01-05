import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import { Footer } from "@/app/(routes)/_components/footer";
import { Navbar } from "@/components/navigation/nav-bar";
import { ModalProvider, ToastProvider } from "@/providers/providers";
const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store App",
  description: "E-commerce store app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
