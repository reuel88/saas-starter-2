import { FC } from "react";
import Image from "next/image";
import png from "./empty.png";

type EmptyContentProps = {
  label: string;
};

export const EmptyContent: FC<EmptyContentProps> = ({ label }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-20">
      <div className="relative h-72 w-72">
        <Image src={png} fill alt="Empty" />
      </div>
      <p className="text-center text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
