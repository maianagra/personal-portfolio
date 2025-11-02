import { render, screen } from "@testing-library/react";
import Projects from "./Projects";
import { describe, it, expect } from "vitest";

describe("Projects component", () => {
    it('renders an h2 level-2 heading with the text "Projects"', () => {
        render(<Projects />);
        const heading = screen.getByRole("heading", { name: /Projects/i, level: 2 });
        expect(heading).toBeTruthy();
        expect(heading.textContent).toBe("Projects");
    });

    it("applies the expected className to the heading", () => {
        render(<Projects />);
        const heading = screen.getByRole("heading", { name: /Projects/i });
        expect(heading.className).toBe("text-2xl font-semibold mb-4");
    });
});