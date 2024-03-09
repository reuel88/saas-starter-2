import { FC } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../card";
import { Skeleton } from "../ui/skeleton";

type ListingLoaderProps = {};

export const ListingLoader: FC<ListingLoaderProps> = () => {
  return (
    <Card>
      <CardHeader>
        {/* Title */}
        <Skeleton className="h-6" />

        {/* Price & Location */}
        <div className="flex h-7 items-center">
          <Skeleton className="h-5 w-full" />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Image */}
        <Skeleton className="aspect-video" />

        {/* Description */}
        <div className="space-y-1.5 pt-1.5">
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-3/4" />
        </div>
      </CardContent>

      {/* CTA */}
      <CardFooter className="flex gap-4">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-20" />
      </CardFooter>
    </Card>
  );
};
