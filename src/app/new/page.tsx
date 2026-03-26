import type { Metadata } from "next";
import { categories } from "@/lib/data";
import { Send, Info, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "新規投稿",
  description: "AIコミュニティに新しいスレッドを投稿しましょう。質問や情報共有したい内容を投稿してください。",
  alternates: {
    canonical: "https://ai-community.jp/new",
  },
};

export default function NewThreadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      {/* Breadcrumb */}
      <nav aria-label="パンくずリスト" className="mb-6 flex items-center gap-1 text-sm text-neutral-500">
        <Link href="/" className="hover:text-indigo-600">
          トップ
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-neutral-900">新規投稿</span>
      </nav>

      <h1 className="text-2xl font-bold text-neutral-900">新規スレッド作成</h1>
      <p className="mt-2 text-sm text-neutral-500">
        質問や情報共有したい内容を投稿してください
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Form */}
        <div className="lg:col-span-2">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-neutral-200/60">
            <div className="space-y-5">
              {/* Category */}
              <div>
                <label htmlFor="category" className="mb-1.5 block text-sm font-medium text-neutral-700">
                  カテゴリ
                </label>
                <select id="category" className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-800 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100">
                  <option value="">カテゴリを選択</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-neutral-700">
                  タイトル
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="質問や話題のタイトルを入力"
                  className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="mb-1.5 block text-sm font-medium text-neutral-700">
                  本文
                </label>
                <textarea
                  id="content"
                  rows={10}
                  placeholder="詳しい内容を入力してください。Markdown記法が使えます。"
                  className="w-full resize-y rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="mb-1.5 block text-sm font-medium text-neutral-700">
                  タグ（カンマ区切り）
                </label>
                <input
                  id="tags"
                  type="text"
                  placeholder="例: ChatGPT, プロンプト, 初心者"
                  className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  <Send className="h-4 w-4" />
                  投稿する
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div>
          <div className="rounded-xl bg-indigo-50 p-5 ring-1 ring-indigo-100">
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700">
              <Info className="h-4 w-4" />
              投稿ガイドライン
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-indigo-600/80">
              <li>
                具体的なタイトルをつけましょう（「教えてください」だけはNG）
              </li>
              <li>
                質問の場合は、試したことや環境情報も書くとスムーズです
              </li>
              <li>回答が得られたら「解決済み」にしましょう</li>
              <li>他のユーザーへの敬意を忘れずに</li>
              <li>宣伝やスパム投稿は削除されます</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
