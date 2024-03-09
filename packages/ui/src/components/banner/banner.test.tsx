import { render, screen } from "@testing-library/react";
import { Banner } from "./banner";

describe("Banner", () => {
  it("should render a banner with the provided children and cookie name", () => {
    // Arrange
    const children = "Test Children";
    const cookieName = "Test Cookie";

    // Act
    render(<Banner cookieName={cookieName}>{children}</Banner>);

    // Assert
    expect(screen.getByText(children)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /dismiss/i }),
    ).toBeInTheDocument();
  });
});
