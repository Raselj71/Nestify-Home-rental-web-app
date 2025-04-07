"use client";
import { useAuth } from "@/hooks/use-auth";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Popover, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { PopoverContent } from "@radix-ui/react-popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent } from "./ui/dropdown-menu";
import Signout from "./Signout";
import { UserIcon } from "lucide-react";

function Profile() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Skeleton className="w-[40px] h-[40px] rounded-full" />;
  }

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"   align="end" sideOffset={4}>
          <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                
                <div className="grid flex-1 text-center text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {user.email}
                  </span>
              
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="">profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem><Signout/></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button asChild>
          <Link href={"/auth/login"}>Login / Register</Link>
        </Button>
      )}
    </>
  );
}

export default Profile;
