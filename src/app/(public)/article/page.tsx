import { ArticleCard } from "@/components/home/ArticleCard";

const articles = [
  {
    title: "La réforme de la procédure civile : enjeux et perspectives",
    excerpt: "Analyse approfondie des modifications apportées par le décret du 15 mars 2026...",
    category: "Procédure Civile",
    author: "Kevin DIZO",
    date: "12 Mars 2026",
    readingTime: "8 min",
    slug: "reforme-procedure-civile",
    imageSrc: "/images/1.jpg",
  },
  {
    title: "OHADA : les nouvelles règles sur les sûretés réelles",
    excerpt: "Décryptage des innovations majeures du droit des sûretés dans l'espace OHADA...",
    category: "Droit OHADA",
    author: "Pr. Sophie Martin",
    date: "10 Mars 2026",
    readingTime: "6 min",
    slug: "ohada-suretes-reelles",
    imageSrc: "/images/2.jpg",
  },
  {
    title: "Jurisprudence 2026 en droit immobilier : ce qu'il faut retenir",
    excerpt: "Tour d'horizon des arrêts les plus marquants de la Cour de cassation en matière immobilière...",
    category: "Droit Immobilier",
    author: "Dr. Thomas Dubois",
    date: "8 Mars 2026",
    readingTime: "10 min",
    slug: "jurisprudence-immobilier-2026",
    imageSrc: "/images/3.jpg",
  },
  {
    title: "Le droit des affaires à l'ère du numérique",
    excerpt: "Comment les entreprises doivent adapter leurs pratiques contractuelles face aux nouvelles technologies...",
    category: "Droit des Affaires",
    author: "Me Claire Lefèvre",
    date: "5 Mars 2026",
    readingTime: "7 min",
    slug: "droit-affaires-numerique",
    imageSrc: "/images/4.jpg",
  },
];

export default function ArticlesPage() {
  return (
    <div className="py-16 bg-surface">
      <div className="container-editorial">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-ink mb-2">Articles & Doctrine</h1>
          <div className="h-1 w-20 bg-accent mb-4" />
          <p className="text-lg text-ink-light max-w-2xl">
            Retrouvez toutes nos analyses, fiches doctrinales et ressources juridiques actualisées.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}