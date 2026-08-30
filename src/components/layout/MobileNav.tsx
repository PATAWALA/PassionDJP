"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Lock, Mail } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1e3a5f] md:hidden overflow-y-auto">
      <div className="container-editorial py-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-3" onClick={onClose}>
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
          <button onClick={onClose} className="!text-white hover:!text-accent" aria-label="Fermer">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 text-base">
          <Link href="/" onClick={onClose} className="!text-white hover:!text-accent transition-colors">
            Accueil
          </Link>
          <Link href="/article" onClick={onClose} className="!text-white hover:!text-accent transition-colors">
            Articles
          </Link>
          <Link href="/media" onClick={onClose} className="!text-white hover:!text-accent transition-colors">
            Médias
          </Link>
          <Link href="/a-propos" onClick={onClose} className="!text-white hover:!text-accent transition-colors">
            À propos
          </Link>
          <Link
            href="/admin/login"
            onClick={onClose}
            className="!text-white hover:!text-accent flex items-center gap-2 transition-colors"
          >
            <Lock className="h-4 w-4" /> Espace Cabinet
          </Link>
        </nav>

        <div className="mt-auto pb-8 space-y-3">
          <Link
            href="#newsletter"
            onClick={onClose}
            className="block rounded-md bg-accent px-4 py-2 text-center text-sm font-medium !text-white hover:bg-accent-hover transition-colors"
          >
            S'abonner à la Veille
          </Link>
          <Link
            href="/espace-contributeurs"
            onClick={onClose}
            className="!text-white hover:!text-accent flex items-center gap-2 transition-colors"
          >
            <Lock className="h-4 w-4" /> Espace Contributeurs
          </Link>
          <a
            href="mailto:contact@passiondjp.com"
            className="!text-white hover:!text-accent flex items-center gap-2 transition-colors"
          >
            <Mail className="h-4 w-4" /> contact@passiondjp.com
          </a>
        </div>
      </div>
    </div>
  );
}