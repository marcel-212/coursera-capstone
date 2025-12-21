import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Home from "../Home";

describe("Home component", () => {
  test("renders all main sections", () => {
    render(<Home />);

    expect(screen.getByRole("region", { name: /hero section/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /highlights/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /testimonials/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /about little lemon/i })).toBeInTheDocument();
  });
});
