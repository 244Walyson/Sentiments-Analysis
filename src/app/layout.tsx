import type { Metadata } from "next";
import "./globals.css";
import Theme from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Sentiments Analysis",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="dark:bg-background text-primary w-screen h-screen"
        suppressHydrationWarning
      >
        <Theme>
          <main className="pl-24 pr-10 py-10 h-full max-w-full overflow-x-hidden">
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
