import { render, screen } from "@testing-library/react";
import { UserAvatar } from "./user-avatar";

describe("UserAvatar", () => {
  const originalGlobalImage = window.Image;

  beforeEach(() => {
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

  afterEach(() => {
    window.Image = originalGlobalImage;
  });

  it("should render the fallback 'JS' initially", () => {
    // Arrange

    // Act
    const { baseElement } = render(
      <UserAvatar firstName="John" lastName="Smith" />,
    );
    const fallback = screen.getByText("JS");

    // Assert
    expect(fallback).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it("should render the fallback 'J' initially", () => {
    // Arrange

    // Act
    const { baseElement } = render(<UserAvatar name="John Smith" />);
    const fallback = screen.getByText("J");

    // Assert
    expect(fallback).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it("should render the fallback empty string initially", () => {
    // Arrange

    // Act
    const { baseElement } = render(<UserAvatar />);
    const jsfallback = screen.queryByText("JS");
    const jfallback = screen.queryByText("J");

    // Assert
    expect(jsfallback).not.toBeInTheDocument();
    expect(jfallback).not.toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it("should render an AvatarImage component with the provided image source", async () => {
    // Arrange
    const imageSrc = "https://github.com/shadcn.png";

    // Act
    const { baseElement } = render(
      <UserAvatar imageSrc={imageSrc} firstName="John" lastName="Smith" />,
    );
    const avatarImage = await screen.findByRole("img");

    // Assert
    expect(avatarImage).toHaveAttribute("src", imageSrc);
    expect(baseElement).toMatchSnapshot();
  });
});
