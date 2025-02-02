import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Bell, Search } from "lucide-react";

const HeaderComponent = () => {
  return (
    <div className="fixed top-0 left-80 w-full h-14 bg-background text-foreground flex items-center p-14 pr-96 justify-between">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p>this is a short description abou that application</p>
      </div>

      <div className="flex gap-8">
        <HoverCard>
          <HoverCardTrigger className="flex items-center gap-3 cursor-pointer">
            <Search className="w-7 h-7" />
          </HoverCardTrigger>
          <HoverCardContent>
            The React Framework – created and maintained by @vercel.
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger className="flex items-center gap-3 cursor-pointer">
            <Bell className="w-7 h-7" />
          </HoverCardTrigger>
          <HoverCardContent>
            The React Framework – created and maintained by @vercel.
          </HoverCardContent>
        </HoverCard>

        <div className="flex items-center gap-3">
          <HoverCard>
            <HoverCardTrigger className="flex items-center gap-3 cursor-pointer">
              <Avatar className="rounded-sm h-full">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="-mt-1 text-navbar-background w-full flex flex-col justify-start">
                <span className="text-lg">Vercel</span>
                <span className="text-xs">vercel.com</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
