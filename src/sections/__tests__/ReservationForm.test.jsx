import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import ReservationForm from "../ReservationForm";

describe("ReservationForm component", () => {
  test("renders all input fields and submit button", () => {
    const setErrors = vi.fn();
    const setIsSent = vi.fn();

    render(<ReservationForm setErrors={setErrors} setIsSent={setIsSent} />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reserve/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  });

  test("validates empty form and sets errors", () => {
    const setErrors = vi.fn();
    const setIsSent = vi.fn();

    render(<ReservationForm setErrors={setErrors} setIsSent={setIsSent} />);
    const button = screen.getByRole("button", { name: /reserve/i });
    fireEvent.click(button);

    expect(setErrors).toHaveBeenNthCalledWith(1, null);

    expect(setErrors).toHaveBeenNthCalledWith(2, expect.arrayContaining([
        expect.stringMatching(/name has to be at least 2 letters/i),
        expect.stringMatching(/phone field cannot be empty/i),
        expect.stringMatching(/email field cannot be empty/i)
    ]));

    expect(setIsSent).toHaveBeenNthCalledWith(1, false);
    expect(setIsSent).toHaveBeenCalledTimes(1);
    });

  test("submits form with valid data", () => {
    const setErrors = vi.fn();
    const setIsSent = vi.fn();

    render(<ReservationForm setErrors={setErrors} setIsSent={setIsSent} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: "1234567890" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2025-12-25" } });

    const button = screen.getByRole("button", { name: /reserve/i });
    fireEvent.click(button);

    expect(setErrors).toHaveBeenNthCalledWith(1, null);
    expect(setErrors).toHaveBeenCalledTimes(2);
  });
});
