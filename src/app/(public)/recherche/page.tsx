"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ArticleCard } from "@/components/home/ArticleCard";
import { Search } from "lucide-react";

// Données factices pour démonstration
const results = [
  {
    title: "La réforme de la procédure civile : enjeux et perspectives",
    excerpt: "Analyse approfondie des modifications apportées par le décret du 15 mars 2026...",
    category: "Procédure Civile",
    author: "Pr. Abdoulaye Patawala",
    date: "12 Mars 2026",
    readingTime: "8 min",
    slug: "reforme-procedure-civile",
  },
  {
    title: "OHADA : les nouvelles règles sur les sûretés réelles",
    excerpt: "Décryptage des innovations majeures du droit des sûretés dans l'espace OHADA...",
    category: "Droit OHADA",
    author: "Dr. Marie Koné",
    date: "10 Mars 2026",
    readingTime: "6 min",
    slug: "ohada-suretes-reelles",
  },
  {
    title: "Jurisprudence 2026 en droit immobilier : ce qu'il faut retenir",
    excerpt: "Tour d'horizon des arrêts les plus marquants de la Cour de cassation en matière immobilière...",
    category: "Droit Immobilier",
    author: "Me Jean-Louis Lobe",
    date: "8 Mars 2026",
    readingTime: "10 min",
    slug: "jurisprudence-immobilier-2026",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = results.filter(
    (article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="py-12">
      <div className="container-editorial">
        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-8">Recherche doctrinale</h1>
        <div className="flex gap-2 mb-10 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-ink-light" />
            <Input
              placeholder="Rechercher un thème, un mot-clé..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button>Rechercher</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink-light py-12">Aucun résultat pour cette recherche.</p>
        )}
      </div>
    </div>
  );
}