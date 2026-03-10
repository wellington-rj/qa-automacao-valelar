///<reference types = "cypress"/>

describe("Página Inicial", () => {
  beforeEach(() => {
    cy.intercept("GET", "/web/user/me", { statusCode: 200, body: {} });
  });

  it("Acessa a página inicial e verifica texto", () => {
    cy.visit("http://127.0.0.1:8000", { failOnStatusCode: false });
    cy.wait(500);
    cy.contains("Entrar").should("exist");
    cy.contains("Casas Disponíveis").should("exist");
  });
});

describe("Login", () => {
  it("login com sucesso", () => {
    cy.visit("http://127.0.0.1:8000");
    cy.wait(500);
    cy.get(":nth-child(3) > .nav-link").click();
    cy.get("#email").type("wellingtonribeirojardim123@gmail.com");
    cy.wait(200);
    cy.get("#password").type("123456789");
    cy.get(".div").click();
    cy.wait(2000);
    cy.get("button").contains("Entrar").should("not.exist");
  });

  it("login com senha inválida", () => {
    cy.visit("http://127.0.0.1:8000");
    cy.wait(500);
    cy.get(":nth-child(3) > .nav-link").click();
    cy.get("#email").type("wellingtonribeirojardim123@gmail.com");
    cy.wait(200);
    cy.get("#password").type("12345");
    cy.get(".div").click();
    cy.get("button").contains("Entrar");
  });

  it("login com email inexistente", () => {
    cy.visit("http://127.0.0.1:8000");
    cy.wait(500);
    cy.get(":nth-child(3) > .nav-link").click();
    cy.get("#email").type("wellingtonribeirojardim2errado@gmail.com");
    cy.wait(200);
    cy.get("#password").type("1234567890");
    cy.get(".div").click();
    cy.get("button").contains("Entrar");
    cy.url().should("include", "/login");
  });
});
