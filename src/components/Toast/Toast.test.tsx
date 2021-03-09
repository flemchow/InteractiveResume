import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Toast } from ".";

describe("Toast Component", () => {
  it("all components render successfully", () => {
    render(<Toast />);
  });
});
