import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yushan Lu",
  description: "Yushan Lu Portfolio 呂又山 個人網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = "bg-gray-50">
        {children}
      </body>
    </html>
  );
}
