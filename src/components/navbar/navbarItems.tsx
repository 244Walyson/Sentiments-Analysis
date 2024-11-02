import { INavbarItems } from "@/static/navbar_items";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Tooltip from "@/components/tooltip";

export const NavbarItems = ({
  path,
  icon: Icon,
  text,
  filled,
}: INavbarItems) => {
  const pathName = usePathname();

  return (
    <li>
      <Tooltip text={text} side="right">
        <Link href={path}>
          <div
            className={`w-14 h-14 flex items-center justify-center rounded-2xl ${
              pathName === path ? "bg-dark-shade" : "hover:bg-dark-shade"
            }`}
          >
            <Icon fill={filled ? "#fff" : "none"} className="w-10 h-10" />
          </div>
        </Link>
      </Tooltip>
    </li>
  );
};
