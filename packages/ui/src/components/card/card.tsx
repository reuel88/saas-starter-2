import * as React from "react";
import { cn } from "@repo/utilities";
import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";
import { BoxProps } from "../../types/box";

const Card = forwardRef(
  <T extends ElementType = "div">(
    {
      as,
      children,
      className = "",
      ...rest
    }: BoxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BoxProps<T>>,
    ref: ForwardedRef<any>,
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

const CardHeader = forwardRef(
  <T extends ElementType = "div">(
    {
      as,
      children,
      className = "",
      ...rest
    }: BoxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BoxProps<T>>,
    ref: ForwardedRef<any>,
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

const CardTitle = forwardRef(
  <T extends ElementType = "h3">(
    {
      as,
      children,
      className = "",
      ...rest
    }: BoxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BoxProps<T>>,
    ref: ForwardedRef<any>,
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

const CardDescription = forwardRef(
  <T extends ElementType = "p">(
    {
      as,
      children,
      className = "",
      ...rest
    }: BoxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BoxProps<T>>,
    ref: ForwardedRef<any>,
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

const CardContent = forwardRef(
  <T extends ElementType = "div">(
    {
      as,
      children,
      className = "",
      ...rest
    }: BoxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BoxProps<T>>,
    ref: ForwardedRef<any>,
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

const CardFooter = forwardRef(
  <T extends ElementType = "div">(
    {
      as,
      children,
      className = "",
      ...rest
    }: BoxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BoxProps<T>>,
    ref: ForwardedRef<any>,
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
