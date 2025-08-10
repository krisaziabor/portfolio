import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const albragrotesk = localFont({
  src: "../../../fonts/AlbraGrotesk-Regular.otf",
  variable: "--font-albragrotesk",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krisaziabor.com"),
  title: "Kris Aziabor",
  description:
    "Creating striking, accessible software with unconventional & powerful design.",
  icons: "icon-2.ico",

  // This is where you can add your Open Graph details:
  openGraph: {
    title: "Kris Aziabor",
    description:
      "Creating striking, accessible software with unconventional & powerful design.",
    url: "https://krisaziabor.com",
    siteName: "Kris Aziabor",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // And here are Twitter-specific tags (many platforms also read them):
  twitter: {
    card: "summary_large_image",
    title: "Kris Aziabor",
    description:
      "Creating striking, accessible software with unconventional & powerful design.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albragrotesk.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
