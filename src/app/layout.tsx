import type { Metadata } from "next";
import "./globals.css";
import Providers from "./components/providers";

export const metadata: Metadata = {
    title: "Title",
    description: "Description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="w-screen h-[100dvh] overflow-x-hidden flex">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
