import { render, screen, within, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import MenuRadio from "../MenuRadio";

const options = ["Pizza", "Pasta", "Salad"];

describe("MenuRadio component", () => {
  test("renders all radios", () => {
    const setCurrent = vi.fn();
    render(<MenuRadio list={options} current="Pizza" setCurrent={setCurrent} />);

    const groups = screen.getAllByRole("radiogroup");
    expect(groups.length).toBeGreaterThan(0);

    const group = groups[0];
    const groupWithin = within(group);

    options.forEach((option) => {
      const radio = groupWithin.getByRole("radio", { name: option });
      expect(radio).toBeInTheDocument();
    });
  });

  test("clicking radio calls setCurrent", () => {
    const setCurrent = vi.fn();
    render(<MenuRadio list={options} current="Pizza" setCurrent={setCurrent} />);

    const saladRadio = screen.getByRole("radio", { name: /salad/i });
    fireEvent.click(saladRadio);

    expect(setCurrent).toHaveBeenCalledWith("Salad");
  });
});