import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* ここにインラインCSSを追加 */}
          {/* <style>
            {`
              html, body {
                background-color: ${
                  typeof window !== 'undefined' &&
                  localStorage.getItem('DeepL-API_Mode') === 'light'
                    ? '#ffffff'
                    : '#121212'
                };
              }
            `}
          </style> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
