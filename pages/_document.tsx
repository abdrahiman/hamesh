import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

const isProduction = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {isProduction && (
            <>
              <script type="text/javascript"
                dangerouslySetInnerHTML={{__html:`
                	atOptions = {
		'key' : '7c99d15f4cdaee69c28449077771196d',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};`}}></script>
	<script type="text/javascript">
	atOptions = {
		'key' : 'b49ae898b3e3bd4df02e63a59c33ed33',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};</script>
              <script type='text/javascript' async src='//pl23424574.highcpmgate.com/f1/bc/c0/f1bcc056105789d5a8d48c33abf93c75.js'></script>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
