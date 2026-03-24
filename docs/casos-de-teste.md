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

Objetivo  
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

**Objetivo**  
Verificar o comportamento do sistema ao tentar cadastrar um usuário sem informar o campo **Nome**.

**Pré-condição**  
Sistema acessível e formulário de cadastro disponível.

**Passos**

1. Acessar página de cadastro
2. Deixar o campo Nome vazio
3. Preencher os demais campos obrigatórios
4. Clicar em cadastrar

**Resultado esperado**  
Sistema deve impedir cadastro e informar que o campo Nome é obrigatório.

**Resultado obtido**  
Conforme teste.

**Status**  
✅ Aprovado

---

## CT-004 — Cadastro sem preencher campo Email

**Objetivo**  
Verificar o comportamento do sistema ao tentar cadastrar um usuário sem informar o campo **Email**.

**Pré-condição**  
Sistema acessível e formulário de cadastro disponível.

**Passos**

1. Acessar página de cadastro
2. Deixar o campo Email vazio
3. Preencher os demais campos obrigatórios
4. Clicar em cadastrar

**Resultado esperado**  
Sistema deve impedir cadastro e informar que o campo Email é obrigatório.

**Resultado obtido**  
Conforme teste.

**Status**  
✅ Aprovado

---

## CT-005 — Cadastro sem preencher campo Telefone

**Objetivo**  
Verificar o comportamento do sistema ao tentar cadastrar um usuário sem informar o campo **Telefone**.

**Pré-condição**  
Sistema acessível e formulário de cadastro disponível.

**Passos**

1. Acessar página de cadastro
2. Deixar o campo Telefone vazio
3. Preencher os demais campos obrigatórios
4. Clicar em cadastrar

**Resultado esperado**  
Sistema deve impedir cadastro e informar que o campo Telefone é obrigatório.

**Resultado obtido**  
Conforme teste.

**Status**  
✅ Aprovado

---

## CT-006 — Cadastro sem preencher campo Senha

**Objetivo**  
Verificar o comportamento do sistema ao tentar cadastrar um usuário sem informar o campo **Senha**.

**Pré-condição**  
Sistema acessível e formulário de cadastro disponível.

**Passos**

1. Acessar página de cadastro
2. Deixar o campo Senha vazio
3. Preencher os demais campos obrigatórios
4. Clicar em cadastrar

**Resultado esperado**  
Sistema deve impedir cadastro e informar que o campo Senha é obrigatório.

**Resultado obtido**  
Conforme teste.

**Status**  
✅ Aprovado

---

## CT-007 — Cadastro sem preencher Confirmar Senha

**Objetivo**  
Verificar o comportamento do sistema ao tentar cadastrar um usuário sem informar o campo **Confirmar Senha**.

**Pré-condição**  
Sistema acessível e formulário de cadastro disponível.

**Passos**

1. Acessar página de cadastro
2. Deixar o campo Confirmar Senha vazio
3. Preencher os demais campos obrigatórios
4. Clicar em cadastrar

**Resultado esperado**  
Sistema deve impedir cadastro e informar que o campo Confirmar Senha é obrigatório.

**Resultado obtido**  
Conforme teste.

**Status**  
✅ Aprovado

---

## CT-008 — Senhas diferentes

**Objetivo**  
Verificar o comportamento do sistema ao tentar cadastrar um usuário com **Senha e Confirmar Senha diferentes**.

**Pré-condição**  
Sistema acessível e formulário de cadastro disponível.

**Passos**

1. Acessar página de cadastro
2. Preencher todos os campos obrigatórios
3. Informar uma senha
4. Informar senha diferente no campo Confirmar Senha
5. Clicar em cadastrar

**Resultado esperado**  
Sistema deve impedir cadastro e informar que as senhas não coincidem.

**Resultado obtido**  
Conforme teste.

**Status**  
✅ Aprovado

---

## CT-009 — Senha com menos de 8 caracteres

**Objetivo**  
Verificar o comportamento do sistema ao tentar cadastrar um usuário utilizando **senha com menos de 8 caracteres**.

**Pré-condição**  
Sistema acessível e formulário de cadastro disponível.

