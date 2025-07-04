import type { Metadata } from "next";
import "../globals.css";
import Theme from "@/context/ThemeContext";
import { ABeeZee } from "@next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar/app-sidebar";
import HeaderComponent from "@/components/header/Header";

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
          <SidebarProvider
            style={
              {
                "--sidebar-width": "20rem",
                "--sidebar-width-mobile": "20rem",
              } as React.CSSProperties
            }
          >
            <AppSidebar />
            <SidebarTrigger />
            <main className="px-10 py-14 h-full w-full overflow-x-hidden">
              <HeaderComponent />
              {children}
            </main>
          </SidebarProvider>
        </Theme>
      </body>
    </html>
  );
}
