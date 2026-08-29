"use client";

import { motion, easeOut } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const quickFilters = [
  "#ProcédureCivile",
  "#DroitOHADA",
  "#Jurisprudence2026",
  "#DroitImmobilier",
  "#DroitDesAffaires",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-background via-background to-accent-light/60">
      {/* Formes décoratives floues */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="container-editorial relative z-10 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-ink mb-4 leading-tight tracking-tight"
        >
          Trouvez la doctrine juridique
          <br />
          <span className="relative inline-block mt-2">
            <span className="text-primary">fiable et actualisée</span>
            <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-accent rounded-full" />
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-ink-light max-w-2xl md:mx-0 mx-auto mb-6"
        >
          PassionDJP centralise les analyses, transcriptions et ressources en procédure civile,
          droit OHADA, immobilier et affaires. Gagnez du temps, évitez les sources obsolètes et
          accédez à une base unique pour vos recherches.
        </motion.p>

        <motion.div variants={itemVariants} className="max-w-2xl md:mx-0 mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-ink-light" />
              <Input
                placeholder="Rechercher un thème, un mot-clé..."
                className="pl-10 py-4 text-base"
              />
            </div>
            <Button variant="gold" size="lg" className="px-8">
              Rechercher
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center md:justify-start gap-3"
        >
          {quickFilters.map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-full bg-surface border border-border text-sm text-ink-light hover:bg-accent-light hover:text-accent hover:border-accent transition-colors"
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}