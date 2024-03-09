import { Avatar, AvatarImage } from "../ui/avatar";
import { FC } from "react";
import { cn } from "@repo/utilities";

type BotAvatarProps = {
  className?: string;
  imageSrc?: string;
};

export const BotAvatar: FC<BotAvatarProps> = ({
  className = "",
  imageSrc = "logo.png",
}) => {
  return (
    <Avatar className={cn("h-8 w-8", className)}>
      <AvatarImage src={imageSrc} />
    </Avatar>
  );
};
