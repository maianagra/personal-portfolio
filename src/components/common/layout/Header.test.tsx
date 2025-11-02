import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header component", () => {
  it("renders without crashing and contains a header element", () => {
    render(<Header />);
    const banner = screen.getByRole("banner");
    expect(banner).toBeInTheDocument();
  });

  it("renders the main heading with the correct text and heading level", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", {
      name: /Maia Nagra/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Maia Nagra");
  });

  it("contains a divider div", () => {
    render(<Header />);
    const banner = screen.getByRole("banner");
    const divider = banner.querySelector("div");
    expect(divider).toBeTruthy();
  });
});
