import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const abcdiatype = localFont({
  src: "./fonts/ABCDiatypeEdu-Regular.otf",
  variable: "--font-abc-diatype",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kris Aziabor | Coming Soon",
  description: "Full site is in development...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${abcdiatype.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
