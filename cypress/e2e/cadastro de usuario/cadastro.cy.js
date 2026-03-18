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


  it("Email invalido (sem local)", () => {
    cy.cadastroTeste( "lucas", "@gmail.com", "988777777", "988776755", "1234567890", "1234567890", true);
  });

  it("Email inválido (sem domínio)", () => {
    cy.cadastroTeste( "lucas", "tiago123@", "988777777", "988776755", "123456789", "123456789", true);
  });
  

});
  /*
  it("Cadastro com sucesso", () => {
    cy.acessoApp();
    cy.contains("Cadastrar").click();

    cy.contains("Crie sua conta", { timeout: 5000 }).should("exist");

    // Prosseguir com o cadastro
    cy.get("#name").type("wellington");
    cy.get("#email").type("wellingtonribeirojardim123@gmail.com");
    cy.get("#user_phone1").type("9888888");
    cy.get("#user_phone2").type("9887757");
    cy.get("#password").type("123456789");
    cy.get("#password_confirmation").type("123456789");
    cy.get("button").contains("Cadastrar").click();
    cy.get("button").contains("Cadastrar").should("not.exist");
  });

  it("Cadastro com senha fraca", () => {
    cy.visit("http://127.0.0.1:8000/register");

    cy.get("#name").type("João");
    cy.get("#email").type("joaoteste@gmail.com");
    cy.get("#user_phone1").type("9999999");
    cy.get("#user_phone2").type("9777777");
    cy.get("#password").type("12345");
    cy.get("#password_confirmation").type("12345");
    cy.get("button").contains("Cadastrar").click();

    // Verifica se o formulário ainda está visível (não passou)
    cy.get("form").should("be.visible");
  });

  it("Cadastro com e-mail inválido", () => {
    cy.visit("http://127.0.0.1:8000/register");

    cy.get("#name").type("Maria");
    cy.get("#email").type("mariaemailinvalido"); // sem @
    cy.get("#user_phone1").type("9888888");
    cy.get("#user_phone2").type("9777777");
    cy.get("#password").type("123456789");
    cy.get("#password_confirmation").type("123456789");
    cy.get("button").contains("Cadastrar").click();

    // Confirma que o botão ainda está na tela, indicando falha
    cy.get("button").contains("Cadastrar").should("be.visible");
  });

  it("Cadastro com senhas diferentes", () => {
    cy.visit("http://127.0.0.1:8000/register");

    cy.get("#name").type("Carlos");
    cy.get("#email").type("carlosteste@gmail.com");
    cy.get("#user_phone1").type("9888888");
    cy.get("#user_phone2").type("9777777");
    cy.get("#password").type("123456789");
    cy.get("#password_confirmation").type("987654321");
    cy.get("button").contains("Cadastrar").click();

    // Continua na tela, pois a validação falhou
    cy.get("form").should("be.visible");
  });

  //  Cadastro com campos vazios
  it("Cadastro com campos vazios", () => {
    cy.visit("http://127.0.0.1:8000/register");

    cy.get("button").contains("Cadastrar").click();

    // Verifica que o formulário não foi enviado
    cy.get("form").should("be.visible");
  });
  */

