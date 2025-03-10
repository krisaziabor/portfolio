import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { dev } from '$app/environment';
// import { inject } from '@vercel/analytics';
 
// inject({ mode: dev ? 'development' : 'production' });

const semidiatype = localFont({
  src: "../../../fonts/ABCDiatypeSemi-MonoEdu-Regular.otf",
  variable: "--font-semi-diatype",
  weight: "400",
});

const boldsemidiatype = localFont({
  src: "../../../fonts/ABCDiatypeSemi-MonoEdu-Bold.otf",
  variable: "--font-bold-semi-diatype",
  weight: "700",
});

const boldfragment = localFont({
  src: "../../../fonts/PPFragment-TextBold.otf",
  variable: "--font-bold-fragment",
  weight: "700",
});

const fragmentsans = localFont({
  src: "../../../fonts/PPFragment-SansRegular.otf",
  variable: "--font-fragment-sans",
  weight: "400",
});

const italicfragmentsans = localFont({
  src: "../../../fonts/PPFragment-SansRegularitalic.otf",
  variable: "--font-italic-fragment-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kris Aziabor",
  description: "Atteh Kojo. Collective memories and knowledge above all else.",
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
        className={`${semidiatype.variable} ${boldsemidiatype.variable} ${boldfragment.variable} ${fragmentsans.variable} ${italicfragmentsans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
