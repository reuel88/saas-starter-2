import { render, screen } from "@testing-library/react";
import { EmptyContent } from "./empty-content";

describe("EmptyContent", () => {
  it('should render an image with alt text "Empty" and a label below it', () => {
    const { baseElement } = render(<EmptyContent label="Test Label" />);

    const image = screen.getByAltText("Empty");
    const label = screen.getByText("Test Label");
    expect(image).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
