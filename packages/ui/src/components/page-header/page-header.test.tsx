import { render, screen } from "@testing-library/react";
import { PageHeader } from "./page-header";
import { LucideStar } from "lucide-react";

describe("Container", () => {
  it("should render a header with a title and description", () => {
    // Arrange
    const title = "Test Title";
    const description = "Test Description";

    // Act
    const { baseElement } = render(
      <PageHeader title={title} description={description} icon={LucideStar} />,
    );

    // Assert
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
