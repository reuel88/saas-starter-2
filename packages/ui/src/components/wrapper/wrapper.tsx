import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";
import { cn } from "@repo/utilities";
import { BoxProps } from "../../types/box";

export const Wrapper = forwardRef(
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
        className={cn("bg-background text-foreground", className)}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
