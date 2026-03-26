import React from "react";

/**
 * Simple markdown-like text renderer for forum posts.
 * Supports: **bold**, - list items, line breaks
 * No dependencies needed.
 */
export default function MarkdownText({ content }: { content: string }) {
  const lines = content.split("\n");

  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let key = 0;

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${key++}`} className="my-2 ml-4 list-disc space-y-1">
          {listItems}
        </ul>
      );
      listItems = [];
    }
  }

  function renderInline(text: string): React.ReactNode[] {
    const parts: React.ReactNode[] = [];
    const regex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push(
        <strong key={`b-${key++}`} className="font-semibold text-neutral-900">
          {match[1]}
        </strong>
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const itemText = trimmed.slice(2);
      listItems.push(<li key={`li-${key++}`}>{renderInline(itemText)}</li>);
    } else {
      flushList();
      if (trimmed === "") {
        elements.push(<br key={`br-${key++}`} />);
      } else {
        elements.push(
          <p key={`p-${key++}`} className="my-1">
            {renderInline(trimmed)}
          </p>
        );
      }
    }
  }

  flushList();

  return (
    <div className="text-sm leading-relaxed text-neutral-700">{elements}</div>
  );
}
