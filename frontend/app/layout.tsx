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
  title: "Novia - The Crew AI",
  description: "Plateforme d'analyse comparative pour le jeu The Crew (IELLO). Confrontation technique entre Solver Analytique (Full Info) et Agent Deep Q-Network (Reinforcement Learning).",
  keywords: ["AI", "Deep Learning", "Reinforcement Learning", "The Crew", "Solver", "Algorithm", "Game Theory", "DQN", "Pytorch"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}