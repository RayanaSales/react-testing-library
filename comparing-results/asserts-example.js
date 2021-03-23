const [
  nome,
  foto,
  bio,
  local,
  seguidores,
  reposPublicos,
  dataCriacao
] = await waitForElement(() => [
  container.getByTestId("nome"),
  container.getByTestId("foto"),
  container.getByTestId("bio"),
  container.getByTestId("local"),
  container.getByTestId("seguidores"),
  container.getByTestId("reposPublicos"),
  container.getByTestId("dataCriacao")
]);

expect(nome.innerHTML).toEqual("joãoVictor");
expect(foto).toHaveAttribute(
  "src",
  "https://avatars3.githubusercontent.com/u/48499490?v=4"
);
expect(bio).toHaveTextContent("Fazendo teste com React Testing library");
expect(local).toHaveTextContent("Recife, PE");
expect(seguidores.innerHTML).toEqual("Seguidores: 100");
expect(reposPublicos).toHaveTextContent("Repositórios públicos: 4");
expect(dataCriacao).toHaveTextContent("Criado em: 2000-06-28T00:34:36Z");

// negando. (funciona para qualquer um dos métodos acima)
expect(msgInitial).not.toBeInTheDocument();
