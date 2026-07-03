import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raja Ayurvedic - Premium Wellness & Health",
  description: "Experience the timeless wisdom of Ayurveda with our premium quality services and products. Natural healing tailored to your mind-body constitution.",
  metadataBase: new URL("https://rajaayurvedic.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-full bg-white text-primary antialiased flex flex-col">
        {/* Skip to Content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        
        {/* Global Navigation Header */}
        <Header />
        
        {/* Main page layout wrapper */}
        <div className="flex-1 flex flex-col pt-[72px] md:pt-[80px]">
          <main id="main-content" className="flex-grow focus:outline-none">
            {children}
          </main>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Scroll-To-Top trigger button */}
        <ScrollToTop />

        {/* WhatsApp floating button on left side */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
