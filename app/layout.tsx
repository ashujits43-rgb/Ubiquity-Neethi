import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ubiquity Neethi | Media, Campaigns & Political Strategy",
  description: "Media production, political campaign strategy, digital PR and narrative engineering for high-impact public communication.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
