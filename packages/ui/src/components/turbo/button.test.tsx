import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";
import { vi } from "vitest";

describe("Button", () => {
  it("should render button with children", () => {
    // Arrange

    // Act
    render(<Button appName="Test App">Test Button</Button>);
    const button = screen.getByRole("button");

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Test Button");
  });

  it("should render button onClick calls alert", async () => {
    // Arrange
    const spy = vi.spyOn(window, "alert").mockImplementation(() => {});

    // Act
    render(<Button appName="Test App">Test Button</Button>);
    const button = screen.getByRole("button");
    await userEvent.click(button);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
