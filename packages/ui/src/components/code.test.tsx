import { render, screen } from "@testing-library/react";
import { Code } from "./code";

it("should render a <code> element with the given children", () => {
  // Arrange
  const children = "Test Children";

  // Act
  render(<Code>{children}</Code>);

  // Assert
  expect(screen.getByText(children)).toBeInTheDocument();
});
