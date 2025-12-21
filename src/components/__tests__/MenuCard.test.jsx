import { render, screen, within } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import MenuCard from "../MenuCard";

const mockProps = {
  title: "Margherita Pizza",
  description: "Classic pizza with cheese and tomato",
  ingredients: ["cheese", "tomato", "basil"],
  price: 12,
  image: "pizza.jpg",
};

describe("MenuCard component", () => {
  test("renders the card correctly", () => {
    render(<MenuCard {...mockProps} />);

    const card = screen.getByRole("region", { name: /Margherita Pizza/i });
    const cardWithin = within(card);

    expect(cardWithin.getByRole("heading", { name: /Margherita Pizza/i })).toBeInTheDocument();
    expect(cardWithin.getByText(/classic pizza with cheese and tomato/i)).toBeInTheDocument();
    expect(cardWithin.getByText(/cheese, tomato, basil/i)).toBeInTheDocument();
    expect(cardWithin.getByText("12$")).toBeInTheDocument();

    const image = cardWithin.getByRole("img", { name: /Margherita Pizza/i });
    expect(image).toHaveAttribute("src", "pizza.jpg");
  });
});
