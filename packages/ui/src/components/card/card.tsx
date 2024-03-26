import * as React from "react";
import { cn } from "@repo/utilities";
import { ElementType, forwardRef } from "react";
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../box/box.types";

type CardProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    className?: string;
  }
>;

const Card = forwardRef(
  <T extends ElementType = "div">(
    { as, children, className = "", ...rest }: CardProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component = as || "div";

    return (
      <Component
        ref={ref}
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          className,
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
Card.displayName = "Card";

type CardHeaderProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    className?: string;
  }
>;

const CardHeader = forwardRef(
  <T extends ElementType = "div">(
    { as, children, className = "", ...rest }: CardHeaderProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component = as || "div";

    return (
      <Component
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
CardHeader.displayName = "CardHeader";

type CardTitleProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    className?: string;
  }
>;

const CardTitle = forwardRef(
  <T extends ElementType = "h3">(
    { as, children, className = "", ...rest }: CardTitleProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component = as || "h3";

    return (
      <Component
        ref={ref}
        className={cn(
          "text-2xl font-semibold leading-none tracking-tight",
          className,
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
CardTitle.displayName = "CardTitle";

type CardDescriptionProps<C extends ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      className?: string;
    }
  >;

const CardDescription = forwardRef(
  <T extends ElementType = "p">(
    { as, children, className = "", ...rest }: CardDescriptionProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component = as || "p";

    return (
      <Component
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
CardDescription.displayName = "CardDescription";

type CardContentProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    className?: string;
  }
>;

const CardContent = forwardRef(
  <T extends ElementType = "div">(
    { as, children, className = "", ...rest }: CardContentProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component = as || "div";

    return (
      <Component ref={ref} className={cn("p-6 pt-0", className)} {...rest}>
        {children}
      </Component>
    );
  },
);
CardContent.displayName = "CardContent";

type CardFooterProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    className?: string;
  }
>;

const CardFooter = forwardRef(
  <T extends ElementType = "div">(
    { as, children, className = "", ...rest }: CardFooterProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component = as || "div";

    return (
      <Component
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
