import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { Toaster } from "@/components/ui/sonner";
import "@radix-ui/themes/styles.css";
import {Theme} from '@radix-ui/themes'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nestify",
  description: "Complete Home Rental Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme
        appearance="light">

        
        <Provider>
         {children}
        </Provider>
        <Toaster />
        </Theme>
      </body>
    </html>
  );
}
