# QA Automação — ValeLar

Projeto de automação de testes end-to-end desenvolvido com **Cypress**, com foco em validar funcionalidades do sistema de anúncios de imóveis **ValeLar**.

Este projeto foi criado com o objetivo de **praticar automação de testes, organização de casos de teste e boas práticas de QA**, simulando um cenário real de testes em aplicações web.

---

# Objetivo

Validar as principais funcionalidades do sistema:

- Cadastro de usuários
- Login de usuários
- Cadastro de imóveis

Além da automação, também foi realizada a **documentação dos casos de teste e análise de resultados**, simulando o trabalho de um QA em ambiente profissional.

---

# Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js
- Git
- GitHub

---

# Estrutura do projeto

'''
qa_valelar
│
├─ README.md
│
├─ docs/
│ ├─ casos-de-teste.md
│ │─ metodologia-de-testes.md
│
├─ cypress/
│ └─ e2e/
│ ├─ cadastro-usuario.cy.js
│ ├─ login.cy.js
│ └─ cadastro-imovel.cy.js
│
└─ cypress.config.js
---

# Casos de teste e resultados

Os cenários de teste documentados podem ser encontrados em: docs/casos-de-teste.md

Os testes cobrem:

- Fluxos positivos e negativos
- Validação de campos obrigatórios
- Validação de senha
- Autenticação
- Validação de dados no cadastro de imóveis

---

# Como executar o projeto

### 1 — Clonar repositório

https://github.com/SEU-USUARIO/qa-valelar.git

### 2 — Instalar dependências

npm install

### 3 — Executar Cypress

Modo interface: npx cypress open
