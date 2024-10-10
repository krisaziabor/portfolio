import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { dev } from '$app/environment';
// import { inject } from '@vercel/analytics';
 
// inject({ mode: dev ? 'development' : 'production' });

const abcdiatype = localFont({
  src: "./fonts/ABCDiatypeEdu-Regular.otf",
  variable: "--font-abc-diatype",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kris Aziabor /// Coming Soon",
  description: "Creating striking, accessible designs with unconventional, yet powerful software. In development.",
  icons: "icon.ico",
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
