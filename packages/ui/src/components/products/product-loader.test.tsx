import { render } from "@testing-library/react";
import { ProductLoader } from "./product-loader";

describe("ProductLoader", () => {
  it("should render correctly", () => {
    // Arrange

    // Act
    const { baseElement } = render(<ProductLoader />);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
