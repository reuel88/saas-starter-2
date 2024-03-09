import { render, screen } from "@testing-library/react";
import { ToasterWrapper } from "./toaster-wrapper";

describe("ToasterWrapper", () => {
  it("should render children and Toaster component", () => {
    // Arrange
    const children = <div>Test Children</div>;

    // Act
    const { baseElement } = render(<ToasterWrapper>{children}</ToasterWrapper>);

    // Assert
    expect(screen.getByText("Test Children")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
