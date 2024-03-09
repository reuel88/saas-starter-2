import { render, screen } from "@testing-library/react";
import { Container } from "./container";

describe("Container", () => {
  it("should render a div container with children when no 'as' prop is passed", () => {
    // Arrange

    // Act
    const { baseElement } = render(
      <Container data-testid="container">Test</Container>,
    );
    const containerElement = screen.getByTestId("container");

    // Assert
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(containerElement).toHaveAttribute(
      "class",
      "mx-auto max-w-7xl px-6 lg:px-8",
    );
    expect(baseElement).toMatchSnapshot();
  });
});
