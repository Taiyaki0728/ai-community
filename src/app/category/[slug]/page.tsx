import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategoryById, getThreadsByCategory, formatRelativeTime } from "@/lib/data";
import {
  MessageCircle,
  Eye,
  ThumbsUp,
  CheckCircle,
  Pin,
  ChevronRight,
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

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryById(slug);
  if (!category) return { title: "カテゴリが見つかりません" };
  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `https://ai-community.jp/category/${slug}`,
    },
    openGraph: {
      title: `${category.name} | AIコミュニティ`,
      description: category.description,
      url: `https://ai-community.jp/category/${slug}`,
      siteName: "AIコミュニティ",
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryById(slug);
  if (!category) notFound();

  const threads = getThreadsByCategory(slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Breadcrumb */}
      <nav aria-label="パンくずリスト" className="mb-6 flex items-center gap-1 text-sm text-neutral-500">
        <Link href="/" className="hover:text-indigo-600">
          トップ
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/category" className="hover:text-indigo-600">
          カテゴリ
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-neutral-900">{category.name}</span>
      </nav>

      {/* Category header */}
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${category.color}`}
        >
          {iconMap[category.icon]}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">
            {category.name}
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            {category.description}
          </p>
        </div>
      </div>

      {/* Thread list */}
      <div className="mt-8 space-y-3">
        {threads.length === 0 && (
          <p className="text-sm text-neutral-500">
            まだスレッドがありません。最初の投稿をしてみましょう。
          </p>
        )}
        {threads.map((thread) => (
          <Link
            key={thread.id}
            href={`/thread/${thread.id}`}
            className="block rounded-xl bg-white p-5 shadow-sm ring-1 ring-neutral-200/60 transition hover:shadow-md hover:ring-indigo-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
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
                </div>
                <h2 className="text-sm font-semibold text-neutral-900">
                  {thread.title}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {thread.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-3 text-xs text-neutral-500">
                  <span>{thread.author}</span>
                  <span>{formatRelativeTime(thread.createdAt)}</span>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1 text-xs text-neutral-400">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
