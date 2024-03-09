"use client";

import { Button, buttonVariants } from "../button";
import { useHeader } from "./header-context-provider";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { UserAvatar } from "../user-avatar";
import { LayoutDashboard, LogOut } from "lucide-react";

export const HeaderCta = () => {
  const { user } = useHeader();

  const haveFullName = user?.firstName && user?.lastName;
  const fullName = haveFullName
    ? `${user.firstName} ${user.lastName}`
    : user?.name || "";

  return (
    <>
      {!user && (
        <>
          <a
            href={`/sign-in`}
            className={buttonVariants({
              variant: "outline",
            })}
          >
            Sign in
          </a>
          <a href={`/sign-up`} className={buttonVariants()}>
            Get Started
          </a>
        </>
      )}

      {user && (
        <>
          <Popover>
            <PopoverTrigger className="rounded-full border">
              <UserAvatar
                firstName={user?.firstName}
                lastName={user?.lastName}
                name={user?.name}
                imageSrc={user?.avatar?.imageSrc}
              />
            </PopoverTrigger>
            <PopoverContent
              className="mt-2 space-y-2 divide-y p-2"
              side="bottom"
              align="end"
            >
              <div className="px-4">
                <p className="text-sm">{fullName}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>

              <div className="pt-2">
                <a
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "ghost",
                    className: "flex w-full items-center justify-between",
                  })}
                >
                  Dashboard <LayoutDashboard className="h-5 w-5" />
                </a>
              </div>

              <div className="pt-2">
                <Button
                  variant="ghost"
                  className="flex w-full items-center justify-between"
                >
                  Log out <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </>
      )}
    </>
  );
};
