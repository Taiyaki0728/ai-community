import Link from "next/link";
import {
  categories,
  getLatestThreads,
  getPopularThreads,
  threads,
  replies,
  formatRelativeTime,
  getCategoryById,
} from "@/lib/data";
import {
  MessageCircle,
  Eye,
  ThumbsUp,
  CheckCircle,
  Pin,
  ArrowRight,
  MessagesSquare,
  LayoutGrid,
  Lightbulb,
  MessageSquare,
  Sparkles,
  Gem,
  Image,
  TrendingUp,
  FileText,
  Zap,
  Coffee,
  ExternalLink,
} from "lucide-react";

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

function ThreadRow({ thread }: { thread: (typeof threads)[number] }) {
  const category = getCategoryById(thread.categoryId);
  return (
    <Link
      href={`/thread/${thread.id}`}
      className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-neutral-200/60 transition hover:shadow-md hover:ring-indigo-300"
    >
      <div className="flex-1 min-w-0">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          {thread.isPinned && (
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
              <Pin className="h-3 w-3" />
              ピン留め
            </span>
          )}
          {thread.isSolved && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
              <CheckCircle className="h-3 w-3" />
              解決済み
            </span>
          )}
          {category && (
            <span className="text-xs text-neutral-500">{category.name}</span>
          )}
        </div>
        <h3 className="text-sm font-semibold text-neutral-900 line-clamp-1">
          {thread.title}
        </h3>
        <div className="mt-2 flex items-center gap-3 text-xs text-neutral-500">
          <span>{thread.author}</span>
          <span>{formatRelativeTime(thread.createdAt)}</span>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3 text-xs text-neutral-400">
        <span className="flex items-center gap-1">
          <MessageCircle className="h-3.5 w-3.5" />
          {thread.replyCount}
        </span>
        <span className="flex items-center gap-1">
          <Eye className="h-3.5 w-3.5" />
          {thread.viewCount}
        </span>
        <span className="flex items-center gap-1">
          <ThumbsUp className="h-3.5 w-3.5" />
          {thread.likes}
        </span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const latestThreads = getLatestThreads(5);
  const popularThreads = getPopularThreads(5);
  const totalThreads = threads.length;
  const totalReplies = replies.length;
  const totalCategories = categories.length;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-600 to-indigo-700 pb-16 pt-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AIのわからないを、みんなで解決しよう
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            ChatGPT・Claude・画像生成AI・AI副業まで、
            初心者から上級者まで気軽に質問・情報共有できるコミュニティです。
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/new"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow transition hover:bg-indigo-50"
            >
              <MessagesSquare className="h-4 w-4" />
              新規投稿する
            </Link>
            <Link
              href="/category"
              className="inline-flex items-center gap-2 rounded-lg border border-indigo-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              <LayoutGrid className="h-4 w-4" />
              カテゴリ一覧
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto -mt-8 max-w-5xl px-4">
        <div className="grid grid-cols-3 gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-neutral-200/60">
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">{totalThreads}</p>
            <p className="mt-1 text-xs text-neutral-500">スレッド</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">
              {totalReplies}
            </p>
            <p className="mt-1 text-xs text-neutral-500">回答</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">
              {totalCategories}
            </p>
            <p className="mt-1 text-xs text-neutral-500">カテゴリ</p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto mt-12 max-w-5xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-neutral-900">カテゴリ</h2>
          <Link
            href="/category"
            className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            すべて見る
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-neutral-200/60 transition hover:shadow-md hover:ring-indigo-300"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${cat.color}`}
              >
                {iconMap[cat.icon]}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-neutral-900">
                  {cat.name}
                </h3>
                <p className="mt-0.5 text-xs text-neutral-500 line-clamp-2">
                  {cat.description}
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  {cat.threadCount}件のスレッド
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Threads */}
      <section className="mx-auto mt-12 max-w-5xl px-4">
        <h2 className="mb-6 text-lg font-bold text-neutral-900">
          最新のスレッド
        </h2>
        <div className="space-y-3">
          {latestThreads.map((thread) => (
            <ThreadRow key={thread.id} thread={thread} />
          ))}
        </div>
      </section>

      {/* Popular Threads */}
      <section className="mx-auto mt-12 max-w-5xl px-4">
        <h2 className="mb-6 text-lg font-bold text-neutral-900">
          人気のスレッド
        </h2>
        <div className="space-y-3">
          {popularThreads.map((thread) => (
            <ThreadRow key={thread.id} thread={thread} />
          ))}
        </div>
      </section>

      {/* Sister sites CTA */}
      <section className="mx-auto mt-16 mb-16 max-w-5xl px-4">
        <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-neutral-200/60 text-center">
          <h2 className="text-lg font-bold text-neutral-900">
            姉妹サイトもチェック
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            AI活用をもっと深めたい方はこちらもどうぞ
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://ai-fukugyo-hack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100"
            >
              <TrendingUp className="h-4 w-4" />
              AI副業ハック
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://prompt-jiten.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-5 py-3 text-sm font-medium text-violet-700 transition hover:bg-violet-100"
            >
              <FileText className="h-4 w-4" />
              プロンプト辞典
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
