import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://www.agamtechnology.com"),

  title: {
    default: "Agam Technology | Network Automation & Infrastructure Consulting",
    template: "%s | Agam Technology",
  },

  description:
    "Agam Technology provides enterprise networking, network automation, SD-WAN, Cisco ACI, cloud and IT infrastructure solutions for modern businesses.",

  keywords: [
    "Agam Technology",
    "network automation",
    "networking solutions",
    "Cisco ACI",
    "SD-WAN",
    "network infrastructure",
    "IT infrastructure",
    "cloud networking",
    "Cisco networking",
    "network security",
  ],
  openGraph: {
  title: "Agam Technology | Network Automation & Infrastructure Consulting",
  description:
    "Automating Networks. Empowering Businesses.",
  url: "https://www.agamtechnology.com",
  siteName: "Agam Technology",
  type: "website",
  images: [
    {
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "Agam Technology - Network Automation & Infrastructure Consulting",
    },
  ],
},

  authors: [{ name: "Agam Technology" }],
  creator: "Agam Technology",
  publisher: "Agam Technology",

  alternates: {
    canonical: "https://www.agamtechnology.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}