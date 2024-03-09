import { FC } from "react";
import { Flame } from "lucide-react";
import { cn } from "@repo/utilities";

export type CompanyLogoProps = {
  className?: string;
};

export const CompanyLogo: FC<CompanyLogoProps> = ({ className, ...rest }) => {
  return (
    <div className={cn("inline-block", className)} {...rest}>
      <span className="sr-only">Blaiz Money</span>
      <Flame className="h-9 w-9 text-hue-500" />
    </div>
  );
};
