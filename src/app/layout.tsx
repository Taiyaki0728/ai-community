import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AIコミュニティ - AIのわからないを、みんなで解決",
    template: "%s | AIコミュニティ",
  },
  description:
    "AIに関する質問・情報共有のコミュニティフォーラム。ChatGPT、Claude、画像生成AI、AI副業など幅広いトピックを扱っています。",
  metadataBase: new URL("https://ai-community.jp"),
  alternates: {
    canonical: "https://ai-community.jp",
  },
  openGraph: {
    title: "AIコミュニティ - AIのわからないを、みんなで解決",
    description:
      "AIに関する質問・情報共有のコミュニティフォーラム。ChatGPT、Claude、画像生成AI、AI副業など幅広いトピックを扱っています。",
    url: "https://ai-community.jp",
    siteName: "AIコミュニティ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIコミュニティ - AIのわからないを、みんなで解決",
    description:
      "AIに関する質問・情報共有のコミュニティフォーラム。ChatGPT、Claude、画像生成AI、AI副業など幅広いトピックを扱っています。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`min-h-screen bg-neutral-50 text-neutral-800 antialiased ${notoSansJP.className}`}>
        <Header />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
