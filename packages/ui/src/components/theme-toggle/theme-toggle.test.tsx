import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./theme-toggle";
import { vi } from "vitest";
import * as nextTheme from "next-themes";

vi.mock("next-themes", async (importOriginal) => {
  return {
    ...(await importOriginal<typeof import("next-themes")>()),
    useTheme: () => vi.fn(() => {}),
  };
});

describe("ThemeToggle", () => {
  it("should render a dropdown menu with a theme toggle button", () => {
    // Arrange

    // Act
    render(<ThemeToggle />);
    const dropdownMenu = screen.getByRole("button", { name: "Toggle theme" });

    // Assert
    expect(dropdownMenu).toBeInTheDocument();
  });

  it("should show a dropdown menu when the theme toggle button is clicked", async () => {
    // Arrange
    const { baseElement } = render(<ThemeToggle />);

    // Act
    const dropdownMenuButton = screen.getByRole("button", {
      name: "Toggle theme",
    });
    await userEvent.click(dropdownMenuButton);
    const dropdownMenuContent = screen.getByRole("menu");
    const lightOption = screen.getByRole("menuitem", { name: "Light" });
    const darkOption = screen.getByRole("menuitem", { name: "Dark" });
    const systemOption = screen.getByRole("menuitem", { name: "System" });

    // Assert
    expect(dropdownMenuContent).toBeInTheDocument();
    expect(lightOption).toBeInTheDocument();
    expect(darkOption).toBeInTheDocument();
    expect(systemOption).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it("should call setTheme with 'light' when light option is clicked", async () => {
    // Arrange
    const setThemeMock = vi.fn();
    vi.spyOn(nextTheme, "useTheme").mockReturnValue({
      setTheme: setThemeMock,
      themes: [],
    });

    // Act
    render(<ThemeToggle />);
    const dropdownMenuButton = screen.getByRole("button", {
      name: "Toggle theme",
    });
    await userEvent.click(dropdownMenuButton);
    const option = screen.getByRole("menuitem", { name: "Light" });
    await userEvent.click(option);

    // Assert
    expect(setThemeMock).toHaveBeenCalledWith("light");
  });

  it("should call setTheme with 'dark' when dark option is clicked", async () => {
    // Arrange
    const setThemeMock = vi.fn();
    vi.spyOn(nextTheme, "useTheme").mockReturnValue({
      setTheme: setThemeMock,
      themes: [],
    });

    // Act
    render(<ThemeToggle />);
    const dropdownMenuButton = screen.getByRole("button", {
      name: "Toggle theme",
    });
    await userEvent.click(dropdownMenuButton);
    const option = screen.getByRole("menuitem", { name: "Dark" });
    await userEvent.click(option);

    // Assert
    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });

  it("should call setTheme with 'system' when system option is clicked", async () => {
    // Arrange
    const setThemeMock = vi.fn();
    vi.spyOn(nextTheme, "useTheme").mockReturnValue({
      setTheme: setThemeMock,
      themes: [],
    });

    // Act
    render(<ThemeToggle />);
    const dropdownMenuButton = screen.getByRole("button", {
      name: "Toggle theme",
    });
    await userEvent.click(dropdownMenuButton);
    const option = screen.getByRole("menuitem", { name: "System" });
    await userEvent.click(option);

    // Assert
    expect(setThemeMock).toHaveBeenCalledWith("system");
  });
});
