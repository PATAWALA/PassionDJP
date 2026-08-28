"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  slug: string;
  imageSrc: string;
}

export function ArticleCard({
  title,
  excerpt,
  category,
  author,
  date,
  readingTime,
  slug,
  imageSrc,
}: ArticleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={`/article/${slug}`}
        className="group relative block overflow-hidden rounded-xl bg-surface border border-border shadow-card hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="relative h-52 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white text-xs bg-black/40 px-2 py-1 rounded-full">
            <Clock className="h-3 w-3" />
            {readingTime}
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-ink-light mb-2">
            <User className="h-3 w-3" />
            <span>{author}</span>
            <span className="mx-1">•</span>
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>

          <h3 className="text-lg font-semibold text-ink group-hover:text-primary transition-colors mb-2 line-clamp-2">
            {title}
          </h3>

          <p className="text-sm text-ink-light line-clamp-2 mb-4">{excerpt}</p>

          <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary-hover">
            Lire l'article
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>

        <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
      </Link>
    </motion.div>
  );
}