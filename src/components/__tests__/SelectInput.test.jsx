import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import SelectInput from "../SelectInput";

const options = ["Option 1", "Option 2", "Option 3"];

describe("SelectInput component", () => {
  test("renders button with default value", () => {
    const setCurrent = vi.fn();
    render(<SelectInput options={options} current={null} setCurrent={setCurrent} defaultValue="Select Me" />);

    const button = screen.getByRole("button", { name: /select me/i });
    expect(button).toBeInTheDocument();
  });

  test("opens dropdown when clicking button", () => {
    const setCurrent = vi.fn();
    render(<SelectInput options={options} current={null} setCurrent={setCurrent} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const listbox = screen.getByRole("listbox");
    expect(listbox).toBeInTheDocument();

    options.forEach(option => {
      const optionEl = screen.getByRole("option", { name: option });
      expect(optionEl).toBeInTheDocument();
    });
  });

  test("selects an option when clicked and closes dropdown", () => {
    let current = null;
    const setCurrent = vi.fn((value) => { current = value; });

    render(<SelectInput options={options} current={current} setCurrent={setCurrent} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const option2 = screen.getByRole("option", { name: /Option 2/i });
    fireEvent.click(option2);

    expect(setCurrent).toHaveBeenCalledWith("Option 2");
  });

  test("does not open dropdown when disabled", () => {
    const setCurrent = vi.fn();
    render(<SelectInput options={options} current={null} setCurrent={setCurrent} disabled={true} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const listboxes = screen.queryAllByRole("listbox");
    expect(listboxes.length).toBe(0);
  });
});
