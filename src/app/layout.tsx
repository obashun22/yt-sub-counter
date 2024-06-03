import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Subscriber Counter",
  description: "YouTube Subscriber Counter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
