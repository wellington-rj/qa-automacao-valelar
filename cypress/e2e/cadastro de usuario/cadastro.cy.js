///<reference types = "cypress"/>

describe("Cadastro", () => {
  beforeEach(() => {
    cy.intercept("GET", "/web/user/me", { statusCode: 200, body: {} });
  });

  it("Cadastro com sucesso", () => {
    cy.cadastroTeste( "lucas", null, "988777777", "988776755", "1234567890", "1234567890");
  });

  it("Cadastro com senha fraca (-8 dígitos)", () => {
    cy.cadastroTeste( "lucas", null, "988777777", "988776755", "1234567", "1234567", true);
  });

  it("Senhas diferentes", () => {
    cy.cadastroTeste("pedro", null, "988453423", "33977674545", "12345678910", "12345678911", true);
    // ← deveFalhar = false (automático)
  });

  it("Email invalido (sem local)", () => {
    cy.cadastroTeste( "lucas", "@gmail.com", "988777777", "988776755", "1234567890", "1234567890", true);
  });

  it("Email inválido (sem domínio)", () => {
    cy.cadastroTeste( "lucas", "tiago123@", "988777777", "988776755", "123456789", "123456789", true);
  });
  

});
