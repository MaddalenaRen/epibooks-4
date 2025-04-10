import { getAllByRole, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe("BookList component", () => {
  it("renderizza una card per ogni libro nel JSON", () => {
    render(<BookList books={fantasy} />);

    const AlltheImages = screen.getAllByTestId("img");

    expect(AlltheImages).toHaveLength(150);
  });
});
