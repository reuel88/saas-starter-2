import { render } from "@testing-library/react";
import { z } from "zod";
import { useZodForm } from "./use-zod-form";

describe("useZodForm", () => {
  it("render form correctly", () => {
    // Arrange
    const MockComponent = () => {
      const schema = z.object({
        name: z.string(),
        age: z.number(),
      });

      const form = useZodForm({ schema });

      return (
        <form onSubmit={form.handleSubmit(() => {})}>
          <input {...form.register("name")} />
          <input {...form.register("age")} />
        </form>
      );
    };

    // Act
    const { baseElement } = render(<MockComponent />);

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
