import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { PersonalExp } from ".";

describe("Personal Project component", () => {
  it("all sub components can will render", () => {
    render(<PersonalExp />);
  });
});
