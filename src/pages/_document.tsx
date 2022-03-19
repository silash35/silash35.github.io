import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          {/* Primary Meta Tags*/}
          <meta charSet="utf-8" />
          <meta httpEquiv="content-type" content="text/html" />

          {/* SEO Meta Tags*/}
          <meta name="author" content="Silas Henrique Alves Araújo" />
          <meta name="description" content="My personal website. Here you will find my resume, contact information and some of my projects" />

          {/* Open Graph / Facebook*/}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://silash35.github.io/" />
          <meta property="og:title" content="Silas Henrique Website" />
          <meta property="og:image" content="https://silash35.github.io/card.png" />
          <meta property="og:image:alt" content="icon of an orange dollar sign with dark gray background" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:description" content="My personal website. Here you will find my resume, contact information and some of my projects" />

          {/* Twitter*/}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://silash35.github.io/" />
          <meta name="twitter:title" content="Silas Henrique Website" />
          <meta name="twitter:image" content="https://silash35.github.io/card.png" />
          <meta name="twitter:creator" content="@silash35" />
          <meta name="twitter:description" content="My personal website. Here you will find my resume, contact information and some of my projects" />

          {/* Icons*/}
          <link rel="apple-touch-icon" sizes="180x180" href="https://silash35.github.io/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://silash35.github.io/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://silash35.github.io/icons/favicon-16x16.png" />
          <link rel="manifest" href="https://silash35.github.io/icons/site.webmanifest" />
          <link rel="mask-icon" href="https://silash35.github.io/icons/safari-pinned-tab.svg" color="#f45d22" />
          <link rel="shortcut icon" href="https://silash35.github.io/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="https://silash35.github.io/icons/browserconfig.xml" />
          <meta name="theme-color" content="#121212" />

          {/* Preload fonts*/}
          <link rel="preload" href="./resources/fonts/roboto-v29-latin-regular.woff2" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="./resources/fonts/roboto-v29-latin-300.woff2" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="./resources/fonts/roboto-v29-latin-500.woff2" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="./resources/fonts/roboto-v29-latin-700.woff2" as="font" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
