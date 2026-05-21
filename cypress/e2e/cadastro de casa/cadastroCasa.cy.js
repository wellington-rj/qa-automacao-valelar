///<reference types="cypress" />

describe("Cadastro de casa", () => {
  beforeEach(() => {
    cy.intercept("GET", "web/user/me", { statusCode: 200, body: {} });
  });

  it("Cadastro com sucesso campos obrigatórios", () => {
  
  cy.get('input[placeholder*="Título"], input[name="titulo"], #property_title')
  .type(imovel.titulo);

//  Campo VALOR
  cy.get('input[placeholder*="Valor"], input[name="valor"], #rental_value')
    .type(imovel.valor);

  //  Campo LOGRADOURO (Rua)

  //  Campo BAIRRO
  cy.get('input[placeholder*="Bairro"], input[name="bairro"], #neighborhood')
    .type(imovel.bairro);

  //  Campo NÚMERO
  cy.get('input[placeholder*="Número"], input[name="number"], #number')
    .type(imovel.numero);

  //  Campo CEP
  cy.get('input[placeholder*="CEP"], input[name="cep"], #zip_code')
    .type(imovel.cep);

  //  Campo CIDADE
  cy.get('input[placeholder*="Cidade"], input[name="cidade"], #city')
    .type(imovel.cidade);

  // Campo ESTADO
  cy.get('input[placeholder*="Estado"], input[name="estado"], #state')
    .type(imovel.estado);

  //  Campo QUARTOS


  //  Campo TAMANHO
  cy.get('input[placeholder*="Área"], input[name="property_size"], #property_size')
    .type(imovel.tamanho);

  //  Campo DESCRIÇÃO
  cy.get('textarea[placeholder*="Descrição"], textarea[name="description"], #property_description')
    .type(imovel.descricao);

  //  Campo TIPO (select)
  cy.get('select[name="property_type"], #property_type')
    .select(imovel.tipo);

});
});