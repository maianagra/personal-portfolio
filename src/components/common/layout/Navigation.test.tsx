import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("renders three navigation links with correct text and hrefs", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);

    const home = screen.getByText("Home").closest("a");
    const projects = screen.getByText("Projects").closest("a");
    const contact = screen.getByText("Contact").closest("a");

    expect(home).toBeTruthy();
    expect(projects).toBeTruthy();
    expect(contact).toBeTruthy();

    expect(home?.getAttribute("href")).toBe("/");
    expect(projects?.getAttribute("href")).toBe("/projects");
    expect(contact?.getAttribute("href")).toBe("/contact");
  });

  it("applies active classes to the current route and hover classes to others", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <Navigation />
      </MemoryRouter>
    );

    const projects = screen.getByText("Projects").closest("a");
    const home = screen.getByText("Home").closest("a");
    const contact = screen.getByText("Contact").closest("a");

    const projectsClass = projects?.getAttribute("class") ?? "";
    const homeClass = home?.getAttribute("class") ?? "";
    const contactClass = contact?.getAttribute("class") ?? "";

    // Active link should include active classes
    expect(projectsClass).toContain("bg-primary");
    expect(projectsClass).toContain("text-background");

    // Inactive links should include hover-related classes
    expect(homeClass).toContain("hover:bg-primary-light");
    expect(homeClass).toContain("hover:text-background");
    expect(contactClass).toContain("hover:bg-primary-light");
    expect(contactClass).toContain("hover:text-background");
  });
});
