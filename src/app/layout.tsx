import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { ScrollFooter } from "@/components/scroll-footer";
import "./globals.css";

const serif = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Personal Research",
  description: "Thinking, building, exploring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sans.variable} antialiased`}
      >
        <div className="bg-black min-h-screen">
          <div className="bg-white flex rounded-b-xl relative z-10">
            <div className="fixed left-0 top-0 px-7 sm:px-8 md:px-10 lg:px-16 pt-20 md:pt-50">
              <Sidebar />
            </div>
            <div className="flex-1 pl-51 sm:pl-52 md:pl-54 lg:pl-64 pr-7 sm:pr-8 md:pr-10 lg:pr-20 pt-20 md:pt-50 pb-32">
              {children}
            </div>
          </div>
          <ScrollFooter />
        </div>
      </body>
    </html>
  );
}
