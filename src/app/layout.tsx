
import "./globals.css";
import { Inter } from "next/font/google";
import { UIProvider } from "@/components/ui-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = { title: "Soma — Immersive Experiences", description: "Life-changing experiences, beautifully curated." };

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-neutral-100 min-h-screen`}>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
