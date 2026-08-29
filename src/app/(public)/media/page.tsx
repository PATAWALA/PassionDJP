import { MediaSection } from "@/components/home/MediaSection";

export default function MediaPage() {
  return (
    <div className="py-12">
      <div className="container-editorial mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-2">Médias & Transcriptions</h1>
        <div className="h-1 w-20 bg-accent mb-4" />
        <p className="text-ink-light mt-2">
          Retrouvez nos vidéos, podcasts et transcriptions textuelles pour une veille juridique complète.
        </p>
      </div>
      <MediaSection />
    </div>
  );
}