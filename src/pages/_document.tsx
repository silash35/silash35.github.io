import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html dir="ltr" lang="en">
        <Head>
          {/* Icons*/}
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
          <link
            color="#f45d22"
            href={`${process.env.SITE_URL}/icons/safari-pinned-tab.svg`}
            rel="mask-icon"
          />
          <link href={`${process.env.SITE_URL}/icons/favicon.ico`} rel="shortcut icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
