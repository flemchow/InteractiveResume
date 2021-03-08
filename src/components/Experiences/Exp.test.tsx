import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Exp } from ".";

describe("experience component", () => {
  it("renders all components successfully", () => {
    render(<Exp />);

    expect(screen.getByTestId("experienceSection")).toBeInTheDocument();
  });
});
