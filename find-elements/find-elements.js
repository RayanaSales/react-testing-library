const msgInitial = await waitForElement(() =>
  container.getByText("Pesquise por algum usuário GitHub")
);

const [inputNomeUsuario, searchButton] = await waitForElement(() => [
  container.getByPlaceholderText("nome do usuário no github"),
  container.getByTestId("searchButton"),
]);

// ------------------------------------------------------------------------

const Perfil = () => {
  return (
    <h2 data-testid="messageInitial">Pesquise por algum usuário GitHub</h2>
  );
};

const Searchbar = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={pesquisar}
        validationSchema={validation}
      >
        <Form>
          <div>
            <Field
              name="usuario"
              className={styles.field_input}
              data-testid="inputNomeUsuario"
              type="text"
              placeholder="nome do usuário no github"
            />
            <Field data-testid="searchButton" type="submit" value="pesquisar" />
          </div>
          <div>
            <ErrorMessage
              className={styles.error}
              component="span"
              name="usuario"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};