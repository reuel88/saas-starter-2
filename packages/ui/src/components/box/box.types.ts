/* Based on this article https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/ */

import React from "react";

export type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// Use PolymorphicComponentProp if Ref does not need to be passed e.g.
//
// type BoxProps = { color?: "white" | "black" };
//
// export const Box = <C extends React.ElementType = "span">(
//     {
//         as,
//         color,
//         children,
//     }: PolymorphicComponentProp<C, BoxProps>
// ) => {
//     const Component = as || "span";
//     const style = color ? {style: {color}} : {};
//     return <Component {...style}>{children}</Component>;
// };

/* useRef related */
export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };
