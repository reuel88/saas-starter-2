import { render, screen } from "@testing-library/react";
import { Listing } from "./listing";

describe("Listing", () => {
  const renderListing = (props: any) => render(<Listing {...props} />);

  const testProps = {
    title: "Test Listing",
    price: 100,
    location: "Test Location",
    description: "Test Description",
  };

  it("should display the listing details", () => {
    // Arrange

    // Act
    const { baseElement } = renderListing(testProps);

    // Assert
    Object.values(testProps).forEach((value) => {
      if (typeof value === "string") {
        expect(screen.getByText(value.toString())).toBeInTheDocument();
      } else if (value === 100) {
        // This is the price
        expect(screen.getByText("$100")).toBeInTheDocument();
      }
    });
    expect(baseElement).toMatchSnapshot();
  });

  it("should format the price as an Australian dollar currency", () => {
    // Arrange

    // Act
    const { baseElement } = renderListing({ ...testProps, price: 1000 });

    // Assert
    expect(screen.getByText("$1,000")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it("should display the image with the cover-fill and aspect-video classes", () => {
    // Arrange

    // Act
    const { baseElement } = renderListing({
      ...testProps,
      imageSrc: "test.jpg",
    });
    const image = screen.getByAltText(testProps.title);

    // Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass("object-cover");
    expect(image).toHaveClass("aspect-video");
    expect(baseElement).toMatchSnapshot();
  });
});
