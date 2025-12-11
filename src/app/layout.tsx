import type { Metadata } from "next";
import { montserrat, inter } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { siteConfig } from "@/data/siteConfig";
import { GoogleAnalytics } from "@next/third-parties/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "landscaping Katy TX",
    "lawn care Richmond TX",
    "lawn service Fulshear",
    "tree trimming West Houston",
    "sprinkler repair Katy",
    "Christmas lights installation Houston",
    "garden maintenance Cinco Ranch",
    "landscaping near me",
  ],
  authors: [{ name: siteConfig.name }],
  // Next.js 13+ automatically detects icon.png, icon.ico, or favicon.ico in the app directory
  // Additional icons can be added here if needed for specific platforms
  icons: {
    icon: "/icon.png", // Next.js will auto-detect icon.png from app directory
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "en_US",
    type: "website",
  },
  other: {
    "msapplication-TileColor": "#1a5d2e",
    "msapplication-TileImage": "/mstile-144x144.png",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#1a5d2e",
    "google-site-verification": "MtzQRNnHdxWgDyuuAp3EZGmDqoqk9vNSpRYOMLheF-M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Preload critical CSS */}
        <link
          rel="preload"
          href="/fonts/montserrat-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                     bg-brand-green-primary text-white px-4 py-2 rounded z-[100]"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content">{children}</main>

        <Footer />

        <FloatingCallButton />

        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-BLTMR50BSM" />
    </html>
  );
}
