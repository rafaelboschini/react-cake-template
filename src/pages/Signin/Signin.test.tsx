import React from "react";
import { render, screen } from "@testing-library/react";
import Signin from "./Signin";

describe("Your Page Component Test", () => {
  it("renders correctly", () => {
    render(<Signin />);

    expect(screen.getByText("Signin")).toBeInTheDocument();
  });
});
