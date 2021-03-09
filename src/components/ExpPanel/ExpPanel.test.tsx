import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ExpPanel } from ".";

describe("ExpPanel Component", () => {
  it("all component parts render", () => {
    render(
      <ExpPanel
        name={"test name"}
        techStack={["test1", "test2"]}
        tasks={["task1", "task2"]}
      />
    );

    expect(screen.getByTestId("expPanelTestId")).toBeInTheDocument();
  });
});
