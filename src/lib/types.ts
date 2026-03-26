export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string; // lucide icon name
  color: string; // tailwind color class
  threadCount: number;
  latestActivity: string; // ISO date
};

export type Thread = {
  id: string;
  categoryId: string;
  title: string;
  author: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  replyCount: number;
  viewCount: number;
  likes: number;
  isPinned?: boolean;
  isSolved?: boolean;
  tags: string[];
};

export type Reply = {
  id: string;
  threadId: string;
  author: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  likes: number;
  isBestAnswer?: boolean;
};
