import { ElementType, forwardRef } from "react";
import { cn } from "@repo/utilities";
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../box/box.types";

type ContainerProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    className?: string;
  }
>;

export const Container = forwardRef(
  <T extends ElementType = "div">(
    { as, children, className = "", ...rest }: ContainerProps<T>,
    ref: PolymorphicRef<T>,
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
