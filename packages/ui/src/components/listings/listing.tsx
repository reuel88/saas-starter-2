import { FC, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";
import { Button } from "../button";

export type ListingProps = {
  title: string;
  price: number;
  location?: string;
  imageSrc?: string;
  description: ReactNode;
};
export const Listing: FC<ListingProps> = ({
  title,
  price,
  location,
  imageSrc,
  description,
  ...rest
}) => {
  return (
    <Card as="article" className="flex flex-col" {...rest}>
      <CardHeader as="header">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-extrabold text-hue-color">
            {new Intl.NumberFormat("en-AU", {
              style: "currency",
              currency: "AUD",
              minimumFractionDigits: 0,
            }).format(price)}
          </p>
          {location && (
            <p className="text-sm text-muted-foreground">{location}</p>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="aspect-video object-cover"
          />
        )}

        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter as="footer" className="mt-auto flex gap-4">
        <Button className="min-w-20" type="button">
          View
        </Button>
        <Button variant="outline" className="min-w-20" type="button">
          Reply
        </Button>
      </CardFooter>
    </Card>
  );
};
