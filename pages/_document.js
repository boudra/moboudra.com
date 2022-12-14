import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;600&family=Poppins:wght@600;700"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="160x1600"
            href="/favico.png"
          ></link>
          <script
            defer
            data-domain="moboudra.com"
            src="https://plausible.io/js/script.js"
          ></script>
        </Head>
        <body className="font-body text-[#023047] bg-[rgb(238,230,228)]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
