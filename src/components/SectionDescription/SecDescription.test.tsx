import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { SectDescription } from ".";

describe("SectionDescription Component", () => {
  it("renders all expected parts without issue", () => {
    render(<SectDescription heading={"Profile"} />);

    expect(
      screen.getByRole("heading", { name: "Profile" })
    ).toBeInTheDocument();
  });
});
