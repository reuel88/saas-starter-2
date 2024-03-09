import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Header", () => {
  it("should render without user", () => {
    // Arrange

    // Act
    const { baseElement } = render(<Header user={null} />);

    // Assert
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it("should render with user", () => {
    // Arrange
    const user = {
      name: "John Doe",
      email: "john@doe.com",
    };

    // Act
    const { baseElement } = render(<Header user={user} />);

    // Assert
    expect(screen.queryByText("Sign in")).not.toBeInTheDocument();
    expect(screen.queryByText("Get Started")).not.toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
