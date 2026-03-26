import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  threads,
  getThreadById,
  getRepliesByThread,
  getCategoryById,
  formatRelativeTime,
} from "@/lib/data";
import {
  ChevronRight,
  ThumbsUp,
  CheckCircle,
  Pin,
  Award,
  MessageCircle,
  Eye,
  Send,
  Tag,
} from "lucide-react";
import MarkdownText from "@/components/MarkdownText";

export function generateStaticParams() {
  return threads.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const thread = getThreadById(id);
  if (!thread) return { title: "スレッドが見つかりません" };
  const category = getCategoryById(thread.categoryId);
  const description = thread.content.slice(0, 120);
  return {
    title: thread.title,
    description,
    alternates: {
      canonical: `https://ai-community.jp/thread/${thread.id}`,
    },
    openGraph: {
      title: thread.title,
      description,
      url: `https://ai-community.jp/thread/${thread.id}`,
      siteName: "AIコミュニティ",
      locale: "ja_JP",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: thread.title,
      description,
    },
    other: {
      "article:section": category?.name ?? "",
      "article:published_time": thread.createdAt,
      "article:tag": thread.tags.join(","),
    },
  };
}

export default async function ThreadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const thread = getThreadById(id);
  if (!thread) notFound();

  const replies = getRepliesByThread(id);
  const category = getCategoryById(thread.categoryId);

  const bestAnswer = replies.find((r) => r.isBestAnswer);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DiscussionForumPosting",
    headline: thread.title,
    text: thread.content,
    author: {
      "@type": "Person",
      name: thread.author,
    },
    datePublished: thread.createdAt,
    url: `https://ai-community.jp/thread/${thread.id}`,
    interactionStatistic: [
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/LikeAction",
        userInteractionCount: thread.likes,
      },
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/CommentAction",
        userInteractionCount: thread.replyCount,
      },
    ],
    ...(bestAnswer
      ? {
          acceptedAnswer: {
            "@type": "Answer",
            text: bestAnswer.content,
            author: { "@type": "Person", name: bestAnswer.author },
            datePublished: bestAnswer.createdAt,
            upvoteCount: bestAnswer.likes,
          },
        }
      : {}),
    comment: replies.map((r) => ({
      "@type": "Comment",
      text: r.content,
      author: { "@type": "Person", name: r.author },
      datePublished: r.createdAt,
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <nav aria-label="パンくずリスト" className="mb-6 flex items-center gap-1 text-sm text-neutral-500">
        <Link href="/" className="hover:text-indigo-600">
          トップ
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        {category && (
          <>
            <Link
              href={`/category/${category.id}`}
              className="hover:text-indigo-600"
            >
              {category.name}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
          </>
        )}
        <span className="text-neutral-900 line-clamp-1">{thread.title}</span>
      </nav>

      {/* Thread */}
      <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-neutral-200/60">
        <div className="mb-3 flex flex-wrap items-center gap-2">
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
        <h1 className="text-xl font-bold text-neutral-900">{thread.title}</h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-neutral-500">
          <span className="font-medium text-neutral-700">{thread.author}</span>
          <span>{formatRelativeTime(thread.createdAt)}</span>
        </div>

        <div className="mt-5">
          <MarkdownText content={thread.content} />
        </div>

        {/* Tags */}
        {thread.tags.length > 0 && (
          <div className="mt-5 flex items-center gap-2 border-t border-neutral-100 pt-4">
            <Tag className="h-3.5 w-3.5 text-neutral-400" />
            {thread.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-4 flex items-center gap-4 border-t border-neutral-100 pt-4 text-sm text-neutral-500">
          <span className="flex items-center gap-1.5">
            <ThumbsUp className="h-4 w-4" />
            {thread.likes}
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="h-4 w-4" />
            {thread.replyCount}件の返信
          </span>
          <span className="flex items-center gap-1.5">
            <Eye className="h-4 w-4" />
            {thread.viewCount}
          </span>
        </div>
      </article>

      {/* Replies */}
      <section className="mt-8">
        <h2 className="mb-4 text-base font-bold text-neutral-900">
          返信 ({replies.length}件)
        </h2>
        <div className="space-y-4">
          {replies.map((reply) => (
            <div
              key={reply.id}
              className={`rounded-xl bg-white p-5 shadow-sm ring-1 transition ${
                reply.isBestAnswer
                  ? "ring-emerald-300 bg-emerald-50/30"
                  : "ring-neutral-200/60"
              }`}
            >
              {reply.isBestAnswer && (
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <Award className="h-3.5 w-3.5" />
                  ベストアンサー
                </div>
              )}
              <div className="flex items-center gap-3 text-sm">
                <span className="font-medium text-neutral-700">
                  {reply.author}
                </span>
                <span className="text-neutral-400">
                  {formatRelativeTime(reply.createdAt)}
                </span>
              </div>
              <div className="mt-3">
                <MarkdownText content={reply.content} />
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-sm text-neutral-400">
                <ThumbsUp className="h-3.5 w-3.5" />
                {reply.likes}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reply form */}
      <section className="mt-8 rounded-xl bg-white p-6 shadow-sm ring-1 ring-neutral-200/60">
        <h2 className="mb-4 text-base font-bold text-neutral-900">
          <label htmlFor="reply-content">返信を投稿</label>
        </h2>
        <div>
          <textarea
            id="reply-content"
            rows={5}
            placeholder="返信を入力してください..."
            className="w-full resize-y rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <Send className="h-4 w-4" />
              返信する
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
