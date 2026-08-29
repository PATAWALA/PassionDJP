"use client";

import { useState } from "react";
import { Clock, FileText } from "lucide-react";

interface MediaCardProps {
  title: string;
  youtubeId: string;
  duration: string;
  description?: string;
  transcription?: string;
}

export function MediaCard({ title, youtubeId, duration, description, transcription }: MediaCardProps) {
  const [showTranscription, setShowTranscription] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div className="rounded-xl overflow-hidden bg-surface border border-border shadow-card hover:shadow-2xl transition-shadow">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <Clock className="h-3 w-3" /> {duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-ink">{title}</h3>
        {description && <p className="text-sm text-ink-light mt-1 line-clamp-2">{description}</p>}

        {transcription && (
          <button
            onClick={() => setShowTranscription(!showTranscription)}
            className="mt-3 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            <FileText className="h-4 w-4" />
            {showTranscription ? "Masquer la transcription" : "Voir la transcription"}
          </button>
        )}

        {showTranscription && transcription && (
          <div className="mt-3 p-4 bg-accent-light rounded-md text-sm text-ink-light whitespace-pre-line">
            {transcription}
          </div>
        )}
      </div>
    </div>
  );
}