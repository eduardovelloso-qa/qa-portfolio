# Casos de Teste - Checkout

## CT-015 - Checkout com sucesso

Passos:
1. Adicionar produto.
2. Abrir carrinho.
3. Checkout.
4. Preencher:
   - First Name
   - Last Name
   - Zip Code
5. Finish.

Resultado Esperado:
Mensagem "Thank you for your order!".

---

## CT-016 - Checkout sem nome

Passos:
1. Iniciar checkout.
2. Deixar First Name vazio.

Resultado Esperado:
Mensagem de erro.

---

## CT-017 - Checkout sem sobrenome

Passos:
1. Deixar Last Name vazio.

Resultado Esperado:
Mensagem de erro.

---

## CT-018 - Checkout sem CEP

Passos:
1. Deixar Zip Code vazio.

Resultado Esperado:
Mensagem de erro.

---

## CT-019 - Cancelar checkout

Passos:
1. Iniciar checkout.
2. Clicar em Cancel.

Resultado Esperado:
Retorno à tela anterior.

---

## CT-020 - Finalizar compra com múltiplos itens

Passos:
1. Adicionar três produtos.
2. Realizar checkout.

Resultado Esperado:
Compra concluída com sucesso.
