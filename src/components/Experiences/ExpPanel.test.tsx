import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ExpPanel } from ".";

describe("ExpPanel Component", () => {
  it("all component parts render", () => {
    render(<ExpPanel name={"test name"} desc={"test description"} />);

    expect(screen.getByTestId("expPanelTestId")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(1);
  });
});
