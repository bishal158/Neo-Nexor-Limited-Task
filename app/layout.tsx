import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neo Interior Studio | Modern Architecture & Luxury Interior Design",
  description:
    "Tactile, material-led interior architecture, residential sanctuaries, and commercial spaces by Neo Interior Studio (Neo Nexor Ltd). Located in Mohakhali DOHS, Dhaka.",
  keywords: [
    "Interior Design Dhaka",
    "Neo Interior Studio",
    "Architecture Bangladesh",
    "Residential Interior",
    "Commercial Interior",
    "Luxury Interiors Mohakhali DOHS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-sand text-ink font-sans antialiased selection:bg-accent selection:text-white"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
