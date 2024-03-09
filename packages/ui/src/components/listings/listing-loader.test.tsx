import { render } from "@testing-library/react";
import { ListingLoader } from "./listing-loader";

describe("ListingLoader", () => {
  it("should render correctly", () => {
    // Arrange

    // Act
    const { baseElement } = render(<ListingLoader />);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
