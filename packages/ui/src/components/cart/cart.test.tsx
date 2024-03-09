import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cart } from "./cart";

describe("Container", () => {
  it("should render a button with a shopping cart icon and the number of items in the cart", () => {
    // Arrange
    const cart = {
      products: [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          quantity: 2,
          total: 20,
          discountPercentage: 0,
          discountedPrice: 0,
          thumbnail: "product1.jpg",
        },
        {
          id: 2,
          title: "Product 2",
          price: 15,
          quantity: 3,
          total: 45,
          discountPercentage: 0,
          discountedPrice: 0,
          thumbnail: "product2.jpg",
        },
      ],
      total: 65,
    };

    // Act
    const { baseElement } = render(<Cart cart={cart} />);

    // Assert
    expect(screen.getByText("Checkout")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();

    expect(baseElement).toMatchSnapshot();
  });

  it("should display a sheet when the button is clicked", async () => {
    // Arrange
    const cart = {
      products: [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          quantity: 2,
          total: 20,
          discountPercentage: 0,
          discountedPrice: 0,
          thumbnail: "product1.jpg",
        },
      ],
      total: 20,
    };

    // Act
    const { baseElement } = render(<Cart cart={cart} />);
    const checkoutButton = screen.getByTestId("checkout");
    await userEvent.click(checkoutButton);

    // Assert
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();

    expect(baseElement).toMatchSnapshot();
  });
});
