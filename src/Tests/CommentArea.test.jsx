import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";
import "@testing-library/jest-dom";
import { it } from "vitest";

global.fetch = vi.fn(() =>
  // È una funzione fissa di Vitest, progettata per sostituire o simulare una funzione esistente durante i test.
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { text: "Commento 1", user: "User1" },
        { text: "Commento 2", user: "User2" },
      ]),
  })
);

describe("CommentArea component", () => {
  it("viene montato correttamente", async () => {
    render(<CommentArea asin="123" />);
    // Verifica che l'elemento con data-testid="comment-area" sia presente
    expect(screen.getByTestId("comment-area")).toBeInTheDocument();
  });
});
