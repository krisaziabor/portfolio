import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { dev } from '$app/environment';
// import { inject } from '@vercel/analytics';
 
// inject({ mode: dev ? 'development' : 'production' });

const abcdiatype = localFont({
  src: "../../../fonts/ABCDiatypeEdu-Regular.otf",
  variable: "--font-abc-diatype",
  weight: "400",
});

const boldabcdiatype = localFont({
  src: "../../../fonts/ABCDiatypeEdu-Bold.otf",
  variable: "--font-bold-abc-diatype",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Kris Aziabor",
  description: "Creating striking, accessible designs with unconventional & powerful software.",
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
        className={`${abcdiatype.variable} ${boldabcdiatype.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
