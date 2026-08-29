import Image from "next/image";
import { Scale, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-16 bg-background">
      <div className="container-editorial">
        {/* En-tête */}
        <div className="text-center md:text-left mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-2">À propos de PassionDJP</h1>
          <div className="h-1 w-20 bg-accent mb-4 md:mx-0 mx-auto" />
          <p className="text-lg text-ink-light max-w-2xl md:mx-0 mx-auto">
            Une plateforme dédiée à la diffusion d'une doctrine juridique fiable et actualisée,
            fondée par Kevin DIZO.
          </p>
        </div>

        {/* Section mission + photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo */}
          <div className="relative max-w-sm mx-auto md:mx-0">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/kevin-dizo.jpeg"
                alt="Kevin DIZO, fondateur de PassionDJP"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge avec statut */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-xs bg-accent text-white px-4 py-3 rounded-xl text-center shadow-lg">
              <p className="font-semibold text-sm">Kevin DIZO</p>
              <p className="text-xs text-white/90 mt-0.5">
                Docteur en Droit Privé et Sciences criminelles — ATER à Paris 10 Nanterre
              </p>
            </div>
          </div>

          {/* Texte */}
          <div>
            <h2 className="text-3xl font-bold text-ink mb-2">Notre mission</h2>
            <div className="h-1 w-16 bg-accent mb-4" />
            <p className="text-ink-light mb-6">
              PassionDJP centralise les analyses, transcriptions et ressources en procédure civile,
              droit OHADA, immobilier et affaires. L'objectif est d'offrir aux étudiants,
              chercheurs et praticiens un accès unique à une doctrine moderne, évitant les sources
              obsolètes et dispersées.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-ink-light">Des contenus rédigés par des experts reconnus.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-ink-light">Une mise à jour régulière des jurisprudences et réformes.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-ink-light">Un espace contributeur pour favoriser le partage de connaissances.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Citation / Valeurs */}
        <div className="bg-surface border border-border rounded-xl p-8 mb-16">
          <blockquote className="text-xl italic text-ink-light text-center">
            « Construire une autorité de la connaissance juridique accessible à tous. »
          </blockquote>
          <p className="text-center text-sm text-ink-light mt-4">— Kevin DIZO, fondateur</p>
        </div>

        {/* Domaines couverts (rappel) */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-ink mb-2">Nos domaines d'expertise</h2>
          <div className="h-1 w-20 bg-accent mb-6 md:mx-0 mx-auto" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Procédure Civile",
              "Droit OHADA",
              "Droit Immobilier",
              "Droit des Affaires",
            ].map((domain) => (
              <div key={domain} className="card p-6 hover:shadow-2xl transition-shadow hover:border-accent/30">
                <Scale className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-semibold text-ink">{domain}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}