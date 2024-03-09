import { render, screen } from "@testing-library/react";
import { HoverUnderline } from "./hover-underline";

describe("HoverUnderline", () => {
  it("should render correctly", () => {
    // Arrange
    const Content = () => <span>Test</span>;

    // Act
    const { baseElement } = render(
      <HoverUnderline>
        <Content />
      </HoverUnderline>,
    );
    const contentText = screen.getByText("Test");

    // Assert
    expect(contentText).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
