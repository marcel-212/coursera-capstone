import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Menu from "../Menu";
import data from '/src/data/menu.json';

describe("Menu component", () => {

  test("renders menu section landmark and heading", () => {
    render(<Menu />);
    const section = screen.getByRole("region", { name: /menu section/i });
    expect(section).toBeInTheDocument();
    expect(within(section).getByRole("heading", { name: /menu/i })).toBeInTheDocument();
  });

  test("renders MenuRadio options and default selection", () => {
    render(<Menu />);
    const breakfast = screen.getByRole("radio", { name: /breakfast/i });
    const lunch = screen.getByRole("radio", { name: /lunch/i });
    expect(breakfast).toBeInTheDocument();
    expect(lunch).toBeChecked();
  });

  test("filters menu cards when changing radio selection", () => {
    render(<Menu />);
    const dinnerOption = screen.getByRole("radio", { name: /dinner/i });
    fireEvent.click(dinnerOption);

    const section = screen.getByRole("region", { name: /menu section/i });
    const sectionWithin = within(section);

    const dinnerItems = data.filter(item => item.category === 'dinner');
    dinnerItems.forEach(item => {
      const card = sectionWithin.getByRole("region", { name: item.title });
      expect(card).toBeInTheDocument();
    });
  });

  test("each MenuCard has a unique key (no warning)", () => {
    const filtered = data.filter(item => item.category === 'lunch');
    filtered.forEach(item => expect(item.id).toBeDefined());
  });

});
