import { getAllByRole, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookList from "../components/BookList";

const esempioBooks = [
  {
    asin: "123",
    title: "Libro 1",
    img: "https://via.placeholder.com/150",
  },
  {
    asin: "456",
    title: "Libro 2",
    img: "https://via.placeholder.com/150",
  },
  {
    asin: "789",
    title: "Libro 3",
    img: "https://via.placeholder.com/150",
  },
];

describe("BookList component", () => {
  it("renderizza una card per ogni libro nel JSON", () => {
    render(<BookList books={esempioBooks} />);

    const bookCards = screen.getAllByTestId("single-book");

    expect(bookCards).toHaveLength(esempioBooks.length);
  });
});
