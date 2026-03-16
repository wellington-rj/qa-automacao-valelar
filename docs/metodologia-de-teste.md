## Escopo dos testes

Os testes foram realizados nas funcionalidades principais da aplicação:

- Cadastro de usuários
- Autenticação (login)
- Cadastro de imóveis

Essas funcionalidades representam os fluxos mais importantes para o uso do sistema.

---

## Abordagem de testes

Os testes foram planejados com base em cenários que simulam o comportamento real de um usuário dentro da aplicação.

Foram considerados dois tipos principais de cenário:

**Fluxos positivos**  
Quando o usuário realiza as ações corretamente e o sistema deve permitir a operação.

**Fluxos negativos**  
Quando o usuário insere dados inválidos ou incompletos e o sistema deve impedir a operação.

Essa abordagem permite verificar tanto o funcionamento correto das funcionalidades quanto as validações implementadas pelo sistema.

---

## Validações analisadas

Durante os testes foram avaliados principalmente:

- Validação de campos obrigatórios
- Validação de senha e confirmação de senha
- Validação de credenciais de login
- Validação de dados no cadastro de imóveis

---

## Ferramentas utilizadas

Para execução dos testes e automação foram utilizadas as seguintes ferramentas:

- **Cypress** — automação de testes end-to-end
- **JavaScript** — desenvolvimento dos scripts de teste
- **Git e GitHub** — versionamento do projeto
- **Markdown** — documentação dos testes

---

## Ambiente de testes

Os testes foram executados no ambiente de desenvolvimento da aplicação, utilizando navegador Google Chrome.

---

## Critérios de avaliação

Durante a execução dos testes foram considerados três possíveis resultados:

**Aprovado**  
Quando o sistema apresentou exatamente o comportamento esperado.

**Reprovado**  
Quando o sistema permitiu uma operação incorreta ou apresentou erro que compromete a funcionalidade.

**⚠️ Aprovado com melhoria necessária**  
Quando o sistema bloqueou corretamente a operação, porém não apresentou um feedback claro para o usuário.

Em alguns cenários de login e validação de senha, por exemplo, o sistema impediu a ação corretamente, mas não exibiu mensagens informando o motivo da falha. Nesses casos, o teste foi registrado como **⚠️ Aprovado com melhoria necessária**, indicando necessidade de melhoria na experiência do usuário.
