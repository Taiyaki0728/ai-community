"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MessagesSquare,
  Menu,
  X,
  Home,
  LayoutGrid,
  PenSquare,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "トップ", icon: Home },
  { href: "/category", label: "カテゴリ", icon: LayoutGrid },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-indigo-600"
        >
          <MessagesSquare className="h-6 w-6" />
          <span>AIコミュニティ</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
          <Link
            href="/new"
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <PenSquare className="h-4 w-4" />
            新規投稿
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-neutral-600 transition hover:bg-neutral-100 md:hidden"
          aria-label="メニュー"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <nav className="mx-auto max-w-5xl space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-neutral-600 transition hover:bg-neutral-100"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
            <Link
              href="/new"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <PenSquare className="h-4 w-4" />
              新規投稿
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
