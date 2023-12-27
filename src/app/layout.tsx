import "@/styles/globals.scss";

import { Viewport } from "next";
export const viewport: Viewport = {
  themeColor: "#121212",
};

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

import { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Silas Henrique", default: "Silas Henrique" },
  description:
    "Silas Henrique, Electromechanical Technician, developer and Engineering student. Explore my resume, contacts, projects and more.",
  authors: [{ name: "Silas Henrique Alves Araújo" }],
  metadataBase: new URL(process.env.SITE_URL as string),

  twitter: {
    creator: "@silash35",
  },
  openGraph: {
    url: process.env.SITE_URL,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/card.png",
        width: 1200,
        height: 628,
        alt: "icon of an orange dollar sign with dark gray background",
      },
    ],
  },
  icons: {
    shortcut: `${process.env.SITE_URL}/favicon.ico`,
    other: {
      rel: "mask-icon",
      color: "#f45d22",
      url: `${process.env.SITE_URL}/icons/safari-pinned-tab.svg`,
    },
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html className={roboto.className} dir="ltr" lang="en">
    <head>
      <meta content="text/html" httpEquiv="content-type" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
