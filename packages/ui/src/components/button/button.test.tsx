import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("should render a button element with default variant and size when no props are passed", () => {
    // Arrange
    const expectedClasses = [
      "bg-primary",
      "text-primary-foreground",
      "h-10",
      "px-4",
      "py-2",
    ];

    // Act
    const { baseElement } = render(<Button />);
    const buttonElement = screen.getByRole("button");

    // Assert
    expectedClasses.forEach((expectedClass) => {
      expect(buttonElement).toHaveClass(expectedClass);
    });
    expect(buttonElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it("should render a Slot component instead of a button element when asChild prop is true", () => {
    // Arrange
    const expectedClasses = [
      "bg-primary",
      "text-primary-foreground",
      "h-10",
      "px-4",
      "py-2",
    ];

    // Act
    const { baseElement } = render(
      <Button asChild={true} data-testid="slot">
        <div>Slot</div>
      </Button>,
    );
    const slotElement = screen.getByTestId("slot");

    // Assert
    expectedClasses.forEach((expectedClass) => {
      expect(slotElement).toHaveClass(expectedClass);
    });
    expect(slotElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
