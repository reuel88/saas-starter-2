import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

it("should render the main content with correct styles and layout", () => {
  const { baseElement } = render(<Page />);

  expect(screen.getByRole("main")).toBeInTheDocument();

  expect(baseElement).toMatchSnapshot();
});
