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


Cypress.Commands.add("acessoAppTestCadastroCasa", () => {
  cy.visit("http://127.0.0.1:8000", { failOnStatusCode: false });
  cy.wait(500);
  cy.contains("Entrar").click();
  cy.get("#email").type("qateste@gmail.com");
  cy.get("password").type("123456789");
  cy.contains("Entrar").click();
  cy.url().should("include", "/dashboard");
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
  // ============================================
// COMANDO PRINCIPAL - cadastroImovelValido()
// ============================================
Cypress.Commands.add('cadastrarImovelValido', (override = {}) => {
  // ✅ PASSO 1: CRIA OBJETO com dados PADRÃO do imóvel
  // Se você passar override={titulo: 'Outro título'}, só muda o título
  
  cy.acessoAppTestCadastroCasa();
  cy.contains("Anuncie seu Imóvel").click();

  const imovel = {
    titulo: override.titulo || 'Casa 3qts Centro - Vendo urgente',  // Usa seu valor ou padrão
    valor: override.valor || '450000',
    tipo: override.tipo || 'Casa',
    bairro: override.bairro || 'Centro',
    cidade: override.cidade || 'Belo Horizonte',
    estado: override.estado || 'MG',
    cep: override.cep || '30190000',
    logradouro: override.logradouro || 'Rua das Flores',
    numero: override.numero || '123',
    quartos: override.quartos || '3',
    banheiros: override.banheiros || '2',
    tamanho: override.tamanho || '80',
    
  };

  // ============================================
  // PASSO 2: PREENCHE CAMPOS OBRIGATÓRIOS
  // ============================================
  
  //  Campo TÍTULO - procura por 3 seletores possíveis:
  // 1. input com placeholder contendo "Título"
  // 2. input com name="titulo"  
  // 3. input com id="titulo"
  cy.get('input[placeholder*="Título"], input[name="titulo"], #titulo')
    .type(imovel.titulo);  // DIGITA o título no campo

cy.get('input[placeholder*="tamanho"], input[name="tamanho"], #property_size')
    .type(imovel.tamanho);  // DIGITA o título no campo

  //  Campo VALOR - mesma lógica, 3 seletores possíveis
  cy.get('input[placeholder*="Valor"], input[name="valor"], #valor')
    .type(imovel.valor);

  //  Campo TIPO (select dropdown)
  cy.get('select[name="tipo"], #tipo')
    .select(imovel.tipo);  // SELECIONA opção no dropdown

  // Campo BAIRRO
  cy.get('input[placeholder*="Bairro"], input[name="bairro"], #bairro')
    .type(imovel.bairro);

  //  Campo CIDADE
  cy.get('input[placeholder*="Cidade"], input[name="cidade"], #cidade')
    .type(imovel.cidade);

  // Campo ESTADO
  cy.get('input[placeholder*="Estado"], input[name="estado"], #estado')
    .type(imovel.estado);

  //  Campo CEP
  cy.get('input[placeholder*="CEP"], input[name="cep"], #cep')
    .type(imovel.cep);

cy.get('input[placeholder*="Rua"], input[name="street"], #street')
    .type(imovel.logradouro);

cy.get('input[placeholder*="Rua"], input[name="street"], #number')
    .type(imovel.numero);

  cy.get('input[placeholder*="Quartos"], input[name="number_rooms"], #number_rooms')
    .type(imovel.quartos);

//  Campo BANHEIROS
  cy.get('input[placeholder*="Banheiros"], input[name="number_bathrooms"], #number_bathrooms')
  .type(imovel.banheiros);


  // ============================================
  // PASSO 3: CLICA NO BOTÃO SALVAR
  // ============================================
  // Procura por qualquer um desses 3 seletores do botão
  cy.get('button[type="submit"], .btn-salvar, [data-testid="Enviar"]')
    .click();  // CLICA para enviar formulário
});


// ============================================
// COMANDOS PARA TESTAR ERROS (campos vazios)
// ============================================

// TESTA TÍTULO VAZIO - só troca título por espaço
//  TÍTULO vazio
Cypress.Commands.add('cadastrarImovelTituloVazio', () => {
  cy.cadastrarImovelValido({ titulo: ' ' });
});

//  TAMANHO vazio
Cypress.Commands.add('cadastrarImovelTamanhoVazio', () => {
  cy.cadastrarImovelValido({ tamanho: ' ' });
});

//  VALOR vazio
Cypress.Commands.add('cadastrarImovelValorVazio', () => {
  cy.cadastrarImovelValido({ valor: ' ' });
});

//  TIPO vazio
Cypress.Commands.add('cadastrarImovelTipoVazio', () => {
  cy.cadastrarImovelValido({ tipo: ' ' });
});

//  BAIRRO vazio
Cypress.Commands.add('cadastrarImovelBairroVazio', () => {
  cy.cadastrarImovelValido({ bairro: ' ' });
});

//  CIDADE vazio
Cypress.Commands.add('cadastrarImovelCidadeVazio', () => {
  cy.cadastrarImovelValido({ cidade: ' ' });
});

//  ESTADO vazio
Cypress.Commands.add('cadastrarImovelEstadoVazio', () => {
  cy.cadastrarImovelValido({ estado: ' ' });
});

//  CEP vazio
Cypress.Commands.add('cadastrarImovelCepVazio', () => {
  cy.cadastrarImovelValido({ cep: ' ' });
});

//  LOGRADOURO vazio
Cypress.Commands.add('cadastrarImovelLogradouroVazio', () => {
  cy.cadastrarImovelValido({ logradouro: ' ' });
});

//  NÚMERO vazio
Cypress.Commands.add('cadastrarImovelNumeroVazio', () => {
  cy.cadastrarImovelValido({ numero: ' ' });
});

//  QUARTOS vazio
Cypress.Commands.add('cadastrarImovelQuartosVazio', () => {
  cy.cadastrarImovelValido({ quartos: ' ' });
});

//  BANHEIROS vazio
Cypress.Commands.add('cadastrarImovelBanheirosVazio', () => {
  cy.cadastrarImovelValido({ banheiros: ' ' });
});



