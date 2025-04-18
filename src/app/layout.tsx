import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCProvider } from "@/trpc/client";

const inter = Inter({
  subsets: ["latin"],})

export const metadata: Metadata = {
  title: "DonTube",
  description: "Free video hosting without ads and copyright!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <TRPCProvider>
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        
          {children}
        
      </body>
    </html>
    </TRPCProvider>
    </ClerkProvider>
  );
}
