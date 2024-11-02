import { Bell, ChartColumn, ChartPie, User, Search, House } from "lucide-react";
import { ElementType } from "react";

export interface INavbarItems {
  id?: number;
  path: string;
  icon: ElementType;
  text: string;
  strokeWidth?: number;
  filled?: boolean;
}

export const navbar_items: INavbarItems[] = [
  {
    id: 1,
    path: "/",
    icon: House,
    text: "home",
    strokeWidth: 2.5,
  },
  {
    id: 2,
    path: "/search",
    icon: Search,
    text: "search",
  },

  {
    id: 3,
    path: "/metrics",
    icon: ChartColumn,
    text: "metrics",
  },
  {
    id: 4,
    path: "/notifications",
    icon: Bell,
    text: "notifications",
  },
  {
    id: 5,
    path: "/analitics",
    icon: ChartPie,
    text: "analitics",
  },
  {
    id: 6,
    path: "/account",
    icon: User,
    text: "account",
  },
];
