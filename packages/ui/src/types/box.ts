import { ElementType, ReactNode } from "react";

export type BoxProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
};
