import { fireEvent, render, screen } from "@testing-library/react";
import Cookies from "js-cookie";
import { vi } from "vitest";
import { useCookie } from "./use-cookie";

describe("useCookie", () => {
  const MockComponent = ({
    name,
    defaultValue,
    value,
  }: {
    name: string;
    defaultValue: any;
    value?: any;
  }) => {
    const [cookie, setCookie, removeCookie] = useCookie(name, defaultValue);

    return (
      <div>
        <div data-testid="value">{cookie}</div>
        <button onClick={() => setCookie(value)}>Set</button>
        <button onClick={() => removeCookie()}>Remove</button>
      </div>
    );
  };

  it("should return default value when cookie doesn't exist", () => {
    // Arrange
    const name = "testCookie";
    const defaultValue = "default";
    vi.spyOn(Cookies, "set").mockImplementation(() => undefined);

    // Act
    const { baseElement } = render(
      <MockComponent name={name} defaultValue={defaultValue} />,
    );
    const valueContainer = screen.getByTestId("value");

    // Assert
    expect(Cookies.set).toHaveBeenCalledWith(
      name,
      JSON.stringify({ value: defaultValue }),
    );
    expect(valueContainer.innerHTML).toBe(defaultValue);
    expect(baseElement).toMatchSnapshot();
  });

  it("should return cookie value when it exists", () => {
    // Arrange
    const name = "testCookie";
    const defaultValue = "default";
    const cookieValue = "cookieValue";
    // @ts-ignore
    vi.spyOn(Cookies, "get").mockImplementation(() => {
      return JSON.stringify({ value: cookieValue });
    });

    // Act
    const { baseElement } = render(
      <MockComponent name={name} defaultValue={defaultValue} />,
    );
    const valueContainer = screen.getByTestId("value");

    // Assert
    expect(valueContainer.innerHTML).toBe(cookieValue);
    expect(baseElement).toMatchSnapshot();
  });

  it("should handle null values for the cookie and default value", () => {
    // Arrange
    const name = "testCookie";
    const defaultValue = null;
    // @ts-ignore
    vi.spyOn(Cookies, "get").mockImplementation(() => {
      return JSON.stringify({ value: defaultValue });
    });

    // Act
    const { baseElement } = render(
      <MockComponent name={name} defaultValue={defaultValue} />,
    );
    const valueContainer = screen.getByTestId("value");

    // Assert
    expect(valueContainer.innerHTML).toBe("");
    expect(baseElement).toMatchSnapshot();
  });

  it("should set cookie value when setCookie is called", () => {
    // Arrange
    const name = "testCookie";
    const defaultValue = "default";
    const newValue = "new value";

    const setSpy = vi.spyOn(Cookies, "set").mockImplementation(() => undefined);
    const { getByTestId } = render(
      <MockComponent
        name={name}
        defaultValue={defaultValue}
        value={newValue}
      />,
    );
    const setButton = screen.getByText("Set");

    // Act
    fireEvent.click(setButton);

    // Assert
    expect(setSpy).toHaveBeenCalledWith(
      name,
      JSON.stringify({ value: newValue }),
      undefined,
    );
    expect(getByTestId("value").innerHTML).toBe(newValue);
  });

  it("should remove cookie value when removeCookie is called", () => {
    // Arrange
    const name = "testCookie";
    const defaultValue = "default";
    const newValue = "new value";

    const removeSpy = vi
      .spyOn(Cookies, "remove")
      .mockImplementation(() => undefined);
    const { getByTestId } = render(
      <MockComponent
        name={name}
        defaultValue={defaultValue}
        value={newValue}
      />,
    );
    const removeButton = screen.getByText("Remove");

    // Act
    fireEvent.click(removeButton);

    // Assert
    expect(removeSpy).toHaveBeenCalledWith(name);
    expect(getByTestId("value").innerHTML).toBe("");
  });
});
