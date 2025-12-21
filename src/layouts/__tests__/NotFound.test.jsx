import { render, screen, within } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import NotFound from "../NotFound";

describe("NotFound component", () => {
  test("renders not found section with heading", () => {
    render(<NotFound />);
    const section = screen.getByRole("region", { name: /page not found/i });
    expect(section).toBeInTheDocument();

    const heading = within(section).getByRole("heading", { name: /404 - page not found/i });
    expect(heading).toBeInTheDocument();

    const paragraph = within(section).getByText(/does not exist/i);
    expect(paragraph).toBeInTheDocument();
  });
});
