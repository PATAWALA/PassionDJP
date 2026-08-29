import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://passiondjp.com"), // à remplacer par votre domaine
  title: "PassionDJP – Média & Centre de Ressources Juridiques",
  description: "Doctrine juridique moderne, analyses et veille pour les praticiens du droit.",
  icons: {
    icon: [
      { url: "/images/logo-sceau.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://passiondjp.com",
    siteName: "PassionDJP",
    title: "PassionDJP – Média & Centre de Ressources Juridiques",
    description: "Doctrine juridique moderne, analyses et veille pour les praticiens du droit.",
    images: [
      {
        url: "/images/og-image.jpg", // image de partage (1200x630)
        width: 1200,
        height: 630,
        alt: "PassionDJP – Média juridique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PassionDJP – Média & Centre de Ressources Juridiques",
    description: "Doctrine juridique moderne, analyses et veille pour les praticiens du droit.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}