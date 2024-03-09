import { FC } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "../card";
import { Button } from "../button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { ProductRating } from "./product-rating";

export type ProductProps = {
  title: string;
  price: number;
  rating: number;
  images?: { imageSrc: string }[];
};

export const Product: FC<ProductProps> = ({ title, price, rating, images }) => {
  return (
    <Card as="article">
      <Carousel>
        <CarouselContent>
          {images?.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image.imageSrc}
                alt={title}
                className="aspect-square rounded-t-lg object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <CardHeader className="space-y-0">
        <CardTitle className="line-clamp-2 text-base font-normal text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">
            {new Intl.NumberFormat("en-AU", {
              style: "currency",
              currency: "AUD",
              minimumFractionDigits: 0,
            }).format(price)}
          </p>
          <div>
            <ProductRating rating={rating} />
          </div>
        </div>
      </CardHeader>
      <CardFooter as="footer">
        <Button type="button" className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
