import Link from "next/link";
import { categories } from "@/lib/data";
import {
  MessagesSquare,
  Mail,
  ExternalLink,
  TrendingUp,
  FileText,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-indigo-600"
            >
              <MessagesSquare className="h-5 w-5" />
              AIコミュニティ
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              AIに関する疑問や情報を共有するコミュニティフォーラム。
              初心者から上級者まで、気軽に参加できます。
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              カテゴリ
            </h3>
            <ul className="mt-3 space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.id}`}
                    className="text-sm text-neutral-500 transition hover:text-indigo-600"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sister Sites */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              姉妹サイト
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://ai-fukugyo-hack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-emerald-600"
                >
                  <TrendingUp className="h-3.5 w-3.5" />
                  AI副業ハック
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://prompt-jiten.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-violet-600"
                >
                  <FileText className="h-3.5 w-3.5" />
                  プロンプト辞典
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              お問い合わせ
            </h3>
            <div className="mt-3">
              <a
                href="mailto:supertaiyaki0141@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-indigo-600"
              >
                <Mail className="h-3.5 w-3.5" />
                supertaiyaki0141@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-100 pt-6 text-center text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} AIコミュニティ. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
