import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KETCH-CATCH-PROJECT",
  description: "KETCH-CATCH-PROJECT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
