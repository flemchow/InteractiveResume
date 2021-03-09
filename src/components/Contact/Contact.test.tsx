import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Contact } from ".";

describe("Contact component", () => {
  it("all sub components can render", () => {
    render(<Contact />);
  });
});
