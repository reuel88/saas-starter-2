import { cn } from "@repo/utilities";
import { FC, ReactNode } from "react";
import { LucideIcon } from "lucide-react";

type PageHeaderProps = {
  children?: ReactNode;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
};

export const PageHeader: FC<PageHeaderProps> = ({
  children,
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}) => {
  return (
    <header className="my-8 flex items-stretch gap-x-6 px-4 lg:px-8">
      <div className="flex items-center gap-x-3">
        <div className="h-full flex-1">
          <div className={cn("w-fit rounded-md p-2", bgColor)}>
            <Icon className={cn("h-10 w-10", iconColor)} />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="max-w-[50ch] text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      {children && <div>{children}</div>}
    </header>
  );
};
