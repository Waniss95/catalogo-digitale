import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
        {/* Puoi anche usare favicon.ico se preferisci */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}