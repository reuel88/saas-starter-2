import { ReactNode } from "react";
import { cn } from "@repo/utilities";

type HoverUnderlineProps = {
  children: ReactNode;
  className?: string;
};
export const HoverUnderline = ({
  children,
  className = "",
}: HoverUnderlineProps) => {
  return (
    <span className="group">
      {children}
      <span
        className={cn(
          "block h-1 w-0 bg-hue-500 transition-all group-hover:w-full",
          className,
        )}
        aria-hidden="true"
      />
    </span>
  );
};
