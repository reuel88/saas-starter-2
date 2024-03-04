import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./theme-toggle";

describe("ThemeToggle", () => {
  it("should render a dropdown menu with a theme toggle button", () => {
    // Arrange
    render(<ThemeToggle />);

    // Act
    const dropdownMenu = screen.getByRole("button", { name: "Toggle theme" });

    // Assert
    expect(dropdownMenu).toBeInTheDocument();
  });

  it("should show a dropdown menu when the theme toggle button is clicked", async () => {
    // Arrange
    render(<ThemeToggle />);

    // Act
    const dropdownMenuButton = screen.getByRole("button", {
      name: "Toggle theme",
    });
    await userEvent.click(dropdownMenuButton);

    // Assert
    const dropdownMenuContent = screen.getByRole("menu");
    const lightOption = screen.getByRole("menuitem", { name: "Light" });
    const darkOption = screen.getByRole("menuitem", { name: "Dark" });
    const systemOption = screen.getByRole("menuitem", { name: "System" });

    expect(dropdownMenuContent).toBeInTheDocument();
    expect(lightOption).toBeInTheDocument();
    expect(darkOption).toBeInTheDocument();
    expect(systemOption).toBeInTheDocument();
  });
});
