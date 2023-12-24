import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home/Home";

describe("Your Page Component Test", () => {
  it("renders correctly", () => {
    render(<Home />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
