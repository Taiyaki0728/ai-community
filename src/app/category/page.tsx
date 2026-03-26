import Link from "next/link";
import type { Metadata } from "next";
import { categories } from "@/lib/data";
import {
  Lightbulb,
  MessageSquare,
  Sparkles,
  Gem,
  Image,
  TrendingUp,
  FileText,
  Zap,
  Coffee,
} from "lucide-react";

export const metadata: Metadata = {
  title: "カテゴリ一覧",
  description:
    "AIコミュニティのカテゴリ一覧。ChatGPT、Claude、Gemini、画像生成AI、AI副業、プロンプト共有など9つのカテゴリからスレッドを探せます。",
  alternates: {
    canonical: "https://ai-community.jp/category",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="h-6 w-6" />,
  MessageSquare: <MessageSquare className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Gem: <Gem className="h-6 w-6" />,
  Image: <Image className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  FileText: <FileText className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
  Coffee: <Coffee className="h-6 w-6" />,
};

export default function CategoryListPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold text-neutral-900">カテゴリ一覧</h1>
      <p className="mt-2 text-sm text-neutral-500">
        興味のあるカテゴリを選んでスレッドを探してみましょう
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-neutral-200/60 transition hover:shadow-md hover:ring-indigo-300"
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${cat.color}`}
            >
              {iconMap[cat.icon]}
            </div>
            <div className="min-w-0">
              <h2 className="text-base font-semibold text-neutral-900">
                {cat.name}
              </h2>
              <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
                {cat.description}
              </p>
              <p className="mt-2 text-xs text-neutral-400">
                {cat.threadCount}件のスレッド
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
