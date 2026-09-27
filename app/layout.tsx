import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kae-chi.github.io"),
  title: "Katelyn (Kae) Chi | Software Engineer",
  description:
    "Kae Chi is a software engineer and Boston University student interested in security, cloud infrastructure, observability, and aerospace.",
  openGraph: {
    title: "Katelyn (Kae) Chi | Software Engineer",
    description:
      "Software engineer and Boston University student interested in security, cloud infrastructure, observability, and aerospace.",
    url: "https://kae-chi.github.io",
    siteName: "Katelyn (Kae) Chi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Katelyn (Kae) Chi | Software Engineer",
    description:
      "Software engineer and Boston University student interested in security, cloud infrastructure, observability, and aerospace.",
  },
  other: {
    "format-detection": "telephone=no,date=no,email=no,address=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
