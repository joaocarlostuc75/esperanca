import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://balneario-esperanca.vercel.app"),
  title: "Balneário Esperança | Espaço de Lazer para Locação",
  description:
    "Balneário Esperança - O melhor espaço de lazer para eventos, festas e dias de descanso em contato com a natureza. Área de banho, quiosques, banheiros e muito mais. Reserve pelo WhatsApp!",
  keywords: [
    "balneário esperança",
    "espaço de lazer",
    "locação de espaço",
    "festas",
    "eventos",
    "área de banho",
    "quiosque",
    "natureza",
    "lazer",
    "balneário",
  ],
  authors: [{ name: "Balneário Esperança" }],
  icons: {
    icon: "/images/logotipo.jpg",
  },
  openGraph: {
    title: "Balneário Esperança | Espaço de Lazer para Locação",
    description:
      "Descubra o melhor espaço de lazer para seus eventos e momentos de descanso. Reserve agora pelo WhatsApp!",
    type: "website",
    images: ["/images/ambiente.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
