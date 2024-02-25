import Document, { Html, Head, Main, NextScript } from 'next/document'

// Web Font
export const WebFont = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        // ↑↓推奨パフォーマンス対策 crossorigin default=anonymous
        crossOrigin="anonymous"
      />
      {/* TODO: fix-lint */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        // INFO: display:swap=フォント読み込み待機時間中は代替フォントで先に表示させる。 他指定："optional"=もし待ってフォントが来なければWebフォント自体を読まない。
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Noto+Sans+JP:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </>
  )
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <WebFont />
          <link rel="icon" href="/favicon.ico" />
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
