import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Portfolio | UI/UX & Frontend Developer",
  description: "Crafting seamless user experiences from pixel-perfect design to clean, scalable code.",
  icons: {
    icon: [
      {
        url: "/favicon-v1.png",
        type: "image/png",
      },
    ],
  },
};


// 🔴 ADDED: This forces mobile browsers to strictly obey the screen width
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jakarta.variable} font-sans bg-[#0B0F19] text-slate-300 antialiased selection:bg-[#00B4D8] selection:text-white overflow-x-hidden w-full`}
      >
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00B4D8] opacity-[0.03] blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#7C3AED] opacity-[0.03] blur-[120px] rounded-full"></div>
        </div>
        
        <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-24 overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}