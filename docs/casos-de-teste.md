# Casos de Teste — Sistema ValeLar

Este documento apresenta os casos de teste realizados na plataforma ValeLar,
um sistema desenvolvido para anúncio e gestão de imóveis para aluguel.

Funcionalidades testadas:

- Cadastro de usuários
- Login (autenticação)
- Cadastro de imóveis

---

# Cadastro de Usuário

## CT-001 — Cadastro de usuário com sucesso

**Objetivo**  
Verificar se o sistema cadastra novos usuários corretamente.

**Pré-condição**  
Sistema acessível e formulário de cadastro disponível.

**Passos**

1. Acessar a página de cadastro
2. Preencher os campos obrigatórios
3. Clicar em cadastrar

**Resultado esperado**  
Usuário cadastrado com sucesso e redirecionado para a tela inicial logado.

**Resultado obtido**  
Conforme teste.

**Status**  
✅ Aprovado

---

## CT-002 — Cadastro com campos vazios

**Objetivo**  
Verificar se o sistema restringe cadastro com campos vazios.

**Passos**

1. Acessar página de cadastro
2. Deixar campos vazios
3. Clicar em cadastrar

**Resultado esperado**  
Sistema deve emitir alerta informando campos obrigatórios.

**Resultado obtido**  
Conforme teste.

**Status**  
✅ Aprovado

---

## CT-003 — Cadastro sem preencher campo Nome

Resultado esperado: sistema deve impedir cadastro e informar que nome é obrigatório.

Status: ✅ Aprovado

---

## CT-004 — Cadastro sem preencher campo Email

Resultado esperado: sistema deve impedir cadastro e informar que email é obrigatório.

Status: ✅ Aprovado

---

## CT-005 — Cadastro sem preencher campo Telefone

Resultado esperado: sistema deve impedir cadastro e informar que telefone é obrigatório.

Status: ✅ Aprovado

---

## CT-006 — Cadastro sem preencher campo Senha

Resultado esperado: sistema deve impedir cadastro e informar que senha é obrigatória.

Status: ✅ Aprovado

---

## CT-007 — Cadastro sem preencher Confirmar Senha

Resultado esperado: sistema deve impedir cadastro.

Status: ✅ Aprovado

---

## CT-008 — Senhas diferentes

Resultado esperado: sistema deve impedir cadastro e informar que senhas não coincidem.

Status: ✅ Aprovado

---

## CT-009 — Senha com menos de 8 caracteres

Resultado esperado: sistema deveria exibir mensagem de senha fraca.

Resultado obtido: cadastro foi bloqueado mas **sem mensagem clara ao usuário**.

Status: ⚠️ Aprovado com melhoria necessária

---

# Login

## CT-001 — Login com sucesso

Resultado esperado: usuário autenticado e redirecionado para página inicial.

Status: ✅ Aprovado

---

## CT-002 — Login com senha inválida

Resultado esperado: mensagem de erro informando senha incorreta.

Resultado obtido: login bloqueado mas **sem mensagem clara ao usuário**.

Status: ⚠️ Aprovado com melhoria necessária

---

## CT-003 — Login com campos vazios

Resultado esperado: sistema deve impedir login e indicar campos obrigatórios.

Status: ✅ Aprovado

---

## CT-004 — Login com email sem cadastro

Resultado esperado: sistema deve informar que conta não existe.

Resultado obtido: login bloqueado mas **sem feedback ao usuário**.

Status: ⚠️ Aprovado com melhoria necessária

---

# Cadastro de Imóveis

## CT-001 — Cadastro de imóvel com sucesso

Resultado esperado: imóvel cadastrado e exibido na lista de imóveis.

Status: ✅ Aprovado

---

## CT-002 — Inserir preço com letras

Resultado esperado: sistema deve bloquear cadastro e informar valor inválido.

Status: ⚠️ Aprovado / Reprovado (depende da validação do sistema)
