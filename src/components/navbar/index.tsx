"use client";

import { NavbarItems } from "@/components/navbar/navbarItems";
import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import { navbar_items } from "@/static/navbar_items";
import { ChevronRight, LogOut } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={`${
        open ? "w-80" : "w-20"
      } h-screen bg-navbar fixed flex flex-col justify-between items-center p-4 transition-all duration-300 ease-in-out`}
    >
      <div>
        <div className="flex items-center justify-center ">
          <Image
            src="globe.svg"
            alt="Perfil image"
            width={50}
            height={50}
            className="mt-4 mb-8 rounded-2xl"
          />
          {open && (
            <div className="ml-4 text-white h-full w-full  flex flex-col">
              <span className="text-lg ">Vercel</span>
              <span className="text-xs">vercel.com</span>
            </div>
          )}
        </div>

        <div className=" items-center flex justify-center">
          <ChevronRight
            className={`w-10 h-10 cursor-pointer top-4 transition-transform duration-300 ease-in-out ${
              open ? "rotate-180" : ""
            }`}
            onClick={handleOpen}
          />
        </div>

        <ul
          className={`w-full space-y-2 mt-12 transition-opacity duration-300`}
        >
          {navbar_items &&
            navbar_items.map((item) => (
              <li key={item.id} className="flex items-center">
                <NavbarItems
                  path={item.path}
                  icon={item.icon}
                  text={item.text}
                  filled={item.filled}
                />
                {open && <span className="ml-4 text-white">{item.text}</span>}
              </li>
            ))}
        </ul>
      </div>

      <div className="">
        <div className="flex items-center mb-4">
          <LogOut className="w-10 h-10 cursor-pointer justify-center items-center" />
          {open && <span className="ml-4 text-white">Logout</span>}
        </div>
        <div className="flex items-center">
          <ThemeToggle />
          {open && <span className="ml-4 text-white">Light Mode</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
