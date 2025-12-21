import { render, screen, within } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Highlights from "../Highlights";
import temp from '../../data/highlights.json';

describe("Highlights component", () => {
  test("renders the section landmark", () => {
    render(<Highlights />);
    const section = screen.getByRole("region", { name: /highlights/i });
    expect(section).toBeInTheDocument();
  });

  test("renders all MenuCard components", () => {
    render(<Highlights />);
    const section = screen.getByRole("region", { name: /highlights/i });
    const sectionWithin = within(section);

    temp.forEach(item => {
      const card = sectionWithin.getByRole("region", { name: item.title });
      expect(card).toBeInTheDocument();

      const img = within(card).getByRole("img", { name: item.title });
      expect(img).toHaveAttribute("src", item.image);
      expect(within(card).getByText(`${item.price}$`)).toBeInTheDocument();
    });
  });
});
