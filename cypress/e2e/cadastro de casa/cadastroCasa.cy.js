///<reference types="cypress" />

describe("Cadastro de casa", () => {
  beforeEach(() => {
    cy.intercept("GET", "web/user/me", { statusCode: 200, body: {} });
  });

  it("Cadastro com sucesso", () => {
    cy.visit("http://127.0.0.1:8000", { failOnStatusCode: false });
    cy.wait(500);

    cy.get(":nth-child(3) > .nav-link").click();
    cy.get("#email").type("wellingtonribeirojardim123@gmail.com");
    cy.wait(200);
    cy.get("#password").type("123456789");
    cy.get("button").contains("Entrar").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .nav-link").click();
    cy.wait(1000);

    cy.get("#street").type("rua das araras");
    cy.get("#neighborhood").type("bairro nobre");
    cy.get("#number").type("8");
    cy.get("#number_bathrooms").type("5");
    cy.get("#zip_code").type("39635-000");
    cy.get("#city").type("aracuai");
    cy.get("#state").type("minas gerais");
    cy.get("#complement").type("apto 101");
    cy.get("#reference_point").type("ao lado da sorveteria");
    cy.get("#number_rooms").type("4");
    cy.get("#number_bathrooms").type("1");
    cy.get("#property_size").type("50");
    cy.get("#rental_value").type("2.000,00");
    cy.get("#property_description").type("casa em ótima localização no centro");
    cy.get("#property_type").select("Casa");
    cy.get("#property_title").type("ótima oportunidade");
    cy.get(".shadow > .btn").click();
  });

  it("Inserir preço com letras", () => {
    cy.visit("http://127.0.0.1:8000", { failOnStatusCode: false });
    cy.wait(500);

    cy.get(":nth-child(3) > .nav-link").click();
    cy.get("#email").type("wellingtonribeirojardim123@gmail.com");
    cy.wait(200);
    cy.get("#password").type("123456789");
    cy.get("button").contains("Entrar").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .nav-link").click();
    cy.wait(1000);

    cy.get("#street").type("Rua A");
    cy.get("#neighborhood").type("Centro");
    cy.get("#number").type("10");
    cy.get("#zip_code").type("39635-000");
    cy.get("#city").type("Aracuai");
    cy.get("#state").type("Minas Gerais");
    cy.get("#number_rooms").type("3");
    cy.get("#number_bathrooms").type("2");
    cy.get("#property_size").type("120");
    cy.get("#rental_value").type("2000abc");
    cy.get("#rental_value").should("have.value", "2000"); // só aceita a parte numérica
    cy.get("#property_description").type("Casa ampla e bem localizada");
    cy.get("#property_type").select("Casa");
    cy.get("#property_title").type("Casa com preço inválido");
    cy.get(".shadow > .btn").click();
  });

  it("Deve falhar ao inserir texto no campo de área", () => {
    cy.visit("http://127.0.0.1:8000", { failOnStatusCode: false });
    cy.wait(500);

    cy.get(":nth-child(3) > .nav-link").click();
    cy.get("#email").type("wellingtonribeirojardim123@gmail.com");
    cy.wait(200);
    cy.get("#password").type("123456789");
    cy.get("button").contains("Entrar").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .nav-link").click();
    cy.wait(1000);

    cy.get("#street").type("Rua das Flores");
    cy.get("#neighborhood").type("Centro");
    cy.get("#number").type("100");
    cy.get("#zip_code").type("39635-000");
    cy.get("#city").type("Aracuai");
    cy.get("#state").type("Minas Gerais");
    cy.get("#number_rooms").type("4");
    cy.get("#number_bathrooms").type("2");
    cy.get("#property_size").type("cem metros"); // <- texto inválido
    cy.get("#property_size").shadow("");
    cy.get("#rental_value").type("2500");
    cy.get("#property_description").type("Casa linda com varanda");
    cy.get("#property_type").select("Casa");
    cy.get("#property_title").type("Área inválida");
    cy.get(".shadow > .btn").click();

    cy.get("form").should("be.visible");
  });

  it("Inserir letras em número de quartos", () => {
    cy.get(":nth-child(3) > .nav-link").click();
    cy.get("#email").type("wellingtonribeirojardim123@gmail.com");
    cy.wait(200);
    cy.get("#password").type("123456789");
    cy.get("button").contains("Entrar").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .nav-link").click();
    cy.wait(1000);

    cy.visit("http://127.0.0.1:8000", { failOnStatusCode: false });
    cy.wait(500);
    cy.get("#street").type("Rua B");
    cy.get("#neighborhood").type("Bairro Verde");
    cy.get("#number").type("50");
    cy.get("#zip_code").type("39635-000");
    cy.get("#city").type("Aracuai");
    cy.get("#state").type("Minas Gerais");
    cy.get("#number_rooms").type("três"); // <- inválido
    cy.get("#number_rooms").shadow(""); // <- verificando se barrou a entrada do caractere
    cy.get("#number_bathrooms").type("2");
    cy.get("#property_size").type("90");
    cy.get("#rental_value").type("1800");
    cy.get("#property_description").type("Casa de dois andares");
    cy.get("#property_type").select("Casa");
    cy.get("#property_title").type("Quartos negativos");
    cy.get(".shadow > .btn").click();
  });

  it("Deve falhar ao tentar enviar o formulário vazio", () => {
    cy.visit("http://127.0.0.1:8000", { failOnStatusCode: false });
    cy.wait(500);

    cy.get(":nth-child(3) > .nav-link").click();
    cy.get("#email").type("wellingtonribeirojardim123@gmail.com");
    cy.wait(200);
    cy.get("#password").type("123456789");
    cy.get("button").contains("Entrar").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .nav-link").click();
    cy.wait(1000);
    cy.get(".shadow > .btn").click();

    cy.wait(300);
    cy.get("form").should("be.visible");
  });

  it("Deve falhar ao inserir letras em número de banheiros", () => {
    cy.visit("http://127.0.0.1:8000", { failOnStatusCode: false });
    cy.wait(500);

    cy.get(":nth-child(3) > .nav-link").click();
    cy.get("#email").type("wellingtonribeirojardim123@gmail.com");
    cy.wait(200);
    cy.get("#password").type("123456789");
    cy.get("button").contains("Entrar").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .nav-link").click();
    cy.wait(1000);

    cy.get("#neighborhood").type("Centro");
    cy.get("#number").type("15");
    cy.get("#zip_code").type("39635-000");
    cy.get("#city").type("Aracuai");
    cy.get("#state").type("Minas Gerais");
    cy.get("#number_rooms").type("3");
    cy.get("#number_bathrooms").type("dois"); // <- texto inválido
    cy.get("#number_bathrooms").shadow("");

    cy.get("#property_size").type("70");
    cy.get("#rental_value").type("1600");
    cy.get("#property_description").type("Casa pequena, mas aconchegante");
    cy.get("#property_type").select("Casa");
    cy.get("#property_title").type("Banheiros inválidos");
    cy.get(".shadow > .btn").click();

    cy.get("form").should("be.visible");
  });
});
