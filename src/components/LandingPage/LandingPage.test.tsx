import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { LandingPage } from "./";

describe("LandingPage component", () => {
  it("all components can render", () => {
    render(<LandingPage />);
  });
});
