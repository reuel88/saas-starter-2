import { render } from "@testing-library/react";
import { PrivacyNotice } from "./privacy-notice";

describe("PrivacyNotice", () => {
  it("should render a div container with children when no 'as' prop is passed", () => {
    // Arrange

    // Act
    const { baseElement } = render(<PrivacyNotice />);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
