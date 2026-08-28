import { HeroSection } from "@/components/home/HeroSection";
import { ArticleCard } from "@/components/home/ArticleCard";
import { MediaSection } from "@/components/home/MediaSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { PracticeAreasSection } from "@/components/home/PracticeAreasSection";


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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PracticeAreasSection />
  <section className="py-16 bg-surface">
  <div className="container-editorial">
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-ink mb-3">Dernières Analyses & Doctrine</h2>
      <p className="text-lg text-ink-light max-w-2xl">
        Retrouvez des analyses pointues et des ressources doctrinales actualisées, rédigées par des
        experts en procédure civile, droit OHADA, immobilier et affaires. De quoi nourrir vos
        recherches et rester à jour.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.slug} {...article} />
      ))}
    </div>
  </div>
</section>
      <MediaSection />
      <NewsletterSection />
    </>
  );
}