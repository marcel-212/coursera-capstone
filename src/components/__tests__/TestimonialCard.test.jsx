import { render, screen, within } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import TestimonialCard from "../TestimonialCard";

const mockProps = {
  img: "user1.jpg",
  name: "Jane Doe",
  description: "This service was amazing!"
};

describe("TestimonialCard component", () => {
  test("renders the card container with role region", () => {
    render(<TestimonialCard {...mockProps} />);
    const card = screen.getByRole("region", { name: /jane doe/i });
    expect(card).toBeInTheDocument();
  });

  test("renders image with correct alt and src", () => {
    render(<TestimonialCard {...mockProps} />);
    const card = screen.getByRole("region", { name: /jane doe/i });
    const cardWithin = within(card);

    const img = cardWithin.getByRole("img", { name: /jane doe/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "user1.jpg");
  });

  test("renders name and description", () => {
    render(<TestimonialCard {...mockProps} />);
    const card = screen.getByRole("region", { name: /jane doe/i });
    const cardWithin = within(card);

    expect(cardWithin.getByRole("heading", { name: /jane doe/i })).toBeInTheDocument();
    expect(cardWithin.getByText(/this service was amazing!/i)).toBeInTheDocument();
  });
});