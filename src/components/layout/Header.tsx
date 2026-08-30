"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Lock } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#1e3a5f] border-b border-white/10">
      {/* Rangée principale */}
      <div className="container-editorial flex items-center justify-between h-20">
        {/* Logo image */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white/10">
            <Image
              src="/images/logo.jpeg"
              alt="PassionDJP"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-heading text-2xl font-semibold !text-white tracking-tight">
            Passion<span className="!text-accent">DJP</span>
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link href="/" className="text-base font-medium !text-white hover:!text-accent transition-colors">
            Accueil
          </Link>
          <Link href="/article" className="text-base font-medium !text-white hover:!text-accent transition-colors">
            Articles
          </Link>
          <Link href="/media" className="text-base font-medium !text-white hover:!text-accent transition-colors">
            Médias
          </Link>
          <Link href="/a-propos" className="text-base font-medium !text-white hover:!text-accent transition-colors">
            À propos
          </Link>
        </nav>

        {/* Actions droite */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="#newsletter"
            className="hidden md:inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-xs font-medium !text-white hover:bg-accent-hover transition-colors"
          >
            S'abonner à la Veille
          </Link>

          <Link
            href="/espace-contributeurs"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm !text-white hover:!text-accent transition-colors"
          >
            <Lock className="h-4 w-4" />
            Espace Contributeurs
          </Link>

          {/* Bouton hamburger mobile */}
          <button
            onClick={() => setIsMobileNavOpen(true)}
            className="md:hidden !text-white hover:!text-accent transition-colors"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Barre de recherche */}
      <div className="border-t border-white/10 bg-[#1e3a5f] p-4">
        <div className="container-editorial">
          <Input
            placeholder="Rechercher une doctrine, un thème..."
            className="bg-white/10 border-white/20 !text-white placeholder:!text-white/50 focus:!border-accent"
          />
        </div>
      </div>

      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  );
}