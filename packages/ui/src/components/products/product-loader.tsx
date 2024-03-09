import { FC } from "react";
import { Card, CardFooter, CardHeader } from "../card";
import { Skeleton } from "../ui/skeleton";

export type ProductLoaderProps = {};

export const ProductLoader: FC<ProductLoaderProps> = () => {
  return (
    <Card>
      {/* Image */}
      <Skeleton className="aspect-square" />

      <CardHeader className="space-y-0">
        {/* Title */}
        <div className="py-1">
          <Skeleton className="h-4" />
        </div>

        {/* Price & Rating */}
        <div className="py-[5px]">
          <Skeleton className=" h-[18px]" />
        </div>
      </CardHeader>

      {/* CTA */}
      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
};
