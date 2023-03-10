import Document, { Html, Head, Main, NextScript } from "next/document";
import { Favicons } from "../src/components";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr" translate="no">
        <Head>
          <Favicons />
        </Head>
        <body className="bg-slate-100 dark:bg-slate-900 transition-all">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
