import { render, screen } from "@testing-library/react";
import Page from "./page";

jest.mock("next/navigation", () => {
  const original = jest.requireActual("next/navigation");

  return {
    ...original,
    useRouter() {
      return {
        push: jest.fn(),
      };
    },
  };
});

it("should render the main content with correct styles and layout", async () => {
  const { baseElement } = render(await Page({ params: { locale: "en" } }));

  expect(screen.getByRole("main")).toBeInTheDocument();
  expect(baseElement).toMatchSnapshot();
});
