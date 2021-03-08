import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Profile } from ".";

describe("Profile Component", () => {
  it("renders all the expected components without issue", () => {
    render(<Profile />);

    expect(screen.getByTestId("profileWrapperTestId")).toBeInTheDocument();
    expect(screen.getAllByRole("heading")).toHaveLength(3);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
