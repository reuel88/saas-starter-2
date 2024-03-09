import { render, screen } from "@testing-library/react";
import { ProductRating } from "./product-rating";

describe("ProductRating", () => {
  it("should render 4 stars when rating", () => {
    // Arrange

    // Act
    const { baseElement } = render(<ProductRating rating={4} />);

    // Assert
    expect(screen.getByText("(4)")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it("should render 0 stars when negative rating", () => {
    // Arrange

    // Act
    const { baseElement } = render(<ProductRating rating={-4} />);

    // Assert
    expect(screen.getByText("(-4)")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
