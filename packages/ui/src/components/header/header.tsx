"use server";

import { cn } from "@repo/utilities";
import { FC } from "react";
import { CompanyLogo } from "../company-logo";
import { Container } from "../container";
import { ThemeToggle } from "../theme-toggle";
import { Wrapper } from "../wrapper";
import { HeaderContextProvider } from "./header-context-provider";
import { HeaderCta } from "./header-cta";
import { User } from "../../types/user";

export type HeaderProps = {
  className?: string;
  user: User | null;
};
export const Header: FC<HeaderProps> = ({ className, user }) => {
  return (
    <HeaderContextProvider user={user}>
      <Wrapper as="header" className={cn("border-b", className)}>
        <Container className="flex justify-between gap-x-4 py-4">
          <h2 id="header-heading" className="sr-only">
            Header
          </h2>

          {/* Brand Logo */}
          <div>
            <a href="/">
              <CompanyLogo />
            </a>
          </div>

          {/* Nav Bar */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            {/* <NavBar menu={menu} /> */}
          </div>

          <div className="flex gap-x-4">
            {/* Theme Switcher */}
            <ThemeToggle />

            {/* Mobile Menu */}
            <div className="lg:hidden">{/* <MobileNav menu={menu} /> */}</div>

            {/* CTA */}
            <div className="hidden gap-x-4 lg:flex">
              <HeaderCta />
            </div>
          </div>
        </Container>
      </Wrapper>
    </HeaderContextProvider>
  );
};
