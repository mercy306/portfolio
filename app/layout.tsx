import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mihiret Tsegaye Legesse - Full Stack Developer",
  description: "Junior IT Professional & Front-end Developer specializing in React, Next.js, and modern web technologies. Based in Addis Ababa, Ethiopia.",
  keywords: ["Mihiret Tsegaye", "Full Stack Developer", "Front-end Developer", "React Developer", "Next.js", "Ethiopia"],
  authors: [{ name: "Mihiret Tsegaye Legesse" }],
  openGraph: {
    title: "Mihiret Tsegaye Legesse - Full Stack Developer",
    description: "Junior IT Professional & Front-end Developer specializing in React, Next.js, and modern web technologies.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
