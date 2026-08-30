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
    default:
      "AI & Network Automation | Enterprise IT Infrastructure | Agam Technology",
    template: "%s | Agam Technology",
  },

  description:
    "Agam Technology provides AI solutions, AI infrastructure, AIOps, network automation, enterprise networking, cloud, data center and cybersecurity services for modern businesses.",

  keywords: [
    "AI solutions",
    "AI infrastructure",
    "AIOps",
    "AI network automation",
    "enterprise generative AI",
    "network automation",
    "network automation services",
    "enterprise networking",
    "enterprise network consulting",
    "IT infrastructure consulting",
    "Cisco ACI consulting",
    "Cisco networking",
    "SD-WAN services",
    "data center consulting",
    "cloud consulting",
    "cyber security services",
    "IT consulting",
    "network consultant India",
    "IT infrastructure services",
  ],

  openGraph: {
    title:
      "AI & Network Automation | Enterprise IT Infrastructure | Agam Technology",
    description:
      "AI solutions, AI infrastructure, AIOps, network automation, enterprise networking, cloud, data center and cybersecurity services.",
    url: "https://www.agamtechnology.com",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology - AI and Network Automation Services",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
