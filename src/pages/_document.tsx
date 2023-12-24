import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html dir="ltr" lang="en">
        <Head>
          {/* Primary Meta Tags*/}
          <meta charSet="utf-8" />
          <meta content="text/html" httpEquiv="content-type" />

          {/* SEO Meta Tags*/}
          <meta content="Silas Henrique Alves Araújo" name="author" />
          <meta
            content="My personal website. Here you will find my resume, contact information and some of my projects"
            name="description"
          />

          {/* Open Graph / Facebook*/}
          <meta content="website" property="og:type" />
          <meta content={process.env.SITE_URL} property="og:url" />
          <meta content="Silas Henrique Website" property="og:title" />
          <meta content={`${process.env.SITE_URL}/card.png`} property="og:image" />
          <meta
            content="icon of an orange dollar sign with dark gray background"
            property="og:image:alt"
          />
          <meta content="en_US" property="og:locale" />
          <meta
            content="My personal website. Here you will find my resume, contact information and some of my projects"
            property="og:description"
          />

          {/* Twitter*/}
          <meta content="summary_large_image" name="twitter:card" />
          <meta content={process.env.SITE_URL} name="twitter:url" />
          <meta content="Silas Henrique Website" name="twitter:title" />
          <meta content={`${process.env.SITE_URL}/card.png`} name="twitter:image" />
          <meta content="@silash35" name="twitter:creator" />
          <meta
            content="My personal website. Here you will find my resume, contact information and some of my projects"
            name="twitter:description"
          />

          {/* Icons*/}
          <link
            href={`${process.env.SITE_URL}/icons/apple-touch-icon.png`}
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href={`${process.env.SITE_URL}/icons/favicon-32x32.png`}
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href={`${process.env.SITE_URL}/icons/favicon-16x16.png`}
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href={`${process.env.SITE_URL}/icons/site.webmanifest`} rel="manifest" />
          <link
            color="#f45d22"
            href={`${process.env.SITE_URL}/icons/safari-pinned-tab.svg`}
            rel="mask-icon"
          />
          <link href={`${process.env.SITE_URL}/icons/favicon.ico`} rel="shortcut icon" />
          <meta content="#da532c" name="msapplication-TileColor" />
          <meta
            content={`${process.env.SITE_URL}/icons/browserconfig.xml`}
            name="msapplication-config"
          />
          <meta content="#121212" name="theme-color" />

          {/* Preload fonts*/}
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/roboto-v29-latin-regular.woff2"
            rel="preload"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/roboto-v29-latin-300.woff2"
            rel="preload"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/roboto-v29-latin-500.woff2"
            rel="preload"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/roboto-v29-latin-700.woff2"
            rel="preload"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
