import { render, screen } from "@testing-library/react";
import { CoverImage } from "./cover-image";

describe("CoverImage", () => {
  it("should render an image with the given source and alt text", () => {
    // Arrange
    const title = "Test Title";
    const src = "test-image.jpg";
    const slug = "test-slug";

    // Act
    render(<CoverImage title={title} src={src} slug={slug} />);

    // Assert
    const imageElement = screen.getByAltText(`Cover Image for ${title}`);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", src);
  });
});
