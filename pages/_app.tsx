import "../src/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import * as gtag from "../google";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

import "@uiw/react-textarea-code-editor/dist.css";
import "react-medium-image-zoom/dist/styles.css";
import { Footer, Favicons } from "../src/components";

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const env = process.env.NODE_ENV;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted && env === "development") return null;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google" content="notranslate" />
      </Head>

      {env !== "development" ? (
        <>
          <Script
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${gtag.GA_ADSENSE_ID}`}
            crossOrigin="anonymous"
          ></Script>
          {/* Google tag (gtag.js) */}
          <Script
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          ></Script>
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gtag.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
            }}
          />
        </>
      ) : null}
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
