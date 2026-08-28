"use client";

import Link from "next/link";
import { X, Lock, Mail } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-primary md:hidden">
      <div className="container-editorial py-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center" onClick={onClose}>
            <span className="relative inline-block font-heading text-3xl font-semibold text-white tracking-tight">
              Passion<span className="text-accent-light">DJP</span>
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-accent-light/40 -skew-x-12 rounded-sm" />
            </span>
          </Link>
          <button onClick={onClose} className="text-white/80 hover:text-white" aria-label="Fermer">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 text-base">
          <Link href="/" onClick={onClose} className="text-white/90 hover:text-white transition-colors">
            Accueil
          </Link>
          <Link href="/articles" onClick={onClose} className="text-white/90 hover:text-white transition-colors">
            Articles
          </Link>
          <Link href="/media" onClick={onClose} className="text-white/90 hover:text-white transition-colors">
            Médias
          </Link>
          <Link href="#" onClick={onClose} className="text-white/90 hover:text-white transition-colors">
            À propos
          </Link>
          <Link
            href="/admin/login"
            onClick={onClose}
            className="text-white/90 hover:text-white flex items-center gap-2 transition-colors"
          >
            <Lock className="h-4 w-4" /> Espace Cabinet
          </Link>
        </nav>

        <div className="mt-auto pb-8">
<Link
  href="/admin/login"
  onClick={onClose}
  className="text-white/90 hover:text-white flex items-center gap-2 transition-colors"
>
  <Lock className="h-4 w-4" /> Espace Contributeurs
</Link>
        </div>
      </div>
    </div>
  );
}