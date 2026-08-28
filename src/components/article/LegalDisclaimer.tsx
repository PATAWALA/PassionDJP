import { ShieldAlert } from "lucide-react";

export function LegalDisclaimer() {
  return (
    <div className="mt-10 bg-accent-light/50 border border-accent/20 rounded-lg p-6">
      <div className="flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-accent mt-0.5" />
        <div>
          <h3 className="font-semibold text-ink mb-2">Avertissement légal</h3>
          <p className="text-sm text-ink-light">
            Les informations et analyses publiées sur PassionDJP sont fournies à titre informatif
            uniquement et ne constituent pas un conseil juridique. Elles ne remplacent pas la
            consultation d'un avocat ou d'un professionnel du droit. Pour toute question relative
            à un dossier, veuillez consulter un avocat compétent.
          </p>
        </div>
      </div>
    </div>
  );
}