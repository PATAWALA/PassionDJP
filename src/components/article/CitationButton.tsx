"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CitationButtonProps {
  citation: string;
  format: "APA" | "Bluebook";
}

export function CitationButton({ citation, format }: CitationButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm text-ink-light hover:text-accent hover:border-accent transition-colors"
    >
      {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copié !" : `Citation ${format}`}
    </button>
  );
}