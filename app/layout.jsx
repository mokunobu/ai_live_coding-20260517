import './globals.css';

export const metadata = {
  title: '株式会社ナレッジグローツリー',
  description:
    'AI導入、研修、業務システムづくりで増えた知識を、現場で使える手順、判断基準、運用ルール、画面へ落とし込む会社です。',
  openGraph: {
    title: '株式会社ナレッジグローツリー',
    description:
      '知識は増えた。仕事は、まだ変わらない。ナレッジグローツリーは、知識を現場で使える仕組みに整えます。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
