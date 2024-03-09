import { render, screen } from "@testing-library/react";
import { Product, ProductProps } from "./product";
import { vi } from "vitest";
import { ReactNode } from "react";

vi.mock("../ui/carousel", async (importOriginal) => {
  return {
    ...(await importOriginal<typeof import("../ui/carousel")>()),
    CarouselContent: ({ children }: { children: ReactNode }) => {
      return <div>{children}</div>;
    },
  };
});

describe("Product", () => {
  it("should render a Product component inside, displaying title, price and rating", () => {
    // Arrange
    const product: ProductProps = {
      title: "Example Product",
      price: 29.99,
      rating: 4.5,
      images: [
        { imageSrc: "image1.jpg" },
        { imageSrc: "image2.jpg" },
        { imageSrc: "image3.jpg" },
      ],
    };

    // Act
    const { baseElement } = render(<Product {...product} />);
    const cardHeaderElement = screen.getByRole("heading", { level: 3 });
    const cardTitleElement = screen.getByText(product.title);
    const priceElement = screen.getByText("$29.99");
    const productRatingElement = screen.getByText(`(${product.rating})`);

    // Assert
    expect(cardHeaderElement).toBeInTheDocument();
    expect(cardTitleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(productRatingElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
