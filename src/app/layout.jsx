import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/dist/client/link";
import CartProvider from "@/contexts/CartProvider";
import { Image } from "next/dist/client/image-component";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
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
        <body className={`${poppins.className} antialiased`}>
            <header className="px-5 py-2 flex items-center justify-between gap-5 bg-stone-800">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" className="w-30" width={120} height={30} />
                </Link>

                <div className="space-x-5">
                    <Link className="btn" href="/">Home</Link>
                    <Link prefetch={false} className="btn" href="/foods">Foods</Link>
                    <Link className="btn" href="/reviews">Reviews</Link>
                    <Link className="btn" href="/feedbacks">Feedbacks</Link>
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
