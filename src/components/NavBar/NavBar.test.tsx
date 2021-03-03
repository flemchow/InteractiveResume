import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import NavBar from ".";

describe("NavBar component", () => {
  it("renders all the expected components", () => {
    render(<NavBar />);

    expect(screen.getByTestId("navWrapperTestId")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Flemming Chow" })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });
});
