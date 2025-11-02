import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "./Contact";

describe("Contact component", () => {
    it('renders an h2 with the text "Contact"', () => {
        render(<Contact />);
        const heading = screen.getByRole("heading", { level: 2, name: /contact/i });
        expect(heading).toBeTruthy();
        expect(heading.tagName).toBe("H2");
        expect(heading.textContent).toBe("Contact");
    });

    it("applies the expected Tailwind classes to the heading", () => {
        render(<Contact />);
        const heading = screen.getByText("Contact");
        const className = heading.className || "";
        expect(className).toContain("text-2xl");
        expect(className).toContain("font-semibold");
        expect(className).toContain("mb-4");
    });
});