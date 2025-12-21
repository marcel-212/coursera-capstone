import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navbar from "../Navbar";

const renderWithRouter = (initialRoute = "/") => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Navbar />
    </MemoryRouter>
  );
};

describe("Navbar component", () => {
  test("renders navigation landmark", () => {
    renderWithRouter();

    const nav = screen.getByRole("navigation", {
      name: /primary navigation/i,
    });

    expect(nav).toBeInTheDocument();
  });

  test("renders logo linking to homepage", () => {
    renderWithRouter();

    const logoLink = screen.getByRole("link", {
      name: /go to homepage/i,
    });

    expect(logoLink).toHaveAttribute("href", "/");
  });

  test("renders navigation links", () => {
    renderWithRouter();

    const nav = screen.getByRole("navigation", { name: /primary navigation/i });

    expect(
        within(nav).getByRole("link", { name: /home/i })
    ).toBeInTheDocument();
    expect(
        within(nav).getByRole("link", { name: /menu/i })
    ).toBeInTheDocument();
    expect(
        within(nav).getByRole("link", { name: /reservation/i })
    ).toBeInTheDocument();
    });


  test("sets aria-current on active link", () => {
    renderWithRouter("/menu");

    const activeLink = screen.getByRole("link", { name: /menu/i });
    expect(activeLink).toHaveAttribute("aria-current", "page");
  });
});
