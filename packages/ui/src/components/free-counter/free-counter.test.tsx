import { render, screen } from "@testing-library/react";
import { FreeCounter } from "./free-counter";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("FreeCounter", () => {
  it("should render correctly", () => {
    // Arrange
    const onClickMock = vi.fn();

    // Act
    const { baseElement } = render(
      <FreeCounter
        count={0}
        max={10}
        onClick={onClickMock}
        data-testid="free-counter"
      />,
    );
    const divElement = screen.getByTestId("free-counter");

    // Assert
    expect(divElement).toHaveClass("flex items-center gap-4");
    expect(baseElement).toMatchSnapshot();
  });

  it("should call onClick when button is clicked", async () => {
    // Arrange
    const onClickMock = vi.fn();

    // Act
    render(
      <FreeCounter
        count={0}
        max={10}
        onClick={onClickMock}
        data-testid="free-counter"
      />,
    );
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // Assert
    expect(onClickMock).toHaveBeenCalled();
  });
});
