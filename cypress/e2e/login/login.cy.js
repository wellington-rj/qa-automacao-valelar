///<reference types = "cypress"/>

describe("Página Inicial", () => {
  beforeEach(() => {
    cy.intercept("GET", "/web/user/me", { statusCode: 200, body: {} });
  });

  it("Acessa a página inicial e verifica texto", () => {
    cy.acessoAppTestLogin();
  });

  it("login com sucesso", () => {
    cy.loginTeste("wellingtonribeirojardim123@gmail.com", "123456789");
    // ← deveFalhar = false (automático)
  });

  it("Senha incorreta", () => {
    cy.loginTeste("wellingtonribeirojardim123@gmail.com", "12345wewewe", true);
    // ← deveFalhar = false (automático)
  });

  it("Senha vazia", () => {
    cy.loginTeste("wellingtonribeirojardim123@gmail.com", " ", true);
    // → true → verifica erro
  });

  it("Email inválido", () => {
    cy.loginTeste("wellingtonribeiro@gmail.com", "123456789", true);
    // → true → verifica botão "Entrar" ainda existe
  });

  it("Email vazio", () => {
    cy.loginTeste(" ", "123456789", true);
    // → true → verifica erro
  });
});
