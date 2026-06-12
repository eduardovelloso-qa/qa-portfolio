# Casos de Teste - Login

## CT-001 - Login com credenciais válidas

Objetivo:
Validar login com usuário e senha corretos.

Passos:
1. Acessar a página de login.
2. Informar usuário "standard_user".
3. Informar senha "secret_sauce".
4. Clicar em Login.

Resultado Esperado:
Usuário é direcionado para a página de produtos.

---

## CT-002 - Login com senha inválida

Objetivo:
Validar mensagem de erro para senha incorreta.

Passos:
1. Informar usuário válido.
2. Informar senha incorreta.
3. Clicar em Login.

Resultado Esperado:
Mensagem de erro exibida.

---

## CT-003 - Login com usuário inválido

Objetivo:
Validar mensagem de erro para usuário inexistente.

Passos:
1. Informar usuário inválido.
2. Informar senha qualquer.
3. Clicar em Login.

Resultado Esperado:
Mensagem de erro exibida.

---

## CT-004 - Login sem usuário

Objetivo:
Validar obrigatoriedade do campo usuário.

Passos:
1. Deixar usuário vazio.
2. Informar senha.
3. Clicar em Login.

Resultado Esperado:
Mensagem de erro exibida.

---

## CT-005 - Login sem senha

Objetivo:
Validar obrigatoriedade do campo senha.

Passos:
1. Informar usuário.
2. Deixar senha vazia.
3. Clicar em Login.

Resultado Esperado:
Mensagem de erro exibida.
