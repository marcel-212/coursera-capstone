import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Reservation from "../Reservation"; 

vi.mock("../../sections/ReservationForm", () => ({
  default: ({ setErrors, setIsSent }) => (
    <div>
      <button onClick={() => setErrors(["Error 1", "Error 2"])}>Trigger Error</button>
      <button onClick={() => setIsSent(true)}>Trigger Success</button>
    </div>
  ),
}));

describe("Reservation component", () => {
  it("renders the reservation heading", () => {
    render(<Reservation />);
    expect(screen.getByRole("heading", { name: /reservation/i })).toBeInTheDocument();
  });

  it("displays error messages when errors are set", () => {
    render(<Reservation />);
    fireEvent.click(screen.getByText("Trigger Error"));

    expect(screen.getByRole("alert")).toHaveClass("form-error");
    expect(screen.getByText("Error 1")).toBeInTheDocument();
    expect(screen.getByText("Error 2")).toBeInTheDocument();
  });

  it("displays success message when form is sent", () => {
    render(<Reservation />);
    fireEvent.click(screen.getByText("Trigger Success"));

    expect(screen.getByRole("alert")).toHaveClass("form-success");
    expect(screen.getByText(/your table has been successfully reserved/i)).toBeInTheDocument();
  });
});