import Link from "next/link";
import { Scale, Mail, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-20">
      <div className="container-editorial py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="relative inline-block font-heading text-2xl font-semibold text-primary tracking-tight">
                Passion<span className="text-ink">DJP</span>
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-accent/70 -skew-x-12 rounded-sm" />
              </span>
            </Link>
            <p className="mt-4 text-sm text-ink-light max-w-md">
              Média et centre de ressources juridiques pour les étudiants, chercheurs et praticiens
              du droit. Doctrine moderne, analyses pointues et veille juridique.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-ink mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-ink-light hover:text-accent transition-colors">Accueil</Link></li>
              <li><Link href="/articles" className="text-ink-light hover:text-accent transition-colors">Articles</Link></li>
              <li><Link href="/media" className="text-ink-light hover:text-accent transition-colors">Médias</Link></li>
              <li><Link href="/admin/login" className="text-ink-light hover:text-accent transition-colors flex items-center gap-1.5">
                <Lock className="h-3 w-3" /> Espace Cabinet
              </Link></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-semibold text-ink mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-ink-light hover:text-accent transition-colors">Mentions légales</Link></li>
              <li><Link href="#" className="text-ink-light hover:text-accent transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="#" className="text-ink-light hover:text-accent transition-colors">Disclaimer juridique</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer et copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-ink-light">
          <p className="mb-2">
            © {new Date().getFullYear()} PassionDJP. Tous droits réservés.
          </p>
          <p className="max-w-3xl mx-auto">
            Les informations publiées sur ce site sont fournies à titre informatif uniquement et ne
            constituent pas un conseil juridique. Pour toute question relative à un dossier,
            veuillez consulter un avocat compétent.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Mail className="h-4 w-4 text-accent" />
            <a href="mailto:contact@passiondjp.com" className="hover:text-accent">
              contact@passiondjp.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}