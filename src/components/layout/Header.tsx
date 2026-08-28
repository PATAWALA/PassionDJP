"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Lock } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-primary border-b border-white/10">
      {/* Rangée principale */}
      <div className="container-editorial flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="relative inline-block font-heading text-3xl font-semibold text-white tracking-tight">
            Passion<span className="text-accent-light">DJP</span>
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-accent-light/40 -skew-x-12 rounded-sm" />
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link href="/" className="text-base font-medium text-white/90 hover:text-white transition-colors">
            Accueil
          </Link>
          <Link href="/articles" className="text-base font-medium text-white/90 hover:text-white transition-colors">
            Articles
          </Link>
          <Link href="/media" className="text-base font-medium text-white/90 hover:text-white transition-colors">
            Médias
          </Link>
          <Link href="/a-propos" className="text-base font-medium text-white/90 hover:text-white transition-colors">
            À propos
          </Link>
        </nav>

        {/* Actions droite */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="#newsletter"
            className="hidden md:inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-xs font-medium text-primary hover:bg-accent-light transition-colors"
          >
            S'abonner à la Veille
          </Link>

<Link
  href="/espace-contributeurs"
  className="hidden lg:inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
>
  <Lock className="h-4 w-4" />
  Espace Contributeurs
</Link>

          {/* Bouton hamburger mobile */}
          <button
            onClick={() => setIsMobileNavOpen(true)}
            className="md:hidden text-white/80 hover:text-white transition-colors"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Barre de recherche toujours visible sur tous les écrans */}
      <div className="border-t border-white/10 bg-primary p-4">
        <div className="container-editorial">
          <Input
            placeholder="Rechercher une doctrine, un thème..."
            className="bg-white/10 border-white/20 text-white placeholder-white/50"
          />
        </div>
      </div>

      {/* Navigation mobile */}
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  );
}