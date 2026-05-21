///<reference types="cypress" />

describe("Cadastro de casa", () => {
  beforeEach(() => {
    cy.intercept("GET", "/web/user/me", { statusCode: 200, body: {} });
  });

  it("Cadastro com sucesso campos obrigatórios", () => {
    const titulo = `Casa teste Cypress ${Date.now()}`;

    cy.cadastrarImovelValido({ titulo });

     cy.contains(titulo).should("be.visible");

  });
});