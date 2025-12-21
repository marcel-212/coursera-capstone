import { render, screen, within } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import About from "../About";

describe("About component", () => {
  test("renders the section landmark", () => {
    render(<About />);
    const section = screen.getByRole("region", { name: /about little lemon/i });
    expect(section).toBeInTheDocument();
  });

  test("renders title, subheading, and paragraph", () => {
    render(<About />);
    const section = screen.getByRole("region", { name: /about little lemon/i });
    const sectionWithin = within(section);

    expect(sectionWithin.getByRole("heading", { name: /little lemon/i })).toBeInTheDocument();
    expect(sectionWithin.getByRole("heading", { name: /chicago/i })).toBeInTheDocument();
    expect(
      sectionWithin.getByText(/at our restaurant, we are passionate about serving high-quality food/i)
    ).toBeInTheDocument();
  });

  test("renders images with correct alt text", () => {
    render(<About />);
    const img1 = screen.getByRole("img", { name: /man cooking/i });
    const img2 = screen.getByRole("img", { name: /restaurant view/i });

    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
  });
});