# Cypress Automation — QA Portfolio

[![Cypress Tests](https://github.com/eduardovelloso-qa/qa-portfolio/actions/workflows/cypress.yml/badge.svg)](https://github.com/eduardovelloso-qa/qa-portfolio/actions/workflows/cypress.yml)

Suite de testes end-to-end construída com **Cypress + TypeScript**, testando o site público [automationexercise.com](https://automationexercise.com).

## Stack

- Cypress 15
- TypeScript
- Custom Commands (em vez de Page Object Model — ver "Decisões técnicas" abaixo)

## Estrutura
cypress/
e2e/
auth/ -> testes de login/autenticação
products/ -> testes de produtos e carrinho (em construção)
api/ -> testes de API (em construção)
fixtures/
users.json -> massa de dados de usuários de teste
support/
commands.ts -> comandos customizados reutilizáveis
index.d.ts -> tipagem TypeScript dos comandos customizados

## Como rodar

```bash
npm install
npx cypress open
```

Isso abre a interface gráfica do Cypress. Selecione **E2E Testing**, escolha um navegador, e clique no spec que deseja rodar.

Para rodar tudo via terminal, sem interface gráfica:
```bash
npx cypress run
```

## Testes implementados

- **Login** (`auth/login.cy.ts`): login com credenciais válidas e inválidas, validando mensagens de sucesso/erro.

## Decisões técnicas

- **Custom Commands em vez de Page Object Model**: seguindo a recomendação da própria documentação da Cypress, que desde 2019 recomenda evitar POM tradicional em favor de comandos customizados centralizados em `support/commands.ts`, por serem mais simples de manter em projetos deste porte.
- **TypeScript**: usado desde o início do projeto para tipagem de comandos e melhor autocomplete/IntelliSense durante a escrita dos testes.
- **Dados de teste em fixtures**: credenciais e massa de dados ficam separadas da lógica dos testes, em `cypress/fixtures/`, facilitando manutenção.

## Autor

Eduardo Velloso — [GitHub](https://github.com/eduardovelloso-qa)