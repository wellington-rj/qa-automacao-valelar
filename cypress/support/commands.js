/// <reference types="cypress" />

Cypress.Commands.add("acessoAppTestLogin", () => {
  cy.visit("http://127.0.0.1:8000", { failOnStatusCode: false });
  cy.wait(500);
  cy.contains("Casas Disponíveis").should("exist");
});

Cypress.Commands.add("acessoAppTestCadastro", () => {
  cy.visit("http://127.0.0.1:8000", { failOnStatusCode: false });
  cy.wait(500);
  cy.contains("Cadastrar").should("exist");
});

Cypress.Commands.add("loginTeste", (email, senha, deveFalhar = false) => {
  cy.acessoAppTestLogin();
  cy.contains("Entrar").click();
  cy.get("#email").type(email || "");
  cy.get("#password").type(senha || "");
  cy.contains("Entrar").click();

  if (deveFalhar) {
    cy.get("button").contains("Entrar").should("exist");
  } else {
    cy.url().should("include", "/dashboard");
  }
});

Cypress.Commands.add("cadastroTeste",(nome, email, telefone1, telefone2, senha, confirmarSenha, deveFalhar = false) => {
    const emailFinal = email ||
     `wellington.teste${Date.now()}${Math.floor(Math.random()*1000)}@gmail.com`;

    cy.acessoAppTestCadastro();
    cy.contains("Cadastrar").click();
    cy.get("#name").type(nome || "");
    cy.get("#email").type(emailFinal);
    cy.get("#user_phone1").type(telefone1 || "");
    cy.get("#user_phone2").type(telefone2 || "");
    cy.get("#password").type(senha || " ");
    cy.get("#password_confirmation").type(confirmarSenha || "");
    cy.contains("Cadastrar").click();

    if (deveFalhar) {
      cy.get("button").contains("Cadastrar").should("exist");
    } else {
      cy.url().should("include", "/dashboard");
    }
  });
