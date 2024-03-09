import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { HeaderCta } from "./header-cta";
import * as HeaderContextProvider from "./header-context-provider";

vi.mock("./header-context-provider", async (importOriginal) => {
  return {
    ...(await importOriginal<typeof import("./header-context-provider")>()),
    useHeader: vi.fn(() => ({ user: null })),
  };
});

describe("HeaderCta", () => {
  it('should render "Sign in" and "Get Started" buttons when user is not logged in', () => {
    // Arrange

    // Act
    render(<HeaderCta />);
    const signInButton = screen.getByText("Sign in");
    const getStartedButton = screen.getByText("Get Started");

    // Assert
    expect(signInButton).toBeInTheDocument();
    expect(getStartedButton).toBeInTheDocument();
  });

  it("should render user avatar and popover when user is logged in", async () => {
    // Arrange
    const user = {
      firstName: "John",
      lastName: "Doe",
      name: "",
      avatar: {
        imageSrc: "avatar.jpg",
      },
      email: "john.doe@example.com",
    };
    vi.spyOn(HeaderContextProvider, "useHeader").mockImplementation(() => {
      return {
        user,
      };
    });

    // Act
    render(<HeaderCta />);
    const popoverTrigger = screen.getByRole("button", { name: "JD" });
    await userEvent.click(popoverTrigger);
    const userAvatar = screen.getByText("John Doe");

    // Assert
    expect(popoverTrigger).toBeInTheDocument();
    expect(userAvatar).toBeInTheDocument();
  });
});
