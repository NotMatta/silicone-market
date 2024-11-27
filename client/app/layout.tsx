import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ApolloClientProvider from "@/components/apollo-provider";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import CartProvider from "@/components/cart-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "silicone-market",
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
            <ApolloClientProvider>
                <ThemeProvider
            attribute="class"
            defaultTheme="dark">
                <CartProvider>
                <div className="w-screen h-screen max-w-7xl mx-auto px-4 flex flex-col gap-8">
                    <Navbar/>
                    {children}
                </div>
                </CartProvider>
                </ThemeProvider>
            </ApolloClientProvider>
      </body>
    </html>
  );
}
