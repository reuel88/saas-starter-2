import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {Button} from "./button";
import {vi} from "vitest";

describe('Button', () => {
    it('should render button with children', () => {
        render(<Button appName="Test App">Test Button</Button>);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Test Button');
    });

    it('should render button onClick calls alert', async () => {
        const spy = vi.spyOn(window, 'alert').mockImplementation(() => {});
        const user = userEvent.setup();
        render(<Button appName="Test App">Test Button</Button>);

        const button = screen.getByRole('button');
        await user.click(button);

        expect(spy).toHaveBeenCalledTimes(1);
    })
})
