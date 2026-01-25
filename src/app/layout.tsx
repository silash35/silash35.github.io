import "@/styles/globals.scss";

import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "black",
};

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

import { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Silas Henrique", default: "Silas Henrique" },
  description:
    "Silas Henrique is a Control and Automation Engineering student and software developer. Explore his portfolio, resume, and contact information.",
  authors: [{ name: "Silas Henrique Alves Araújo" }],
  metadataBase: new URL(process.env.SITE_URL as string),
  twitter: {
    title: "Silas Henrique’s Website",
    card: "summary_large_image",
    creator: "@silash35",
  },
  openGraph: {
    title: "Silas Henrique’s Website",
    url: process.env.SITE_URL,
    type: "website",
    locale: "en_US",
  },
  icons: {
    shortcut: "/favicon.ico",
    other: {
      rel: "mask-icon",
      url: "/icons/safari-pinned-tab.svg",
      color: "#f45d22",
    },
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html className={ubuntu.className} dir="ltr" lang="en">
    <head>
      <meta content="text/html" httpEquiv="content-type" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
