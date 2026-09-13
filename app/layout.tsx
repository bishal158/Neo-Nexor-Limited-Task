import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neo Interior Studio | Modern Architecture & Luxury Interior Design",
  description: "Curated interior architecture, residential, commercial spaces and bespoke luxury interior design by Neo Interior Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} dark antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-studio-bg text-studio-text">
        {children}
      </body>
    </html>
  );
}
