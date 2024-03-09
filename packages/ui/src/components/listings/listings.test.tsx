import { render, screen } from "@testing-library/react";
import { Listings } from "./listings";

describe("Listings", () => {
  it("should render search results header", () => {
    // Arrange

    // Act
    const { baseElement } = render(<Listings listings={[]} />);
    const header = screen.getByRole("heading", {
      level: 2,
      name: /search results/i,
    });

    // Assert
    expect(header).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it("should render correct number of listings", () => {
    // Arrange
    const listings = [
      { id: 1, title: "Car 1", price: 10000, description: "Description 1" },
      { id: 2, title: "Car 2", price: 1000, description: "Description 2" },
      { id: 3, title: "Car 3", price: 100, description: "Description 3" },
    ];

    // Act
    render(<Listings listings={listings} />);
    const listingElements = screen.getAllByTestId("listing");

    // Assert
    expect(listingElements.length).toBe(listings.length);
  });
});
