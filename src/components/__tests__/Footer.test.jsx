import { render, screen } from "@testing-library/react";

import Footer from "../Footer";

describe("Footer component", () => {
  test("renders footer landmark", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  test("renders About, Contact and Socials sections", () => {
    render(<Footer />);

    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/socials/i)).toBeInTheDocument();
  });

  test("renders phone numbers as accessible links", () => {
    render(<Footer />);

    const phoneLinks = screen.getAllByRole("link", { name: /call/i });

    expect(phoneLinks).toHaveLength(2);
    expect(phoneLinks[0]).toHaveAttribute("href", "tel:+12125550184");
    expect(phoneLinks[1]).toHaveAttribute("href", "tel:+12125550199");
  });

  test("renders email as mailto link", () => {
    render(<Footer />);

    const emailLink = screen.getByRole("link", {
      name: /little\.lemon@mail\.com/i,
    });

    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:Little.Lemon@mail.com"
    );
  });

  test("renders social links that open in new tab safely", () => {
    render(<Footer />);

    const instagram = screen.getByLabelText(/instagram/i);
    const facebook = screen.getByLabelText(/facebook/i);
    const youtube = screen.getByLabelText(/youtube/i);

    [instagram, facebook, youtube].forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    });
  });
});
