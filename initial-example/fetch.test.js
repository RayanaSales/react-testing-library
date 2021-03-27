// import dependencies
import React from "react";

// import API mocking utilities from Mock Service Worker
import { rest } from "msw";
import { setupServer } from "msw/node";

// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// the component to test
import Fetch from "./fetch";

const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

test("loads and displays greeting", async () => {
  /**
   * 1- ARRANGE
   *    O render método renderiza um elemento React no DOM.
   *
   * 2- ACT
   *    O fireEventmétodo permite disparar eventos para simular ações do usuário.
   *    Se necessario, aguardar pelo evento, use "await waitFor"
   *
   * 3- ASSERT
   *    Verifique se a saida corresponde ao esperado
   */
});

test("loads and displays greeting", async () => {
  render(<Fetch url="/greeting" />);

  fireEvent.click(screen.getByText("Load Greeting"));
  await waitFor(() => screen.getByRole("heading"));

  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toHaveAttribute("disabled");
});

test("handles server error", async () => {
  server.use(
    rest.get("/greeting", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<Fetch url="/greeting" />);

  fireEvent.click(screen.getByText("Load Greeting"));
  await waitFor(() => screen.getByRole("alert"));

  expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
});
