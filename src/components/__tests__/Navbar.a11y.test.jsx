import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { axe } from "vitest-axe";
import { expect, test } from "vitest";
import Navbar from "../Navbar"; 

test("navbar has no accessibility violations", async () => {
  const { container } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
