import { render, screen } from "@testing-library/react";
import { BotAvatar } from "./bot-avatar";

describe("UserAvatar", () => {
  const originalGlobalImage = window.Image;

  beforeAll(() => {
    (window.Image as any) = class MockImage {
      onload: () => void = () => {};
      src: string = "";
      constructor() {
        setTimeout(() => {
          this.onload();
        }, 300);
        return this;
      }
    };
  });

  afterAll(() => {
    window.Image = originalGlobalImage;
  });

  it("should render an Avatar component with a default image source when no imageSrc prop is provided", async () => {
    // Arrange
    const expectedSrc = "logo.png";

    // Act
    const { baseElement } = render(<BotAvatar />);
    const avatarImage = await screen.findByRole("img");

    // Assert
    expect(avatarImage).toHaveAttribute("src", expectedSrc);
    expect(baseElement).toMatchSnapshot();
  });

  it("should render an BotImage component with the provided image source", async () => {
    // Arrange
    const imageSrc = "https://github.com/shadcn.png";

    // Act
    const { baseElement } = render(<BotAvatar imageSrc={imageSrc} />);
    const avatarImage = await screen.findByRole("img");

    // Assert
    expect(avatarImage).toHaveAttribute("src", imageSrc);
    expect(baseElement).toMatchSnapshot();
  });
});
