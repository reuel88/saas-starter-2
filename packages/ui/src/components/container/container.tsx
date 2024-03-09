import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";
import { cn } from "@repo/utilities";
import { BoxProps } from "../../types/box";

export const Container = forwardRef(
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
        className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
