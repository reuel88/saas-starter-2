import { DateFormat } from "./date-format";
import { render } from "@testing-library/react";

describe("DateFormat", () => {
  it("should return a <time> element with the correct dateTime attribute and formatted date string when given a valid dateString", () => {
    // Arrange
    const dateString = "2022-01-01";

    // Act
    const { getByText } = render(<DateFormat dateString={dateString} />);
    const timeElement = getByText("January 1, 2022");

    // Assert
    expect(timeElement).toBeInTheDocument();
    expect(timeElement.tagName).toBe("TIME");
    expect(timeElement.getAttribute("dateTime")).toBe(dateString);
  });

  it("should return an empty <time> element when given an empty dateString", () => {
    // Arrange
    const dateString = "";

    // Act
    const { container } = render(<DateFormat dateString={dateString} />);
    const timeElement = container.querySelector("time");

    // Assert
    expect(timeElement).toBeNull();
  });
});
