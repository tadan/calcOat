import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoryblokProvider from "@/components/storyblok/StoryblokProvider";

export const metadata: Metadata = {
  title: "CalcOat - Plant-Based Impact Calculator",
  description:
    "Calculate the environmental impact of switching from dairy to plant-based alternatives. Track carbon, water, and land savings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoryblokProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </StoryblokProvider>
      </body>
    </html>
  );
}
