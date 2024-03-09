import { render, screen } from "@testing-library/react";
import { Wrapper } from "./wrapper";
import { expect } from "vitest";

describe("Wrapper", () => {
  it("should render a div element with children when no props are passed", () => {
    // Arrange

    // Act
    const { baseElement } = render(<Wrapper>Test</Wrapper>);

    // Assert
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
