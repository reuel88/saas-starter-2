import { FC } from "react";
import { Product, ProductProps } from "./product";

type ProductsProps = {
  products: ProductProps[];
};

export const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <section>
      <header className="flex flex-col">
        <h2 className="text-xl">Products</h2>
        <h3 className="text-muted-foreground">
          <strong className="text-hue-color">10 products</strong> in{" "}
          <strong className="text-hue-color">Categories</strong>
        </h3>
      </header>
      <div className="grid grid-cols-2 gap-4 py-8 lg:grid-cols-3">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </section>
  );
};
