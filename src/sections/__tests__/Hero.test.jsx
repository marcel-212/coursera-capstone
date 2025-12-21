import { render, screen, within } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Hero from "../Hero";

describe("Hero component", () => {
  test("renders the hero section landmark", () => {
    render(<Hero />);
    const section = screen.getByRole("region", { name: /hero section/i });
    expect(section).toBeInTheDocument();
  });

  test("renders headings and paragraph", () => {
    render(<Hero />);
    const section = screen.getByRole("region", { name: /hero section/i });
    const sectionWithin = within(section);

    expect(sectionWithin.getByRole("heading", { name: /little lemon/i })).toBeInTheDocument();
    expect(sectionWithin.getByRole("heading", { name: /chicago/i })).toBeInTheDocument();
    expect(
      sectionWithin.getByText(/a place for good food and good times/i)
    ).toBeInTheDocument();
  });

  test("renders image with correct alt", () => {
    render(<Hero />);
    const img = screen.getByRole("img", { name: /food showcase at little lemon/i });
    expect(img).toBeInTheDocument();
  });
});