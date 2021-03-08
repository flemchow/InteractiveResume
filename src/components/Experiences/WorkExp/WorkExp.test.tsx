import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import WorkExp from "./WorkExp";

describe("work experience component", () => {
  it("renders all components successfully", () => {
    render(<WorkExp />);

    expect(screen.getByTestId("experienceSection")).toBeInTheDocument();
  });
});
