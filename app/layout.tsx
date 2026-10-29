import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibrant Creations | Media, Campaigns & Political Strategy",
  description: "Premium media production, political campaign strategy, digital PR and narrative engineering from Bhopal and Mumbai.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
