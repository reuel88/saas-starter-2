import { ElementType, forwardRef } from "react";
import { PolymorphicComponentPropWithRef, PolymorphicRef } from "./box.types";

type BoxProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    // Add props here
  }
>;

export const Box = forwardRef(
  <C extends React.ElementType>(
    { as, children, ...rest }: BoxProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || "div";

    return (
      <Component {...rest} ref={ref}>
        {children}
      </Component>
    );
  },
);

Box.displayName = "Box";
