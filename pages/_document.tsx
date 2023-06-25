import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head >
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Playfair+Display:ital,wght@0,400;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.1.0/modern-normalize.min.css" rel="stylesheet" />
        </Head >
      <body>
        <Main />
        {/* Here we will mount our modal portal */}
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  )
}