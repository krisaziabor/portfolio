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

const boldfragment = localFont({
  src: "../../../fonts/PPFragment-TextBold.otf",
  variable: "--font-bold-fragment",
  weight: "700",
});

const italicfragment = localFont({
  src: "../../../fonts/PPFragment-GlareRegularItalic.otf",
  variable: "--font-italic-fragment",
  weight: "400",
});

const fragment = localFont({
  src: "../../../fonts/PPFragment-GlareRegular.otf",
  variable: "--font-fragment",
  weight: "400",
});

export const metadata: Metadata = {
  title: "On the way - Kris Aziabor",
  description: "Currently cooking up the second edition of my personal website.",
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
        className={`${abcdiatype.variable} ${boldabcdiatype.variable} ${boldfragment.variable} ${fragment.variable} ${italicfragment.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
