import { Scale, Building2, Landmark, Briefcase } from "lucide-react";

const practiceAreas = [
  {
    icon: Scale,
    title: "Procédure Civile",
    description: "Suivez les évolutions procédurales et les réformes qui impactent la pratique contentieuse.",
  },
  {
    icon: Landmark,
    title: "Droit OHADA",
    description: "Maîtrisez le droit des affaires africain : actes uniformes, sûretés, sociétés commerciales.",
  },
  {
    icon: Building2,
    title: "Droit Immobilier",
    description: "Analyses des jurisprudences et des textes en matière immobilière, construction et copropriété.",
  },
  {
    icon: Briefcase,
    title: "Droit des Affaires",
    description: "Contrats, sociétés, concurrence : des ressources pour sécuriser vos opérations.",
  },
];

export function PracticeAreasSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container-editorial">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold text-ink mb-2">Domaines couverts</h2>
          <div className="h-1 w-20 bg-accent mb-4 md:mx-0 mx-auto" />
          <p className="text-lg text-ink-light max-w-2xl md:mx-0 mx-auto">
            PassionDJP couvre les branches essentielles du droit privé et des affaires, avec des
            analyses fiables et à jour.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area) => (
            <div key={area.title} className="card hover:shadow-2xl transition-shadow p-6 hover:border-accent/30">
              <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mb-4">
                <area.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">{area.title}</h3>
              <p className="text-sm text-ink-light">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}