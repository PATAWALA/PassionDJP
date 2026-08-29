import { CitationButton } from "@/components/article/CitationButton";
import { LegalDisclaimer } from "@/components/article/LegalDisclaimer";
import { ConversionBanner } from "@/components/article/ConversionBanner";
import { Calendar, Clock, User } from "lucide-react";

const article = {
  title: "La réforme de la procédure civile : enjeux et perspectives",
  excerpt: "Analyse approfondie des modifications apportées par le décret du 15 mars 2026.",
  content: `
    <h2>Introduction</h2>
    <p>La procédure civile connaît une mutation profonde. Le décret du 15 mars 2026 introduit des changements majeurs visant à simplifier et accélérer le traitement des litiges.</p>
    <h2>I. Les principaux apports du décret</h2>
    <p>Le texte réforme en profondeur la mise en état, les délais de procédure et les modes alternatifs de résolution des différends.</p>
    <blockquote>« La justice doit être rendue dans un délai raisonnable, tout en préservant les droits de la défense. »</blockquote>
    <h2>II. Conséquences pratiques pour les praticiens</h2>
    <p>Les avocats doivent adapter leurs stratégies contentieuses. La digitalisation des actes impose de nouvelles compétences.</p>
  `,
  author: "Kevin DIZO",
  date: "12 Mars 2026",
  readingTime: "8 min",
  category: "Procédure Civile",
  tags: ["Procédure civile", "Réforme", "Décret 2026"],
  citationAPA: "DIZO, K. (2026). La réforme de la procédure civile : enjeux et perspectives. PassionDJP. https://passiondjp.com/article/reforme-procedure-civile",
  citationBluebook: "Kevin DIZO, La réforme de la procédure civile : enjeux et perspectives, PassionDJP (Mar. 12, 2026), https://passiondjp.com/article/reforme-procedure-civile.",
};

export default function ArticlePage() {
  return (
    <article className="py-12">
      <div className="container-editorial max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium text-accent bg-accent-light px-2 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-ink-light flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {article.date}
            </span>
            <span className="text-sm text-ink-light flex items-center gap-1">
              <Clock className="h-4 w-4" /> {article.readingTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">{article.title}</h1>
          <p className="text-lg text-ink-light mb-6">{article.excerpt}</p>
          <div className="flex items-center gap-2 text-sm text-ink-light">
            <User className="h-4 w-4" />
            <span>Par <strong className="text-ink">{article.author}</strong></span>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <CitationButton citation={article.citationAPA} format="APA" />
          <CitationButton citation={article.citationBluebook} format="Bluebook" />
        </div>

        <div className="prose-legal" dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs text-ink-light bg-surface border border-border px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        <LegalDisclaimer />
        <ConversionBanner />
      </div>
    </article>
  );
}