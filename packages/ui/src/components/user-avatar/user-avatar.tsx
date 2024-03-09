import { cn } from "@repo/utilities";
import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const avatarVariants = cva("", {
  variants: {
    size: {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type UserAvatarProps = VariantProps<typeof avatarVariants> & {
  className?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  imageSrc?: string;
};

export const UserAvatar: FC<UserAvatarProps> = ({
  className = "",
  firstName,
  lastName,
  name,
  imageSrc,
  size,
}) => {
  const haveFullName = firstName && lastName;
  const avatarName = haveFullName ? `${firstName} ${lastName}` : name || "";

  const moniker = haveFullName
    ? `${firstName.substring(0, 1)}${lastName.substring(0, 1)}`
    : avatarName.substring(0, 1);

  return (
    <Avatar className={cn(avatarVariants({ size, className }))}>
      <AvatarImage src={imageSrc} alt={avatarName} />
      <AvatarFallback>{moniker.toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
