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
      "Network Automation & IT Infrastructure Consulting | Agam Technology",
    template: "%s | Agam Technology",
  },

  description:
    "Agam Technology provides network automation, enterprise networking, Cisco ACI, SD-WAN, cloud, data center and cybersecurity consulting for modern businesses.",

  keywords: [
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
      "Network Automation & IT Infrastructure Consulting | Agam Technology",
    description:
      "Enterprise networking, network automation, Cisco ACI, SD-WAN, cloud, data center and cybersecurity consulting.",
    url: "https://www.agamtechnology.com",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology - Network Automation and IT Infrastructure Consulting",
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
