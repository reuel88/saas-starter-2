import { render, screen } from "@testing-library/react";
import {Card} from "./card";

it('should render a card component with a title, children, and href', () => {
    // Arrange
    const className = "test-class";
    const title = "Test Title";
    const children = "Test Children";
    const href = "https://example.com";

    // Act
    render(<Card className={className} title={title} children={children} href={href} />);

    // Assert
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', `${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`);
});