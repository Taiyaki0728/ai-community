import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-6xl font-bold text-indigo-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-neutral-900">
        ページが見つかりません
      </h1>
      <p className="mt-3 text-sm text-neutral-500">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          <Home className="h-4 w-4" />
          トップに戻る
        </Link>
        <Link
          href="/category"
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
        >
          <ArrowLeft className="h-4 w-4" />
          カテゴリ一覧
        </Link>
      </div>
    </div>
  );
}
