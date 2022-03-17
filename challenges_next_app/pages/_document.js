import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="description"
            content=" The pages found on this site are individual challenges from them Advent of JS and Advent of CSS - links are found on the homepage"
          />
          <meta
            name="keywords"
            content="Advent of Javascript,Advent of CSS, javascript, css, advent"
          />
          <meta name="author" content="Carl Davidson" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Satisfy&family=Xanh+Mono&display=swap"
            rel="stylesheet"
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

export default MyDocument;
