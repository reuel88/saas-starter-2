import { cn } from "@repo/utilities";
import { FC } from "react";

export type CoverImageProps = {
  title: string;
  src: string;
  slug?: string;
};

export const CoverImage: FC<CoverImageProps> = ({ title, src, slug }) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small aspect-video w-full object-cover", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? <a href={`/posts/${slug}`}>{image}</a> : image}
    </div>
  );
};
