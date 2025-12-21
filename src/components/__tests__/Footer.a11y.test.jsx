import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import { describe, test, expect } from "vitest";
import * as matchers from "vitest-axe/matchers";
import Footer from "../Footer";

expect.extend(matchers);

describe("Footer accessibility", () => {
  test("has no accessibility violations", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
