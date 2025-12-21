import { render, screen, within } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Testimonials from "../Testimonials";

describe("Testimonials component", () => {
  test("renders the section landmark", () => {
    render(<Testimonials />);
    const section = screen.getByRole("region", { name: /testimonials/i });
    expect(section).toBeInTheDocument();
  });

  test("renders all testimonial cards with correct content", () => {
    render(<Testimonials />);
    const section = screen.getByRole("region", { name: /testimonials/i });
    const sectionWithin = within(section);

    const names = ["Emily Carter", "James Wilson", "Olivia Bennett"];
    const descriptions = [
      "The pierogi were incredible — rich, comforting, and clearly handmade. I’ll definitely be back.",
      "Great food and a warm atmosphere. Everything tasted fresh and thoughtfully prepared.",
      "Lovely place for a relaxed meal. The desserts were especially good."
    ];

    names.forEach((name, index) => {
      const card = sectionWithin.getByRole("region", { name });
      expect(card).toBeInTheDocument();

      const cardWithin = within(card);
      expect(cardWithin.getByRole("heading", { name })).toBeInTheDocument();
      expect(cardWithin.getByRole("img", { name })).toBeInTheDocument();
      expect(cardWithin.getByText(descriptions[index])).toBeInTheDocument();
    });
  });
});
