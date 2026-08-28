"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-b from-background via-accent-light/50 to-primary/90">
      <div className="container-editorial text-center max-w-2xl mx-auto">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
          <Mail className="h-7 w-7 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-ink mb-4">Restez informé, sans effort</h2>
        <p className="text-ink-light mb-8">
          Recevez chaque semaine une sélection d'analyses et de jurisprudences essentielles, directement dans votre boîte mail.
        </p>
        {submitted ? (
          <p className="text-primary font-medium">Merci ! Votre inscription a bien été prise en compte.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-surface border-border text-ink placeholder-ink-light focus:border-primary"
            />
            <Button type="submit" className="bg-primary text-white hover:bg-primary-hover">
              S'abonner à la Veille
            </Button>
          </form>
        )}
        <p className="text-xs text-ink-light mt-4">
          En vous inscrivant, vous acceptez notre politique de confidentialité. Désabonnement à tout moment.
        </p>
      </div>
    </section>
  );
}