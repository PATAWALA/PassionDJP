import Link from "next/link";
import { Scale } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Scale className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-ink mb-4">404 - Page introuvable</h1>
        <p className="text-ink-light mb-8">La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Link href="/" className="btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}