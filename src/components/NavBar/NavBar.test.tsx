import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  it("renders all the expected components", () => {
    render(<NavBar />);

    expect(screen.getByTestId("navWrapperTestId")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });
});
