import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { vi } from "vitest";
import { Products } from "./products";

// Note: The CarouselContent component is mocked to avoid rendering the actual carousel component
// because there is an issue with the carouselRef in CarouselContent.
vi.mock("../ui/carousel", async (importOriginal) => {
  return {
    ...(await importOriginal<typeof import("../ui/carousel")>()),
    CarouselContent: ({ children }: { children: ReactNode }) => {
      return <div>{children}</div>;
    },
  };
});

describe("Products", () => {
  it("should display the title, price, rating, and images of each product", () => {
    // Arrange
    const products = [
      {
        title: "Product 1",
        price: 10,
        rating: 4,
        images: [{ imageSrc: "image1.jpg" }],
      },
      {
        title: "Product 2",
        price: 20,
        rating: 3,
        images: [{ imageSrc: "image2.jpg" }],
      },
    ];

    // Act
    const { baseElement } = render(<Products products={products} />);

    // Assert
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByAltText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("$20")).toBeInTheDocument();
    expect(screen.getByAltText("Product 2")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
