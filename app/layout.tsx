import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Craftsman's Hub",
  description: "Place where you can find your work or worker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="logo.png" />
      <body className="">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
