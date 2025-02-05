import type { Metadata } from "next";
import "../globals.css";
import Theme from "@/context/ThemeContext";
import { ABeeZee } from "@next/font/google";
import Navbar from "@/components/navbar";

const abeezee = ABeeZee({
  subsets: ["latin"],
  weight: ["400"],
});

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
        className={`${abeezee.className} dark:bg-background text-primary w-screen h-screen`}
        suppressHydrationWarning
      >
        <Theme>
          <Navbar>
            <main className="pl-24 pr-10 py-14 h-full w-full overflow-x-hidden">
              {children}
            </main>
          </Navbar>
        </Theme>
      </body>
    </html>
  );
}
