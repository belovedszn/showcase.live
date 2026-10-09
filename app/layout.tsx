import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"], variable: "--font-inter", display: "swap" });
export const metadata: Metadata = { title: "Kora | Where Africa's creators go live", description: "Early-stage product concept: a livestreaming home for African creators. Interactive prototype." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={inter.variable}><body>{children}</body></html>;
}
