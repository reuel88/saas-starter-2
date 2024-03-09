import { FC } from "react";
import { MdStar } from "react-icons/md";
import { cn } from "@repo/utilities";

type ProductRatingProps = Readonly<{
  rating: number;
}>;

export const ProductRating: FC<ProductRatingProps> = ({ rating }) => {
  const positiveRating = rating >= 0 ? rating : 0;
  const ratingRounded = Math.round(positiveRating);

  return (
    <div className="flex">
      {new Array(5).fill("").map((_, index) => (
        <MdStar
          key={index}
          className={cn(
            "h-5 w-5",
            index < ratingRounded ? "text-hue-color" : "text-muted",
          )}
        />
      ))}
      <span className="text-muted-foreground">({rating})</span>
    </div>
  );
};
