import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "GVT Enterprises Inc. | Solutions, Driven by Passion",
    template: "%s | GVT Enterprises Inc.",
  },
  description:
    "Vektor industrial, automotive and grease lubricants, IT software, hardware and network solutions, and premium appliances for businesses across the Philippines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <UtilityBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
