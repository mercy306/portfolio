import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mihiret Tsegaye Legesse - Full Stack Developer",
  description:
    "Junior IT Professional & Front-end Developer specializing in React, Next.js, and modern web technologies. Based in Addis Ababa, Ethiopia.",
  keywords: [
    "Mihiret Tsegaye",
    "Full Stack Developer",
    "Front-end Developer",
    "React Developer",
    "Next.js",
    "Ethiopia",
  ],
  authors: [{ name: "Mihiret Tsegaye Legesse" }],
  openGraph: {
    title: "Mihiret Tsegaye Legesse - Full Stack Developer",
    description:
      "Junior IT Professional & Front-end Developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
