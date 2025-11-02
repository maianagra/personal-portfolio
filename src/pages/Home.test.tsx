import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Home from "./Home";

// Mock the Chat component that Home imports
vi.mock("../components/Chat", () => ({
    default: () => <div data-testid="mock-chat">Mock Chat</div>,
}));


describe("Home page", () => {
    it("renders without crashing and includes the Chat component", () => {
        render(<Home />);
        const chat = screen.getByTestId("mock-chat");
        expect(chat).toBeTruthy();
    });
});