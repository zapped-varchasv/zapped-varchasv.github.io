import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";
import { siteUrl } from "@/data/site";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | ${profile.role} · ${profile.location}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.intro,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.intro,
    type: "website",
    locale: "en_AU",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className="antialiased">{children}</body>
    </html>
  );
}
