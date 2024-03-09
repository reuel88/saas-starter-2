import { render, screen } from "@testing-library/react";
import { CompanyLogo } from "./company-logo";

describe("CompanyLogo", () => {
  it("should render the company logo", () => {
    // Arrange

    // Act
    const { baseElement } = render(<CompanyLogo data-testid="company-logo" />);
    const logoContainer = screen.getByTestId("company-logo");

    // Assert
    expect(logoContainer).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
