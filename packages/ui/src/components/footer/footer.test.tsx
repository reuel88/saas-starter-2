import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("CompanyLogo", () => {
  it("should render correctly", () => {
    // Arrange

    // Act
    const { baseElement } = render(<Footer />);
    const descriptionElement = screen.getByText(
      /Making the world a better place through constructing elegant hierarchies/,
    );

    // Assert
    expect(descriptionElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
