import React from "react";
import nock from "nock";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  act,
  waitForDomChange,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

nock("https://api.github.com")
  .get("/users/jvvoliveira")
  .delay(2000)
  .reply(200, {
    login: "jvvoliveira",
    name: "joãoVictor",
    avatar_url: "https://avatars3.githubusercontent.com/u/48499490?v=4",
    location: "Recife, PE",
    bio: "Fazendo teste com React Testing library",
    public_repos: 10,
    followers: 100,
    created_at: "2000-06-28T00:34:36Z",
  })
  .get("/users/jvvoliveira/repos?per_page=8&page=1")
  .delay(2000)
  .reply(500, {
    message: "error",
    status: 500,
  });

/**
 * cleanAll(), para poder limpar as respostas associadas ao path que foram editadas no nock e assim podermos refazê-las.
 * cleanup(), para limpar toda árvore do DOM que foi gerada no teste anterior.
 */
afterEach(function () {
  nock.cleanAll();
  cleanup();
});
