import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anshu.",
  description: "Anshu's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-sans antialiased bg-white dark:bg-black', inter.className)}>
        {children}
      </body>
    </html>
  );
}