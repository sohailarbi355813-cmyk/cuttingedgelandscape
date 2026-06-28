import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cutting Edge Landscaping | Toronto's Premier Landscape Company",
  description:
    "Cutting Edge Landscaping has provided premium landscape construction and maintenance services to the greater Toronto, Ontario, since 2004.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#FAFAF8] font-[family-name:var(--font-sans)] text-[#0D2418] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
