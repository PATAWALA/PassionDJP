import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ConversionBanner() {
  return (
    <div className="mt-10 bg-primary rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-2 text-white">
        Besoin d'un accompagnement sur votre dossier ?
      </h3>
      <p className="text-white/80 mb-6">
        Notre cabinet d'avocats vous accompagne dans vos démarches juridiques. Prenez rendez-vous
        dès aujourd'hui.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-accent-hover transition-colors"
      >
        Contacter le cabinet <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}