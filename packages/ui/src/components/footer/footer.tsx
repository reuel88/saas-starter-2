import { FC } from "react";
import { Github, Linkedin } from "lucide-react";
import { CompanyLogo } from "../company-logo";
import { Container } from "../container";
import { Wrapper } from "../wrapper";

export type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  return (
    <Wrapper as="footer" aria-labelledby="footer-heading">
      <Container className="py-16">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <a href="/">
              <CompanyLogo />
            </a>
            <p className="text-sm leading-6">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-foreground/40 hover:text-foreground/70"
                target="_blank"
              >
                <span className="sr-only">Github</span>
                <Github className="h-6 w-6" aria-hidden="true" />
              </a>

              <a
                href="#"
                className="text-foreground/40 hover:text-foreground/70"
                target="_blank"
              >
                <span className="sr-only">Linkedin</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid gap-y-16 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-y-8 xl:col-span-2 xl:mt-0">
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
          </div>
        </div>

        <div className="prose prose-slate mt-16 max-w-none space-y-4 border-t border-border pt-8 text-xs text-muted-foreground dark:prose-invert sm:mt-20 lg:mt-24">
          <p>&copy;{new Date().getFullYear()} Reuel. All right reserved</p>
        </div>
      </Container>
    </Wrapper>
  );
};
