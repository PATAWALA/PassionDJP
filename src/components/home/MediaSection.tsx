import { MediaCard } from "./MediaCard";

const medias = [
  {
    title: "Webinaire : La réforme de la procédure civile",
    youtubeId: "dQw4w9WgXcQ",
    duration: "45 min",
    description: "Analyse des impacts du décret du 15 mars 2026 sur la pratique contentieuse.",
    transcription: `Intervenant : Maître Kevin DIZO\n\nIntroduction\nNous allons aborder la réforme de la procédure civile issue du décret du 15 mars 2026. Cette réforme modifie en profondeur la mise en état et les délais de procédure...`,
  },
  {
    title: "Analyse vidéo : Droit OHADA et sûretés réelles",
    youtubeId: "dQw4w9WgXcQ",
    duration: "32 min",
    description: "Les innovations majeures du droit des sûretés dans l'espace OHADA.",
    transcription: `Intervenant : Professeur Sophie Martin\n\nLe droit des sûretés OHADA connaît une refonte majeure avec l'acte uniforme portant organisation des sûretés. Nous analyserons les nouvelles règles...`,
  },
  {
    title: "Podcast : La jurisprudence immobilière 2026",
    youtubeId: "dQw4w9WgXcQ",
    duration: "28 min",
    description: "Tour d'horizon des arrêts clés de la Cour de cassation en immobilier.",
    transcription: `Intervenant : Docteur Thomas Dubois\n\nLa Cour de cassation a rendu plusieurs arrêts importants en matière immobilière cette année. Nous reviendrons sur les points saillants...`,
  },
];

export function MediaSection() {
  return (
    <section className="py-16 bg-surface border-y border-border">
      <div className="container-editorial">
        <h2 className="text-3xl font-bold text-ink mb-2">Médias & Transcriptions</h2>
        <div className="h-1 w-20 bg-accent mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medias.map((media) => (
            <MediaCard key={media.title} {...media} />
          ))}
        </div>
      </div>
    </section>
  );
}