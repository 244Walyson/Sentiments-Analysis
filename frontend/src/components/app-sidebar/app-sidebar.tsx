"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Bell,
  ChartColumn,
  ChartPie,
  User,
  Search,
  House,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ElementType, useState } from "react";
import Dialog from "../alertDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

export interface INavbarItems {
  id?: number;
  path: string;
  icon: ElementType;
  text: string;
  strokeWidth?: number;
  filled?: boolean;
}

export const navbar_items: INavbarItems[] = [
  { id: 1, path: "/", icon: House, text: "Home", strokeWidth: 2.5 },
  { id: 2, path: "/search", icon: Search, text: "Search" },
  { id: 3, path: "/metrics", icon: ChartColumn, text: "Metrics" },
  { id: 4, path: "/notifications", icon: Bell, text: "Notifications" },
  { id: 5, path: "/analitics", icon: ChartPie, text: "Analytics" },
];

const AppSidebar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navbar_items.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.path}
                      className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-lg"
                    >
                      <item.icon
                        className="w-5 h-5"
                        strokeWidth={item.strokeWidth ?? 2}
                      />
                      <span>{item.text}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex flex-col gap-4 p-4">
        <Avatar className="w-12 h-12" />
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg"
        >
          {theme === "dark" ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </button>
        <div className="flex w-full items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-4 text-navbar-foreground h-full w-full flex flex-col">
            <span className="text-lg">Vercel</span>
            <span className="text-xs">vercel.com</span>
          </div>
          <Dialog
            title="Terminar sessão?"
            description="Você terá de fazer login novamente"
            btnOpen={
              <button className="flex items-center justify-center h-full">
                <LogOut className="w-6 h-6" />
              </button>
            }
            confirm="Confirmar"
            cancel="Cancelar"
            onCancel={() => setOpen(false)}
            onConfirm={handleLogout}
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
