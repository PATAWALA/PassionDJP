import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-accent-light/50 to-primary/90 px-4">
      <div className="w-full max-w-md">
        <div className="bg-surface rounded-xl shadow-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <span className="relative inline-block font-heading text-3xl font-semibold text-primary tracking-tight">
                Passion<span className="text-ink">DJP</span>
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-primary/30 -skew-x-12 rounded-sm" />
              </span>
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-ink text-center mb-2">
            Espace Contributeurs
          </h1>
          <p className="text-sm text-ink-light text-center mb-8">
            Connectez-vous pour soumettre vos analyses et contribuer à la doctrine juridique.
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">
                Adresse email
              </label>
              <Input id="email" type="email" placeholder="vous@exemple.com" required />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-ink mb-1">
                Mot de passe
              </label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" className="w-full">
              <Lock className="mr-2 h-4 w-4" />
              Se connecter
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-ink-light">
              Pas encore contributeur ?{" "}
              <Link href="#" className="text-primary hover:text-primary-hover font-medium">
                Demander un accès
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-6 text-sm text-ink-light">
          <Link href="/" className="text-primary hover:text-primary-hover">
            ← Retour à l'accueil
          </Link>
        </p>
      </div>
    </div>
  );
}