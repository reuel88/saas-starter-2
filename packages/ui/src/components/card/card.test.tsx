import { render } from "@testing-library/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const testComponent = (
  Component: any,
  expectedTagName: string,
  expectedClassName: string,
) => {
  describe(Component.displayName, () => {
    it("should render a div element with default props when no props are passed", () => {
      // Arrange

      // Act
      const { container } = render(<Component />);

      // Assert
      expect(container.firstChild).toBeInTheDocument();
      // @ts-ignore
      expect(container.firstChild?.tagName).toBe(expectedTagName);
      expect(container.firstChild).toHaveAttribute("class", expectedClassName);
    });

    it("should render a custom element when 'as' prop is passed", () => {
      // Arrange

      // Act
      const { container } = render(<Component as="span" />);

      // Assert
      expect(container.firstChild).toBeInTheDocument();
      // @ts-ignore
      expect(container.firstChild?.tagName).toBe("SPAN");
    });
  });
};

testComponent(
  Card,
  "DIV",
  "rounded-lg border bg-card text-card-foreground shadow-sm",
);
testComponent(CardHeader, "DIV", "flex flex-col space-y-1.5 p-6");
testComponent(
  CardTitle,
  "H3",
  "text-2xl font-semibold leading-none tracking-tight",
);
testComponent(CardDescription, "P", "text-sm text-muted-foreground");
testComponent(CardContent, "DIV", "p-6 pt-0");
testComponent(CardFooter, "DIV", "flex items-center p-6 pt-0");