**Passos**

1. Acessar página de cadastro
2. Preencher todos os campos obrigatórios
3. Inserir senha com menos de 8 caracteres
4. Clicar em cadastrar

**Resultado esperado**  
Sistema deve impedir cadastro e informar que a senha deve possuir no mínimo **8 caracteres**.

**Resultado obtido**  
Cadastro foi bloqueado, porém **sem mensagem clara ao usuário**.

**Status**  
⚠️ Aprovado com melhoria necessária

---

# Login

## CT-001 — Login com sucesso

**Objetivo**  
Garantir que o usuário consiga realizar login com uma conta cadastrada.

**Pré-condição**  
Usuário deve possuir uma conta válida cadastrada no sistema.

**Passos**

1. Acessar a página de login
2. Informar e-mail e senha corretos
3. Clicar em Entrar

**Resultado esperado**  
Sistema deve redirecionar para a página inicial com o usuário logado.

**Resultado obtido**  
Conforme teste.

**Status**  
✅ Aprovado

---

## CT-002 — Login com senha inválida

**Objetivo**  
Garantir que o sistema não permita login quando a senha estiver incorreta.

**Pré-condição**  
Usuário deve possuir conta cadastrada e informar e-mail correto.

**Passos**

1. Acessar a página de login
2. Informar e-mail correto
3. Informar senha incorreta
4. Clicar em Entrar

**Resultado esperado**  
Falha no login e exibição de mensagem informando senha incorreta.

**Resultado obtido**  
Login bloqueado, porém sem mensagem de feedback ao usuário informando erro na senha.

**Status**  
⚠️ Aprovado com melhorias necessárias

---

## CT-003 — Login com campos vazios

**Objetivo**  
Garantir que o sistema não permita login quando os campos estiverem vazios.

**Pré-condição**  
Usuário deve acessar a página de login.

**Passos**

1. Acessar a página de login
2. Clicar em Entrar sem preencher os campos

**Resultado esperado**  
Falha no login e mensagem indicando que existem campos obrigatórios vazios.

**Resultado obtido**  
Conforme esperado.

**Status**  
✅ Aprovado

---

## CT-004 — Login com e-mail não cadastrado

**Objetivo**  
Garantir que o sistema não permita login com e-mail que não possui cadastro.

**Pré-condição**  
Usuário deve acessar a página de login.

**Passos**

1. Acessar a página de login
2. Informar e-mail não cadastrado
3. Informar uma senha qualquer
4. Clicar em Entrar

**Resultado esperado**  
Falha no login com mensagem informando que o usuário não possui cadastro.

**Resultado obtido**  
Sistema apenas bloqueou o login, sem apresentar mensagem informando que a conta não existe.

**Status**  
⚠️ Aprovado com melhorias necessárias

---

# Cadastro de Imóveis

## CT-001 — Cadastro de imóvel com sucesso

**Objetivo**  
Verificar se o sistema cadastra imóveis corretamente.

**Pré-condição**  
Usuário deve estar logado e possuir permissão de cadastro de imóveis.

**Passos**

1. Acessar o menu de cadastro de imóvel
2. Preencher os campos obrigatórios (endereço, valor, tipo, entre outros)
3. Clicar em Salvar

**Resultado esperado**  
O imóvel deve ser cadastrado com sucesso e aparecer na lista de imóveis disponíveis.

**Resultado obtido**  
Conforme teste.

**Status**  
✅ Aprovado

---

## CT-002 — Inserir preço com letras

**Objetivo**  
Verificar se o sistema impede cadastro quando o campo preço contém letras.

**Pré-condição**  
Usuário deve estar logado e possuir permissão de cadastro de imóveis.

**Passos**

1. Acessar o menu de cadastro de imóvel
2. Preencher os campos obrigatórios corretamente, exceto o preço
3. No campo preço, inserir valor contendo letras
4. Clicar em Salvar

**Resultado esperado**  
Sistema deve bloquear o cadastro e informar que o valor do preço é inválido.

**Resultado obtido**  
Conforme teste.

**Status**  
⚠️ Aprovado / Reprovado
