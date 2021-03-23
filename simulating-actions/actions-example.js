/**
 * Para fazer o fluxo de comportamento do usuário é necessário utilizar o fireEvent. Assim é possível simular ações de click, input, change, entre outras…
 */

 act(() => {
  fireEvent.input(inputNomeUsuario, {
    target: { value: "jvvoliveira" }
  });

  fireEvent.click(searchButton);
});