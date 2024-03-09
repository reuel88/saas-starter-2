"use client";

import { X } from "lucide-react";
import { FC, ReactNode } from "react";
import { useCookie } from "../../hooks";
import { Wrapper } from "../wrapper";
import { Button } from "../button";

export type BannerProps = {
  children: ReactNode;
  cookieName: string;
};

export const Banner: FC<BannerProps> = ({ children, cookieName }) => {
  const [cookieValue, setCookie] = useCookie(cookieName, false);

  const handleClose = () => {
    setCookie(true, { expires: 1 });
  };

  return cookieValue ? null : (
    <>
      <Wrapper className="bg-primary text-primary-foreground">
        <div className="flex items-center gap-x-6 px-6 py-1 sm:before:flex-1 lg:px-8">
          <p className="text-sm leading-6">{children}</p>
          <div className="flex flex-1 justify-end">
            <Button type="button" size="icon" onClick={handleClose}>
              <span className="sr-only">Dismiss</span>
              <X className="text-primary-foreground" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
