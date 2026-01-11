import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/dist/client/link";
import CartProvider from "@/contexts/CartProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: {
        default: "NextJS Fetching & Rendering",
        template: "%s | NextJS Fetching & Rendering"
    },
    description: "Best fast food in your town",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <header className="px-5 py-2 flex items-center justify-between gap-5 bg-stone-800">
                <Link href="/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.png" alt="logo" className="w-30"/>
                </Link>

                <div className="space-x-5">
                    <Link className="btn" href="/">Home</Link>
                    <Link className="btn" href="/foods">Foods</Link>
                    <Link className="btn" href="/reviews">Reviews</Link>
                </div>
            </header>

            <main className="px-5 py-8">
                <CartProvider>
                    {children}
                </CartProvider>
            </main>
        </body>
        </html>
    );
}
