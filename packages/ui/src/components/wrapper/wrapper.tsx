import { ElementType, forwardRef } from "react";
import { cn } from "@repo/utilities";
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../box/box.types";

type WrapperProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    className?: string;
  }
>;

export const Wrapper = forwardRef(
  <T extends ElementType = "div">(
    { as, children, className = "", ...rest }: WrapperProps<T>,
    ref: PolymorphicRef<T>,
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
