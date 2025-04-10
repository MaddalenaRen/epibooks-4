import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

describe("Welcome component", () => {
  it("viene montato correttamente", () => {
    render(<Welcome />);
    const welcomeText = screen.getByText(/benvenuti in epibooks/i);
    expect(welcomeText).toBeInTheDocument();
  });
});
