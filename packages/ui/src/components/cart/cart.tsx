import { FC } from "react";
import { Button, buttonVariants } from "../button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { ShoppingCart, X } from "lucide-react";

type CartProps = {
  cart: Partial<{
    id: number;
    products: {
      id: number;
      title: string;
      price: number;
      quantity: number;
      total: number;
      discountPercentage: number;
      discountedPrice: number;
      thumbnail: string;
    }[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
  }>;
};

export const Cart: FC<CartProps> = ({ cart }) => {
  const { products, total } = cart;

  return (
    <>
      <Sheet>
        <SheetTrigger
          className={buttonVariants({ variant: "outline" })}
          data-testid="checkout"
        >
          <ShoppingCart className="h-5 w-5" />
          <X className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Checkout</span>
          <span className="text-muted-foreground">{products?.length ?? 0}</span>
          <span className="sr-only">items</span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <h2 className="text-lg font-medium">Shopping Cart</h2>
          </SheetHeader>
          <div>
            {products?.map((product) => (
              <article
                key={product.id}
                className="flex items-center space-x-4 border-b py-6"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-16 w-16 rounded-md object-cover"
                />
                <div className="flex-1">
                  <h3 className="line-clamp-1 font-medium text-muted-foreground">
                    {product.title}
                  </h3>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {product.quantity} x{" "}
                        {new Intl.NumberFormat("en-AU", {
                          style: "currency",
                          currency: "AUD",
                          minimumFractionDigits: 0,
                        }).format(product.price)}
                      </p>
                      <strong>
                        {new Intl.NumberFormat("en-AU", {
                          style: "currency",
                          currency: "AUD",
                          minimumFractionDigits: 0,
                        }).format(product.total)}
                      </strong>
                    </div>

                    <button
                      type="button"
                      className="text-muted-foreground hover:underline "
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <SheetFooter className="flex-col items-center space-y-0 sm:flex-col sm:justify-normal sm:space-x-0">
            <strong className="py-4 text-lg font-medium">
              Order Total:{" "}
              {new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                minimumFractionDigits: 0,
              }).format(total ?? 0)}
            </strong>
            <Button className="w-full">Checkout</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
