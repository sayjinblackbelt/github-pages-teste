# GitHub Pages — Laboratório Web

Projeto criado para aprender e validar o fluxo **GitHub → GitHub Actions → GitHub Pages**.

## Demonstrações

- HTML sem framework.
- CSS responsivo e adaptável a tema claro/escuro.
- JavaScript para interação e persistência local.
- Deploy automatizado pela branch `main`.
- Publicação como site estático no GitHub Pages.

## Estrutura

```text
github-pages-teste/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── style.css
├── script.js
└── README.md
```

## Publicação

O workflow **Deploy to GitHub Pages** é executado a cada push em `main` ou manualmente pelo GitHub Actions.

No GitHub, a fonte do Pages deve estar configurada em:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

O GitHub Pages pode levar alguns minutos para disponibilizar uma alteração publicada.

## Objetivo pedagógico

Este repositório começou como um teste mínimo de publicação. A versão atual mantém o objetivo original, mas transforma o teste em um pequeno laboratório para experimentar:

1. estrutura sem dependências;
2. design responsivo;
3. interatividade no navegador;
4. versionamento;
5. automação de deploy;
6. publicação contínua.

## Repositório

https://github.com/sayjinblackbelt/github-pages-teste
