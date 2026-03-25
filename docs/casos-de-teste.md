# Casos de Teste — Sistema ValeLar

Este documento apresenta os casos de teste realizados na plataforma ValeLar,
um sistema desenvolvido para anúncio e gestão de imóveis para aluguel.

Funcionalidades testadas:

- Cadastro de usuários
- Login (autenticação)
- Cadastro de imóveis

---

## Cadastro de Usuário

**CT-001 — Cadastro com sucesso**

**Objetivo** Verificar se o sistema permite cadastro com dados válidos.

**Pré-condição** Sistema acessível e formulário de cadastro disponível.

**Passos**  Acessar página de cadastro, Preencher todos os campos obrigatórios, exemplo:

1.nome → "lucas"
2️.email→ "email válido que não esteja cadastrado"
3️.tel1 → "988777777" 
4️.tel2 → "988776755"  
5️.senha → "1234567890"
6️.conf.senha → "1234567890"
7.Clicar em cadastrar  

**Resultado esperado** Sistema deve realizar cadastro com sucesso e redirecionar para dashboard.

**Resultado obtido** Cadastro realizado com sucesso.

**Status**  
✅Aprovado

---

**CT-002 — Cadastro com senha fraca**

**Objetivo** Verificar o comportamento do sistema ao tentar cadastrar um usuário utilizando senha com menos de 8 caracteres.

**Pré-condição**  Sistema acessível e formulário de cadastro disponível.

**Passos** Acessar página de cadastro, Preencher todos os campos obrigatórios, exemplo:

1.nome → "lucas"  
2.email → email válido que não esteja cadastrado  
3.tel1 → "988777777"  
4.tel2 → "988776755"  
5.senha → "1234567"  
6.conf.senha → "1234567"  
7.Clicar em cadastrar  

**Resultado esperado** Sistema deve impedir cadastro e informar que a senha deve possuir no mínimo 8 caracteres.

**Resultado obtido** Cadastro foi bloqueado, porém sem mensagem clara ao usuário.

**Status** ⚠️ Aprovado com melhoria necessária

---

**CT-003 — Senhas diferentes**

**Objetivo** Verificar se o sistema impede cadastro quando senha e confirmação de senha são diferentes.

**Pré-condição** Sistema acessível e formulário de cadastro disponível.

**Passos** Acessar página de cadastro, Preencher todos os campos obrigatórios, exemplo:

1.nome → pedro  
2.email → email válido que não esteja cadastrado  
3.tel1 → "988453423"  
4.tel2 → "33977674545"  
5.senha → "12345678910"  
6.conf.senha → "12345678911"  
7.Clicar em cadastrar  

**Resultado esperado** Sistema deve impedir cadastro e informar que as senhas não conferem.

**Resultado obtido** Cadastro bloqueado com sucesso.

**Status** ✅Aprovado

---

**CT-004 — Email inválido (sem local)**

**Objetivo** Verificar se o sistema rejeita email no formato inválido @gmail.com (sem parte local).

**Pré-condição** Sistema acessível e formulário de cadastro disponível.

**Passos** Acessar página de cadastro, Preencher todos os campos obrigatórios, exemplo:

1.nome → lucas  
2.email → "@gmail.com"  
3.tel1 → "988777777"  
4.tel2 → "988776755"  
5.senha → "1234567890"  
6.conf.senha → "1234567890"  
7.Clicar em cadastrar  

**Resultado esperado** Sistema deve rejeitar cadastro e informar que o email é inválido.

**Resultado obtido** Email rejeitado com sucesso.

**Status** ✅Aprovado

---

**CT-005 — Email inválido (sem domínio)**

**Objetivo** Verificar se o sistema rejeita email no formato inválido tiago123@ (sem domínio).

**Pré-condição** Sistema acessível e formulário de cadastro disponível.

**Passos** Acessar página de cadastro, Preencher todos os campos obrigatórios, exemplo:

1.nome → lucas  
2.email → "tiago123@"  
3.tel1 → "988777777"  
4.tel2 → "988776755"  
5.senha → "123456789"  
6.conf.senha → "123456789"  
7.Clicar em cadastrar  

**Resultado esperado** Sistema deve rejeitar cadastro e informar que o email é inválido.

**Resultado obtido** Email rejeitado com sucesso.

**Status** ✅Aprovado
<<<<<<< HEAD
=======

>>>>>>> feature/login-cadastro-concluido

---

# Login

## CT-001 — Login com sucesso
**Objetivo**  Garantir que o usuário consiga realizar login com uma conta cadastrada.

**Pré-condição** Usuário deve possuir uma conta válida cadastrada no sistema.

**Passos** Acessar página de login, Preencher todos os campos obrigatórios, exemplo:

1️.mail → "wellingtonribeirojardim123@gmail.com"
2️.senha → "123456789"

Clicar em Entrar

**Resultado esperado**  
Sistema deve redirecionar para a página inicial com o usuário logado.

**Resultado obtido**  
Login realizado com sucesso.

**Status**  
✅ Aprovado

---

## CT-002 — Login com senha inválida
**Objetivo**  
Garantir que o sistema não permita login quando a senha estiver incorreta.

**Pré-condição**  
Usuário deve possuir conta cadastrada e informar e-mail correto.

**Passos**
Acessar página de login, Preencher email correto e senha incorreta, exemplo:

1️.email → "wellingtonribeirojardim123@gmail.com"
2️.senha → "senha_errada123"

Clicar em Entrar

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
Acessar página de login, Deixar os campos vazios, exemplo:

1️.email → " "
2️.senha → " "

Clicar em Entrar

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
Acessar página de login
Digitar email que não está cadastrado, exemplo:

1️.email → "email_nao_existe@gmail.com"
2️.senha → "123456789"

Clicar em Entrar

**Resultado esperado**  
Falha no login com mensagem informando que o usuário não possui cadastro.

**Resultado obtido**  
Sistema apenas bloqueou o login, sem apresentar mensagem informando que a conta não existe.

**Status**  
⚠️ Aprovado com melhorias necessárias

