import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pranashieldwellness.com"),
  title: {
    default: "Pranashieldwellness — Premium Wellness Supplements",
    template: "%s | Pranashieldwellness",
  },
  description:
    "Pranashieldwellness offers a focused range of premium wellness supplements designed to support your health and wellbeing.",
  keywords: ["wellness", "supplements", "health", "pranashieldwellness"],
  openGraph: {
    type: "website",
    siteName: "Pranashieldwellness",
    title: "Pranashieldwellness — Premium Wellness Supplements",
    description:
      "Explore the Pranashieldwellness collection of wellness supplements.",
    images: [{ url: "/assets/logo/logo.png", width: 1374, height: 1145 }],
  },
  icons: {
    icon: "/assets/logo/brand-symbol.png",
    apple: "/assets/logo/brand-symbol.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
